import * as React from "react"
import Svg, { Path } from "react-native-svg"

export const BulletL =(props: any) =>{
  return (
    <Svg
      width={10}
      height={14}
      viewBox="0 0 10 14"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M2 2.09L7.683 7.2l-5.516 5.289"
        stroke={props.prop}
        strokeWidth={2}
        strokeLinecap="square"
      />
    </Svg>
  )
}


