import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Font, Margin, Stack} from '../core';
import Spacing from '../../constants/Spacing';

const PosImage = ({img, index}) => {
  return (
    <View style={{left: index * -20}}>
      <Image
        source={{
          uri: img,
        }}
        style={{width: 40, height: 40, borderRadius: 40}}
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
      <Font color="white" fontWeight="500" fontSize={20}>
        Members
      </Font>
      <Margin horizontal={Spacing} />
      {image.map((img, index) => {
        return <PosImage img={img} index={index} key={index} />;
      })}
    </Stack>
  );
};

const styles = StyleSheet.create({});
