/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import moment from 'moment';
import Colors from '../../constants/Colors';
import {Font, Margin, Stack} from '../core';

export const Calendar = () => {
  const [selectedRange, setSelectedRange] = useState({
    startDate: null,
    endDate: null,
  });
  const [selectedDate, setSelectedDate] = useState(moment());

  const renderCalendar = () => {
    const startOfMonth = selectedDate.clone().startOf('month');
    const endOfMonth = selectedDate.clone().endOf('month');
    const startOfCalendar = startOfMonth
      .clone()
      .subtract(startOfMonth.day(), 'days');
    const endOfCalendar = endOfMonth.clone().add(6 - endOfMonth.day(), 'days');

    const days = [];
    let day = startOfCalendar.clone();

    while (day.isSameOrBefore(endOfCalendar)) {
      days.push(day);
      day = day.clone().add(1, 'day');
    }

    const handleDayPress = day => {
      if (
        !selectedRange.startDate ||
        (selectedRange.startDate && selectedRange.endDate)
      ) {
        setSelectedRange({startDate: day, endDate: null});
      } else if (day.isBefore(selectedRange.startDate, 'day')) {
        setSelectedRange({startDate: day, endDate: selectedRange.endDate});
      } else {
        setSelectedRange({...selectedRange, endDate: day});
      }
    };

    const isDayInRange = day => {
      if (selectedRange.startDate && selectedRange.endDate) {
        return (
          day.isSameOrAfter(selectedRange.startDate, 'day') &&
          day.isSameOrBefore(selectedRange.endDate, 'day')
        );
      }
      return false;
    };

    const isDaySelected = day =>
      day.isSame(selectedRange.startDate, 'day') ||
      day.isSame(selectedRange.endDate, 'day');

    const isToday = day => day.isSame(moment(), 'day');

    return (
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        style={{flexWrap: 'wrap'}}>
        {days.map((day, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.calendarDay,
              isDayInRange(day) && styles.calendarDaySelectedRange,
              isDaySelected(day) && styles.calendarDaySelected,
              day.month() !== selectedDate.month() &&
                styles.calendarDayDisabled,
            ]}
            onPress={() => handleDayPress(day)}>
            <Text
              style={[
                styles.calendarDayText,
                isToday(day) && styles.calendarDayToday,
                isDaySelected(day) && styles.calendarDaySelected,
              ]}>
              {day.date()}
            </Text>
          </TouchableOpacity>
        ))}
      </Stack>
    );
  };

  const goToPreviousMonth = () => {
    setSelectedDate(selectedDate.clone().subtract(1, 'month'));
  };

  const goToNextMonth = () => {
    setSelectedDate(selectedDate.clone().add(1, 'month'));
  };

  return (
    <View style={styles.container}>
      <View>
        <Stack justifyContent="center" direction="column" alignItems="center">
          <Margin bottom={10}>
            <Font fontSize={22} fontWeight="600">
              {selectedDate.format('YYYY')}
            </Font>
          </Margin>
          <View style={styles.header}>
            <TouchableOpacity onPress={goToPreviousMonth}>
              <Font fontSize={16} fontWeight="bold" color={Colors.primary}>
                {'< Previous'}
              </Font>
            </TouchableOpacity>
            <Margin horizontal={60}>
              <Font fontSize={22} fontWeight="600">
                {selectedDate.format('MMMM')}
              </Font>
            </Margin>
            <TouchableOpacity onPress={goToNextMonth}>
              <Font fontSize={16} fontWeight="bold" color={Colors.primary}>
                {'Next >'}
              </Font>
            </TouchableOpacity>
          </View>
        </Stack>
      </View>
      {renderCalendar()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light,
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  calendarContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
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
  calendarDaySelectedRange: {
    borderWidth: 1,
    borderColor: Colors.primary,
  },
});
