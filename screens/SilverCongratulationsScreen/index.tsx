import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { View, Image } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { Checkbox } from "react-native-paper";
import Button from "../../components/Button";
import {
  CONGRATULATIONS_SCREEN,
  PROFESSIONAL_EXAMINATION_SCREEN,
  PROFESSIONAL_PREPARATIONS_SCREEN,
  SECOND_PART_DESCRIPTION_SCREEN,
} from "../../constants";
import { typography } from "../../constants/Typography";
import { RootStackParamList } from "../../types";
import * as Animatable from "react-native-animatable";
import { Text, Title } from "../../components/Themed";
import { Video } from "expo-av";

export default function SilverCongratulationsScreen({
  navigation,
}: {
  navigation: StackNavigationProp<
    RootStackParamList,
    typeof CONGRATULATIONS_SCREEN
  >;
}) {
  const goToSecondPart = () => {
    navigation.replace(SECOND_PART_DESCRIPTION_SCREEN);
  };

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          backgroundColor: "#6360FF",
          flex: 0.7,
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <Video
          style={{
            width: 201,
            height: 221,
            flex: 1,
            transform: [{ scale: 1.8 }],
          }}
          source={require("../../assets/videos/silver.mp4")}
          useNativeControls={false}
          resizeMode="cover"
          shouldPlay
          isLooping
        />
      </View>
      <ScrollView style={{ flex: 1 }}>
        <View
          style={{
            backgroundColor: "white",
            margin: 15,
            borderRadius: 10,
          }}
        >
          <View
            style={{
              backgroundColor: "#FF8181",
              width: 54,
              padding: 5,
              alignSelf: "center",
              marginTop: 25,
              height: 54,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 15,
              overflow: "hidden",
            }}
          >
            <Image
              style={{
                width: 35,
                height: 45,
              }}
              resizeMode="center"
              source={require("../../assets/images/ThumbUp.png")}
            />
          </View>
          <View
            style={[
              typography.row,
              { flexWrap: "wrap", justifyContent: "center" },
            ]}
          >
            <Title
              style={{
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              Ваша группа здоровья II
            </Title>
          </View>
          <View
            style={[
              typography.row,
              { marginVertical: 20, paddingHorizontal: 30 },
            ]}
          >
            <Text
              style={{
                color: "black",
                textAlign: "center",
                fontSize: 14,
              }}
            >
              не установлены хронические неинфекционные заболевания, а именно:
              сердечно-сосудистые заболевания (инсульт и инфаркт), рак,
              хронические респираторные заболевания (хроническая обструктивная
              болезнь легких, астма) диабет, отсутствуют факторы риска развития
              этих заболеваний. Вы не нуждаетесьв диспансерном наблюдении
            </Text>
          </View>
        </View>
        <Text
          style={{
            padding: 20,
            textAlign: "center",
            marginBottom: 20,
            fontSize: 16,
          }}
        >
          Теперь ты можешь грамотно управлять своим здоровьем и получить
          персональные рекомендации
        </Text>
        <Button
          style={{ marginHorizontal: 30, marginBottom: 20 }}
          textColor="white"
          backgroundColor="#6360FF"
          title="Пройди углубленный скринииг"
          onPress={goToSecondPart}
        />
      </ScrollView>
    </View>
  );
}
