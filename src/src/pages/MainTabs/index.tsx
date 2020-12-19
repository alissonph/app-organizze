import React from 'react';
//import 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Main from '../Main';
import Lancamentos from '../Lancamentos';

const Tab = createBottomTabNavigator();

export default function MainTabs() {
  return (
    <Tab.Navigator tabBarOptions={{showLabel: false}}>
      <Tab.Screen name="Home" component={Main} 
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" size={size} color={color} />
          )
        }}
      />
      <Tab.Screen name="Lancamentos" component={Lancamentos} 
        options={{
          tabBarLabel: 'Lançamentos',
          //tabBarVisible : false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="arrow-left-right" size={size} color={color} />
          )
        }}
      />
    </Tab.Navigator>
  );
}


