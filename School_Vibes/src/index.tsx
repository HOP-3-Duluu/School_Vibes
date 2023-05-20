import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthProvider, DataProvider} from './providers';
import {RootNavigation} from './navigations';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <AuthProvider>
        <DataProvider>
          <RootNavigation />
        </DataProvider>
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
