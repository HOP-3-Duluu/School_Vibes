import * as React from "react"
import Svg, { Path } from "react-native-svg"

export const  Logout = (props) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="30.000000pt"
      height="30.000000pt"
      viewBox="0 0 30.000000 30.000000"
      {...props}
    >
      <Path
        d="M128 244c-28-15-56-54-39-54 5 0 11 7 15 15 9 24 70 49 101 41 100-25 100-167 0-192-31-8-92 17-101 41-4 8-10 15-15 15-18 0 12-40 41-55 92-48 192 34 160 131-21 64-100 92-162 58z"
        transform="matrix(.1 0 0 -.1 0 30)"
      />
      <Path
        d="M22 178c-15-15-15-41 0-56 17-17 33-15 18 3-11 13-2 15 74 15 51 0 86 4 86 10s-35 10-86 10c-76 0-85 2-74 15 15 18-1 20-18 3z"
        transform="matrix(.1 0 0 -.1 0 30)"
      />
    </Svg>
  )
}


