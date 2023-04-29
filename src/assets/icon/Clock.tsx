import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const Clock = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}>
      <Path d="M12 1.5C6.21 1.5 1.5 6.21 1.5 12S6.21 22.5 12 22.5 22.5 17.79 22.5 12 17.79 1.5 12 1.5zM12 21a9 9 0 119-9 9 9 0 01-9 9zm1.5-10.5H12V6h3z" />
    </Svg>
  );
};
