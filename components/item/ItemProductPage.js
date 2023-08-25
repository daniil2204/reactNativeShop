import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function ItemProductPage({itemId,item,token}) {


    return (
        <View style={styles.item}>
            <Image style={styles.image} source={{uri:item.imageUrl}}/>
            <Text style={styles.text}>{item.title}</Text>
            <Text style={styles.text}>{item.price} ₴</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    item: {
        flex:1,
        alignItems:'center',
        marginTop:15
    },
    image: {
        width:"80%",
        height:300,
        borderRadius:10,
        margin:10
    },
    text: {
        fontSize:24,
        color:'white',
        textAlign:'center'
    },
    button: {
        width:"80%",
        height:65,
        borderRadius:15,
        backgroundColor:'green',
        marginTop:25,
        justifyContent:'center',
        alignItems:'center',
    }
});
