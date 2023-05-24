import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Font, ProgressBar, Stack, TickBox} from '../components';
import {Left} from '../assets';

export const GroupDetail = ({navigation}) => {
  const timeData = [
    {start: 10, end: 12},
    {start: 15, end: 23},
  ];
  const progress = {
    done: 10,
    todo: 10,
    all: 200,
  };

  return (
    <SafeAreaView>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Left />
      </TouchableOpacity>

      <View>
        <Font>Name</Font>
        <Font>Members</Font>
      </View>
      <View>
        <Font>Add Task</Font>
        <Font>Lessons</Font>
      </View>
      <ProgressBar time={timeData} progress={progress} />
      <View>
        <Font>TASKS</Font>
        <Pressable onPress={() => navigation.push('LessonDetail')}>
          <Font>LESSONS</Font>
        </Pressable>
        <Stack>
          <TouchableOpacity onPress={() => navigation.push('LessonDetail')}>
            <TickBox
              title={'item.title'}
              header={'item.header'}
              chapter={'item.chapter'}
              userName={'item.userName'}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.push('LessonDetail')}>
            <TickBox
              title={'item.title'}
              header={'item.header'}
              chapter={'item.chapter'}
              userName={'item.userName'}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.push('LessonDetail')}>
            <TickBox
              title={'item.title'}
              header={'item.header'}
              chapter={'item.chapter'}
              userName={'item.userName'}
            />
          </TouchableOpacity>
        </Stack>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
