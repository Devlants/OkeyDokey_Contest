import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

import Home from './src/screens/Home';
import QCoffee from './src/screens/QCoffee';
import Qmilk from './src/screens/Qmilk';
import OrderCheck from './src/screens/OrderCheck';
import EasyMenu from './src/screens/EasyMenu';
import ShoppingBasket from './src/screens/ShoppingBasket';
import InputPhoneNum from './src/screens/InputPhoneNum'; //비회원 적립 화면
import Payment from './src/screens/Payment';
import OrderNum from './src/screens/OrderNum';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="QCoffee" component={QCoffee} />
        <Stack.Screen name="Qmilk" component={Qmilk} />
        <Stack.Screen name="EasyMenu" component={EasyMenu} /> */}
        <Stack.Screen name="OrderCheck" component={OrderCheck} />
        <Stack.Screen name="ShoppingBasket" component={ShoppingBasket} />

        {/* <Stack.Screen name="OrderNum" component={OrderNum} />
        <Stack.Screen name="Payment" component={Payment} />
        <Stack.Screen name="InputPhoneNum" component={InputPhoneNum} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
