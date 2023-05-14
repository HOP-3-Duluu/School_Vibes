import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Font} from '../components';

export const GroupDetail = ({navigation}) => {
  return (
    <SafeAreaView>
      <Pressable
        onPress={() =>
          navigation.push('LessonDetail', {name: 'lesson detail 1'})
        }>
        <Font>Lesson Detail 1 </Font>
      </Pressable>
      <Pressable
        onPress={() =>
          navigation.push('LessonDetail', {name: 'lesson detail 2'})
        }>
        <Font>Lesson Detail 2</Font>
      </Pressable>
      <Pressable
        onPress={() =>
          navigation.push('LessonDetail', {name: 'lesson detail 3'})
        }>
        <Font>Lesson Detail 3 </Font>
      </Pressable>
      <Pressable
        onPress={() =>
          navigation.push('LessonDetail', {name: 'lesson detail 4'})
        }>
        <Font>Lesson Detail 4 </Font>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
