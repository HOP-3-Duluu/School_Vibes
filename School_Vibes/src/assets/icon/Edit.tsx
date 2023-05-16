import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Edit({color, size}: any) {
  return (
    <Svg
      width={size ? size : 14}
      height={size ? size : 14}
      viewBox="0 0 14 14"
      fill="none"
    >
      <Path
        d="M8.167 1.167L10.5 3.5 4.083 9.917H1.75V7.583l6.417-6.416zM1.75 12.833h10.5"
        stroke={color ? color : "#8ECAE6"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default Edit
