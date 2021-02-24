import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from "react-native";

import Icons from "../../assets/icons";

type Icon = "Google" | "Vk" | "Apple";

interface Props {
  icon: Icon;
  onPress: () => void;
}

export default function SocialButton({ icon, onPress }: Props) {
  const renderIcon = () => {
    const Icon = Icons[icon];
    return <Icon />;
  };
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      {renderIcon()}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 59,
    width: 59,
    borderRadius: 16,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
});
