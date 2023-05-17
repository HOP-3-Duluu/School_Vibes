import React, {useEffect, useRef} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeIcon, ProfileIcon, CalendarIcon, TaskIcon} from '../assets';
import Colors from '../constants/Colors';
import {Calendar} from '../components';
import {Profile, Task, Home} from '../screens';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import * as Animatable from 'react-native-animatable';

const Tab = createBottomTabNavigator();

const TabArr = [
  {
    route: 'Home',
    label: 'Home',
    icon: ({focused}: any) => (
      <HomeIcon color={focused ? Colors.background : Colors.primary} />
    ),
    component: Home,
  },
  {
    route: 'Task',
    label: 'Task',
    icon: ({focused}: any) => (
      <TaskIcon color={focused ? Colors.background : Colors.primary} />
    ),
    component: Task,
  },
  {
    route: 'Add',
    label: 'Add',
    icon: ({focused}: any) => (
      <CalendarIcon color={focused ? Colors.background : Colors.primary} />
    ),
    component: Calendar,
  },
  {
    route: 'Profile',
    label: 'Profile',
    icon: ({focused}: any) => (
      <ProfileIcon color={focused ? Colors.background : Colors.primary} />
    ),
    component: Profile,
  },
];

const animate1 = {
  0: {scale: 0.5, translateY: 0},
  0.92: {translateY: -34},
  1: {scale: 1.2, translateY: -24},
};
const animate2 = {
  0: {scale: 1.2, translateY: -24},
  1: {scale: 1, translateY: 7},
};

const circle1 = {
  0: {scale: 0},
  0.5: {scale: 0.5},
  1: {scale: 1},
};
const circle2 = {0: {scale: 1}, 1: {scale: 0}};

const TabButton = (props: {
  item: any;
  onPress?: () => void;
  accessibilityState?: any;
}) => {
  const {item, onPress, accessibilityState} = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef<any>(null);
  const circleRef = useRef<any>(null);
  const textRef = useRef<any>(null);

  useEffect(() => {
    if (focused) {
      viewRef.current.animate(animate1);
      circleRef.current.animate(circle1);
      textRef.current.transitionTo({scale: 1});
    } else {
      viewRef.current.animate(animate2);
      circleRef.current.animate(circle2);
      textRef.current.transitionTo({scale: 0});
    }
  }, [focused]);

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={styles.container}>
      <Animatable.View ref={viewRef} duration={1000} style={styles.container}>
        <View style={styles.btn}>
          <Animatable.View ref={circleRef} style={styles.circle} />
          {item.icon({focused})}
        </View>
        <Animatable.Text ref={textRef} style={styles.text}>
          {item.label}
        </Animatable.Text>
      </Animatable.View>
    </TouchableOpacity>
  );
};

export const TabNavigation = () => {
  return (
    <Tab.Navigator>
      {TabArr.map((item, index) => {
        return (
          <Tab.Screen
            key={index}
            name={item.route}
            component={item.component}
            options={{
              tabBarShowLabel: false,
              tabBarButton: props => <TabButton {...props} item={item} />,
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  btn: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 4,
    borderColor: Colors.background,
    backgroundColor: Colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary,
    borderRadius: 25,
  },
  text: {
    fontSize: 10,
    textAlign: 'center',
    color: Colors.primary,
  },
});
