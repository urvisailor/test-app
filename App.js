/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { NavigatorStack } from './app/navigation';
import { Provider } from 'react-redux';
import store from './app/redux/store';

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <NavigatorStack />
      </NavigationContainer>
    </Provider>
  );
}


export default App;
