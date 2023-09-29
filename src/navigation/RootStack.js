import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import BottomNav from './BottomNav';
import Details from '../const/Details';
import {ROUTES} from '../const/ROUTES';

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={ROUTES.APP} component={BottomNav} />
        <Stack.Screen name={ROUTES.DETAIL} component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
