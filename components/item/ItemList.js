import {useState, useEffect} from 'react';
import {FlatList,StyleSheet,Text,ActivityIndicator,View,} from 'react-native';
import { useSelector } from 'react-redux';
import { getItems } from '../../utils/getItems'
import ItemCardForList from './ItemCardForList';



export default function ItemList ({navigation}) {

  const loading = useSelector(state => state.user.loading);

  const [offset,setOffset] = useState(0)
  const [error,setError] = useState(false);
  const [items,setItems] = useState([]);

  const fetchItems = async () => {
    const data = await getItems(offset,3)
    return data;
  }

  const setFetchedItems = async () => {
    fetchItems()
      .then(res => setItems([...items,...res.data.getItems])) 
      .then(() => {
        const newOffset = offset + 3;
        setOffset(newOffset)
        setItemsParams()
      })
      .catch(err => setError(true));
  }

  useEffect(() => {
    setFetchedItems();
  },[])

  const renderItem = ({item}) => {
    return (
      <ItemCardForList
        item={item}
        navigation={navigation}
      />
    );
  };

  return (
      <View style={styles.container}>
        <Text style={styles.title}>Наші товари</Text>
        {loading ? <ActivityIndicator color="green" size="large"/> : <FlatList
            data={items}
            renderItem={renderItem}
            onEndReached={offset !== 6 ? setFetchedItems : null}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
        />}
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop:20,
  },
  item: {
    borderWidth:1,
    borderColor:'white',
    height:200,
    width:150
  },
  title: {
    fontSize: 32,
    color:'white',
  },
});

