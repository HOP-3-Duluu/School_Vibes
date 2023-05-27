import * as React from 'react';
import Svg, {G, LinearGradient, Stop, Path} from 'react-native-svg';

export const CorrectIcon = (props: any) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width="16px"
      height="16px"
      {...props}>
      <LinearGradient
        id="a"
        x1={21.241}
        x2={3.541}
        y1={39.241}
        y2={21.541}
        gradientUnits="userSpaceOnUse">
        <Stop offset={0.108} stopColor="#0d7044" />
        <Stop offset={0.433} stopColor="#11945a" />
      </LinearGradient>
      <Path
        fill="url(#a)"
        d="M16.599 41.42L1.58 26.401a1.98 1.98 0 010-2.802l4.019-4.019a1.98 1.98 0 012.802 0L23.42 34.599a1.98 1.98 0 010 2.802l-4.019 4.019a1.983 1.983 0 01-2.802 0z"
      />
      <LinearGradient
        id="b"
        x1={-15.77}
        x2={26.403}
        y1={43.228}
        y2={43.228}
        gradientTransform="rotate(134.999 21.287 38.873)"
        gradientUnits="userSpaceOnUse">
        <Stop offset={0} stopColor="#2ac782" />
        <Stop offset={1} stopColor="#21b876" />
      </LinearGradient>
      <Path
        fill="url(#b)"
        d="M12.58 34.599L39.599 7.58a1.98 1.98 0 012.802 0l4.019 4.019a1.98 1.98 0 010 2.802L19.401 41.42a1.98 1.98 0 01-2.802 0l-4.019-4.019a1.983 1.983 0 010-2.802z"
      />
    </Svg>
  );
};
