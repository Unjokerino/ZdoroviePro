import React from "react";
import { View, Text } from "react-native";
import { MAIN_URL, SCREEN_HEIGHT } from "../../constants";
import Button from "../Button";
import * as Animatable from "react-native-animatable";
import { Video } from "expo-av";
import styles from "./styles";
import { Category } from "../../types/store/tests";

export default function CategoryCard({
  category,
  onPress,
}: {
  category: Category;
  onPress: () => void;
}) {
  const renderContent = () => {
    switch ("Video") {
      case "Image":
        return (
          <Animatable.Image
            animation="bounceIn"
            style={{ flex: 1 }}
            resizeMode="contain"
            source={{
              uri: `${MAIN_URL}/TestIcons/${category?.icon}.png`,
            }}
          />
        );
      case "Video":
        return (
          <Video
            style={{
              width: "100%",
              height: "100%",
              flex: 1,
              transform: [{ scale: 1.3 }],
            }}
            source={{
              uri: `${MAIN_URL}/TestIcons/${category?.icon}.mp4`,
            }}
            useNativeControls={false}
            resizeMode="cover"
            shouldPlay
            isLooping
          />
        );

      default:
        return <View />;
    }
  };
  return (
    <View
      style={{
        borderRadius: 30,
        backgroundColor: "#6360FF",
        height: SCREEN_HEIGHT * 0.6,
        width: "100%",
      }}
    >
      <Text style={styles.categoryText}>{category?.text}</Text>

      <View
        style={{
          paddingLeft: 43,
          paddingRight: 17,
          flex: 1,
          overflow: "hidden",
        }}
      >
        {renderContent()}
      </View>

      <Button
        title="Далее"
        textColor="#6360FF"
        backgroundColor="#fff"
        style={{ marginVertical: 22, marginHorizontal: 35 }}
        mode="contained"
        onPress={onPress}
      />
    </View>
  );
}