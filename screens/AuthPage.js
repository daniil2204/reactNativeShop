import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import Login from '../components/auth/Login';
import Register from '../components/auth/Register';


export default function AuthPage({ navigation }) {
    
    const [onPress,setOnPress] = useState('signIn');

    const btns = [
        {
            title: 'Вхід',
            pressed: 'signIn'
        },
        {
            title: 'Реєстрація',
            pressed: 'signUp'
        },
    ]

    const changeAuth = (pressed) => {
        setOnPress(pressed)
    }




    return (
        <View style={styles.container}>
            <Text style={styles.text}>Авторизація</Text>
            <View style={styles.btnContainer}>
                {btns.map(item => (
                    <TouchableOpacity onPress={() => changeAuth(item.pressed)} key={item.pressed} style={[styles.button,{borderBottomColor: onPress === item.pressed ? 'green' : '#151515'}]}>
                        <Text style={[styles.text,{color: onPress === item.pressed ? 'green' : 'white'}]}>{item.title}</Text>
                    </TouchableOpacity>
                ))}                
            </View>
            <View>
                {onPress === 'signIn' ? <Login navigation={navigation}/> : <Register navigation={navigation}/>}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop:15,
        flex:1,
        backgroundColor:'black',
        alignItems:'center',      
    },
    btnContainer: {
        flexDirection:'row',
        height:60,
        marginTop:25
    },
    button:{
        backgroundColor:"#151515",
        flex:1,
        alignItems:'center',
        paddingTop:10,
        borderWidth:1
    },
    text: {
        fontSize:24,
        color:'white',
    }
    
})