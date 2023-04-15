import React from 'react';
import {Text, StyleSheet} from 'react-native';

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
}

export const Font = ({
  children,
  fontWeight = 'normal',
  fontSize = 14,
}: FontProps) => {
  const textStyle = [styles.text, {fontWeight, fontSize}];

  return <Text style={textStyle}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    fontWeight: 'normal',
  },
});