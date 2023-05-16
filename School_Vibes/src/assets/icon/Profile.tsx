import * as React from 'react';
import {View} from 'react-native';
import Svg, {Path} from 'react-native-svg';

export const ProfileIcon = ({color, size}: any) => {
  return (
    <View>
      <Svg width={size ? size : 30} height={size ? size : 30} viewBox="0 0 50 50" fill="none">
        <Path
          d="M41.667 43.75v-4.167a8.333 8.333 0 00-8.334-8.333H16.668a8.333 8.333 0 00-8.334 8.333v4.167M25 22.917A8.333 8.333 0 1025 6.25a8.333 8.333 0 000 16.667z"
          stroke={color}
          strokeWidth={5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </View>
  );
};
