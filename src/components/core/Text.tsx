import React from 'react';

import FontSize from '../../constants/FontSize';
import {Text, StyleSheet, StyleProp, ViewStyle} from 'react-native';

interface FontProps {
  children: React.ReactNode;
  fontWeight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
  fontSize?: number;
  color?: string;
  style?: StyleProp<ViewStyle>;
}

export const Font = ({
  children,
  fontWeight = 'normal',
  fontSize = FontSize.small,
  color,
  style,
}: FontProps) => {
  console.log(style)
  const textStyle = [styles.text, {fontWeight, fontSize }, style ];

  return <Text style={textStyle}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: FontSize.small,
    fontWeight: 'normal',
  },
});
