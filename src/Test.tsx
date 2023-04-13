import {SafeAreaView, Text} from 'react-native';
import React from 'react';
import {Font, Stack} from './components';

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
        Font component 1
      </Font>
    </SafeAreaView>
  );
};

export default Test;
