import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

export const Close = props => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" height={25} width={25} {...props}>
      <G strokeMiterlimit={4}>
        <Path
          d="M0-.001l17.435 18.213M0 18.212L17.435 0"
          transform="translate(3.966 3.568)"
          opacity={1}
          fill="#5f6368"
          stroke="#5f6368"
          strokeWidth={3.23161912}
          strokeLinecap="round"
          strokeMiterlimit={4}
          fillOpacity={1}
          strokeOpacity={1}
        />
      </G>
    </Svg>
  );
};
