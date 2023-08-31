import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native';


export default function ItemCardForList({item,navigation}) {

  return (
    <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Item',{itemId:item.id})}>
      <Image resizeMethod='auto' resizeMode='cover' style={styles.image} source={{uri:item.imageUrl}}/>
      <Text style={styles.title}>{item.title.length < 25 ? item.title : `${item.title}...`}</Text>
      <Text style={styles.price}>{item.price} ₴</Text>
    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
    item: {
        borderWidth:1,
        borderColor:'white',
        height:250,
        width:150,
        alignItems:'center'
    },
    title: {
        fontSize: 20,
        color:'white',
    },
    price: {
      fontSize: 14,
      color:'gray',
    },
    image: {
      width:130,
      height:130,
      borderRadius:10,
      margin:10
    }
});
