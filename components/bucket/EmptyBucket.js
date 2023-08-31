import { StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { Link } from '@react-navigation/native';


export default function EmptyBucket() {
    return (
        <View style={styles.container}>
            <AntDesign name="shoppingcart" size={150} color="white"/>
            <Link to={'/Search'}>
                <Text style={styles.linkText}>Зробити покупку</Text>
            </Link>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'black',
        justifyContent:'center',
        alignItems:'center',
        paddingBottom:100
    },
    linkText: {
        fontSize:24,
        color:'white'
    }
});
