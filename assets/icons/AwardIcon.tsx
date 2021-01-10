import React from "react";
import { View } from "react-native";
import Svg, { G, Path, Defs, ClipPath, Rect } from "react-native-svg";

const Award = ({ color = "black" }) => {
  return (
    <View>
      <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <G clipPath="url(#clip0)">
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.99997 1.66667C7.23855 1.66667 4.99997 3.90524 4.99997 6.66667C4.99997 9.42809 7.23855 11.6667 9.99997 11.6667C12.7614 11.6667 15 9.42809 15 6.66667C15 3.90524 12.7614 1.66667 9.99997 1.66667ZM3.33331 6.66667C3.33331 2.98477 6.31807 0 9.99997 0C13.6819 0 16.6666 2.98477 16.6666 6.66667C16.6666 10.3486 13.6819 13.3333 9.99997 13.3333C6.31807 13.3333 3.33331 10.3486 3.33331 6.66667Z"
            fill={color}
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.0487 10.7406C13.505 10.68 13.9239 11.0008 13.9844 11.4571L14.9928 19.0571C15.0348 19.3743 14.8916 19.6875 14.6241 19.8632C14.3567 20.0389 14.0123 20.0459 13.7379 19.8813L10 17.6385L6.26208 19.8813C5.98768 20.0459 5.64325 20.0389 5.3758 19.8632C5.10835 19.6875 4.96512 19.3742 5.00725 19.057L6.01559 11.4653C6.07618 11.0091 6.49515 10.6883 6.95138 10.7489C7.40762 10.8095 7.72834 11.2285 7.66774 11.6847L6.88703 17.5626L9.57125 15.9521C9.83515 15.7938 10.1648 15.7938 10.4287 15.9521L13.1132 17.5628L12.3322 11.6763C12.2717 11.22 12.5925 10.8011 13.0487 10.7406Z"
            fill={color}
          />
        </G>
        <Defs>
          <ClipPath id="clip0">
            <Rect width="20" height="20" fill="white" />
          </ClipPath>
        </Defs>
      </Svg>
    </View>
  );
};

export default React.memo(Award);
