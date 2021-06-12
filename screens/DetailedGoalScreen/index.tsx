import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from "react-native";
import { Modal, Portal, Title } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/Button";
import { RATING_MODAL } from "../../constants";
import { RootState } from "../../types/store";
//@ts-ignore
import { getUserTask } from "../../store/actions";

export default function DetailedGoalScreen() {
  const [visible, setVisible] = React.useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const showModal = () => setVisible(true);

  const hideModal = () => setVisible(false);
  const {
    authReducer: { identity },
    goalsReducer: { currentGoal },
  } = useSelector((state: RootState) => state);

  const { complete_days, duration } = currentGoal?.purpose;

  const closeGoal = () => {
    hideModal();
  };

  const leaveRating = () => {
    navigation.navigate(RATING_MODAL);
  };

  useEffect(() => {
    dispatch(getUserTask());
  }, []);

  const threes = [
    [
      {
        source: require("../../assets/images/smokeGoal/11.png"),
      },
      {
        source: require("../../assets/images/smokeGoal/12.png"),
      },
      {
        source: require("../../assets/images/smokeGoal/13.png"),
      },
      {
        source: require("../../assets/images/smokeGoal/14.png"),
      },
      {
        source: require("../../assets/images/smokeGoal/15.png"),
      },
      {
        source: require("../../assets/images/smokeGoal/16.png"),
      },
      {
        source: require("../../assets/images/smokeGoal/17.png"),
      },
    ],
    [
      {
        source: require("../../assets/images/smokeGoal/21.png"),
      },
      {
        source: require("../../assets/images/smokeGoal/22.png"),
      },
      {
        source: require("../../assets/images/smokeGoal/23.png"),
      },
      {
        source: require("../../assets/images/smokeGoal/24.png"),
      },
      {
        source: require("../../assets/images/smokeGoal/25.png"),
      },
      {
        source: require("../../assets/images/smokeGoal/26.png"),
      },
      {
        source: require("../../assets/images/smokeGoal/27.png"),
      },
    ],
    [
      {
        source: require("../../assets/images/smokeGoal/31.png"),
      },
      {
        source: require("../../assets/images/smokeGoal/32.png"),
      },
      {
        source: require("../../assets/images/smokeGoal/33.png"),
      },
      {
        source: require("../../assets/images/smokeGoal/34.png"),
      },
      {
        source: require("../../assets/images/smokeGoal/35.png"),
      },
      {
        source: require("../../assets/images/smokeGoal/36.png"),
      },
      {
        source: require("../../assets/images/smokeGoal/37.png"),
      },
    ],
  ];
  const defaultImage = require("../../assets/images/smokeBackground.png");
  return (
    <ScrollView>
      <ImageBackground
        style={{
          height: 300,
          width: "100%",
          flexDirection: "row",
          alignItems: "flex-end",
        }}
        resizeMode="stretch"
        source={currentGoal?.background || defaultImage}
      >
        {threes.map((three, index) => {
          return (
            <Image
              style={{
                height: 200,
                width: 100,
                left: 10 + index * 25,
                bottom: 50 + index * 8,
              }}
              resizeMode="contain"
              source={three[0].source}
            />
          );
        })}
      </ImageBackground>
      <View
        style={{
          marginTop: -20,
          backgroundColor: "white",
          marginHorizontal: 50,
          borderRadius: 10,
          alignItems: "center",
        }}
      >
        <Title>День {complete_days}</Title>
        <Text style={{ fontWeight: "bold" }}>Каждый день я побеждаю</Text>
        <View
          style={{
            marginVertical: 20,
            width: 120,
            height: 120,
            borderRadius: 60,
            borderWidth: 10,
            justifyContent: "center",
            alignItems: "center",
            borderColor: "#CFD8DC",
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 34 }}>
            {Math.round((complete_days || 0 / duration) * 100)}%
          </Text>
        </View>
        <Button
          onPress={showModal}
          style={{ width: "100%" }}
          backgroundColor="#FF8181"
          textColor="#fff"
          title={"Хочу курить"}
        />
      </View>
      <TouchableOpacity
        onPress={leaveRating}
        style={{
          backgroundColor: "#fff",
          flexDirection: "row",
          paddingHorizontal: 18,
          paddingVertical: 14,
          marginHorizontal: 10,
          marginVertical: 10,
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: 12,
            height: 12,
            borderRadius: 6,
            marginRight: 10,
            backgroundColor: "#4DD0E1",
          }}
        />
        <Text>Расскажите о Ваших ошущениях сегодня</Text>
      </TouchableOpacity>
      <View>
        <Title style={{ marginHorizontal: 20 }}>Ход событий</Title>
        {[1, 2, 3, 4].map((item) => (
          <View
            style={{
              flexDirection: "row",
              marginBottom: 21,
              marginHorizontal: 20,
            }}
          >
            <View
              style={{
                marginTop: 30,
                backgroundColor: "#fff",
                width: 48,

                height: 48,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 24,
              }}
            >
              <View
                style={{
                  borderColor: "#6360FF",
                  borderWidth: 3,
                  width: 28,
                  height: 28,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 14,
                }}
              ></View>
            </View>
            <View
              style={{
                flexDirection: "row",
                marginHorizontal: 8,

                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Text style={{ flex: 1 }}>
                Отметили свое состояние и вырастили дуб
              </Text>
              <Text style={{ flex: 0.7, opacity: 0.8, alignSelf: "flex-end" }}>
                26/02 14:00 {"\n"} +20 балов
              </Text>
            </View>
          </View>
        ))}
      </View>
      <Portal>
        <Modal
          contentContainerStyle={{
            backgroundColor: "#fff",
            paddingBottom: 20,
            marginHorizontal: 20,
            alignItems: "center",
          }}
          visible={visible}
          onDismiss={hideModal}
        >
          <Image
            resizeMode="stretch"
            style={{ marginBottom: 20, width: "100%" }}
            source={require("../../assets/images/sky.png")}
          />
          <Title>Не сдавайся.</Title>
          <Text
            style={{
              paddingVertical: 36,
              paddingHorizontal: 20,
              textAlign: "center",
            }}
          >
            Тут какой нибудь важный текст о том почему не нанада сдаваться
          </Text>
          <TouchableOpacity onPress={hideModal}>
            <Text style={{ color: "#6360FF", fontWeight: "bold" }}>
              Я хочу продолжить
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={closeGoal}>
            <Text>Закурить и сбросить таймер</Text>
          </TouchableOpacity>
        </Modal>
      </Portal>
    </ScrollView>
  );
}
