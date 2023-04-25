import React from 'react';
import {Calendar, Font, Margin, Padding, Stack,Button} from './components';
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
      </Margin><View
        style={{height: 250, display: 'flex',width:'100%', alignItems: 'center', justifyContent: 'space-around'}}>
        <Button
          bgColor={'black'}
          bRadius={'5px'}
          title={'Add'}
          color={'#fff'}
          type={'add'}
          size={"big"}
        />
        <Button
          bgColor={'#fff'}
          bRadius={'5px'}
          title={'Add'}
          color={'black'}
          type={'left'}
          size={'big'}
          borderColor={'1px solid black'}
        />
        <Button
          bgColor={'#fff'}
          bRadius={'40px'}
          color={'black'}
          type={'right'}
          size={'header'}
          borderColor={'1px solid black'}
        />
        <Button
          bgColor={'#fff'}
          bRadius={'5px'}
          title={'Add'}
          color={'black'}
          size={'small'}
          type={''}
          borderColor={'1px solid black'}
        />
      </View>
    </SafeAreaView>
  );
};

export default Test;
// SectionList: A component that displays a list of items grouped into sections. Each section can have its own header and footer, and the list can be navigated using an index on the right-hand side.
// AnimatedList: A component that adds animations to FlatList items, making the list more engaging and interactive.
