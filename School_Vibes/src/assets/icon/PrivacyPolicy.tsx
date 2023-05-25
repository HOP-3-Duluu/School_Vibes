import * as React from "react"
import Svg, { Path } from "react-native-svg"

function PrivacyPolicy(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="30px"
      height="30px"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      imageRendering="optimizeQuality"
      fillRule="evenodd"
      clipRule="evenodd"
      {...props}
    >
      <Path
        d="M29.5 17.5v7a807.966 807.966 0 01-4 5h-4c-5.81-.99-11.81-1.323-18-1V.5c8.791-1.98 15.958.353 21.5 7 .777 2.93.61 5.763-.5 8.5a42.618 42.618 0 005 1.5zm-24-15h11v7h7c1.157 4.575-.51 7.242-5 8-.886.825-1.219 1.825-1 3-11.929.358-11.929 1.358 0 3l1 2a43.123 43.123 0 01-13 1v-24zm13 2c3.56 1.783 3.56 2.783 0 3v-3zm3 14c2.556-.368 4.556.465 6 2.5-2.998 8.388-5.665 8.388-8 0 .556-1.011 1.222-1.844 2-2.5z"
        opacity={0.572}
      />
      <Path
        d="M8.5 13.5c4.055-.324 8.055.01 12 1l-6 1c-2.452-.04-4.452-.706-6-2z"
        opacity={0.6}
      />
      <Path
        d="M8.5 17.5c2.747-.313 5.414.02 8 1l-4 1c-1.833-.085-3.166-.752-4-2z"
        opacity={0.585}
      />
    </Svg>
  )
}

export default PrivacyPolicy