import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { Modal, Portal, Title } from "react-native-paper";
import Button from "../../components/Button";

export default function DetailedGoalScreen(props) {
  const { params } = props.route;
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  return (
    <ScrollView>
      <Image
        style={{ height: 300, width: "100%" }}
        resizeMode="stretch"
        source={params?.background}
      />
      <View
        style={{
          marginTop: -20,
          backgroundColor: "white",
          marginHorizontal: 50,
          borderRadius: 10,
          alignItems: "center",
        }}
      >
        <Title>День 1</Title>
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
          <Text style={{ fontWeight: "bold", fontSize: 34 }}>0%</Text>
        </View>
        <Button
          onPress={showModal}
          style={{ width: "100%" }}
          backgroundColor="#FF8181"
          textColor="#fff"
          title={params.buttonText}
        />
      </View>
      <TouchableOpacity
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
          <TouchableOpacity onPress={hideModal}>
            <Text>Закурить и сбросить таймер</Text>
          </TouchableOpacity>
        </Modal>
      </Portal>
    </ScrollView>
  );
}
