import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Pressable,
  StyleSheet,
  FlatList,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Font, StatisticBox, Margin, Stack} from '../components';
import Spacing from '../constants/Spacing';

export const Home = () => {
  const navigation = useNavigation<any>();

  const timeData = [
    {
      start: 10,
      end: 12,
    },
    {
      start: 15,
      end: 23,
    },
  ];

  const groupData = [
    {id: '1', name: 'Group1'},
    {id: '2', name: 'Group2'},
    {id: '3', name: 'Group3'},
    {id: '4', name: 'Group4'},
    {id: '5', name: 'Group5'},
  ];

  const renderItem = ({item}) => {
    return (
      <Stack
        justifyContent="center"
        alignItems="center"
        style={{
          width: 300,
          height: 150,
          borderWidth: 1,
          borderRadius: 20,
          marginRight: 2 * Spacing,
        }}>
        <Pressable
          onPress={() => navigation.push('GroupDetail', {name: item.name})}>
          <Font>{item.name}</Font>
        </Pressable>
      </Stack>
    );
  };

  return (
    <ScrollView>
      <SafeAreaView>
        <Stack direction="row" justifyContent="space-between">
          <Font>Good morning</Font>
          <Font>Notification</Font>
          <Font>Profile</Font>
        </Stack>
        <StatisticBox
          Progress={77}
          AddedTaskToday={5}
          TasksToDo={5}
          DoneTasks={4}
        />
        <Margin top={20} />
        <Font fontWeight="bold" fontSize={25}>
          Groups
        </Font>
        <Margin top={10} />
        <FlatList
          decelerationRate="fast"
          snapToInterval={Spacing}
          showsHorizontalScrollIndicator={false}
          data={groupData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          horizontal
        />
        <Margin top={20} />
        <Font fontWeight="bold" fontSize={25}>
          Tasks Today
        </Font>
      </SafeAreaView>
    </ScrollView>
  );
};
