import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, Text} from 'react-native';
import { HomeIcon, ProfileIcon, CalendarIcon, TaskIcon } from '../assets';
import Colors from '../constants/Colors';
import { Calendar, Font } from '../components';
import Test from '../Check';
import { Profile, Task } from '../screens';

const Tab = createBottomTabNavigator();

export const Navigator = () => {
  return (
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Test}
          options={{
            tabBarLabel: ({focused}: any) => (
              focused ? <Font fontSize={25} color={Colors.primary} >•</Font> : ''
            ),
            headerShown: false,
            tabBarIcon: ({focused}: any) => (
              <HomeIcon color={focused ? Colors.secondary : Colors.primary} />
            ),
          }}
        />
        <Tab.Screen
          name="Calendar"
          component={Calendar}
          options={{
            tabBarLabel: ({focused}: any) => (
                focused ? <Font fontSize={25} color={Colors.primary} >•</Font> : ''
            ),
            headerShown: false,
            tabBarIcon: ({focused}: any) => (
              <CalendarIcon color={focused ? Colors.secondary : Colors.primary} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: ({focused}: any) => (
                focused ? <Font fontSize={25} color={Colors.primary} >•</Font> : ''
            ),
            headerShown: false,
            tabBarIcon: ({focused}: any) => (
              <ProfileIcon color={focused ? Colors.secondary : Colors.primary} />
            ),
          }}
        />
        <Tab.Screen
          name="Task"
          component={Task}
          options={{
            tabBarLabel: ({focused}: any) => (
                focused ? <Font fontSize={25} color={Colors.primary} >•</Font> : ''
            ),
            headerShown: false,
            tabBarIcon: ({focused}: any) => (
              <TaskIcon color={focused ? Colors.secondary : Colors.primary} />
            ),
          }}
        />
      </Tab.Navigator>
  );
};