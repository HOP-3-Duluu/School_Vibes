import React from 'react';
import {Text, StyleSheet} from 'react-native';
import FontSize from '../../constants/FontSize';
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
}

export const Font = ({
  children,
  fontWeight = 'normal',
  fontSize = FontSize.small,
  color,
}: FontProps) => {
  const textStyle = [styles.text, {fontWeight, fontSize, color}];

  return <Text style={textStyle}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: FontSize.small,
    fontWeight: 'normal',
  },
});
