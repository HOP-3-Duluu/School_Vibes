import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {
  Font,
  Margin,
  Members,
  Padding,
  ProgressBar,
  Stack,
  TickBox,
} from '../components';
import {Delete, Left, Plus} from '../assets';
import Colors from '../constants/Colors';
import Spacing from '../constants/Spacing';

export const GroupDetail = ({navigation, color, route}) => {
  const {item, bgColor} = route?.params;
  const timeData = [
    {start: 10, end: 12},
    {start: 15, end: 23},
  ];
  const progress = {
    done: 10,
    todo: 10,
    all: 200,
  };
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
  ];

  return (
    <ScrollView>
      <View style={[styles.header, {backgroundColor: bgColor}]}>
        <SafeAreaView>
          <Stack width={'100%'} justifyContent="space-between">
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Left color={Colors.background} />
            </TouchableOpacity>
            <Margin top={20} />
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between">
              <Font color={Colors.whiteText} fontSize={30} fontWeight="bold">
                {item?.name}
              </Font>
              <TouchableOpacity
                onPress={() => navigation.push('Add', {groupName: item?.name})}>
                <Plus fill={Colors.background} width={20} height={20} />
              </TouchableOpacity>
            </Stack>
            <Margin top={Spacing * 5}>
              <Members />
            </Margin>
          </Stack>
        </SafeAreaView>
      </View>
      <Padding horizontal={Spacing * 1.5}>
        <Margin top={20} />
        <ProgressBar time={timeData} progress={progress} />
        <Margin top={Spacing} />
        <Stack width={'100%'}>
          {tickBoxData.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => navigation.push('LessonDetail', {item: item})}>
              <Margin top={10} key={item.id}>
                <TickBox
                  style={{width: '100%'}}
                  title={item.title}
                  header={item.header}
                  chapter={item.chapter}
                  userName={item.userName}
                />
              </Margin>
            </TouchableOpacity>
          ))}
        </Stack>
        <Margin vertical={Spacing * 2} bottom={Spacing * 3}>
          <TouchableOpacity style={styles.delete}>
            <Font color={Colors.whiteText} fontWeight="bold" fontSize={18}>
              Delete Group
            </Font>
            <Delete />
          </TouchableOpacity>
        </Margin>
      </Padding>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 250,
    borderRadius: 5,
    paddingHorizontal: 15,
  },
  delete: {
    borderRadius: 20,
    backgroundColor: Colors.danger,
    padding: 10,
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 5,
  },
});
