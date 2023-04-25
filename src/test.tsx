import React from 'react';
import {Calendar, Font, Margin, Padding, Stack} from './components';
import {Text, SafeAreaView} from 'react-native';
import FontSize from './constants/FontSize';
import {Accordion} from './components';

const Test = () => {
  return (
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
        <Accordion title="hello">
          <Text>hello this is boduy</Text>
        </Accordion>
      </Margin>
    </SafeAreaView>
  );
};

export default Test;
// SectionList: A component that displays a list of items grouped into sections. Each section can have its own header and footer, and the list can be navigated using an index on the right-hand side.
// AnimatedList: A component that adds animations to FlatList items, making the list more engaging and interactive.
