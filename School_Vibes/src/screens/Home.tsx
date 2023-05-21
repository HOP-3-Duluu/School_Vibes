import React from 'react';
import {
  Pressable,
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Font, Margin, Stack, TickBox, StatisticBox} from '../components';
import Spacing from '../constants/Spacing';

export const Home = () => {
  const navigation = useNavigation();

  const timeData = [
    {start: 10, end: 12},
    {start: 15, end: 23},
  ];

  const tickBoxData = [
    {
      id: '1',
      title: 'Mathematics',
      header: 'Introduction',
      chapter: 1,
      userName: 'Brooklyn Williamson',
    },
    {
      id: '2',
      title: 'Physics',
      header: 'Basic Concepts',
      chapter: 3,
      userName: 'Ethan Parker',
    },
    {
      id: '3',
      title: 'Chemistry',
      header: 'Chemical Reactions',
      chapter: 2,
      userName: 'Olivia Evans',
    },
    // Add more items as needed
  ];

  const groupData = [
    {id: '1', name: 'Group1'},
    {id: '2', name: 'Group2'},
    {id: '3', name: 'Group3'},
    {id: '4', name: 'Group4'},
    {id: '5', name: 'Group5'},
  ];

  const renderItem = ({item}) => (
    <Stack
      justifyContent="center"
      alignItems="center"
      style={styles.renderItem}>
      <Pressable
        onPress={() => navigation.push('GroupDetail', {name: item.name})}>
        <Font>{item.name}</Font>
      </Pressable>
    </Stack>
  );

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <SafeAreaView>
        <Stack direction="row" justifyContent="space-between">
          <Font>Good morning</Font>
          <Pressable onPress={() => navigation.push('Notifications')}>
            <Font>Notification</Font>
          </Pressable>
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
          data={groupData}
          renderItem={renderItem}
          decelerationRate="fast"
          snapToInterval={Spacing}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id}
          horizontal
        />
        <Margin top={20} />
        <Font fontWeight="bold" fontSize={25}>
          Tasks Today
        </Font>
        {tickBoxData.map((item, _index) => (
          <Margin top={10} key={item.id}>
            <TickBox
              onPress={() => navigation.push('LessonDetail')}
              title={item.title}
              header={item.header}
              chapter={item.chapter}
              userName={item.userName}
            />
          </Margin>
        ))}
      </SafeAreaView>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  renderItem: {
    width: 300,
    height: 150,
    borderWidth: 1,
    borderRadius: 20,
    marginRight: 2 * Spacing,
  },
});
