import React, { useRef, useState } from "react";
import { View, ScrollView, TextInput, StyleSheet } from "react-native";
import {
  PROFESSIONAL_EXAMINATION_SCREEN,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
} from "../../constants";
import { Text } from "../../components/Themed";
import * as Animatable from "react-native-animatable";
import Button from "../../components/Button";
import CustomLayout from "../../components/CustomLayout";
import { MaterialIcons } from "@expo/vector-icons";
import { typography } from "../../constants/Typography";

import RNPickerSelect from "react-native-picker-select";
import RadioButton from "../../components/RadioButton";

const clinics = [
  "ГАУЗ ГП №21 (студенческая)",
  "ГАУЗ ГП №1 (взрослая)",
  "ГАУЗ ГП №54 (детская)",
];

export default function ExaminationPreparationsScreen({ navigation }) {
  const scrollRef = useRef<ScrollView>(null);
  const [selectedValue, setSelectedValue] = useState(clinics[0]);
  const [snils, setSnils] = useState();
  const [oms, setOms] = useState();

  const [passport, setPassport] = useState();

  const [code, setCode] = useState();
  const [adress, setAdress] = useState();
  const [checked, setChecked] = useState(false);

  const renderCard = () => (
    <View
      style={{
        borderRadius: 30,
        backgroundColor: "#6360FF",
        height: SCREEN_HEIGHT * 0.6,
        width: "100%",
      }}
    >
      <Text
        style={{
          color: "white",
          alignSelf: "center",
          paddingTop: 46,
          paddingHorizontal: 20,
          textAlign: "center",
          fontSize: 20,
        }}
      >
        А теперь приглашаем тебя в поликлинику
      </Text>
      <Animatable.Image
        animation="bounceIn"
        style={{ flex: 1 }}
        resizeMode="contain"
        source={require("../../assets/images/DoctorCategory.png")}
      />
      <Button
        title="Далее"
        textColor="#6360FF"
        backgroundColor="#fff"
        style={{ marginVertical: 22, marginHorizontal: 35 }}
        mode="contained"
        onPress={() => {
          scrollRef.current?.scrollTo({ x: SCREEN_WIDTH });
        }}
      />
    </View>
  );
  return (
    <CustomLayout>
      <ScrollView
        scrollEnabled={false}
        showsHorizontalScrollIndicator={false}
        ref={scrollRef}
        style={styles.container}
        horizontal
        snapToInterval={SCREEN_WIDTH}
        pagingEnabled
      >
        <View style={[styles.page]}>{renderCard()}</View>
        <View style={[styles.page]}>
          <View
            style={{
              borderRadius: 30,
              backgroundColor: "#fff",
              height: SCREEN_HEIGHT * 0.6,
              width: "100%",
            }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                paddingHorizontal: 15,
              }}
            >
              <View
                style={{
                  borderWidth: 2,
                  height: 50,
                  borderColor: "#6360FF",
                  borderRadius: 10,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <RNPickerSelect
                  style={{ height: 50, flex: 1 }}
                  selectedValue={selectedValue}
                  onValueChange={setSelectedValue}
                  items={clinics.map((item) => ({ label: item, value: item }))}
                />
              </View>
              <View
                style={{
                  marginTop: 20,
                  borderRadius: 20,
                  backgroundColor: "#F1F1FA",
                  padding: 10,
                }}
              >
                <Text>{selectedValue}</Text>
                <Text>полная совместимость с приложением</Text>
              </View>
            </View>
            <Button
              title="Далее"
              textColor="#fff"
              backgroundColor="#6360FF"
              style={{ marginVertical: 22, marginHorizontal: 35 }}
              mode="contained"
              onPress={() => {
                scrollRef.current?.scrollTo({ x: SCREEN_WIDTH * 2 });
              }}
            />
          </View>
        </View>
        <View style={[styles.page]}>
          <View>
            <View style={styles.inputContainer}>
              <TextInput
                onChangeText={setSnils}
                value={snils || ""}
                placeholder="СНИЛС"
                style={styles.input}
              />
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                onChangeText={setOms}
                value={oms || ""}
                placeholder="Полис"
                style={styles.input}
              />
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                onChangeText={setPassport}
                value={passport || ""}
                placeholder="Паспорт"
                style={styles.input}
              />
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                onChangeText={setCode}
                value={code || ""}
                placeholder="Код подразделения"
                style={styles.input}
              />
            </View>
            <Text>Адрес фактического проживания:</Text>
            <View style={styles.searchContainer}>
              <TextInput
                onChangeText={setCode}
                value={code || ""}
                placeholder="Адрес фактического проживания"
                style={styles.input}
              />
              <MaterialIcons
                style={{
                  padding: 5,
                  margin: 5,
                  backgroundColor: "#7480FF",
                  borderRadius: 20,
                }}
                size={24}
                color="#fff"
                name="search"
              />
            </View>
            <View style={typography.row}>
              <RadioButton
                status={checked ? "checked" : "unchecked"}
                onPress={() => setChecked(!checked)}
              />
              <Text style={{ color: "#6360FF" }}>Заявление о прикреплении</Text>
            </View>
            <Button
              title="ДА, ВСЕ ВЕРНО"
              style={{ marginVertical: 22, marginHorizontal: 35 }}
              mode="contained"
              onPress={() => {
                navigation.replace(PROFESSIONAL_EXAMINATION_SCREEN);
              }}
            />
          </View>
        </View>
      </ScrollView>
    </CustomLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 64,
    flex: 1,
  },
  page: {
    flex: 1,
    paddingHorizontal: 25,
    width: SCREEN_WIDTH,
  },
  searchContainer: {
    borderRadius: 30,
    height: 40,
    backgroundColor: "#fff",
    marginVertical: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  inputContainer: {
    flexDirection: "row",
    backgroundColor: "white",
    paddingVertical: 17,
    paddingHorizontal: 15,
    borderRadius: 10,
    flex: 1,
    alignItems: "center",
    marginBottom: 20,
  },
  input: {
    flex: 1,
    marginLeft: 10,
  },
});
