import React from 'react';
import {SafeAreaView, StatusBar, Text, useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {AppNavContainer} from './src/navigation';

const App = () => {
  return (
    <>
      <AppNavContainer />
    </>
  );
};

export default App;
