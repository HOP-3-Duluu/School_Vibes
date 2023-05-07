import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthProvider, DataProvider} from './providers';
import {RootNavigation} from './navigations';

const App = () => {
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
