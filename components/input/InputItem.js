import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';


export default function InputItem({item,navigation}) {     

    return (
        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('ItemsByCategory',{title:item})}>
            <View style={styles.leftItem}>
                <AntDesign name="search1" size={24} color="white" />
                <Text style={styles.text}>{item}</Text>
            </View>
            <Feather name="arrow-up-left" size={24} color="white"/>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    item: {
        marginTop:10,
        flexDirection:'row',
        justifyContent:'space-between',
        width:"100%",
        height:35,
        alignItems:'center',
        position:'relative'
    },
    leftItem: {
        flexDirection:'row',
        alignContent:'center',
        alignItems:'center',
    },
    text:{
        fontSize:20,
        color:'white',
        marginLeft:10
    },
})