import {SafeAreaView, StyleSheet, Text} from 'react-native';
import React from 'react';

export const LessonDetail = ({route}) => {
  const {name} = route.params;

  return (
    <SafeAreaView>
      <Text> {route.key}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
