import React, { useState, useEffect } from 'react';
import { Text, View, TouchableHighlight, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import axiosRequest from '../utils/axiosRequest';
import ProductCard from '../components/ProductCard';

export default function Home() {
  const [products, setProducts] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    axiosRequest.get('http://10.0.0.104:3001/products')
    .then((response) =>  setProducts(response.data))
    .catch((err) => console.log(err));
  }, []);

  return (
    <View>
      <FlatList
        data={products}
        keyExtractor={ (item) => item.id.toString()}
        renderItem={ ({ item }) => <ProductCard product={ item }/>}
      />
    </View>
  );
}
