import React, {ReactNode} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  PixelRatio,
  Dimensions,
} from 'react-native';
import {CorrectIcon} from '../../assets/icon';
import {Font, Padding, Margin, Stack} from '../core';
import {now} from 'moment';

import CircularProgress from 'react-native-circular-progress-indicator';
import Colors from '../../constants/Colors';
import FontSize from '../../constants/FontSize';




interface TaskBoxProps {
  AddedTaskToday: number;
  TasksToDo: number;
  DoneTasks: number;
  Progress: number
}
export const StatisticBox = ({
  AddedTaskToday,
  TasksToDo,
  DoneTasks,
  Progress
}: TaskBoxProps) => {
  return (
    <View style={styles.container}>
      <Margin all={20}>
        <Stack
          style={{width: '100%'}}
          justifyContent="space-between"
          direction="row">
          <Stack direction="column" spacing={20}>
            <Font style={{opacity: 0.5}}>Daily Tasks</Font>
            <Stack direction="column" spacing={10}>
              <Stack direction="row" alignItems='center' spacing={7}>
                <CorrectIcon/>
        
                <Font fontWeight="500" fontSize={FontSize.medium}>
                  {DoneTasks}/{TasksToDo} Task Today
                </Font>
              </Stack>

              <Stack direction="row"  alignItems='center' spacing={7}>
              <CorrectIcon/>

                <Font fontWeight="500" fontSize={FontSize.medium}>
                  {AddedTaskToday} Task added today
                </Font>
              </Stack>
            </Stack>
          </Stack>

          <Stack direction="column" spacing={10}>
            <Font style={{opacity: 0.5}}>Task Progress</Font>
            <Stack
              justifyContent="center"
              alignItems="center"
              style={styles.circle}>
              <CircularProgress
                valueSuffix="%"
                value={Progress}
                radius={40}
                duration={2000}
                progressValueColor={Colors.primary}
                maxValue={100}
                circleBackgroundColor={Colors.light}
                activeStrokeColor={Colors.primary}
                inActiveStrokeColor={Colors.lightPrimary}
                titleStyle={{fontWeight: 'bold'}}
              />
            </Stack>
          </Stack>
        </Stack>
      </Margin>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 150,
    shadowColor: 'black',
    shadowOffset: {width: 3, height: 5},
    shadowOpacity: 0.15,
    backgroundColor: 'white',
    borderRadius: 15,

  },
  circle: {
    width: 90,
    height: 90,
    borderRadius: 50,
    backgroundColor: Colors.light,
  },
});
