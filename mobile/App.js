import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/pages/Home';
import ProductDetail from './src/pages/ProductDetail';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options = {{
            title: 'Produtos',
            headerStyle: {
              backgroundColor: '#3305ed',
            },
            headerTintColor: '#fff'
          }}
        />
        <Stack.Screen
          name="ProductDetail"
          component={ProductDetail}
          options={{
            title: 'Detalhes',
            headerStyle: {
              backgroundColor: '#3305ed',
            },
            headerTintColor: '#fff'

          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;