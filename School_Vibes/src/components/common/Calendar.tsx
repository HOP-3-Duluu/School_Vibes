/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import moment from 'moment';
import Colors from '../../constants/Colors';
import {Font} from '../core';

export const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(moment());
  const numberOfDays = 7;

  const renderCalendar = () => {
    const startOfMonth = selectedDate.clone().startOf('month');
    const startOfCalendar = startOfMonth.clone().subtract(19, 'week');
    let currentDate = startOfCalendar.clone();
    const calendarDays = [];
    for (let i = 0; i < numberOfDays; i++) {
      console.log(currentDate.clone());
      calendarDays.push(currentDate.clone());
      currentDate.add(1, 'day');
    }

    const isToday = day => day.isSame(moment(), 'day');

    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.calendarContainer}>
        {calendarDays.map((day, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.calendarDay,
              day.month() !== selectedDate.month() &&
                styles.calendarDayDisabled,
            ]}>
            <Font
              style={[
                styles.calendarDayText,
                isToday(day) && styles.calendarDayToday,
              ]}>
              {day.date()}
            </Font>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  };

  return <View style={styles.container}>{renderCalendar()}</View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  calendarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  calendarDay: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.background,
    borderRadius: 20,
    margin: 4,
  },
  calendarDayText: {
    fontSize: 16,
  },
  calendarDayToday: {
    fontWeight: 'bold',
  },
  calendarDaySelected: {
    backgroundColor: Colors.primary,
    color: Colors.background,
    fontWeight: 'bold',
  },
  calendarDayDisabled: {
    opacity: 0.3,
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

  calendarDaySelectedRange: {
    borderWidth: 1,
    borderColor: Colors.primary,
  },
});
// calendar showing 3 days before today and 3 days after today. For example, show 17,18,19,20,21,22,23. Then press the next button to see the next week, for example 24, 25, 26, 27, 28, 29, 30
