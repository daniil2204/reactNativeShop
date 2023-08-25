import { StyleSheet, Text, View, TouchableOpacity,Image, FlatList,ActivityIndicator } from 'react-native';
import { getItemsByCategory } from '../utils/getItemsByCategory';
import { useEffect, useState } from 'react';
import EmptyItemsByCategory from '../components/item/EmptyItemsByCategory'

export default function ItemsByCategoryPage({route,navigation}) {  
    
    const[items,setItems] = useState([]);
    const[loading,setLoading] = useState(true);
    const { title, otherParam } = route.params; 

    useEffect(() => {
        getItemsByCategory(title).then(res => setItems([...res])).then(() => setLoading(false))
    },[])

    const renderItem = ({item}) => {
        return (
            <TouchableOpacity style={styles.itemContainer} onPress={() => navigation.navigate('Item',{itemId:item.id})}>
                <Image style={styles.image} source={{uri:item.imageUrl}}/>
                <Text style={styles.itemText}>{item.title}</Text>
                <Text style={styles.itemText}>{item.price} ₴</Text>
            </TouchableOpacity>
        );
    };

    

    return (
        <View style={styles.container} >
            <Text style={styles.headerText}>Товари за запитом "{title.replace(title[0],title[0].toUpperCase())}"</Text>
            {!loading ? <FlatList
                data={items}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                numColumns={2}
                ListEmptyComponent={EmptyItemsByCategory}
            /> : <ActivityIndicator size={'large'} color="green"/>}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'black',
        padding:5,
        paddingBottom:55
    },
    headerText: {
        color:'white',
        textAlign:'center',
        fontSize:24
    },  
    itemContainer: {
        height:200,
        width:'50%',
        borderColor:'gray',
        borderWidth:1,
        alignItems:'center'
    },
    image: {
        marginVertical:5,
        width:"80%",
        height:"70%",
    },
    itemText: {
        color:'white',
        fontSize:16
    }
})