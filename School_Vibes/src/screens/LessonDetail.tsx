import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Font} from '../components';
import {Left, Right} from '../assets';

export const LessonDetail = ({route, navigation}) => {
  // const {name} = route?.params;

  return (
    <SafeAreaView>
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
          <Font>LESSONS</Font>
        </View>
      </SafeAreaView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
