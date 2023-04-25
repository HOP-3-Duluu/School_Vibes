import * as React from "react"
import Svg, { Path } from "react-native-svg"

export const Plus = (props) => {
  return (
    <Svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M8 3.333v9.334M3.333 8h9.334"
        stroke={props.prop}
        strokeWidth={1.67}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default Plus
