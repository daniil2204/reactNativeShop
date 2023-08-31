import { useState } from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity,ActivityIndicator} from 'react-native';
import { useSelector } from 'react-redux';
import { addReviewToItem } from '../utils/index';
import { isError } from '../utils/index';
import Error from '../components/Error';


export default function AddReviewPage({ route,navigation }) {

    const { itemId } = route.params; 

    const token = useSelector(state => state.user.data.token)

    const [value,setValue] = useState('');    
    const [count,setCount] = useState(0);
    const [tooMuch,setTooMuch] = useState(false);
    const [tooShort,setTooShort] = useState(false);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(false);
    const [sended,setSended] = useState(false);
    const limit = 500;

    const changeValue = (value) => {
        setTooShort(false);
        if (value.length >= limit) {
            setTooMuch(true);
            return true;
        }
        setValue(value);
        setCount(value.length);
        setTooMuch(false);
    }
    
    const sendReview = async () => {
        if (count > 15) {
            setLoading(true);
            const data = await addReviewToItem({itemId,value,token});
            if (isError(data)) {
                setError(true);
            }else{
                setError(false);
                setValue('');
                setCount(0);
                setSended(true);
            }
            setLoading(false);
        }else{
            setTooShort(true);
        }
    } 

    return (
        <View style={styles.container}>
            {error ? <Error text="Виникла помилка під час відправки відгуку" /> 
            : 
                sended ? 
                <>
                    <Text style={styles.sendedText}>Дякуємо за Ваш Відгук</Text>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Item',{itemId:itemId})}>
                        <Text style={styles.buttonText}>Повернутись назад</Text>
                    </TouchableOpacity>
                </>
                :
                <>
                    <TextInput value={value} onChangeText={text => changeValue(text)} style={styles.input} multiline placeholder='Напишіть Ваш відгук' placeholderTextColor='gray'/>
                    <View style={styles.textContainer}>
                        <Text style={styles.countText}>{count}/{limit}</Text>
                    </View>
                    {tooMuch && <Text style={styles.tooMuchTexts}>Занадто багато тексту</Text>}
                    {tooShort && <Text style={styles.tooMuchTexts}>Мінімальна кількість символів 15</Text>}
                    {loading && <ActivityIndicator size={"large"} color={"green"}/>}
                    <TouchableOpacity style={styles.button} onPress={sendReview}>
                        <Text style={styles.buttonText}>Відправити відгук</Text>
                    </TouchableOpacity>
                </>
            }
        </View>
        
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        paddingBottom:45,
        alignItems:'center'
    },
    input: {
        width:'90%',
        minHeight:55,
        borderWidth:1,
        borderColor:'gray',
        borderRadius:15,
        padding:10,
        fontSize:16,
        color:'white',
        marginTop:25
    },
    textContainer:{
        marginTop:5,
        width:"90%"
    },
    countText:{
        color:'gray',
        fontSize:14,
        textAlign:'right'     
    },
    button: {
        width:'90%',
        height:50,
        borderRadius:15,
        backgroundColor:'green',
        marginTop:25,
        alignItems:'center',
        justifyContent:'center'
    },
    buttonText: {
        fontSize:20,
        color:'white',
    },
    tooMuchTexts: {
        color:'red',
        fontSize:14
    },
    sendedText: {
        color:'green',
        fontSize:24,
        textAlign:'center'
    }
});
