import { StyleSheet, View,FlatList,TouchableOpacity,Text} from 'react-native';
import { useSelector } from 'react-redux';
import BucketItem from '../components/bucket/BucketItem';
import EmptyBucket from '../components/bucket/EmptyBucket';


export default function BucketPage({ navigation }) {
    const bucket = useSelector(state => state.user.data.bucket);

    const renderItem = ({item}) => {
        return (
            <BucketItem item={item} />
        );
    };
    return (
        
        <View style={styles.container}>
            {bucket.length ? 
                <>
                    <FlatList
                        data={bucket}
                        renderItem={renderItem}
                        keyExtractor={item => item.itemId}
                    /> 
                    <View style={styles.btnContainer}>
                        <TouchableOpacity style={styles.btn}>
                            <Text style={styles.text}>Замовити</Text>
                        </TouchableOpacity>
                    </View>
                </>
                : 
                <EmptyBucket />   
            }
                                
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        padding:15,
        paddingBottom:45,
    },
    btnContainer: {
        position:'absolute',
        bottom:50,
        width:"100%",
        margin:15
    },
    btn: {
        height:70,
        backgroundColor:'green',
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center'
    },
    text: {
        color:'white',
        fontSize:24
    }
});
