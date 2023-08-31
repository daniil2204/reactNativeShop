import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { Link, useRoute } from '@react-navigation/native';

export default function Footer() {
    return (
        <View style={styles.container}>
            
            <TouchableOpacity >
                <Link style={styles.icon} to={{ screen: 'Main'}}>
                    <AntDesign name="home" size={32} color="white"/>
                </Link>
            </TouchableOpacity>    
            <TouchableOpacity >
                <Link style={styles.icon} to={{ screen: 'Search'}}>
                    <AntDesign name="search1" size={32} color="white"/>
                </Link>
            </TouchableOpacity>     
            
            
            <TouchableOpacity>
                <Link style={styles.icon} to={{ screen: 'Bucket'}}>
                    <AntDesign name="shoppingcart" size={32} color="white"/>
                </Link>
            </TouchableOpacity>   
        
            <TouchableOpacity style={styles.icon}>
                <Link to={{ screen: 'Desire'}}>
                    <AntDesign  name="heart" size={32} color="white"/>
                </Link>
            </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor:'#151515',
        width:'100%',
        height:60,
        position:'absolute',
        bottom:0,
        flexDirection:'row',
        justifyContent:'space-around',
        gap:50,
        zIndex:1
    },
    icon: {
        margin:10
    }
});
