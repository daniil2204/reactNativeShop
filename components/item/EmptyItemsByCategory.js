import { StyleSheet, Text, View, TouchableOpacity, TextInput, Button } from 'react-native';



export default function EmptyItemsByCategory() {
    return (
        <View style={styles.container}>
            <Text style={styles.notFoundText}>Вибачте,але нічого не було знайдено(</Text>
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
