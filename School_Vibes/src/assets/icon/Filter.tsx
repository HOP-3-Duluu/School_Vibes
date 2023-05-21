import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

export const Filter = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={25}
      height={25}
      viewBox="0 0 256 256"
      {...props}>
      <G
        stroke="none"
        strokeWidth={0}
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit={10}
        fill="none"
        fillRule="nonzero"
        opacity={1}>
        <Path
          d="M87 22.681H33.355a3 3 0 110-6H87a3 3 0 110 6zM74.016 39.561h-40.66a3 3 0 110-6h40.66a3 3 0 110 6zM61.032 56.439H33.355a3 3 0 110-6h27.677a3 3 0 110 6zM48.048 73.319H33.355a3 3 0 110-6h14.692a3 3 0 01.001 6zM11.629 73.319a3 3 0 01-3-3V19.681a3 3 0 116 0v50.638a3 3 0 01-3 3z"
          transform="matrix(2.81 0 0 2.81 1.407 1.407)"
          stroke="none"
          strokeWidth={1}
          strokeDasharray="none"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit={10}
          fill="gray"
          fillRule="nonzero"
          opacity={1}
        />
        <Path
          d="M11.629 73.319a3 3 0 01-2.122-.879L.878 63.81a3 3 0 014.243-4.242l6.508 6.508 6.509-6.508a2.998 2.998 0 014.242 0 2.998 2.998 0 010 4.242l-8.63 8.63a2.996 2.996 0 01-2.121.879z"
          transform="matrix(2.81 0 0 2.81 1.407 1.407)"
          stroke="none"
          strokeWidth={1}
          strokeDasharray="none"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit={10}
          fill="gray"
          fillRule="nonzero"
          opacity={1}
        />
      </G>
    </Svg>
  );
};
