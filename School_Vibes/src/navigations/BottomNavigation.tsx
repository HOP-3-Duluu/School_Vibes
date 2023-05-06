import {
  createBottomTabNavigator,
  BottomTabScreenProps,
} from '@react-navigation/bottom-tabs';
import {HomeIcon, ProfileIcon, CalendarIcon, TaskIcon} from '../assets';
import Colors from '../constants/Colors';
import {Calendar, Font} from '../components';
import Test from '../Check';
import {Profile, Task} from '../screens';

interface ITabBarLabelProps {
  focused: boolean;
}

interface ITabBarIconProps {
  focused: boolean;
}

interface ITabScreenProps extends BottomTabScreenProps<any> {}

interface ITabOptions {
  tabBarLabel: ((props: ITabBarLabelProps) => JSX.Element) | string;
  headerShown: boolean;
  tabBarIcon: ((props: ITabBarIconProps) => JSX.Element) | React.ReactNode;
}

interface ITabScreen {
  name: string;
  component: React.ComponentType<any>;
  options?: ITabOptions | ((props: ITabScreenProps) => ITabOptions);
}

const Tab = createBottomTabNavigator();

export const Navigator = () => {
  const getTabScreenOptions = (
    label: string,
    icon: JSX.Element,
  ): ITabOptions => ({
    tabBarLabel: ({focused}: ITabBarLabelProps) =>
      focused && (
        <Font fontSize={25} color={Colors.primary}>
          •
        </Font>
      ),
    headerShown: false,
    tabBarIcon: () => icon,
  });

  const tabScreens: ITabScreen[] = [
    {
      name: 'Home',
      component: Test,
      options: getTabScreenOptions('Home', <HomeIcon color={Colors.primary} />),
    },
    {
      name: 'Calendar',
      component: Calendar,
      options: getTabScreenOptions(
        'Calendar',
        <CalendarIcon color={Colors.primary} />,
      ),
    },
    {
      name: 'Profile',
      component: Profile,
      options: getTabScreenOptions(
        'Profile',
        <ProfileIcon color={Colors.primary} />,
      ),
    },
    {
      name: 'Task',
      component: Task,
      options: getTabScreenOptions('Task', <TaskIcon color={Colors.primary} />),
    },
  ];

  return (
    <Tab.Navigator>
      {tabScreens.map((screen: ITabScreen, index: number) => (
        <Tab.Screen
          key={index}
          name={screen.name}
          component={screen.component}
          options={screen.options}
        />
      ))}
    </Tab.Navigator>
  );
};
