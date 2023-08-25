import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Button, ActivityIndicator } from 'react-native';
import { Formik,Field } from 'formik';
import { initLogin, loginPlaceholder, LoginSchema,loginArray } from '../../formik/login'
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/userSlice';
import { useState } from 'react';


export default function Login({ navigation }) {

    const dispatch = useDispatch();
    const loading = useSelector(state => state.user.loading);
    const [error,setError] = useState(false);

    return (
            <View style={styles.container}>
                <Formik 
                    onSubmit={async (data,{resetForm}) => {
                        setError(false);
                        const res = await dispatch(login(data))
                        if (!res.payload.errors) {
                            navigation.navigate('Main');  
                                     
                        }else{
                            setError(true);
                        }
                        resetForm();
                        
                    }}
                    initialValues={initLogin}
                    validationSchema={LoginSchema}
                >
                    {({ handleChange, handleSubmit,errors, touched }) => (
                        <View style={{width:'100%', alignItems:'center'}}>
                            {loginArray.map(item => (
                                <View style={styles.wrapper} key={item}>
                                    <TextInput
                                        onChangeText={handleChange(item)}
                                        style={styles.input}
                                        placeholderTextColor='gray'
                                        placeholder={loginPlaceholder[`${item}`]}
                                        autoCapitalize="none"
                                        keyboardType={item === 'email' ? 'email-address' : 'default'}
                                    />
                                    {(errors[`${item}`] && touched[`${item}`]) && (
                                        <Text style={{color:'red',fontSize:14}}>{errors[`${item}`]}</Text>) 
                                    }
                                </View>                                                        
                            ))}
                            {loading && <ActivityIndicator style={{marginTop:15}} color={'green'} size={'large'} />}
                            {error && <Text style={{color:'red',fontSize:14}}>Невірна ел.пошта або пароль</Text>}
                            <TouchableOpacity onPress={handleSubmit} title="Submit" color="green" style={styles.btn}>
                                <Text style={styles.text}>Увійти</Text>
                            </TouchableOpacity>
                            
                            
                        </View>    
                    )}
                </Formik>
            </View>
  );
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'black',
        width:"100%",
        flexDirection:'row'
    },
    wrapper: {
        width:"90%",
    },
    input: {
        marginTop:25,
        width:"100%",
        height:50,
        borderRadius:15,
        borderWidth:1,
        borderColor:'gray',
        color:'white',
        padding:10,

    },
    btn: {
        backgroundColor:"green",
        height:50,
        alignItems:'center',
        justifyContent:'center',
        marginTop:30,
        borderRadius:10,
        width:'90%'
    },
    text: {
        color:'white',
        fontSize:20
    }
});
