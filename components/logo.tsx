import * as React from "react"
import Svg, { Defs, Path, G, Mask, Use } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: title, filter */
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={57}
    height={40}
    {...props}
  >
    <Defs>
      <Path id="b" d="M0 .205h31.627v39.77H0z" />
    </Defs>
    <G
      fill="none"
      fillRule="evenodd"
      filter="url(#a)"
      transform="translate(-20 -33)"
    >
      <G transform="translate(20 33)">
        <Mask id="c" fill="#fff">
          <Use xlinkHref="#b" />
        </Mask>
        <Path
          fill="#fff"
          d="M31.627.205H21.084L0 21.097v8.457h21.084V40h10.543V21.097H10.542L31.627.205"
          mask="url(#c)"
        />
      </G>
      <Path
        fill="#fff"
        d="M55.349 43.233 65.58 33H55.35v10.233M76.744 43.542V33H66.512v10.542L56.279 54.085v10.543h10.233V54.085l10.232-10.543M76.744 54.395 66.512 64.628h10.232V54.395"
      />
    </G>
  </Svg>
)
export default SvgComponent
