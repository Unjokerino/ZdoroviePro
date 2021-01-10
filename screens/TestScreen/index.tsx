import React from "react";
import { View, Text } from "react-native";
import { Button, Title } from "react-native-paper";
import CustomLayout from "../../components/CustomLayout";
import Icons from "../../assets/icons";
import { Colors } from "../../constants";
import Progress from "../../components/Progress";

export default function TestScreen() {
  return (
    <CustomLayout>
      <View style={{ padding: 16, flex: 1 }}>
        <Title>Прохождение анкетирования</Title>
        <View
          style={{
            flex: 1,
            backgroundColor: "white",
            alignItems: "center",
            padding: 33,
            marginTop: 33,
            borderRadius: 30,
          }}
        >
          <View
            style={{
              width: 65,
              height: 65,
              elevation: 1,
              backgroundColor: Colors.light.tint,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 25,
            }}
          >
            <Icons.Alcohol color="white" />
          </View>
          <Title style={{ textAlign: "center", marginVertical: 15 }}>
            Возникало ли у Вас ощущение того, что Вам следует сократить
            употребление спиртных напитков?
          </Title>
          <Text>7 из 10 вопросов</Text>
          <Button style={{ marginVertical: 15 }} mode="contained">
            Да
          </Button>
          <Button
            style={{ borderColor: Colors.light.background }}
            mode="outlined"
          >
            Нет
          </Button>
        </View>
        <Title style={{ marginTop: 30 }}>75%</Title>
        <Progress value={75} />
      </View>
    </CustomLayout>
  );
}
