import { StyleSheet, Text, View,FlatList,} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
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
                <FlatList
                    data={bucket}
                    renderItem={renderItem}
                    keyExtractor={item => item.itemId}
                /> 
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
        paddingBottom:45
    },
});
