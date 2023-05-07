import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {useAsyncEffect} from '../hooks';
import {Welcome} from '../screens';
import {TabNavigation} from './TabNavigation';
const Stack = createNativeStackNavigator();

export const RootNavigation = () => {
  const [isAppFirstLaunched, setIsAppFirstLaunched] = React.useState<
    boolean | null
  >(true);
  useAsyncEffect(async () => {
    const appData = await AsyncStorage.getItem('isAppFirstLaunched');
    if (appData == null) {
      setIsAppFirstLaunched(true);
      AsyncStorage.setItem('isAppFirstLaunched', 'false');
    } else {
      setIsAppFirstLaunched(false);
    }
  }, []);

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {isAppFirstLaunched && (
        <Stack.Screen name="OnboardingScreen" component={Welcome} />
      )}
      <Stack.Screen name="Nav" component={TabNavigation} />
    </Stack.Navigator>
  );
};
