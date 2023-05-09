import React, {ReactNode} from 'react';
import {View,StyleSheet,TouchableOpacity,StyleProp,ViewStyle,PixelRatio,Dimensions,} from 'react-native';
import { CalendarIcon } from '../../assets';
import {Font, Padding, Margin, Stack} from '../core';
import {now} from 'moment';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');
const widthBaseScale = SCREEN_WIDTH / 375;
const heightBaseScale = SCREEN_HEIGHT / 667;

function norm(size: number, based: 'height' | 'width' = 'width') {
  const newSize =
    based === 'height' ? size * heightBaseScale : size * widthBaseScale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}
interface TaskBoxProps {
  title: string;
  deadline: string;
  groupname: string;
  backColor?: string;
  priority?: 'Low' | 'Medium' | 'High';
}
export const TaskBox = ({
  title,
  deadline = '5:22',
  groupname = 'Ulaan zagalmai',
  priority = 'Medium',
  backColor = '#FCF5F6',
}: TaskBoxProps) => {
  let now = new Date();
  let date = now.getDate();
  let month = now.getMonth() + 1;
  let givenMonth: number = Number(deadline.split(':')[0]);
  let givenDay: number = Number(deadline.split(':')[1]);
  let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday',];
  let months = ['January','February','March','April','May','June','July','August','September','October','November','December',];
  let daybyname = days[now.getDay()];
  let monthbyname = months[now.getMonth()];
  let dayDiff: number = (givenMonth - month) * 30 + givenDay - date;
  let color = [0, 255, 0];
  if (dayDiff >= 10 && dayDiff < 20) {
    color[1] = 255;
    color[0] = (20 - dayDiff) * 25.5;
  }
  if (dayDiff < 10) {
    color[0] = 255;
    color[1] = 255 - (10 - dayDiff) * 25.5;
  }
  return (
    <View >
      {/* first line */}
      <View style={{...styles.out, backgroundColor: backColor}}>
        <View style={{...styles.row, ...styles.between}}>
          <View
            style={{
              ...styles.circle,
              backgroundColor: `rgb(${color[0]}, ${color[1]},${color[2]})`,
            }}></View>
          <View style={styles.priority}>
            <Font style={{padding: norm(7)}}>{priority}</Font>
          </View>
        </View>
        {/* title */}
        <Font fontSize={norm(20)} fontWeight='600'>
          {title}
        </Font>
        {/* bottom line */}
        <Margin top={norm(10)}>
          <View style={{...styles.row, ...styles.center, ...styles.between}}>
            <Font style={{opacity: 0.5, display: 'flex'}} fontSize={norm(14)}>
              {groupname}
            </Font>
            <View style={{...styles.row, ...styles.center, ...styles.between}}>
              <Margin right={norm(5)}>
                <Font fontSize={norm(14)}>{daybyname} |</Font>
              </Margin>
              <Margin right={norm(5)}>
                <Font>
                  {monthbyname}:{date}
                </Font>
              </Margin>
              <TouchableOpacity>
                {/* calendar luu route => ? */}
                <CalendarIcon />
              </TouchableOpacity>
            </View>
          </View>
        </Margin>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
 
  priority: {
    display: 'flex',
    backgroundColor: '#F2EDED',
    fontSize: 1,
    borderRadius: 15,
  },
  out: {
    marginTop: 20,
    marginBottom:50,
    padding: 20,
    width: norm(300, 'width'),
    marginHorizontal: norm(32.5, 'width'),
    height: 120,
    borderRadius: 15,
    shadowColor: 'blue',
    shadowOffset: {width: norm(20, 'width'), height: 20},
    shadowOpacity: 0.1,
  },
  circle: {
    width: norm(20),
    height: norm(20),
    borderRadius: 50,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
  between: {
    justifyContent: 'space-between',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});