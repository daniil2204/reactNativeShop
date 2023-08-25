import { StyleSheet, Text, View, TouchableOpacity, TextInput, Button } from 'react-native';

export default function EmptyReviewsPage() {

    

    return (
        <View style={styles.container}>
            <Text style={styles.text}>На цей товар ще не було відгуків(</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'black',
        justifyContent:'center',
        alignItems:'center',
        paddingBottom:100
    },
    text: {
        marginTop:15,
        fontSize:24,
        color:'green',
        textAlign:'center'
    }
});
