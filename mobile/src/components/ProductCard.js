import React from 'react';
import { View, Text, Image, StyleSheet, TouchableHighlight } from 'react-native';
import { useNavigation } from '@react-navigation/native'

export default function ProductCard({ product }) {
  const navigation = useNavigation();
  return (
    <TouchableHighlight onPress={ () => navigation.navigate('ProductDetail', product)}>
      <View style={styles.container }>
        <Image style={ styles.image } source={{ uri: product.image}} />
        <Text numberOfLines={1} style={styles.description}>{ product.product }</Text>
      </View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#d5dde8',
    padding: 20,
    
  },
  image: {
    height: 50,
    width: 50,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    maxWidth: '80%',
    marginLeft: 15
  }
})