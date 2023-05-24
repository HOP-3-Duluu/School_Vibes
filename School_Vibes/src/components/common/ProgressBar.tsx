import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Font, Margin, Padding, Paper, Stack} from '../core';
import {Clock} from '../../assets';
import Colors from '../../constants/Colors';

interface dataProps {
  start: number;
  end: number;
}

export const ProgressBar = ({
  time,
  progress,
}: {
  time: dataProps[];
  progress: any;
}) => {
  return (
    <Paper>
      <Padding all={16}>
        <Font fontWeight="bold" fontSize={24}>
          Ofspace project
        </Font>
        <Margin top={10} bottom={3}>
          {time?.map(({start, end}: dataProps, index: number) => {
            return (
              <View key={index + end}>
                <Time start={start} end={end} />
              </View>
            );
          })}
        </Margin>

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between">
          <Font fontWeight="600" fontSize={24}>
            Overall Activity
          </Font>
          <TouchableOpacity>
            <Stack direction="row" spacing={0.1}>
              <View style={styles.dot} />
              <View style={styles.dot} />
              <View style={styles.dot} />
            </Stack>
          </TouchableOpacity>
        </Stack>
        <Margin top={20}>
          <Stack spacing={10} width="100%">
            <Stack direction="row" spacing={10}>
              <Font>
                Done : {Math.round((progress.done / progress.all) * 100)}%
              </Font>

              <Font>
                Todo : {Math.round((progress.todo / progress.all) * 100)}%
              </Font>
              <Font>All : 100%</Font>
            </Stack>

            <Stack direction="row" justifyContent="space-between">
              <Type type={'Done'} />
              <Type type={'ToDo'} />
              <Type type={'All'} />
            </Stack>
          </Stack>
        </Margin>
      </Padding>
    </Paper>
  );
};

const styles = StyleSheet.create({
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#333',
    marginHorizontal: 2,
  },
});

interface TimeProps {
  start: number;
  end: number;
}

const Time = ({start, end}: TimeProps) => {
  const convertDate = (num: number) => {
    const hours = Math.floor(num);
    const minutes = (num % 1) * 60;
    const period = hours >= 12 ? 'pm' : 'am';
    const adjustedHours = hours % 12 || 12;
    return `${adjustedHours}:${minutes < 10 ? '0' : ''}${Math.floor(
      minutes,
    )} ${period}`;
  };
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      style={{height: 40}}
      alignItems="center">
      <Stack direction="row" spacing={3} alignItems="center">
        <View>
          <Clock />
        </View>
        <Font color={Colors.gray}>
          {convertDate(start)} - {convertDate(end)}
        </Font>
      </Stack>
      <TouchableOpacity style={TimeStyle.type}>
        <Font color={Colors.background} fontWeight="500">
          On Going
        </Font>
      </TouchableOpacity>
    </Stack>
  );
};

interface TypeProps {
  type: 'Done' | 'All' | 'ToDo';
}

const Type = ({type}: TypeProps) => {
  const Color = (type: string) => {
    switch (type) {
      case 'Done':
        return '#e5c3c8';
      case 'Progress':
        return '#c9f0ce';
      case 'ToDo':
        return '#e1d5fa';
      default:
        return '#edf1f2';
    }
  };

  return (
    <Stack direction="row" spacing={5} alignItems="center">
      <View
        style={{
          backgroundColor: Color(type),
          ...TimeStyle.dot,
        }}
      />
      <Font>{type}</Font>
    </Stack>
  );
};

const TimeStyle = StyleSheet.create({
  type: {
    backgroundColor: Colors.secondary,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  dot: {
    width: 14,
    height: 14,
    borderRadius: 7,
  },
});
