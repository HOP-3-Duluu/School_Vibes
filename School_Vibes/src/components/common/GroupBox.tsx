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
import {CorrectIcon  , CalendarIcon} from '../../assets/icon';
import {Font, Padding, Margin, Stack} from '../core';
import {now} from 'moment';
import LinearGradient from 'react-native-linear-gradient';
import CircularProgress from 'react-native-circular-progress-indicator';
import Colors from '../../constants/Colors';
import FontSize from '../../constants/FontSize';
import * as Progress from 'react-native-progress';

interface GroupBoxProps {
  GroupName: string;
  Description: string;
  Date: string;
  //   date => 5:3
  Percentage: number;
}
export const GroupBox = ({
  GroupName,
  Description,
  Date,
  Percentage,
}: GroupBoxProps) => {
    let days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ];
      let months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ];
    
//    const  getDayName =(date = new Date(), locale = 'mn_MN')=> 
//    {
//   return date.toLocaleDateString(locale, {weekday: 'long'});
//    }
//    getDayName(new Date(`2023-${GivenDate}`))

  return (
 
    <View style={styles.container}>
      <Stack style={styles.contain1}>

      </Stack>
      <Stack
        direction="row"
        spacing={15}
        alignItems="center"
        style={styles.contain2}>
        <LinearGradient
          colors={['#9AD2FB', '#6BB2F9', '#3A83F7']}
          style={styles.linearGradient}
        />

        <Stack direction="column" spacing={10}>
          <Stack direction="column">
            <Font fontSize={FontSize.large}>{GroupName}</Font>

            <Font fontSize={FontSize.medium} style={{opacity: 0.4}}>
              {Description}
            </Font>
          </Stack>
          <Progress.Bar
            color={Colors.primary}
            progress={0.3}
            width={300}
          />
          <Stack direction='row'>
          <CalendarIcon wh={20} color={'black'} />
            <Font></Font>
          </Stack>

        </Stack>

      </Stack>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    width: '100%',
    height: 200,
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
    marginLeft: -5,
    display: 'flex',
    flexDirection: 'column',
  },

  contain1: {
    width: '100%',
    height: '35%',
    backgroundColor: Colors.primary,

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
    width: 90,
    height: 90,
    borderRadius: 50,
    backgroundColor: Colors.light,
  },
});
