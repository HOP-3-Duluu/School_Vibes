import React, {ReactNode} from 'react';
import {View, StyleProp, ViewStyle} from 'react-native';

interface MarginProps {
  children: ReactNode;
  all?: number;
  right?: number;
  left?: number;
  top?: number;
  bottom?: number;
  horizontal?: number;
  vertical?: number;
  style?: StyleProp<ViewStyle>;
}

export const Margin = ({
  children,
  all,
  left,
  right,
  top,
  bottom,
  style,
  horizontal,
  vertical,
}: MarginProps) => {
  const MarginStyle = [
    {
      marginLeft: left || horizontal || all || 0,
      marginRight: right || horizontal || all || 0,
      marginTop: top || vertical || all || 0,
      marginBottom: bottom || vertical || all || 0,
    },
    style,
  ];

  return <View style={MarginStyle}>{children}</View>;
};
