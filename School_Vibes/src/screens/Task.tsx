import React from 'react';
import {
  Dimensions,
  Pressable,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import {Calendar, Font, Margin, Padding, Stack} from '../components';
import Colors from '../constants/Colors';
import Spacing from '../constants/Spacing';
import {day, dayName, monthName, year} from '../library/Date';

export const Task = () => {
  const height = Dimensions.get('screen').height;
  return (
    <SafeAreaView>
      <Padding horizontal={Spacing} top={Spacing}>
        <Stack direction="row" justifyContent="space-between">
          <Stack direction="row" alignItems="center" spacing={Spacing}>
            <Font fontWeight="bold" fontSize={42}>
              {day}
            </Font>
            <View>
              <Margin left={Spacing / 4}>
                <Font
                  color="gray"
                  fontWeight="500"
                  lineHeight={18}
                  fontSize={16}>
                  {dayName}
                </Font>
              </Margin>
              <Margin top={3} />
              <Stack direction="row" spacing={Spacing / 2}>
                <Font
                  color="gray"
                  fontWeight="500"
                  lineHeight={18}
                  fontSize={16}>
                  {monthName}
                </Font>
                <Font
                  color="gray"
                  fontWeight="500"
                  lineHeight={18}
                  fontSize={16}>
                  {year}
                </Font>
              </Stack>
            </View>
          </Stack>
          <Pressable style={styles.button}>
            <Padding all={13} horizontal={25}>
              <Font color={Colors.primary} fontWeight="bold" fontSize={20}>
                Today
              </Font>
            </Padding>
          </Pressable>
        </Stack>
      </Padding>
      <Margin top={Spacing * 3}>
        <View>
          <Calendar />
        </View>
      </Margin>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#e4ecf4',
    borderRadius: 10,
  },
});
