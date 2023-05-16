import React from 'react';

import {Text, SafeAreaView, ScrollView, View, Pressable} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {
  Button,
  Calendar,
  Font,
  Margin,
  Padding,
  Paper,
  ProgressBar,
  Stack,
  Tabs,
  TaskBox, 
  Accordion, 
  StatisticBox
} from './components';

import FontSize from './constants/FontSize';

import {Plus} from './assets';
import Colors from './constants/Colors';
// import
const Test = () => {
  const navigation = useNavigation<any>();
  const handlePress = () => {
    // Handle button press
  };
  const time = [
    {
      start: 10,
      end: 12,
    },
    {
      start: 15,
      end: 23,
    },
  ];
  const progress = {
    done: 40,
    progress: 20,
    todo: 10,
    all: 100,
  };
  const tabs = [
    {
      id: 1,
      label: 'Button',
      component: (
        <Button
          variant="contained"
          onPress={handlePress}
          icon={<Plus fill={Colors.background} />}>
          contained
        </Button>
      ),
    },
    {
      id: 2,
      label: 'Project',
      component: (
        <View>
          <Calendar />
          <TaskBox
            title="4.14 mat"
            deadline="4-13"
            groupname="ulaan zagalmai"
          />
          <StatisticBox Progress={77} AddedTaskToday={5} TasksToDo={5} DoneTasks={4}/>
        </View>
      ),
    },
    {
      id: 3,
      label: 'Accordian',
      component: (
        <Accordion title="hello">
          <Font>hello this is boduy</Font>
        </Accordion>
      ),
    },
    {
      id: 4,
      label: 'Project',
      component: (
        <Paper>
          <ProgressBar time={time} progress={progress} />
        </Paper>
      ),
    },
  ];

  const handleTabChange = (tabId: number) => {
    console.log('Selected Tab:', tabId);
  };
  return (
    <ScrollView>
      <SafeAreaView>
        <Tabs tabs={tabs} initialTab={1} onTabChange={() => handleTabChange} />
        <View>
          <Pressable
            onPress={() => navigation.push('GroupDetail', {name: 'group1'})}>
            <Font>Group1</Font>
          </Pressable>
          <Pressable
            onPress={() => navigation.push('GroupDetail', {name: 'group2'})}>
            <Font>Group2</Font>
          </Pressable>
          <Pressable
            onPress={() => navigation.push('GroupDetail', {name: 'group3'})}>
            <Font>Group3</Font>
          </Pressable>
          <Pressable
            onPress={() => navigation.push('GroupDetail', {name: 'group4'})}>
            <Font>Group4</Font>
          </Pressable>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Test;
// SectionList: A component that displays a list of items grouped into sections. Each section can have its own header and footer, and the list can be navigated using an index on the right-hand side.
// AnimatedList: A component that adds animations to FlatList items, making the list more engaging and interactive.
