import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {Font, Margin, Stack} from '../core';
import LinearGradient from 'react-native-linear-gradient';
import FontSize from '../../constants/FontSize';
import * as Progress from 'react-native-progress';
import Spacing from '../../constants/Spacing';

interface GroupBoxProps {
  GroupName: string;
  Description: string;
  Percentage: number;
  bgColor: string;
  members: string[];
}

const PosImage = ({img, index}) => {
  return (
    <View style={{left: index * -15}}>
      <Image
        source={{
          uri: img,
        }}
        style={{width: 30, height: 30, borderRadius: 40}}
      />
    </View>
  );
};

export const Members = () => {
  const image = [
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/55758/random-user-31.jpg',
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/55758/random-user-31.jpg',
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/55758/random-user-31.jpg',
  ];
  return (
    <Stack direction="row" alignItems="center">
      <Font color="black" fontWeight="500" fontSize={20}>
        Members
      </Font>
      <Margin horizontal={Spacing / 2} />
      {image.map((img, index) => {
        return <PosImage img={img} index={index} key={index} />;
      })}
    </Stack>
  );
};

export const GroupBox = ({
  GroupName,
  Description,
  Percentage,
  bgColor,
  members,
}: GroupBoxProps) => {
  return (
    <Margin right={15}>
      <View style={styles.container}>
        <Stack
          style={{
            width: '100%',
            height: '35%',
            borderTopStartRadius: 10,
            borderTopRightRadius: 10,
            backgroundColor: bgColor,
          }}
        />
        <Stack
          direction="row"
          spacing={15}
          alignItems="center"
          style={styles.contain2}>
          {/* <LinearGradient
            colors={['white', bgColor]}
            style={styles.linearGradient}
          /> */}

          <Stack direction="column" spacing={10}>
            <Stack direction="column">
              <Font fontSize={FontSize.large}>{GroupName}</Font>

              <Font fontSize={FontSize.medium} style={{opacity: 0.4}}>
                {Description}
              </Font>
            </Stack>
            <Progress.Bar color={bgColor} progress={Percentage} width={250} />

            <Stack direction="row">
              <Members />
            </Stack>
          </Stack>
        </Stack>
      </View>
    </Margin>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    width: 300,
    height: 180,
    shadowColor: 'black',
    shadowOffset: {width: 3, height: 5},
    shadowOpacity: 0.15,
    backgroundColor: 'white',
    borderRadius: 15,
  },
  linearGradient: {
    height: '50%',
    width: 10,
    borderRadius: 10,
    marginLeft: -12,
    display: 'flex',
    flexDirection: 'column',
  },

  contain1: {
    width: '100%',
    height: '35%',
    borderTopStartRadius: 10,
    borderTopRightRadius: 10,
  },

  contain2: {
    width: '100%',
    borderBoRadius: 15,
    height: '70%',
    overflow: 'hidden',
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 50,
    marginLeft: 10,
    // backgroundColor: Colors.primary,
  },
});
