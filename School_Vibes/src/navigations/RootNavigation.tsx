import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {useAsyncEffect} from '../hooks';
import {
  GroupDetail,
  LessonDetail,
  Welcome,
  Login,
  Notifications,
  AddScreen,
} from '../screens';
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
    <Stack.Navigator>
      {isAppFirstLaunched && (
        <Stack.Screen
          name="OnboardingScreen"
          component={Welcome}
          options={{headerShown: false}}
        />
      )}
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="General"
        component={TabNavigation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Add"
        component={AddScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="GroupDetail" component={GroupDetail} />
      <Stack.Screen name="LessonDetail" component={LessonDetail} />
    </Stack.Navigator>
  );
};
