import { StyleSheet, Text, View, TouchableOpacity,FlatList } from 'react-native';

export default function ItemCharacteristicPage({infoAbout}) {


    const renderItem = ({item,index}) => {
        return (
            <TouchableOpacity style={[styles.itemContainer,{backgroundColor: index % 2 ? 'black' : '#151515'}]} onPress={() => navigation.navigate('Item',{itemId:item.id})}>
                <View style={[styles.textContainer,{width:'30%'}]}>
                    <Text style={[styles.itemText,{color:'white'}]}>{item.title}</Text>
                </View>
                <View style={[styles.textContainer,{width:'70%'}]}>
                    <Text style={[styles.itemText,{color:'green',textAlign:'right',marginRight:10}]}>{item.text} ₴</Text>
                </View> 
            </TouchableOpacity>
        );
    };

    return (
        <View>
            <FlatList
                data={infoAbout ? infoAbout : data}
                renderItem={renderItem}
                keyExtractor={item => item.title}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    itemContainer: {
        width:'100%',
        alignItems:'center',
        flexDirection:'row',
        minHeight:70
    },
    textContainer: {
        paddingLeft:15,
    },
    itemText: {
        fontSize:16
    }
})
