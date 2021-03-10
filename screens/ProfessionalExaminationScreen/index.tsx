import React, { useEffect, useRef, useState } from "react";
import { View, Image, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Checkbox, IconButton, Subheading, Title } from "react-native-paper";
import CustomLayout from "../../components/CustomLayout";
import { SCREEN_WIDTH, SILVER_CONGRATULATIONS_SCREEN } from "../../constants";
import { typography } from "../../constants/Typography";
import styles from "./styles";
import { Text } from "../../components/Themed";

const doctorAppointments = [
  {
    title: "Уровень общего холестерина и глюкозы в крови",
    doctorName: "Врач Юлия Никифоровна",
    room: "107, 320 кабинет",
    workHours: "c 8:00 до 11:00",
  },
  {
    title: "Флюорографическое обследование",
    doctorName: "Врач Юлия Никифоровна",
    room: "104 кабинет",
    workHours: "c 9:00 до 25:00",
  },
  {
    title: "Внутриглазное давление",
    doctorName: "Врач Юлия Никифоровна",
    room: "233 кабинет",
    workHours: "c 9:00 до 25:00",
  },
  {
    title: "Электрокардиография",
    doctorName: "Врач Юлия Никифоровна",
    room: "104 кабинет",
    workHours: "c 9:00 до 25:00",
  },
  {
    title: "Врач-гинеколог или акушерка Мазок на цитологию ",
    doctorName: "Врач Юлия Никифоровна",
    room: "104 кабинет",
    workHours: "c 9:00 до 25:00",
  },
  {
    title: "Стоматолог",
    doctorName: "Врач Юлия Никифоровна",
    room: "104 кабинет",
    workHours: "c 9:00 до 25:00",
  },
  {
    title: `Артериальное давление Относительный сердечно-сосудистый риск Состояние ротовой полости, кожных покровов, щитовидной железы, лимфатических узлов. Консультация терапевта Краткое профилактическое консультирование`,
    description: "Краткое профилактическое консультирование",
    doctorName: "Врач Юлия Никифоровна",
    room: "104 кабинет",
    workHours: "c 9:00 до 25:00",
  },
];

export default function ProfessionalExaminationScreen({ navigation }) {
  const scrollRef = useRef<ScrollView>(null);
  const [checked, setChecked] = useState<number[]>([]);

  const changeChecked = (index: number) => {
    if (checked.includes(index)) {
      setChecked(checked.filter((el) => el !== index));
    } else {
      setChecked([...checked, index]);
    }
  };

  const [currentCategory, setCurrentCategory] = useState(0);

  const InfoIcon = ({
    icon = "check",
    size = 12,
    backgroundColor = "white",
  }) => {
    return (
      <View style={[styles.iconContainer, { backgroundColor }]}>
        <IconButton size={size} color="white" icon={icon} />
      </View>
    );
  };

  useEffect(() => {
    if (checked.length === doctorAppointments.length) {
      navigation.navigate(SILVER_CONGRATULATIONS_SCREEN);
    }
  }, [checked]);

  return (
    <CustomLayout openDrawer={navigation.openDrawer}>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text
            style={{
              color: "#6360FF",
              fontSize: 20,
              marginBottom: 15,
              fontWeight: "bold",
            }}
          >
            Медицинские обследования для Вашего возраста и пола
          </Text>
          <Text style={[styles.screenTitle]}>Активность</Text>
          <View style={[typography.row, styles.infoContainer]}>
            <View style={styles.card}>
              <View style={[typography.row, styles.info]}>
                <InfoIcon icon="check" size={20} backgroundColor="#4DD0E1" />
                <Subheading>Врачей пройдено</Subheading>
                <Title style={styles.infoCounter}>
                  {
                    doctorAppointments.filter((_, i) => checked.includes(i))
                      .length
                  }
                </Title>
              </View>
            </View>
          </View>
          <View style={[typography.row, styles.menuContainer]}>
            {["Активно", "Пройдено"].map((category, index) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    scrollRef.current?.scrollTo({ x: index * SCREEN_WIDTH });
                    setCurrentCategory(index);
                  }}
                >
                  <Text
                    style={
                      currentCategory === index ? { fontWeight: "bold" } : {}
                    }
                  >
                    {category}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
          <ScrollView
            scrollEnabled={false}
            showsHorizontalScrollIndicator={false}
            ref={scrollRef}
            style={styles.container}
            horizontal
            snapToInterval={SCREEN_WIDTH}
            pagingEnabled
          >
            <View style={{ flex: 1 }}>
              {doctorAppointments.map(
                (appointment, index) =>
                  !checked.includes(index) && (
                    <View
                      key={index}
                      style={[typography.row, styles.appointmentCard]}
                    >
                      <View style={styles.appointmentImageContainer}>
                        <Image
                          resizeMode="contain"
                          style={styles.appointmentImage}
                          source={require("../../assets/images/lungs.png")}
                        />
                      </View>
                      <View style={styles.appointmentInfoContainer}>
                        <Text style={{ textAlign: "left" }}>
                          {appointment.title}
                        </Text>
                        {appointment?.description && (
                          <Text style={styles.title}>
                            {appointment?.description}
                          </Text>
                        )}
                        <View style={[]}>
                          <View style={[typography.row, { flex: 1 }]}>
                            <IconButton
                              size={12}
                              style={{ margin: 0, padding: 0 }}
                              color="#4DD0E1"
                              icon="star"
                            />
                            <Text style={styles.title}>{appointment.room}</Text>
                          </View>
                          <Text style={styles.caption}>
                            • {appointment.workHours}
                          </Text>
                        </View>
                      </View>
                      <Checkbox
                        onPress={() => changeChecked(index)}
                        status={
                          checked.includes(index) ? "checked" : "unchecked"
                        }
                      />
                    </View>
                  )
              )}
            </View>
            <View style={{ flex: 1 }}>
              {doctorAppointments.map(
                (appointment, index) =>
                  checked.includes(index) && (
                    <View
                      key={index}
                      style={[typography.row, styles.appointmentCard]}
                    >
                      <View style={styles.appointmentImageContainer}>
                        <Image
                          resizeMode="contain"
                          style={styles.appointmentImage}
                          source={require("../../assets/images/lungs.png")}
                        />
                      </View>
                      <View style={styles.appointmentInfoContainer}>
                        <Text style={{ textAlign: "left" }}>
                          {appointment.title}
                        </Text>
                        {appointment?.description && (
                          <Text style={styles.title}>
                            {appointment?.description}
                          </Text>
                        )}
                        <View style={[]}>
                          <View style={[typography.row, { flex: 1 }]}>
                            <IconButton
                              size={12}
                              style={{ margin: 0, padding: 0 }}
                              color="#4DD0E1"
                              icon="star"
                            />
                            <Text style={styles.title}>{appointment.room}</Text>
                          </View>
                          <Text style={styles.caption}>
                            • {appointment.workHours}
                          </Text>
                        </View>
                      </View>
                      <Checkbox
                        onPress={() => changeChecked(index)}
                        status={
                          checked.includes(index) ? "checked" : "unchecked"
                        }
                      />
                    </View>
                  )
              )}
            </View>
          </ScrollView>
        </View>
      </View>
    </CustomLayout>
  );
}
