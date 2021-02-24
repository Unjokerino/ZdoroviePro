import React, { ReactChild } from "react";
import {
  ImageBackground,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  ImageSourcePropType,
} from "react-native";
import { Title } from "react-native-paper";
import styles from "./styles";
import { IS_IOS } from "../../constants";

const keyboardBehavior = IS_IOS ? "padding" : "height";

interface Props {
  children: JSX.Element;
  image: Image;
  title?: string;
}

export default function CustomSplash({ children, image, title }: Props) {
  return (
    <KeyboardAvoidingView behavior={keyboardBehavior} style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/backgroundLines.png")}
        style={styles.container}
      >
        {image}
        <Title style={styles.title}>{title}</Title>

        <ScrollView style={styles.wrapper}>{children}</ScrollView>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
}
