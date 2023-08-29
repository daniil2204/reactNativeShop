import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity,TextInput, FlatList } from 'react-native';
import { useState, useMemo } from 'react';
import { AntDesign } from '@expo/vector-icons';
import InputItem from '../components/input/InputItem';
import { makeRequest } from '../utils/graphqlRequest';

export default function SearchPage({navigation}) {
    const[value,setValue] = useState('');
    const [categories,setCategories] = useState([]);

    const changeValue = async (newValue) => {
        setValue(newValue);
        if (newValue.length > 0) {
            const query = `query getCategoriesByTitle{
                getCategoriesByCategoryTitle(category:"${newValue}"){
                categories
              }
            }`
            const responce = await makeRequest(query);
            const array = responce.data.getCategoriesByCategoryTitle;
            const resCategories = array.reduce((pre,cur) => pre = [...cur.categories,...pre] ,[]);
            
            if (JSON.stringify(categories) !== JSON.stringify(resCategories)) {
                setCategories(resCategories);
            }
        }else{
            setCategories([])
        }
    }

    const renderItem = (item) => {
        return (
            <InputItem navigation={navigation} key={item} item={item} />
        );
    };

        

    return (
        <View style={styles.container} >
            <View style={styles.inputContainer}>
                <TextInput 
                    value={value}
                    placeholderTextColor='white' 
                    placeholder='Я шукаю...' 
                    style={styles.input} 
                    onChangeText={text => changeValue(text)} 
                    returnKeyType="go"
                    onSubmitEditing={() => navigation.navigate('ItemsByCategory',{title:value})}    
                />
                <AntDesign style={styles.icon} name="search1" size={24} color="white" onPress={() => navigation.navigate('ItemsByCategory',{title:value})}/>
            </View>
            <View style={styles.list} >
                {categories.map(item => renderItem(item))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop:5,
        flex:1,
        backgroundColor:'black',        
    },
    inputContainer: {
        flexDirection:'row',
        position:'relative',
    },
    input: {
        width:"100%",
        height:50,
        borderWidth:1,
        borderBottomColor:'white',
        color:'white',
        padding:10,
    },  
    searchContainer: {
        height:50,
        width:'20%',
        borderWidth:1,
        borderColor:'white',
    },
    icon: {
        position:'absolute',
        right:10,
        top:12
    }, 
    list: {
        width:"100%"
    },
})