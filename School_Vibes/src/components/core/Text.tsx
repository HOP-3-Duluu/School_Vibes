import React from 'react';
import {Text, TextStyle, StyleProp, ViewStyle} from 'react-native';
import FontSize from '../../constants/FontSize';

interface FontProps {
  children: React.ReactNode;
  fontWeight?: TextStyle['fontWeight'];
  fontSize?: number;
  color?: string;
  textAlign?: TextStyle['textAlign'];
  lineHeight?: number;
  style?: StyleProp<ViewStyle>;
}

export const Font: React.FC<FontProps> = ({
  children,
  fontWeight = 'normal',
  fontSize = FontSize.small,
  color,
  textAlign,
  lineHeight,
  style,
}) => {
  const textStyle: TextStyle = {
    fontWeight,
    fontSize,
    color,
    textAlign,
    lineHeight,
  };

  return <Text style={[textStyle, style]}>{children}</Text>;
};
