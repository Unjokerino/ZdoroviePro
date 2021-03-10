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
import { Video } from "expo-av";

export default function CongratulationsScreen({
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
          source={require("../../assets/videos/bronze.mp4")}
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
              }}
            >
              Ознакомтесь
            </Title>
            <TouchableOpacity onPress={() => alert("")}>
              <Title
                style={{
                  textAlign: "center",
                  textDecorationLine: "underline",
                }}
              >
                с результатами тестирования
              </Title>
            </TouchableOpacity>
          </View>
          <View
            style={[
              typography.row,
              { marginVertical: 20, paddingHorizontal: 30 },
            ]}
          >
            <Checkbox color="#6360FF" status="checked" />
            <Text
              style={{
                color: "#6360FF",
                textAlign: "left",
              }}
            >
              С результатами анкетирования ознакомлен
            </Text>
          </View>
        </View>
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
              source={require("../../assets/images/stetoscope.png")}
            />
          </View>
          <Title
            style={{
              textAlign: "center",
            }}
          >
            Диспансеризация и профилактические осмотры
          </Title>
          <Text
            style={{
              color: "#1C1939",
              textAlign: "center",
              marginVertical: 20,
              paddingHorizontal: 30,
            }}
          >
            Получите направление online на диспансеризацию и профилактические
            осмотры
          </Text>
          <Button
            style={{ marginHorizontal: 30, marginBottom: 20 }}
            title="Получить направление"
            mode="contained"
            onPress={goToExamScreen}
          />
        </View>
      </ScrollView>
    </View>
  );
}
