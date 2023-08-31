import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

export default function ItemFooter({addItemToDesireList,addItemToBucket,isDesire,isBucket}) {


    return (
        <View style={styles.container}>
            <View style={{flexDirection:'row'}}>
                <TouchableOpacity style={styles.icon} onPress={addItemToDesireList}>
                    <AntDesign  name="heart" size={32} color={isDesire ? "green" : "white"}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.icon} onPress={addItemToBucket}>
                    <AntDesign  name="shoppingcart" size={32} color={isBucket ? "green" : "white"}/>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.button} onPress={addItemToBucket}>
                <Text style={styles.text}>Додати в кошик</Text>
            </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor:'#151515',
        width:'100%',
        height:60,
        position:'absolute',
        bottom:0,
        flexDirection:'row',
        justifyContent:'space-around',
        gap:50,
        alignItems:'center'
    },
    icon: {
        margin:10
    },
    text: {
        fontSize:14,
        color:'white',
        textAlign:'center'
    },
    button: {
        width:"40%",
        height:45,
        borderRadius:15,
        backgroundColor:'green',
        justifyContent:'center',
        alignItems:'center',
    }
});
