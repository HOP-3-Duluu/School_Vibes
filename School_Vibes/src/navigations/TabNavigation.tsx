import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeIcon, ProfileIcon, CalendarIcon, TaskIcon} from '../assets';
import Colors from '../constants/Colors';
import {Calendar, Font} from '../components';
import Test from '../Check';
import {Profile, Task} from '../screens';
import {View} from 'react-native';

const Tab = createBottomTabNavigator();

const BgColor = ({children}: any) => (
  <View
    style={{
      backgroundColor: Colors.background,
      padding: 8,
      borderRadius: 50,
    }}>
    {children}
  </View>
);

export const TabNavigation = () => {
  const getTabScreenOptions = (label: string, icon: JSX.Element) => ({
    tabBarLabel: ({focused}: {focused: boolean}) =>
      focused && (
        <Font fontSize={25} color={Colors.primary}>
          •
        </Font>
      ),
    tabBarIcon: () => icon,
    name: label,
  });

  const tabScreens = [
    {
      component: Test,
      options: getTabScreenOptions(
        'Home',
        <BgColor>
          <HomeIcon color={Colors.primary} />
        </BgColor>,
      ),
    },
    {
      component: Task,
      options: getTabScreenOptions(
        'Task',
        <BgColor>
          <TaskIcon color={Colors.primary} />
        </BgColor>,
      ),
    },
    {
      component: Calendar,
      options: getTabScreenOptions(
        'Calendar',
        <BgColor>
          <CalendarIcon color={Colors.primary} />
        </BgColor>,
      ),
    },
    {
      component: Profile,
      options: getTabScreenOptions(
        'Profile',
        <BgColor>
          <ProfileIcon color={Colors.primary} />
        </BgColor>,
      ),
    },
  ];

  return (
    <Tab.Navigator>
      {tabScreens.map((screen, index) => (
        <Tab.Screen
          key={index}
          component={screen.component}
          options={screen.options}
          name={screen.options.name}
        />
      ))}
    </Tab.Navigator>
  );
};
