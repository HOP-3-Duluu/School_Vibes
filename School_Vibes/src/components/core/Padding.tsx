import React, {ReactNode} from 'react';
import {View, StyleProp, ViewStyle} from 'react-native';

interface PaddingProps {
  children: ReactNode;
  all?: number;
  right?: number;
  left?: number;
  Top?: number;
  bottom?: number;
  horizontal?: number;
  vertical?: number;
  style?: StyleProp<ViewStyle>;
}

export const Padding = ({
  children,
  all,
  left,
  right,
  Top,
  bottom,
  style,
  horizontal,
  vertical,
}: PaddingProps) => {
  const marginStyle = [
    {
      marginLeft: left || horizontal || all || 0,
      marginRight: right || horizontal || all || 0,
      marginTop: Top || vertical || all || 0,
      marginBottom: bottom || vertical || all || 0,
    },
    style,
  ];

  return <View style={marginStyle}>{children}</View>;
};
