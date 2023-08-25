import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image,FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import EmptyDesireList from './EmptyDesireList';

export default function DesireList({navigation}) {

    const desire = useSelector(state => state.user.data.desireItems);

    const renderItem = ({item}) => {
        return (
            <TouchableOpacity style={styles.itemContainer} onPress={() => navigation.navigate('Item',{itemId:item.id})}>
                <Image style={styles.image} source={{uri:item.imageUrl}}/>
                <Text style={styles.itemText}>{item.title}</Text>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Список бажаних товарів</Text>
            <FlatList
                data={desire}
                renderItem={renderItem}
                keyExtractor={item => item.title}
                numColumns={2}
                ListEmptyComponent={EmptyDesireList}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'black',
        paddingBottom:100
    },
    headerText: {
        fontSize:24,
        textAlign:'center',
        color:'white',
        marginVertical:15
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
        fontSize:20
    }
});
