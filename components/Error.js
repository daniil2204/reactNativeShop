import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image,FlatList } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 

export default function Error({text}) {

    return (
        <View style={styles.container}>
            <MaterialIcons name="error" size={120} color="white" />
            <Text style={styles.text}>{text}</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'black',
        alignItems:'center'
    },
    text: {
        color:'red',
        fontSize:24
    }
});
