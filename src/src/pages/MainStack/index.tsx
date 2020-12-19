import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import Main from '../Main';
import Config from '../Config';

const Stack = createStackNavigator();
export default function MainStack() {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="Main">
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Config" component={Config} 
        options={{
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
    </Stack.Navigator>
  );
}


