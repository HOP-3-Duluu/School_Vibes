import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Font, TickBox} from '../components';
import {Left} from '../assets';

export const GroupDetail = ({navigation}) => {
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
      <View>
        <Font>TASKS</Font>
        <Pressable onPress={() => navigation.push('LessonDetail')}>
          <Font>LESSONS</Font>
        </Pressable>
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
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
