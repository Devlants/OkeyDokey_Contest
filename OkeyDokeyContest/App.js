import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

import Home from './src/screens/Home';
import QCoffee from './src/screens/QCoffee';
import Qmilk from './src/screens/Qmilk';
import HomeGrayColor from './src/screens/HomeGrayColor';
import EasyMenu from './src/screens/EasyMenu';

import Rewards from './src/screens/Rewards'; //비회원 적립 화면

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Rewards" component={Rewards} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="QCoffee" component={QCoffee} />
        <Stack.Screen name="Qmilk" component={Qmilk} />
        <Stack.Screen name="EasyMenu" component={EasyMenu} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
