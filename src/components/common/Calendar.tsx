import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import moment from 'moment';

export const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(moment());

  const renderCalendar = () => {
    const startOfMonth = selectedDate.clone().startOf('month');
    const endOfMonth = selectedDate.clone().endOf('month');
    const startOfCalendar = startOfMonth
      .clone()
      .subtract(startOfMonth.day(), 'days');
    const endOfCalendar = endOfMonth.clone().add(6 - endOfMonth.day(), 'days');

    let day = startOfCalendar.clone();
    const days = [];

    while (day.isSameOrBefore(endOfCalendar)) {
      days.push(day);
      day = day.clone().add(1, 'day');
    }

    return (
      <View style={styles.calendarContainer}>
        {days.map((day, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.calendarDay,
              day.isSame(selectedDate, 'day') && styles.calendarDaySelected,
              day.month() !== selectedDate.month() &&
                styles.calendarDayDisabled,
            ]}
            onPress={() => setSelectedDate(day)}
            disabled={day.month() !== selectedDate.month()}>
            <Text
              style={[
                styles.calendarDayText,
                day.isSame(moment(), 'day') && styles.calendarDayToday,
              ]}>
              {day.date()}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Custom Calendar</Text>
      <Text style={styles.subtitle}>{selectedDate.format('MMMM YYYY')}</Text>
      {renderCalendar()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 16,
  },
  calendarContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  calendarDay: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
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
    backgroundColor: '#4287f5',
  },
  calendarDayDisabled: {
    opacity: 0.3,
  },
});
