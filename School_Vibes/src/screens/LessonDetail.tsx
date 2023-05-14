import {Pressable, SafeAreaView, StyleSheet, Text} from 'react-native';
import React from 'react';
import {Font} from '../components';
import {useNavigation} from '@react-navigation/native';

export const LessonDetail = ({route}) => {
  const {name} = route.params;

  return (
    <SafeAreaView>
      <Text> {route.key}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
