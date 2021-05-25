import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { Button, IconButton, Modal, Portal, Title } from "react-native-paper";
import { Colors, GOAL_INFO } from "../../constants";

export default function GoalDescription(props) {
  const { params } = props.route;

  const navigation = useNavigation();
  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <View style={{ flexDirection: "row" }}>
          <IconButton
            onPress={() => navigation.goBack()}
            icon="arrow-left"
            animated
            size={32}
            color="#fff"
          />
          <View style={{ flex: 1 }}>
            <Text style={styles.text}>Цель</Text>
            <Title style={[styles.text]}>{params?.title}</Title>
          </View>
        </View>
        <View style={{ flexDirection: "row", marginTop: 16 }}>
          <Text style={[styles.badge, { backgroundColor: "#4DD0E1" }]}>
            Период: {params.duration} дней
          </Text>
          <TouchableOpacity onPress={showModal}>
            <Text style={[styles.badge, { backgroundColor: "#FF8181" }]}>
              Как это работает?
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.container}>
        <Button
          onPress={() => navigation.replace(GOAL_INFO, params)}
          style={{
            marginHorizontal: 20,
            paddingVertical: 10,
            position: "absolute",
            bottom: 20,
            paddingHorizontal: 30,
            alignSelf: "center",
            zIndex: 9,
          }}
          mode="contained"
        >
          Начать прохождение
        </Button>
        <ScrollView
          contentContainerStyle={{
            paddingHorizontal: 22,
            paddingVertical: 50,
          }}
        >
          <View
            style={{
              backgroundColor: "#6360FF",
              width: 3,
              position: "absolute",
              top: 94,
              bottom: 0,
              left: 45,
            }}
          />
          {[1, 2, 3, 4].map((item) => (
            <View style={{ flexDirection: "row", marginBottom: 21 }}>
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
                  backgroundColor: "#fff",
                  marginHorizontal: 8,
                  paddingHorizontal: 16,
                  borderRadius: 30,
                  borderBottomLeftRadius: 0,
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Title style={{ maxWidth: 200 }}>
                    Отмечаем свое состояние
                  </Title>
                  <Title>14:00</Title>
                </View>
                <Text style={{ paddingVertical: 10 }}>
                  Тут описание задачи которое нужно будет выполнить
                </Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
      <Portal>
        <Modal
          contentContainerStyle={{
            backgroundColor: Colors.light.header,
            position: "absolute",
            bottom: 0,

            width: "100%",
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            alignItems: "center",
          }}
          visible={visible}
          onDismiss={hideModal}
        >
          <View
            style={{
              backgroundColor: "#fff",
              width: 80,
              height: 80,
              borderRadius: 14,
              marginTop: -40,
            }}
          >
            <Image
              style={{ marginTop: -30 }}
              source={require("../../assets/images/plant.png")}
            />
          </View>
          <Text style={{ color: "#fff", marginTop: 30 }}>Цель проекта:</Text>
          <Text
            style={{
              paddingHorizontal: 30,
              color: "#fff",
              paddingVertical: 20,
            }}
          >
            {params.howItWorks}
          </Text>
        </Modal>
      </Portal>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.light.header,
  },
  badge: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    color: "#fff",
    paddingVertical: 8,
    borderRadius: 8,
    marginLeft: 18,
  },
  header: {
    paddingTop: 50,
    height: 230,
    width: "100%",
    backgroundColor: Colors.light.header,
  },
  container: {
    borderTopRightRadius: 30,
    overflow: "hidden",
    borderTopLeftRadius: 66,
    flex: 1,
    width: "100%",
    backgroundColor: Colors.light.background,
  },
  text: {
    color: "#ffffff",
  },
});
