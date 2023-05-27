import {useNavigation} from '@react-navigation/native';
import moment from 'moment';
import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Plus} from '../assets';
import {Calendar, Font, Margin, Padding, Stack} from '../components';
import Colors from '../constants/Colors';
import Spacing from '../constants/Spacing';
import {instance} from '../library';
import {day, dayName, monthName, year} from '../library/Date';

export const Task = () => {
  const navigation = useNavigation();
  const [selectedDay, setSelectedDay] = useState<any>(moment());
  const [tasks, setTasks] = useState();
  const fetchTaskData = async day => {
    try {
      const formattedDate = day.format('DD');
      const {data} = await instance.get(`/taskDate/${formattedDate}`);
      setTasks(data);
    } catch (error) {
      console.error('Error fetching task data:', error);
    }
  };
  const handleDayClick = day => {
    setSelectedDay(day);
    fetchTaskData(day);
  };

  return (
    <SafeAreaView>
      <Padding horizontal={Spacing} top={Spacing}>
        <Stack direction="row" justifyContent="space-between">
          <Stack direction="row" alignItems="center" spacing={Spacing}>
            <TouchableOpacity onPress={() => setSelectedDay(moment())}>
              <Font fontWeight="bold" fontSize={42}>
                {day}
              </Font>
            </TouchableOpacity>
            <View>
              <Margin left={Spacing / 4}>
                <Font
                  color="gray"
                  fontWeight="500"
                  lineHeight={18}
                  fontSize={16}>
                  {dayName}
                </Font>
              </Margin>
              <Margin top={3} />
              <Stack direction="row" spacing={Spacing / 2}>
                <Font
                  color="gray"
                  fontWeight="500"
                  lineHeight={18}
                  fontSize={16}>
                  {monthName}
                </Font>
                <Font
                  color="gray"
                  fontWeight="500"
                  lineHeight={18}
                  fontSize={16}>
                  {year}
                </Font>
              </Stack>
            </View>
          </Stack>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.push('Add')}>
            <Padding all={13} horizontal={20}>
              <Stack direction="row" alignItems="center" spacing={5}>
                <Font color={Colors.primary} fontWeight="bold" fontSize={20}>
                  ADD TASK
                </Font>
                <Margin left={3} />
                <Plus fill={Colors.primary} />
              </Stack>
            </Padding>
          </TouchableOpacity>
        </Stack>
      </Padding>
      <Margin top={Spacing * 3}>
        <View>
          <Calendar
            selectedDay={selectedDay}
            handleDayClick={handleDayClick}
            tasks={tasks}
          />
        </View>
      </Margin>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#e4ecf4',
    borderRadius: 10,
  },
});
