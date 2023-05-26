import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  Font,
  Margin,
  Padding,
  Stack,
  TaskBox,
  TickBox,
  Time,
} from '../components';
import {Left} from '../assets';
import {Dimensions} from 'react-native';
import Colors from '../constants/Colors';
import Spacing from '../constants/Spacing';

const Card = ({item}) => {
  return (
    <View>
      <Font>{item.title}</Font>
    </View>
  );
};

export const LessonDetail = props => {
  const {route, navigation} = props;
  // const {name} = route?.params;
  const width = Dimensions.get('screen').width;
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
      <SafeAreaView>
        <Image
          source={require('../assets/images/lesson.jpeg')}
          resizeMode="cover"
          blurRadius={8}
          style={{width, height: 300, position: 'absolute'}}
        />
        <Padding left={Spacing * 1.5} top={Spacing}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.back}>
            <Left color={Colors.background} />
          </TouchableOpacity>
        </Padding>
        <Margin top={Spacing * 2} />
        <Padding left={Spacing * 2}>
          <Font color={Colors.whiteText} fontWeight="bold" fontSize={30}>
            Geography
          </Font>

          <Font color={Colors.gray} lineHeight={30}>
            7 Part
          </Font>
          <Margin top={Spacing * 2} />
          <Stack direction="row" alignItems="center">
            <Image
              source={{
                uri: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/55758/random-user-31.jpg',
              }}
              style={{width: 50, height: 50, borderRadius: 50}}
            />
            <Margin horizontal={Spacing / 2} />
            <Font color={Colors.whiteText} fontWeight="600" fontSize={20}>
              Nasanbat
            </Font>
          </Stack>
          <Margin top={Spacing * 4} />
          <View>
            <Font>Add Task</Font>

            {tickBoxData.map((item, _index) => (
              <Margin top={10} key={item.id}>
                <Card item={item} />
              </Margin>
            ))}
            <Font>Lessons</Font>
          </View>
          <View>
            <Font>TASKS</Font>
            <Font>LESSONS</Font>
          </View>
        </Padding>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  back: {
    backgroundColor: Colors.gray,
    borderRadius: 50,
    width: 45,
    padding: 8,
  },
});
