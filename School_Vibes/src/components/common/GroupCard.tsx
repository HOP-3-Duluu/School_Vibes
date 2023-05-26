import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Font, Margin, Stack} from '../core';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../constants/Colors';
import FontSize from '../../constants/FontSize';
import * as Progress from 'react-native-progress';

interface GroupBoxProps {
  GroupName: string;
  Description: string;
  Percentage: number;
  Index: number;
}
export const GroupBox = ({
  GroupName,
  Description,
  Percentage,
  Index,
}: GroupBoxProps) => {
  let colors = [
    Colors.active,
    Colors.primary,
    Colors.danger,
    Colors.warning,
    Colors.success,
    Colors.secondary,
  ];
  const main = colors[Index];

  return (
    <Margin right={15}>
      <View style={styles.container}>
        <Stack
          style={{
            width: '100%',
            height: '35%',
            borderTopStartRadius: 10,
            borderTopRightRadius: 10,
            backgroundColor: main,
          }}
        />
        <Stack
          direction="row"
          spacing={15}
          alignItems="center"
          style={styles.contain2}>
          {/* <LinearGradient
            colors={['white', main]}
            style={styles.linearGradient}
          /> */}

          <Stack direction="column" spacing={10}>
            <Stack direction="column">
              <Font fontSize={FontSize.large}>{GroupName}</Font>

              <Font fontSize={FontSize.medium} style={{opacity: 0.4}}>
                {Description}
              </Font>
            </Stack>
            <Progress.Bar color={main} progress={Percentage} width={250} />

            <Stack direction="row">
              <Margin left={-10}>
                <View style={[styles.circle, {backgroundColor: main}]} />
              </Margin>
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
    height: '65%',
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
