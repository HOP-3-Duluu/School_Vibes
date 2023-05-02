import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Svg, Circle, Path} from 'react-native-svg';

export const ProgressBar = ({progress, width = 120, height = 60}) => {
  const radius = height / 2;
  const strokeWidth = height / 10;
  const circumference = 2 * Math.PI * radius;
  const progressOffset = (1 - progress) * circumference;

  return (
    <View style={[styles.container, {width, height}]}>
      <Svg width={width} height={height}>
        <Circle
          cx={radius}
          cy={radius}
          r={radius - strokeWidth / 2}
          strokeWidth={strokeWidth}
          stroke="#E0E0E0"
          fill="none"
        />
        <Path
          stroke="#FFC107"
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
          d={`M ${radius},${strokeWidth / 2} A ${radius - strokeWidth / 2},${
            radius - strokeWidth / 2
          } 0 0 1 ${radius},${2 * radius - strokeWidth / 2}`}
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={progressOffset}
        />
        <Path
          stroke="#E91E63"
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
          d={`M ${radius},${strokeWidth / 2} A ${radius - strokeWidth / 2},${
            radius - strokeWidth / 2
          } 0 0 0 ${radius},${2 * radius - strokeWidth / 2}`}
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={progressOffset}
        />
      </Svg>
      <Text>{progress * 100}%</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
