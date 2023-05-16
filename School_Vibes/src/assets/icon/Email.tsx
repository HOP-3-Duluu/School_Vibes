import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const Email = props => {
  return (
    <Svg
      fill="#000"
      height="24px"
      width="24px"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      xmlSpace="preserve"
      {...props}>
      <Path d="M58.003 8H5.997a6 6 0 00-6 6v36a6 6 0 006 6h52.006a6 6 0 006-6V14a6 6 0 00-6-6zm4 41.11L43.085 30.193l18.918-12.056v30.975zM5.997 10h52.006c2.206 0 4 1.794 4 4v1.766L34.468 33.313c-1.49.95-3.394.92-4.85-.07L1.997 14.47V14c0-2.206 1.794-4 4-4zm-4 6.885l19.185 13.04L1.997 49.111V16.885zM58.003 54H5.997a4.005 4.005 0 01-3.677-2.428l20.52-20.52 5.655 3.844a6.41 6.41 0 007.046.104l5.842-3.724L61.68 51.572A4.005 4.005 0 0158.003 54z" />
    </Svg>
  );
};
