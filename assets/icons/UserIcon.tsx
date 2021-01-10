import React from "react";
import Svg, { Path } from "react-native-svg";

const UserIcon = ({ color = "black", size = "20" }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3.72039 12.8871C4.50179 12.1057 5.5616 11.6667 6.66667 11.6667H13.3333C14.4384 11.6667 15.4982 12.1057 16.2796 12.8871C17.061 13.6685 17.5 14.7283 17.5 15.8334V17.5C17.5 17.9603 17.1269 18.3334 16.6667 18.3334C16.2064 18.3334 15.8333 17.9603 15.8333 17.5V15.8334C15.8333 15.1703 15.5699 14.5344 15.1011 14.0656C14.6323 13.5967 13.9964 13.3334 13.3333 13.3334H6.66667C6.00363 13.3334 5.36774 13.5967 4.8989 14.0656C4.43006 14.5344 4.16667 15.1703 4.16667 15.8334V17.5C4.16667 17.9603 3.79357 18.3334 3.33333 18.3334C2.8731 18.3334 2.5 17.9603 2.5 17.5V15.8334C2.5 14.7283 2.93899 13.6685 3.72039 12.8871Z"
        fill={color}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2.5 17.4C2.5 16.8477 2.94772 16.4 3.5 16.4H16.5C17.0523 16.4 17.5 16.8477 17.5 17.4C17.5 17.9523 17.0523 18.4 16.5 18.4H3.5C2.94772 18.4 2.5 17.9523 2.5 17.4Z"
        fill={color}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.99997 3.33335C8.61926 3.33335 7.49997 4.45264 7.49997 5.83335C7.49997 7.21407 8.61926 8.33335 9.99997 8.33335C11.3807 8.33335 12.5 7.21407 12.5 5.83335C12.5 4.45264 11.3807 3.33335 9.99997 3.33335ZM5.83331 5.83335C5.83331 3.53217 7.69879 1.66669 9.99997 1.66669C12.3012 1.66669 14.1666 3.53217 14.1666 5.83335C14.1666 8.13454 12.3012 10 9.99997 10C7.69879 10 5.83331 8.13454 5.83331 5.83335Z"
        fill={color}
      />
    </Svg>
  );
};
export default React.memo(UserIcon);