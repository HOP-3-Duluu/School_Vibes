import React, {ReactNode} from 'react';
import {View, StyleProp, ViewStyle} from 'react-native';

interface MarginProps {
  children: ReactNode;
  All?: number;
  Right?: number;
  Left?: number;
  Top?: number;
  Bottom?: number;
  Horizontal?: number;
  Vertical?: number;
  style?: StyleProp<ViewStyle>;
}

export const Margin = ({
  children,
  All,
  Left,
  Right,
  Top,
  Bottom,
  style,
  Horizontal,
  Vertical,
}: MarginProps) => {
  const MarginStyle = [
    {
      marginLeft: Left || Horizontal || All || 0,
      marginRight: Right || Horizontal || All || 0,
      marginTop: Top || Vertical || All || 0,
      marginBottom: Bottom || Vertical || All || 0,
    },
    style,
  ];

  return <View style={MarginStyle}>{children}</View>;
};
