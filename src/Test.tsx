import React from 'react';
import {Calendar, Font, Padding, Stack } from './components';

import {Text, SafeAreaView} from 'react-native';

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
      <Font fontWeight="bold" fontSize={16}>
        Font component 1s
      </Font>
      {/*
          zaava; vertical horizontal gej bicne
        */}
      <Padding size={26} vertical horizontal>
        <Text>This text has padding of 16 on all sides.</Text>
      </Padding>
      <Calendar />
    </SafeAreaView>
  );
};

export default Test;
