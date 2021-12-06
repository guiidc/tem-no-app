import React from 'react';
import { Text, View, Image, StyleSheet, ScrollView } from 'react-native';

export default function ProductDetail({ route }) {
  const { product, description, image } = route.params;
  return (
    <View style={ styles.container }>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image style={ styles.image } source={{ uri: image }} />
        <Text style={ styles.product }>{ product }</Text>
        <Text style={ styles.placeholder }>Descrição</Text>
        <Text style={ styles.description }>{ description }</Text>
      </ScrollView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    minHeight: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 30,
  },
  image: {
    height: 350,
    width: 350,
  },
  product: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 60,
  },
  placeholder: {
    fontSize: 20,
    color: '#a3a3a3',
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  description: {
    fontSize: 20,
    textAlign: 'left',
  }
})
