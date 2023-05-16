import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Trash({color, size}: any) {
  return (
    <Svg
      width={size ? size : 14}
      height={size ? size : 14}
      viewBox="0 0 14 14"
      fill="none"
    >
      <Path
        d="M1.75 3.5h10.5M4.667 3.5V2.333a1.167 1.167 0 011.167-1.166h2.333a1.167 1.167 0 011.167 1.166V3.5m1.75 0v8.167a1.167 1.167 0 01-1.167 1.166H4.084a1.167 1.167 0 01-1.167-1.166V3.5h8.167zM5.833 6.417v3.5M8.167 6.417v3.5"
        stroke= {color ? color : "#FF9393"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default Trash
