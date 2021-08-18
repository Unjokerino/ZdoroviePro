import React, { useRef, useState } from "react";
import { View, ScrollView } from "react-native";
import { Text } from "../../components/Themed";
import { Picker } from "@react-native-picker/picker";
import { Button, Caption, Divider, Title, TextInput } from "react-native-paper";
import CustomLayout from "../../components/CustomLayout";
import { SCREEN_WIDTH } from "../../constants";
import styles from "./styles";
import Icons from "../../assets/icons";
import { typography } from "../../constants/Typography";

export default function ExaminationScreen({ navigation }) {
  const scrollRef = useRef(null);
  const nextQuestion = () => {
    scrollRef.current?.scrollTo({ x: SCREEN_WIDTH });
  };
  const prevQuestion = () => {
    scrollRef.current?.scrollTo({ x: 0 });
  };
  const submit = () => {
    navigation.goBack();
  };

  const [clinicName, setClinicName] = useState("");
  return (
    <CustomLayout openDrawer={navigation.openDrawer}>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={[styles.caption]}>
            Удаленная запись на диспансеризацию или профосмотры
          </Text>
        </View>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
          scrollEnabled={false}
          horizontal={true}
          ref={scrollRef}
          style={styles.scrollView}
        >
          <View style={styles.cardWrapper}>
            <View style={styles.card}>
              <Caption>Шаг 1</Caption>
              <Title>Выберите поликлинку</Title>
              <Divider style={{ borderStyle: "dashed", height: 1, flex: 1 }} />
              <Picker
                selectedValue={clinicName}
                onValueChange={(value) => {
                  setClinicName(value);
                }}
                style={styles.picker}
              >
                <Picker.Item label="Поликлиника 1" value="Поликлиника 1" />
                <Picker.Item label="Поликлиника 2" value="Поликлиника 2" />
              </Picker>
              <View style={styles.tipContainer}>
                <Text style={styles.tip}>
                  Мы рекомендуем Вам поликлинику №125
                </Text>
                <Text style={styles.tip}>
                  Полная совместимость с приложением
                </Text>
              </View>
              <Button
                onPress={nextQuestion}
                style={styles.primaryButton}
                mode="contained"
              >
                Далее
              </Button>
            </View>
          </View>
          <View style={styles.cardWrapper}>
            <View style={styles.card}>
              <Caption>Шаг 2</Caption>
              <Title>Проверьте Ваши данные</Title>
            </View>
            <View style={typography.row}>
              <Icons.UserIcon />
              <Text style={[styles.caption]}>Персональная инфомация</Text>
            </View>
            <View style={styles.card}>
              <View>
                <View style={[typography.row, styles.personalInfo]}>
                  <Title>Ваш рост</Title>
                  <TextInput mode="outlined" style={styles.textInput} />
                </View>
                <View style={[typography.row, styles.personalInfo]}>
                  <Title>Вес</Title>
                  <TextInput mode="outlined" style={styles.textInput} />
                </View>
                <View style={[styles.personalInfo]}>
                  <Title>Выбранная поликлиника</Title>
                  <Text>{clinicName}</Text>
                </View>
              </View>
            </View>
            <View style={styles.submitContainer}>
              <Button onPress={submit} style={styles.submit} mode="contained">
                Да, все верно
              </Button>
              <Button onPress={prevQuestion} style={styles.goBack}>
                ИЗМЕНИТЬ МОЙ ВЫБОР
              </Button>
            </View>
          </View>
        </ScrollView>
      </View>
    </CustomLayout>
  );
}
