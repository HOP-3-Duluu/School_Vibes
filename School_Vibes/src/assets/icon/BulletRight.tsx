import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
export const BulletR = (props: any) => {
  return (
    <Svg
      width={10}
      height={14}
      viewBox="0 0 10 14"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M8 12.2L2.4 7 8 1.8"
        stroke={props.prop}
        strokeWidth={2}
        strokeLinecap="square"
      />
    </Svg>
  );
};
