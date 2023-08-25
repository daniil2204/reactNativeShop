import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function InputLink({navigation}) {
  return (
    <TouchableOpacity style={styles.input} onPress={() => navigation.navigate('Search')}>
        <View style={styles.inputWrapper}>
            <Text style={styles.inputText}>Я шукаю...</Text>
            <AntDesign name="search1" size={24} color="white" />  
        </View>
    </TouchableOpacity>
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
  },
  inputWrapper:{
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between',
  },
  inputText:{
      paddingTop:3,
      color:'white'
  }
});
