import React, {ReactNode} from 'react';
import {View, StyleSheet, ViewStyle} from 'react-native';

type StackProps = {
  children: ReactNode;
  direction?: 'row' | 'column';
  spacing?: number;
  alignItems?: ViewStyle['alignItems'];
  justifyContent?: ViewStyle['justifyContent'];
  style?: ViewStyle;
};

export const Stack = ({
  children,
  direction = 'column',
  spacing = 0,
  alignItems = 'flex-start',
  justifyContent = 'flex-start',
  style,
}: StackProps) => {
  const containerStyle = [
    styles.container,
    {flexDirection: direction, alignItems, justifyContent, ...style},
  ];

  const childContainerStyle =
    direction === 'column' ? {marginBottom: spacing} : {marginRight: spacing};

  return (
    <View style={containerStyle}>
      {React.Children.map(children, (child, index) => (
        <View style={index >= 0 && childContainerStyle}>{child}</View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
});
