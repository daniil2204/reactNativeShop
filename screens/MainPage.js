import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView,ScrollView } from 'react-native';
import InputLink from '../components/input/InputLink';
import ItemList from '../components/item/ItemList';


export default function MainPage({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <StatusBar style="light" />
      {/* <View style={{alignItems:'center'}}><InputLink navigation={navigation}/></View> */}
      <ItemList navigation={navigation}/>
      
      <View>
        <Text style={{color:'white'}}>Хнлоук</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});
