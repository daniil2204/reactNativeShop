import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList } from 'react-native';
import EmptyReviewsPage from './EmptyReviewsPage';

export default function ItemReviwsPage({reviews}) {

    const renderItem = ({item}) => {
        return (
            <View style={styles.commentContainer}>
                <Text style={styles.userName}>{item.username}</Text>
                <Text style={styles.commentText}>{item.text}</Text>
            </View>
        );
    };


    return (
        <View style={styles.item}>
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
    userName: {
        color:'white',
        fontSize:24,
        marginLeft:15,
        marginVertical:10
    },
    commentText: {
        color:'white',
        fontSize:18,
        marginLeft:15,
        marginBottom:10
    }
});
