import { StyleSheet, Text, View, TouchableOpacity,SafeAreaView } from 'react-native';
import { useSelector } from 'react-redux';
import Header from './layoutComponents/Header';
import Footer from './layoutComponents/Footer';

export default function Layout({children}) {

  const isItemPage = useSelector(state => state.user.isItemPage);

  return (
    <SafeAreaView style={styles.container}>
        <Header />
          {children}
        {!isItemPage && <Footer />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
});
