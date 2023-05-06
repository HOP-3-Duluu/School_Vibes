import * as React from 'react';
import {View} from 'react-native';
import Svg, {Path} from 'react-native-svg';

export const HomeIcon = ({color}: any) => {
  return (
    <View>
      <Svg width={30} height={30} viewBox="0 0 50 50" fill="none">
        <Path
          d="M6.25 18.75L25 4.167 43.75 18.75v22.917a4.167 4.167 0 01-4.167 4.166H10.417a4.167 4.167 0 01-4.167-4.166V18.75z"
          stroke={color}
          strokeWidth={5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M18.75 45.833V25h12.5v20.833"
          stroke={color}
          strokeWidth={5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </View>
  );
};
