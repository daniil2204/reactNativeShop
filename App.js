import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import MainPage from './screens/MainPage';
import Navigation from './screens/Navigation';
import { Provider } from 'react-redux';
import store from './redux';

export default function App() {
  return (
      <Provider store={store}>
        <Navigation />
      </Provider>
  
  );
}

const styles = StyleSheet.create({
  
});
