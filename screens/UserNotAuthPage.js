import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


export default function UserNoAuth({ navigation }) {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Для того, щоб залишити відгук треба увійти в акаунт</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Auth')}>
                <Text style={styles.text}>Увійти</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'black',
        padding:25,
        alignItems:'center'
    },
    text: {
        color:'white',
        fontSize:24,
        textAlign:'center'
    },
    button: {
        width:"90%",
        height:70,
        borderRadius:10,
        backgroundColor:'green',
        justifyContent:'center',
        marginTop:25
    }
})
