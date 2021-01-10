import React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const PieChart = ({ color = "black", size = "20" }) => (
  <Svg width="21" height="21" viewBox="0 0 21 21" fill="none">
    <Path
      d="M7.688 3H14.312L19 7.688V14.312L14.312 19H7.688L3 14.312V7.688L7.688 3Z"
      stroke={color}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M11 7.8V11"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Circle cx="11" cy="14" r="1" fill={color} />
  </Svg>
);
export default React.memo(PieChart);
