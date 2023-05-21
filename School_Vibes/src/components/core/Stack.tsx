import React, {ReactNode} from 'react';
import {View, StyleSheet, ViewStyle} from 'react-native';

type StackProps = {
  children: ReactNode;
  direction?: 'row' | 'column';
  spacing?: number;
  alignItems?: ViewStyle['alignItems'];
  justifyContent?: ViewStyle['justifyContent'];
  style?: ViewStyle;
  width?: string;
};

export const Stack = ({
  children,
  direction = 'column',
  spacing = 0,
  alignItems = 'flex-start',
  justifyContent = 'flex-start',
  style,
  width,
}: StackProps) => {
  const containerStyle = [
    styles.container,
    {flexDirection: direction, alignItems, justifyContent, ...style},
  ];

  const childContainerStyle =
    direction === 'column'
      ? {marginBottom: spacing}
      : {marginRight: spacing / 2, marginLeft: spacing / 2};

  return (
    <View style={containerStyle}>
      {React.Children.map(children, (child, index) => (
        <View style={index >= 0 && {...childContainerStyle, width}}>
          {child}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
});
