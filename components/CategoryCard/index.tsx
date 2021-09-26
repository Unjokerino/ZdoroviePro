import React from "react";
import { View } from "react-native";
import { Text } from "../Themed";
import { IS_IOS, MAIN_URL, SCREEN_HEIGHT } from "../../constants";
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
    switch (category?.icon?.icon_type) {
      case "image":
        return (
          <Animatable.Image
            animation="bounceIn"
            style={{ flex: 1 }}
            resizeMode="contain"
            source={{
              uri: `${MAIN_URL}/TestIcons/${category?.icon?.name}.png`,
            }}
          />
        );
      case "video":
        return (
          <Video
            style={{
              width: "100%",
              height: "100%",
              flex: 1,
              transform: [{ scale: IS_IOS ? 1 : 1.3 }],
            }}
            source={{
              uri: `${MAIN_URL}/TestIcons/${category?.icon?.name}.mp4`,
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
        backgroundColor: IS_IOS ? "#6360FF" : "#6455fa",
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
