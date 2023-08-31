import { StyleSheet, Text, View } from 'react-native';



export default function EmptyDesireList() {
    return (
        <View style={styles.container}>
            <Text style={styles.notFoundText}>Ваш список порожній</Text>
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
    notFoundText: {
        color:'green',
        marginVertical:45,
        fontSize:28,
        textAlign:'center'
    },
});
