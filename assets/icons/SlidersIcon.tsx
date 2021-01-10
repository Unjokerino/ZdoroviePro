import React from "react";
import Svg, { Path } from "react-native-svg";

const SliderIcon = ({ color = "black", size = "20" }) => (
  <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M3.33333 10.8333C3.79357 10.8333 4.16667 11.2064 4.16667 11.6666V17.5C4.16667 17.9602 3.79357 18.3333 3.33333 18.3333C2.8731 18.3333 2.5 17.9602 2.5 17.5V11.6666C2.5 11.2064 2.8731 10.8333 3.33333 10.8333Z"
      fill={color}
    />
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M3.33333 1.66669C3.79357 1.66669 4.16667 2.03978 4.16667 2.50002V8.33335C4.16667 8.79359 3.79357 9.16669 3.33333 9.16669C2.8731 9.16669 2.5 8.79359 2.5 8.33335V2.50002C2.5 2.03978 2.8731 1.66669 3.33333 1.66669Z"
      fill={color}
    />
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M10 9.16669C10.4603 9.16669 10.8334 9.53978 10.8334 10V17.5C10.8334 17.9603 10.4603 18.3334 10 18.3334C9.53979 18.3334 9.16669 17.9603 9.16669 17.5V10C9.16669 9.53978 9.53979 9.16669 10 9.16669Z"
      fill={color}
    />
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M10 1.66669C10.4603 1.66669 10.8334 2.03978 10.8334 2.50002V6.66669C10.8334 7.12692 10.4603 7.50002 10 7.50002C9.53979 7.50002 9.16669 7.12692 9.16669 6.66669V2.50002C9.16669 2.03978 9.53979 1.66669 10 1.66669Z"
      fill={color}
    />
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M16.6666 12.5C17.1269 12.5 17.5 12.8731 17.5 13.3333V17.5C17.5 17.9602 17.1269 18.3333 16.6666 18.3333C16.2064 18.3333 15.8333 17.9602 15.8333 17.5V13.3333C15.8333 12.8731 16.2064 12.5 16.6666 12.5Z"
      fill={color}
    />
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M16.6666 1.66669C17.1269 1.66669 17.5 2.03978 17.5 2.50002V10C17.5 10.4603 17.1269 10.8334 16.6666 10.8334C16.2064 10.8334 15.8333 10.4603 15.8333 10V2.50002C15.8333 2.03978 16.2064 1.66669 16.6666 1.66669Z"
      fill={color}
    />
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M0 11.6666C0 11.2064 0.373096 10.8333 0.833333 10.8333H5.83333C6.29357 10.8333 6.66667 11.2064 6.66667 11.6666C6.66667 12.1269 6.29357 12.5 5.83333 12.5H0.833333C0.373096 12.5 0 12.1269 0 11.6666Z"
      fill={color}
    />
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M6.66669 6.66665C6.66669 6.20641 7.03979 5.83331 7.50003 5.83331H12.5C12.9603 5.83331 13.3334 6.20641 13.3334 6.66665C13.3334 7.12688 12.9603 7.49998 12.5 7.49998H7.50003C7.03979 7.49998 6.66669 7.12688 6.66669 6.66665Z"
      fill={color}
    />
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M13.3333 13.3333C13.3333 12.8731 13.7064 12.5 14.1666 12.5H19.1666C19.6269 12.5 20 12.8731 20 13.3333C20 13.7936 19.6269 14.1667 19.1666 14.1667H14.1666C13.7064 14.1667 13.3333 13.7936 13.3333 13.3333Z"
      fill={color}
    />
  </Svg>
);

export default React.memo(SliderIcon);
