import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, View,RefreshControl,ScrollView } from 'react-native';
import InputLink from '../components/input/InputLink';
import ItemList from '../components/item/ItemList';
import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SyncStorage from 'sync-storage';
import { getMe } from '../redux/userSlice'


export default function MainPage({ navigation }) {
  const [refreshing,setRefreshing] = useState(false);

  const auth = useSelector(state => state.user.auth);
  const dispatch = useDispatch();

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 300);
  }, []);

  useEffect(() => {
    const token = SyncStorage.get('token');
    if (token && !auth) {
      dispatch(getMe(token))
    }
  },[])

  return (
    <ScrollView style={styles.container} refreshControl={
      <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
    }>
      <StatusBar style="light" />
      <View style={{alignItems:'center'}}><InputLink navigation={navigation}/></View>
      <ItemList navigation={navigation} refreshing={refreshing}/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});
