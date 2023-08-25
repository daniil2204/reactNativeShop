import { StyleSheet, Text, View,FlatList,} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import DesireList from '../components/desire/DesireList';


export default function DesirePage({ navigation }) {
    
    return (     
        <DesireList navigation={navigation}/>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        padding:15,
        marginBottom:45
    },
});
