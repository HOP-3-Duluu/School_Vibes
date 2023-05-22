import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const Left = props => {
  return (
    <Svg
      fill={props.color ? props.color : 'black'}
      height="25px"
      width="25px"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 330 330"
      xmlSpace="preserve"
      shape-rendering="geometricPrecision">
      <Path d="M79.393 154.39l150-149.997c5.857-5.858 15.355-5.858 21.213.001 5.857 5.858 5.857 15.355-.001 21.213L111.607 154.39l139.393 139.393c5.858 5.858 5.858 15.355 0 21.213-2.929 2.929-7.678 4.393-10.607 4.393s-7.678-1.464-10.607-4.394l-150-150.003c-.001-.001-.001-.003-.002-.004a14.996 14.996 0 00-10.606-4.394c-4.142.001-8.286 1.646-11.314 4.674s-4.675 7.173-4.674 11.314c0 .001 0 .002.001.003l-.001.002z" />
    </Svg>
  );
};
