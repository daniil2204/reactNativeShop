import {useState, useEffect} from 'react';
import {FlatList,StyleSheet,Text,ActivityIndicator,View} from 'react-native';
import { getItems } from '../../utils/getItems'
import Error from '../Error';
import ItemCardForList from './ItemCardForList';
import { isError } from '../../utils/isError';




export default function ItemList ({navigation,refreshing}) {

  const [offset,setOffset] = useState(0)
  const [error,setError] = useState(false);
  const [items,setItems] = useState([]);

  const fetchItems = async () => {
    const data = await getItems(offset,3)
    if(isError(data)){
      setError(true);
    }else return data;
  }

  const setFetchedItems = async () => {
    fetchItems()
      .then(res => setItems([...items,...res.data.getItems])) 
      .then(() => {
        if (refreshing) {
          setItems([]);
          setOffset(0);       
          setError(false);
        }else{
          const newOffset = offset + 3;
          setOffset(newOffset)
        }

      })
      .catch(err => {
        setError(true);
      });
  }

  useEffect(() => {
    setFetchedItems()
  },[refreshing])

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
        <View style={styles.listContainer}>
          {!error ? 
            <FlatList
                data={items}
                renderItem={renderItem}
                onEndReached={offset === 6 ? () => {} : setFetchedItems}
                keyExtractor={item => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                ListEmptyComponent={<ActivityIndicator size={'large'} color={'green'}/>}
            /> : 
            <Error text="Вибачте, сталася помилка"/>
          }
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop:20,
  },
  title: {
    fontSize: 32,
    color:'white',
  },
  listContainer: {
    alignItems:'center'
  }
});

