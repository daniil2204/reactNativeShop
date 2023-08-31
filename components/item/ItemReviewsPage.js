import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import EmptyReviewsPage from './EmptyReviewsPage';

export default function ItemReviwsPage({reviews,addReview}) {

    const renderItem = ({item}) => {
        return (
            <View style={styles.commentContainer}>
                <View style={styles.titleWrapper}>
                    <Text style={styles.userName}>{item.username}</Text>
                    <Text style={styles.createdAt}>{item.createdAt}</Text>
                </View>
                <Text style={styles.commentText}>{item.text}</Text>
            </View>
        );
    };


    return (
        <View style={styles.item}>
            <TouchableOpacity style={styles.commentContainer} onPress={addReview}>
                <Text style={[styles.userName,{textAlign:'center',color:'green',marginTop:15}]}>Додати власний відгук</Text>
            </TouchableOpacity>
            <FlatList
                data={reviews}
                renderItem={renderItem}
                keyExtractor={item => `${item.username} ${item.text}`}
                ListEmptyComponent={EmptyReviewsPage}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    commentContainer: {
        width:'100%',
        minHeight:70,
        borderWidth:1,
        borderBottomColor:'gray'
    },
    titleWrapper: {
        flexDirection:'row',
        justifyContent:'space-between',
        margin:15
    },
    userName: {
        color:'white',
        fontSize:24,
    },
    createdAt: {
        color:'gray',
        fontSize:14,
    },
    commentText: {
        color:'white',
        fontSize:18,
        marginLeft:15,
        marginBottom:10
    }
});
