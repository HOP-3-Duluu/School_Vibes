import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeIcon, ProfileIcon, CalendarIcon, TaskIcon} from '../assets';
import Colors from '../constants/Colors';
import {Calendar, Font} from '../components';
import Test from '../Check';
import {Profile, Task} from '../screens';

const Tab = createBottomTabNavigator();

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
      options: getTabScreenOptions('Home', <HomeIcon color={Colors.primary} />),
    },
    {
      component: Task,
      options: getTabScreenOptions('Task', <TaskIcon color={Colors.primary} />),
    },
    {
      component: Calendar,
      options: getTabScreenOptions(
        'Calendar',
        <CalendarIcon color={Colors.primary} />,
      ),
    },
    {
      component: Profile,
      options: getTabScreenOptions(
        'Profile',
        <ProfileIcon color={Colors.primary} />,
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
