import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useDispatch,useSelector } from 'react-redux';
import { logOut,findCountItemInBucket } from '../../redux/userSlice';
import { Link } from '@react-navigation/native';

export default function Header() {

  const dispatch = useDispatch();

  const auth = useSelector(state => state.user.auth);

  const log = () => {
    dispatch(logOut())
  }

  return (
    <View style={styles.header}>
      <Text onPress={log} style={styles.title}>Shop Title</Text>
      <Link style={[styles.userWrapper, {borderColor: auth ? 'green' : 'white'}]} to={{ screen: `${auth ? 'User' : 'Auth'}`}}>   
          <AntDesign style={styles.user} name="user" size={24} color="white"/> 
      </Link>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
    header:{
        marginTop:50,
        paddingHorizontal:25,
        height:70,
        borderBottomColor:'white',
        borderWidth:1,
        width:'100%',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    title:{
        color:'white',
        fontSize:24,
        paddingTop:10
    },  
    userWrapper: {
        width:50,
        height:50,
        borderWidth:1,
        borderRadius:50,
        textAlign:'center',
        justifyContent:'center',
        paddingTop:8,
    },
})