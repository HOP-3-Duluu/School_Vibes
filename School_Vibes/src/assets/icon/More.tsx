import * as React from "react"
import Svg, { Circle } from "react-native-svg"

function MoreIcon({width, height, color}: any) {
  return (
    <Svg
      width={width ? width : 4}
      height={height ? height : 25}
      viewBox="0 0 8 24"
      fill="none"
    >
      <Circle cx={4} cy={4} r={4} fill={color ? color : '#fff'} />
      <Circle cx={4} cy={20} r={4} fill={color ? color : '#fff'} />
    </Svg>
  )
}

export default MoreIcon
