import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';

export const Box: FC<any> = ({children, ratio = 1, debugColor, ...props}) => {
  const style = StyleSheet.create({
    container: {
      position: 'relative',
      aspectRatio: ratio,
      width: '100%',
      backgroundColor: debugColor,
      overflow: 'hidden',
    },
  });

  return (
    <View style={style.container} {...props}>
      {children}
    </View>
  );
};
