import React from "react";
import Svg, { Path } from "react-native-svg";

const LockIcon = ({ color = "#6360FF" }) => (
  <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.16675 9.99998C3.70651 9.99998 3.33341 10.3731 3.33341 10.8333V16.6666C3.33341 17.1269 3.70651 17.5 4.16675 17.5H15.8334C16.2937 17.5 16.6667 17.1269 16.6667 16.6666V10.8333C16.6667 10.3731 16.2937 9.99998 15.8334 9.99998H4.16675ZM1.66675 10.8333C1.66675 9.4526 2.78604 8.33331 4.16675 8.33331H15.8334C17.2141 8.33331 18.3334 9.4526 18.3334 10.8333V16.6666C18.3334 18.0474 17.2141 19.1666 15.8334 19.1666H4.16675C2.78604 19.1666 1.66675 18.0474 1.66675 16.6666V10.8333Z"
      fill={color}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 2.49998C9.11594 2.49998 8.2681 2.85117 7.64298 3.47629C7.01786 4.10141 6.66667 4.94926 6.66667 5.83331V9.16665C6.66667 9.62688 6.29357 9.99998 5.83333 9.99998C5.3731 9.99998 5 9.62688 5 9.16665V5.83331C5 4.50723 5.52678 3.23546 6.46447 2.29778C7.40215 1.3601 8.67392 0.833313 10 0.833313C11.3261 0.833313 12.5979 1.3601 13.5355 2.29778C14.4732 3.23546 15 4.50723 15 5.83331V9.16665C15 9.62688 14.6269 9.99998 14.1667 9.99998C13.7064 9.99998 13.3333 9.62688 13.3333 9.16665V5.83331C13.3333 4.94926 12.9821 4.10141 12.357 3.47629C11.7319 2.85117 10.8841 2.49998 10 2.49998Z"
      fill={color}
    />
  </Svg>
);

export default LockIcon;
