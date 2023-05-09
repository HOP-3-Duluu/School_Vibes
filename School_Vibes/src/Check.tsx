import React from 'react';
import {Button, Calendar, Font, Margin, Padding, Paper, ProgressBar, Stack, Tabs} from './components';
import {Text, SafeAreaView, ScrollView} from 'react-native';
import {Accordion} from './components';
import {Plus} from './assets';
import Colors from './constants/Colors';
import { TaskBox } from './components/common/TaskBox';
import FontSize from './constants/FontSize';
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
      component: <Calendar />,
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
        {/* default
          direction = 'column',
          spacing = 0,
          alignItems = 'flex-start',
          justifyContent = 'flex-start',
          style, */}
        <Stack spacing={10}>
          <Text>Stack component 1</Text>
          <Text>Stack component 2</Text>
          <Text>Stack component 3</Text>
        </Stack>
        {/*
        default
        fontWeight = 'normal'
        fontSize = 14
      */}

        <Font fontWeight="bold" fontSize={FontSize.medium}>
          Font component 1
        </Font>

        {/*
          zaava; vertical horizontal gej bicne
        */}
        <Padding all={26}>
          <Text>This text has padding of 16 on all sides.</Text>
        </Padding>
        <Margin all={10}>
          <Calendar />
        </Margin>

        <Margin all={10}>
          <Stack width="100%" spacing={10}>
            <Paper>
              <ProgressBar time={time} progress={progress} />
            </Paper>
            <Accordion title="hello">
              <Text>hello this is boduy</Text>
            </Accordion>
            <Button
              variant="contained"
              onPress={handlePress}
              icon={<Plus fill={Colors.background} />}>
              contained
            </Button>
            <Button
              variant="outlined"
              onPress={handlePress}
              icon={<Plus fill={Colors.primary} />}>
              outlined
            </Button>
          </Stack>
        </Margin>
        <TaskBox title='4.14 mat' deadline='4-13' groupname='ulaan zagalmai'/>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Test;
// SectionList: A component that displays a list of items grouped into sections. Each section can have its own header and footer, and the list can be navigated using an index on the right-hand side.
// AnimatedList: A component that adds animations to FlatList items, making the list more engaging and interactive.
