import React, {ReactNode} from 'react';
import {View, StyleSheet, Text} from 'react-native';

export const Paper = ({
  children,
  style,
}: {
  children: ReactNode;
  style?: any;
}) => {
  return <View style={[styles.paper, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  paper: {
    backgroundColor: '#fff',
    borderRadius: 4,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },
});
