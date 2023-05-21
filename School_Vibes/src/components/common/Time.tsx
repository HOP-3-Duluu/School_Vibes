import {StyleSheet, View, FlatList, Dimensions} from 'react-native';
import React from 'react';
import {TickBox} from './TickBox';
import {Font, Margin, Stack} from '../core';
import Colors from '../../constants/Colors';
import Spacing from '../../constants/Spacing';

export const Time = ({day}: {day: string}) => {
  const data = [
    {
      id: 1,
      title: 'Mathematics',
      header: 'Introduction',
      chapter: 1,
      userName: 'Brooklyn Williamson',
      time: day,
    },
    {
      id: 2,
      title: 'Mathematics',
      header: 'Introduction',
      chapter: 1,
      userName: 'Brooklyn Williamson',
      time: day,
    },
    {
      id: 3,
      title: 'Mathematics',
      header: 'Introduction',
      chapter: 1,
      userName: 'Brooklyn Williamson',
      time: day,
    },
    {
      id: 4,
      title: 'Mathematics',
      header: 'Introduction',
      chapter: 1,
      userName: 'Brooklyn Williamson',
      time: day,
    },
  ];
  interface DataProps {
    id: number;
    title: string;
    header: string;
    chapter: number;
    userName: string;
    time: string;
  }
  const renderItem = ({item}: {item: DataProps}) => (
    <Margin bottom={Spacing * 2}>
      <Stack direction="row" spacing={14}>
        <Margin top={Spacing / 2}>
          <Font fontWeight="bold" fontSize={18}>
            {item?.time?.format()?.slice(11, 16)}
          </Font>
        </Margin>
        <View style={styles.border} />
        <TickBox
          title={item.title}
          header={item.header}
          chapter={item.chapter}
          userName={item.userName}
        />
      </Stack>
    </Margin>
  );

  return (
    <View style={{height: Dimensions.get('screen').height / 1.78}}>
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.container}
        snapToInterval={Spacing}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
  },
  border: {
    borderWidth: 0.85,
    borderColor: Colors.gray,
    opacity: 0.5,
  },
});
