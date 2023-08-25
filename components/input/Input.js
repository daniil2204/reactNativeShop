import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Button } from 'react-native';
import { Formik } from 'formik';


const initLogin = {
    email:'',
    password:'',
}


export default function InputField({field}) {
    return (
        <TextInput value={field.value} onChangeText={field.onChange} style={styles.input} {...field}/>
    );
}


const styles = StyleSheet.create({
    input: {
        marginTop:25,
        width:"90%",
        marginHorizontal:5,
        height:50,
        borderRadius:15,
        borderWidth:1,
        borderColor:'white',
        color:'white',
        padding:10,
    }
});
