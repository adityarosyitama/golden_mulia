import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import Login from './Login';
import Transaksi from './Transaksi';

const Stack = createNativeStackNavigator();
const Routing = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Transaksi" component={Transaksi} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routing;
