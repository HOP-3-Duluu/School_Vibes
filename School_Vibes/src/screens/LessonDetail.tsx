import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Font, Margin, Padding, Stack} from '../components';
import {CorrectIcon, Left} from '../assets';
import {Dimensions} from 'react-native';
import Colors from '../constants/Colors';
import Spacing from '../constants/Spacing';

const Card = ({item}) => {
  const width = Dimensions.get('screen').width;
  const height = Dimensions.get('screen').height;

  return (
    <View>
      {/* <Font fontSize={20}>{item.describe}</Font> */}
      <Padding right={Spacing * 2}>
        <Stack alignItems="center" justifyContent="center">
          <Image
            source={require('../assets/images/lesson.jpg')}
            resizeMode="contain"
            style={{width, height: height / 2}}
          />
        </Stack>
      </Padding>
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
      describe: 'asadfasdfasdf',
      chapter: 1,
      userName: 'Brooklyn Williamson',
    },
    // {
    //   id: '2',
    //   title: 'Physics',
    //   describe: 'asadfasdfasdf',
    //   header: 'Basic Concepts',
    //   chapter: 3,
    //   userName: 'Ethan Parker',
    // },
    // {
    //   id: '3',
    //   title: 'Chemistry',
    //   header: 'Chemical Reactions',
    //   describe: 'asadfasdfasdf',
    //   chapter: 2,
    //   userName: 'Olivia Evans',
    // },
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

            <Margin top={10}>
              <Card
                item={{
                  id: '1',
                  title: 'Mathematics',
                  header: 'Introduction',
                  describe: 'asadfasdfasdf',
                  chapter: 1,
                  userName: 'Brooklyn Williamson',
                }}
              />
            </Margin>
            <Font>Lessons</Font>
          </View>
          <TouchableOpacity style={styles.done}>
            <Stack direction="row" spacing={Spacing}>
              <Font>Done</Font>

              <CorrectIcon />
            </Stack>
          </TouchableOpacity>
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
  done: {
    // borderRadius: 10,
    // backgroundColor: 'green',
    // padding: 20,
  },
});
