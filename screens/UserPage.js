import { StyleSheet, Text, View,SafeAreaView,ScrollView,FlatList } from 'react-native';
import { useSelector,useDispatch } from 'react-redux';


export default function UserPage({ navigation }) {

  const {username,phone,email} = useSelector(state => state.user.data);

  const titleObj = {
    "Ім'я":username,
    "Телефон":phone,
    "Пошта":email
  }

  const renderInfo = (title) => {
    return(
      <View style={styles.infoItem}>
        <Text style={styles.lineTitle}>{title.item}</Text>
        <Text style={styles.title}>{titleObj[`${title.item}`]}</Text>
      </View>
    )
  }

  return (

    <View style={styles.container}>
      <Text style={styles.textHeader}>Особистий кабінет</Text>
      <FlatList
        data={["Ім'я","Телефон","Пошта"]}
        renderItem={renderInfo}
        keyExtractor={item => item}
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  textHeader: {
    fontSize:24,
    color:'white',
    textAlign:'center'
  },
  infoItem: {
    width:'100%',
    height:65,
    borderBottomColor:"gray",
    borderWidth:1,
    marginBottom:10
  },
  lineTitle: {
    fontSize:14,
    color:'gray'
  },
  title: {
    fontSize: 24,
    color:'white'
  }
});
