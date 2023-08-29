import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList,ScrollView } from 'react-native';
import EmptyReviewsPage from './EmptyReviewsPage';
import { AntDesign } from '@expo/vector-icons'; 

export default function ItemReviwsPage({reviews,addReview}) {

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
            <TouchableOpacity style={styles.commentContainer} onPress={addReview}>
                <Text style={[styles.userName,{textAlign:'center',color:'green'}]}>Додати власний відгук</Text>
            </TouchableOpacity>
            <FlatList
                data={reviews}
                renderItem={renderItem}
                keyExtractor={item => `${item.username} ${item.text}`}
                ListEmptyComponent={EmptyReviewsPage}
            />
            <View style={styles.addReview}>
                <AntDesign name="pluscircle" size={36} color="green" />
            </View>
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
    },
    addReview: {
        width:50,
        height:50,
        position:'absolute',
        bottom:0,
        right:0,
    }
});
