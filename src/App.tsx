import React from 'react';
import { Provider } from 'react-redux';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import store from './src/store';
import MainTabs from './src/pages/MainTabs';
import Config from './src/pages/Config';
import NovoLancamento from './src/pages/NovoLancamento';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator headerMode="none" initialRouteName="MainTabs">
        <Stack.Screen name="MainTabs" component={MainTabs} />
        <Stack.Screen name="Config" component={Config} 
          options={{
            ...TransitionPresets.SlideFromRightIOS,
          }}
        />
        <Stack.Screen name="NovoLancamento" component={NovoLancamento} 
          options={{
            ...TransitionPresets.RevealFromBottomAndroid,
          }}
        />
      </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}