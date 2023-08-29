import { StyleSheet, Text, View,FlatList,TouchableOpacity,ActivityIndicator} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useState,useEffect } from 'react';

import { ItemProductPage,ItemReviewsPage,ItemCharacteristicPage,ItemFooter } from '../components/item/index';

import { changeItemCountInBucket,addItemToDesire,setIsItemPage,remoweItemFromDesire } from '../redux/userSlice';

import { changeBucket,changeDesire,fetchItemById,fetchReviewsById } from '../utils/index';

import Error from '../components/Error';


export default function ItemPage({ route,navigation }) {
    const token = useSelector(state => state.user.data.token);
    const bucket = useSelector(state => state.user.data.bucket);
    const desire = useSelector(state => state.user.data.desireItems);


    const { itemId } = route.params; 

    const dispatch = useDispatch();

    const [item,setItem] = useState({})
    const [count,setCount] = useState(0);
    const [error,setError] = useState(false);
    const [onPress,setOnPress] = useState('product');
    const [loading,setLoading] = useState(false);
    const [reviews,setReviews] = useState([]);
    const [isDesire,setIsDesire] = useState(false);
    const [isBucket,setIsBucket] = useState(false);
    
    const setFetchedReviews = async () => {
        setLoading(true);
        fetchReviewsById(itemId)
            .then(res => setReviews(res.reviews))
            .then(loading => setLoading(false)) 
            .catch(err => setError(true));
    }
    
    const setFetchedItem = async () => {
        setLoading(true);
        fetchItemById(itemId)
            .then(res => setItem(res))
            .then(loading => setLoading(false)) 
            .catch(err => setError(true));
    }

    const addItemToBucket = () => {
        dispatch(changeItemCountInBucket({count:count + 1,price:item.price * (count + 1),id:itemId,imageUrl:item.imageUrl,title:item.title}))
        token ?  changeBucket({itemId: itemId,count: count + 1,token: token}) : null;
        setCount(count => count + 1);
        setIsBucket(true);
    }

    const addItemToDesireList = () => {
        if (isDesire) {
            dispatch(remoweItemFromDesire(itemId))
            setIsDesire(false);
        }else{
            dispatch(addItemToDesire({itemId:itemId,imageUrl:item.imageUrl,title:item.title}))
            setIsDesire(true);
        }
        token ? changeDesire({itemId,token}) : null;
    }

    const checkIsDesireItem = () => {
        const desireItem = desire.find(desireItem => desireItem.itemId === itemId);
        desireItem ? setIsDesire(true) : null;
    }

    const checkIsBucketItem = () => {
        const bucketItem = bucket.find(bucketItem => bucketItem.itemId === itemId);
        bucketItem ? setIsBucket(true) : null;
    }

    useEffect(() => {
        dispatch(setIsItemPage(true))
        setFetchedItem();
        checkIsDesireItem();
        checkIsBucketItem();
        if (token || bucket.length) {
            const countFromRedux = bucket.find((bucketElem => bucketElem.itemId === itemId));
            setCount(countFromRedux ? countFromRedux.count : 0);
        }
        return () => {
            dispatch(setIsItemPage(false))
        }
    },[])

    const changeBtn = async (pressed) => {    
        if (pressed === 'reviews' && !reviews.length) {
            await setFetchedReviews();
        }
        setOnPress(pressed)
    }

    const addReview = () => {
        navigation.navigate('AddReview',{itemId:itemId});
    }

    const btns = [
        {
            title: 'Товар',
            pressed: 'product'
        },
        {
            title: 'Характеристики',
            pressed: 'characteristic'
        },
        {
            title: 'Відгуки',
            pressed: 'reviews'
        },
        
    ]

    

    const renderItem = ({item}) => {
        return (
            <TouchableOpacity onPress={() => changeBtn(item.pressed)} key={item.pressed} style={[styles.button,{borderBottomColor: onPress === item.pressed ? 'green' : '#151515'}]}>
                <Text style={[styles.text,{color: onPress === item.pressed ? 'green' : 'white'}]}>{item.title.toUpperCase()}</Text>
            </TouchableOpacity>
        );
    };



    return (
        
        <View style={styles.container}>
            {error ? <Error text="Виникла помилка"/> : 
            <>
                <View style={styles.btnContainer}>
                    <FlatList
                        data={btns}
                        renderItem={renderItem}
                        keyExtractor={item => item.pressed}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    />                
                </View>
                {!loading ? (
                    <>
                        {onPress === 'product' && <ItemProductPage itemId={itemId} item={item} token={token} addItemToBucket={addItemToBucket}/>}
                        {onPress === 'characteristic' && <ItemCharacteristicPage />}
                        {onPress === 'reviews' &&  <ItemReviewsPage addReview={addReview} reviews={reviews}/>}
                    </>
                ) : <ActivityIndicator color={'green'} size={'large'}/>}
                <ItemFooter addItemToDesireList={addItemToDesireList} isDesire={isDesire} isBucket={isBucket} addItemToBucket={addItemToBucket}/>
            </>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        zIndex:3
    },
    btnContainer: {
        flexDirection:'row',
        height:50,
    },
    button:{
        backgroundColor:"#151515",
        alignItems:'center',
        paddingTop:10,
        borderWidth:1,
        width:230
    },
    text: {
        fontSize:20,
        color:'white',
    }
});
