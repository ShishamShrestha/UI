// import 'react-native-gesture-handler'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/Entypo';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';

const Tab = createBottomTabNavigator();
const BottomNav = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        style: {
          height: 55,
          borderTopWidth: 0,
          elevation: 0,
        },
        showLabel: false,
        headerShown: false,
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="home-filled" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="favorite" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="AllLocation"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon2 name="compass" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="settings" color={color} size={28} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNav;
