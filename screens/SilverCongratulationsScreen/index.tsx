import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { View, Text, Image } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { Title, Checkbox } from "react-native-paper";
import Button from "../../components/Button";
import {
  CONGRATULATIONS_SCREEN,
  PROFESSIONAL_EXAMINATION_SCREEN,
  PROFESSIONAL_PREPARATIONS_SCREEN,
} from "../../constants";
import { typography } from "../../constants/Typography";
import { RootStackParamList } from "../../types";
import * as Animatable from "react-native-animatable";

export default function SilverCongratulationsScreen({
  navigation,
}: {
  navigation: StackNavigationProp<
    RootStackParamList,
    typeof CONGRATULATIONS_SCREEN
  >;
}) {
  const goToExamScreen = () => {
    navigation.replace(PROFESSIONAL_PREPARATIONS_SCREEN);
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
        }}
      >
        <Animatable.Image
          animation="bounceIn"
          style={{ width: 201, height: 221 }}
          resizeMode="contain"
          source={require("../../assets/images/Silver.png")}
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
        <Text style={{ padding: 20, textAlign: "center", marginBottom: 20 }}>
          Теперь ты можешь грамотно управлять своим здоровьем и получить
          персональные рекомендации
        </Text>
        <Button
          style={{ marginHorizontal: 30, marginBottom: 20 }}
          textColor="white"
          backgroundColor="#6360FF"
          title="Пройди углубленный скринииг"
        />
      </ScrollView>
    </View>
  );
}
