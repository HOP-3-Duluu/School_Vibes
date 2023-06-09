import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Animated,
} from 'react-native';
import moment from 'moment';
import {
  GestureHandlerRootView,
  PanGestureHandler,
  State,
} from 'react-native-gesture-handler';
import Colors from '../../constants/Colors';
import {Font, Margin, Padding, Stack} from '../core';
import {Time} from './Time';
import Spacing from '../../constants/Spacing';
import {Filter} from '../../assets';

export const Calendar = ({selectedDay, handleDayClick, tasks}) => {
  const [selectedDate, setSelectedDate] = useState(moment());
  const position = useRef(new Animated.Value(0)).current;

  const handleGestureEvent = Animated.event(
    [{nativeEvent: {translationX: position}}],
    {useNativeDriver: true},
  );

  const handleStateChange = ({nativeEvent}) => {
    if (nativeEvent.state === State.END) {
      if (nativeEvent.translationX > 100) {
        handlePrevDay();
      } else if (nativeEvent.translationX < -100) {
        handleNextDay();
      } else {
        Animated.spring(position, {
          toValue: 0,
          useNativeDriver: true,
        }).start();
      }
    }
  };

  const handleNextDay = () => {
    setSelectedDate(selectedDate.clone().add(7, 'day'));
    Animated.timing(position, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      position.setValue(0);
    });
  };

  const handlePrevDay = () => {
    setSelectedDate(selectedDate.clone().subtract(7, 'day'));
    Animated.timing(position, {
      toValue: -1,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      position.setValue(0);
    });
  };

  const renderCalendar = () => {
    const startOfCalendar = selectedDate.clone().subtract(3, 'days');
    const endOfCalendar = selectedDate.clone().add(3, 'days');

    const calendarDays = [];
    let currentDate = startOfCalendar.clone();

    while (currentDate.isSameOrBefore(endOfCalendar, 'day')) {
      calendarDays.push(currentDate.clone());
      currentDate.add(1, 'day');
    }

    const isToday = day => day.isSame(moment(), 'day');

    const translateX = position.interpolate({
      inputRange: [-1, 0, 1],
      outputRange: [-100, 0, 100],
    });

    return (
      <GestureHandlerRootView>
        <PanGestureHandler
          onGestureEvent={handleGestureEvent}
          onHandlerStateChange={handleStateChange}>
          <Animated.View
            style={[styles.calendarContainer, {transform: [{translateX}]}]}>
            {calendarDays.map(item => (
              <TouchableOpacity
                key={item.format('YYYY-MM-DD')}
                style={[
                  styles.calendarDay,
                  item.isSame(selectedDay, 'day') && styles.calendarDaySelected,
                ]}
                onPress={() => handleDayClick(item)}>
                <Font
                  style={[
                    isToday(item) && styles.calendarDayToday,
                    item.isSame(selectedDay, 'day') &&
                      styles.calendarDaySelectedText,
                  ]}
                  color="gray"
                  fontWeight="500">
                  {item.format('dddd').substring(0, 1)}
                </Font>
                <Font
                  style={
                    item.isSame(selectedDay, 'day') &&
                    styles.calendarDaySelectedText
                  }
                  fontWeight="bold">
                  {item.date()}
                </Font>
              </TouchableOpacity>
            ))}
          </Animated.View>
        </PanGestureHandler>
      </GestureHandlerRootView>
    );
  };

  const renderSelectedDayComponent = () => {
    if (!selectedDay) {
      return null;
    }

    return (
      <Stack alignItems="center">
        <Margin top={10}>
          <Padding horizontal={Spacing / 1.5} bottom={Spacing / 2}>
            <Stack direction="row" justifyContent="space-between">
              <Stack direction="row">
                <Font fontSize={18} color={Colors.gray} fontWeight="500">
                  Time
                </Font>
                <Margin left={Spacing * 3.5}>
                  <Font fontSize={18} color={Colors.gray} fontWeight="500">
                    Course
                  </Font>
                </Margin>
              </Stack>
              <Margin right={Spacing / 2}>
                <TouchableOpacity>
                  <Filter />
                </TouchableOpacity>
              </Margin>
            </Stack>
          </Padding>
          <Time data={tasks} />
        </Margin>
      </Stack>
    );
  };

  return (
    <View style={styles.container}>
      <View>{renderCalendar()}</View>
      <View
        style={{
          borderColor: '#f6f6f5',
          borderBottomWidth: 2,
          paddingBottom: Spacing / 2,
        }}
      />

      <Margin top={Spacing}>
        <View>{renderSelectedDayComponent()}</View>
      </Margin>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: Colors.background,
    borderTopEndRadius: 40,
    borderTopLeftRadius: 40,
    paddingTop: 20,
    paddingHorizontal: Spacing / 2,
  },
  calendarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  calendarDay: {
    width: 40,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    margin: 4,
    gap: 3,
  },
  calendarDayToday: {
    fontWeight: 'bold',
  },
  calendarDaySelected: {
    backgroundColor: Colors.primary,
    color: Colors.background,
    fontWeight: 'bold',
  },
  calendarDaySelectedText: {
    color: Colors.background,
  },
  leftButton: {
    marginRight: 10,
  },
  rightButton: {
    marginLeft: 10,
  },
  buttonText: {
    fontSize: 16,
    color: Colors.primary,
  },
  dayComponentContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  dayComponentText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  calendarDayDisabled: {
    opacity: 0.3,
  },
});
