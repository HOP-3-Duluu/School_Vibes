import {SafeAreaView, Text} from 'react-native';
import React from 'react';
import {Stack} from './components';

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
        <Text>Child component 1</Text>
        <Text>Child component 2</Text>
        <Text>Child component 3</Text>
      </Stack>
    </SafeAreaView>
  );
};

export default Test;
