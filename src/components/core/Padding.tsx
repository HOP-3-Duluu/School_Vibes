import React, {ReactNode} from 'react';
import {View, StyleProp, ViewStyle} from 'react-native';

interface PaddingProps {
  children: ReactNode;
  size?: number;
  horizontal?: boolean;
  vertical?: boolean;
  style?: StyleProp<ViewStyle>;
}

export const Padding = ({
  children,
  size,
  horizontal = false,
  vertical = false,
  style,
}: PaddingProps) => {
  const paddingStyle = [
    {
      padding: size,
      paddingHorizontal: horizontal ? size : 0,
      paddingVertical: vertical ? size : 0,
    },
    style,
  ];

  return <View style={paddingStyle}>{children}</View>;
};
