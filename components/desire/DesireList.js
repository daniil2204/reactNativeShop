import { StyleSheet, Text, View, TouchableOpacity, Image,FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import EmptyDesireList from './EmptyDesireList';
import SyncStorage from 'sync-storage';

export default function DesireList({navigation}) {

    const desire = useSelector(state => state.user.data.desireItems);

    const renderItem = ({item}) => {
        return (
            <TouchableOpacity style={styles.itemContainer} onPress={() => navigation.navigate('Item',{itemId:item.itemId})}>
                <Image style={styles.image} source={{uri:item.imageUrl}}/>
                <Text style={styles.itemText}>{item.title}</Text>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.headerText} onPress={() => SyncStorage.set('token','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjRlYTEzMDBiYTllMTA2ZTYxNmI2ZDg2IiwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE2OTMwNjE4ODgsImV4cCI6MTY5NTY1Mzg4OH0.DFX4ekYm9iVIKG9PuxPo6V6buxi1dbzwFUfsLjzNcFE')}>Список бажаних товарів</Text>
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
