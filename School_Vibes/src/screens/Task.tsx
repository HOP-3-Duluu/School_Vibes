import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {Font, Margin, Padding, Stack} from '../components';
import Colors from '../constants/Colors';
import {day, dayName, monthName, year} from '../library/Date';

export const Task = () => {
  return (
    <View>
      <Padding horizontal={20}>
        <Stack direction="row" justifyContent="space-between">
          <Stack direction="row" alignItems="center" spacing={10}>
            <Font fontWeight="bold" fontSize={40}>
              {day}
            </Font>
            <View>
              <Font color="gray">{dayName}</Font>
              <Margin top={3} />
              <Stack direction="row">
                <Font color="gray">{monthName}</Font>
                <Font color="gray">{year}</Font>
              </Stack>
            </View>
          </Stack>
          <Pressable style={styles.button}>
            <Padding all={10} horizontal={25}>
              <Font color={Colors.primary} fontWeight="bold" fontSize={20}>
                Today
              </Font>
            </Padding>
          </Pressable>
        </Stack>
      </Padding>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#e4ecf4',
    borderRadius: 15,
  },
});
// <SafeAreaView>
//   <Stack spacing={20}>
//     <TickBox
//       title="Mathematics"
//       header="Introduction"
//       chapter={1}
//       userName="Brooklyn Williamson"
//     />
//     <TickBox
//       title="Biology"
//       header="Animal Kingdom"
//       chapter={3}
//       userName="Julie Watson"
//     />
//   </Stack>
// </SafeAreaView>
