import React from "react";
import { View, Text, Image } from "react-native";
import { Caption, IconButton, Subheading, Title } from "react-native-paper";
import CustomLayout from "../../components/CustomLayout";
import { typography } from "../../constants/Typography";
import styles from "./styles";

const doctorAppointments = [
  {
    title: "Флюорографическое обследование",
    doctorName: "Врач Юлия Никифоровна",
    room: "104 кабинет",
    workHours: "c 9:00 до 25:00",
  },
  {
    title: "Флюорографическое обследование",
    doctorName: "Врач Юлия Никифоровна",
    room: "104 кабинет",
    workHours: "c 9:00 до 25:00",
  },
  {
    title: "Флюорографическое обследование",
    doctorName: "Врач Юлия Никифоровна",
    room: "104 кабинет",
    workHours: "c 9:00 до 25:00",
  },
  {
    title: "Флюорографическое обследование",
    doctorName: "Врач Юлия Никифоровна",
    room: "104 кабинет",
    workHours: "c 9:00 до 25:00",
  },
  {
    title: "Флюорографическое обследование",
    doctorName: "Врач Юлия Никифоровна",
    room: "104 кабинет",
    workHours: "c 9:00 до 25:00",
  },
  {
    title: "Флюорографическое обследование",
    doctorName: "Врач Юлия Никифоровна",
    room: "104 кабинет",
    workHours: "c 9:00 до 25:00",
  },
];

export default function ProfessionalExaminationScreen() {
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

  return (
    <CustomLayout>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={[styles.screenTitle]}>Активность</Text>
          <View style={[typography.row, styles.infoContainer]}>
            <View style={styles.card}>
              <View style={[typography.row, styles.info]}>
                <InfoIcon icon="check" size={20} backgroundColor="#4DD0E1" />
                <Subheading>Врачей пройдено</Subheading>
              </View>
              <View style={styles.infoCounterContainer}>
                <Title style={styles.infoCounter}>4</Title>
              </View>
            </View>
            <View style={styles.card}>
              <View style={[typography.row, styles.info]}>
                <InfoIcon icon="timer" size={16} backgroundColor="#FF8181" />
                <Subheading>Времени осталось</Subheading>
              </View>
              <View style={styles.infoCounterContainer}>
                <Title style={styles.infoCounter}>24 дня</Title>
              </View>
            </View>
          </View>
          <View style={[typography.row, styles.menuContainer]}>
            <Text>Активно</Text>
            <Text>Пройдено</Text>
          </View>
          {doctorAppointments.map((appointment, index) => (
            <View key={index} style={[typography.row, styles.appointmentCard]}>
              <View style={styles.appointmentImageContainer}>
                <Image
                  resizeMode="contain"
                  style={styles.appointmentImage}
                  source={require("../../assets/images/lungs.png")}
                />
              </View>
              <View style={styles.appointmentInfoContainer}>
                <Text>{appointment.title}</Text>
                <Text style={styles.title}>{appointment.doctorName}</Text>
                <View>
                  <View style={[typography.row, { flex: 1 }]}>
                    <IconButton
                      size={12}
                      style={{ margin: 0, padding: 0 }}
                      color="#4DD0E1"
                      icon="star"
                    />
                    <Text style={styles.title}>{appointment.room}</Text>
                  </View>
                  <Text style={styles.caption}> • {appointment.workHours}</Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      </View>
    </CustomLayout>
  );
}
