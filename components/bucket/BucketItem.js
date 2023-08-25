import { StyleSheet, Text, View, TouchableOpacity, TextInput, Button, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { deleteItemFromBucket,changeItemCountInBucket } from '../../redux/userSlice';
import { changeBucket } from '../../redux/userSlice';




export default function BucketItem({item}) {

    const [count,setCount] = useState(item.count);
    const [price,setPrice] = useState(item.price);
    const token = useSelector(state => state.user.data.token)
    const priceForItem = price / count;
    
    const dispatch = useDispatch();


    const changeCountAndPrice = (operation) => {
        let changedCount = count; 
        let changedPrice = price;
        if (operation === "+") {
            setCount(count => count + 1);
            setPrice(price => price + priceForItem);
            changedCount += 1;
            changedPrice += priceForItem;
        } else{
            if (count === 1) {
                dispatch(deleteItemFromBucket(item.itemId))
                changedCount = 0;
            }else{
                setCount(count => count - 1);
                setPrice(price => price - priceForItem);
                changedCount -= 1;
                changedPrice -= priceForItem;
            }    
        }
        dispatch(changeItemCountInBucket({id:item.itemId,count: changedCount, price: changedPrice,operation}))
        token ?  dispatch(changeBucket({itemId: item.itemId,count: changedCount,token: token})) : null;
    }

    return (
        <View style={styles.bucketWrapper}>
            <Image style={styles.image} source={{uri:item.imageUrl}}/>
            <View style={styles.infoWrapper}>
                <Text style={styles.infoText}>{item.title}</Text>
                <Text style={styles.infoText}>Ціна: {price}₴</Text>
                <Text style={styles.infoText}>Кількість: {count}</Text>   
                <View style={styles.iconWrapper}>
                    <TouchableOpacity>
                        <AntDesign onPress={() => changeCountAndPrice('+')} name="pluscircle" size={36} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <AntDesign onPress={() => changeCountAndPrice('-')} name="minuscircle" size={36} color="white" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    bucketWrapper: {
        width:'100%',
        borderWidth:1,
        borderColor:'gray',
        borderRadius:10,
        height:200,
        marginBottom:25,
        flexDirection:'row',
        alignItems:'center'
    },
    image: {
        width:150,
        height:150,
        borderRadius:10,
        marginLeft:10
    },
    infoWrapper: {
        flex:1,
        height:150,
        alignItems:'flex-start',
        marginLeft:45
    },
    infoText: {
        color:'white',
        fontSize:20,
    },
    iconWrapper: {
        flexDirection:'row',
        justifyContent:'space-between',
        width:120,
        marginTop:10
    }
});
