import React from 'react';
import {
  Button,
  Calendar,
  Paper,
  ProgressBar,
  Tabs,
  TaskBox,
} from './components';
import {Text, SafeAreaView, ScrollView, View} from 'react-native';
import {Accordion} from './components';
import {Plus} from './assets';
import Colors from './constants/Colors';

const Test = () => {
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
        </View>
      ),
    },
    {
      id: 3,
      label: 'Accordian',
      component: (
        <Accordion title="hello">
          <Text>hello this is boduy</Text>
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
      </SafeAreaView>
    </ScrollView>
  );
};

export default Test;
// SectionList: A component that displays a list of items grouped into sections. Each section can have its own header and footer, and the list can be navigated using an index on the right-hand side.
// AnimatedList: A component that adds animations to FlatList items, making the list more engaging and interactive.
