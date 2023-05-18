import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const CalendarIcon = ({color}: any, props?: any , wh:any='20') => {
  return (
    <Svg width={wh} height={wh} viewBox="0 0 50 50" fill="none">
      <Path
        d="M39.583 8.333H10.417A4.167 4.167 0 006.25 12.5v29.167a4.167 4.167 0 004.167 4.166h29.166a4.167 4.167 0 004.167-4.166V12.5a4.167 4.167 0 00-4.167-4.167zM33.334 4.167V12.5M33.334 4.167V12.5M16.666 4.167V12.5M6.25 20.833h37.5"
        stroke={color}
        strokeWidth={5}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      />
    </Svg>
  );
};
