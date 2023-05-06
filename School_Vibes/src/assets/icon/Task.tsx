import * as React from 'react';
import {View} from 'react-native';
import Svg, {Path} from 'react-native-svg';

export const TaskIcon = ({color}: any) => {
  return (
    <View>
      <Svg width={30} height={30} viewBox="0 0 50 50" fill="none">
        <Path
          d="M43.75 8.5l-37.5-.167v33.334a4.167 4.167 0 004.167 4.166h29.166a4.167 4.167 0 004.167-4.166V8.5z"
          stroke={color}
          strokeWidth={5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M25 4.167V12.5M33 4.167V12.5M16.666 4.167V12.5"
          stroke={color}
          strokeWidth={4}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M22 22h13M17 30h18"
          stroke={color}
          strokeWidth={3}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </View>
  );
};
