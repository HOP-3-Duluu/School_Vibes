import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const Logo = (props, width = 194, height = 250): any => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 194 250"
      fill="none"
      {...props}>
      <Path
        d="M95.5 122.242v64.5M53 122.242h84.5"
        stroke="#8ECAE6"
        strokeWidth={20}
      />
      <Path
        d="M53 97.742v89l84.5.5c.167-24.5.4-76.7 0-89.5-.4-12.8-10.5-16.333-15.5-16.5-12 .167-39.3.4-52.5 0-13.2-.4-16.5 10.834-16.5 16.5z"
        stroke="#8ECAE6"
        strokeWidth={19}
      />
      <Path
        d="M110 229.742c-10.4 15.2-22.833 6.334-27 0l-15-20.5-15.5-22 84.5.5c-4.667 7.667-16.6 26.8-27 42z"
        stroke="#8ECAE6"
        strokeWidth={23}
      />
      <Path
        d="M81 16.742l-62 59.5c-2 2.334-8 7.9-8 15.5v75.5c0 14.8 18 19.667 26 19.5 33.333.5 104 1.2 122 0 14.5-.966 24.5-18 23.5-24.5.333-19.833.8-61.2 0-68-.8-6.8-5-12.5-7-14.5-17-16.666-54-52.6-66-63-12-10.4-24-4.333-28.5 0z"
        stroke="#8ECAE6"
        strokeWidth={21}
      />
    </Svg>
  );
};
