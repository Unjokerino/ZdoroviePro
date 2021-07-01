import React, { useEffect } from "react";
import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Paragraph, Title } from "../../components/Themed";
import { useDispatch, useSelector } from "react-redux";

import styles from "./styles";

import CustomLayout from "../../components/CustomLayout";
import Icons from "../../assets/icons";
import Button from "../../components/Button";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { GOALS_SCREEN, RECOMENDATION_SCREEN } from "../../constants";
import AsyncStorage from "@react-native-async-storage/async-storage";

export interface CardProps {
  title:string
  color:string 
  icon: 'Graph' | 'Activity' | 'Food' | 'Smoking'
  subtitle:string
  text:string
  name:string
  image: any
}

export default function HealthProfileScreen({ navigation }) {
  const dispatch = useDispatch();

  const descriptions: CardProps[] = [
    {
      name:'Физическая активность в норме',
      subtitle:'Высокая физическая активность',
      icon:'Activity',
      title: "Физическая активность",
      text: `Вы бегаете и двигаетесь достаточно, продолжайте в том же духе 🎈`,
      image: require("../../assets/images/man.png"),
    },
    {
      name:'Потребление животного жира очень высокое',
      subtitle:'Ваша диета содержит много жира',
      color:'#6360FF',
      icon:'Food',
      title: "Питание",
      text: `Ваша диета содержит много жира
      и холестерина. Вам необходимо реже потреблять жирное мясо и мясные продукты, субпродукты и колбасные изделия. Замените их на низкожировые сорта мяса (грудка индейки, курицы). Ограничьте  сливочное масло до 10-20г
      в день. Отдавайте предпочтение низкожировым сортам молочных продуктов: сыр 17% и менее, творог 5%
      и менее; йогурты , молоко и кефир 1-1,5%`,
      image: require("../../assets/images/sadGirl.png"),
    },
    {
      name:'Никотиновая зависимость не выявлена',
      subtitle:'Никотиновой зависимости нет',
      color:'#4DD0E1',
      icon:'Smoking',
      title: "Курение",
      text: `Если Вы курите 5 – 10 лет не больше5 сигарет в день – это «случайное курение» с психологической зависимостью. Вы можете бросить рази навсегда. Не бойтесь, абстиненциине будет.

    Если Вы курите 10 – 20 лет от 5 до 20 сигарет в день – это «привычное курение» с явлениями физической зависимости.
    
    Если Вы курите более 20 лет и более 20 сигарет в день, автоматически, ночьюи натощак, иногда не замечая самого факта курения – это «пристрастное курение» с преобладанием физической зависимости
    `,
      image: require("../../assets/images/man.png"),
    },
  ];

  const startGoals = () => {
    AsyncStorage.setItem("testDone", "true");
    navigation.replace(GOALS_SCREEN);
  };

  const Card = (props: CardProps) => {
    const { title, color = '#FF8181', icon, subtitle } = props
    const Icon = Icons[icon]
    return(
    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate(RECOMENDATION_SCREEN, props )}>
      <View style={[styles.iconContainer, { backgroundColor: color }]}>
        <Icon/>
      </View>
      <View style={[styles.cardInfo]}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </TouchableOpacity>)
  };

  return (
    <CustomLayout>
      <View style={styles.container}>
        <View style={styles.graphContainer}>
          <Icons.Graph />
        </View>
        {descriptions.map(description => <Card {...description} />)}
        <Button
          onPress={startGoals}
          style={{ marginVertical: 20 }}
          textColor="#fff"
          backgroundColor="#6360FF"
          title="Выбрать цели"
        />
      </View>
    </CustomLayout>
  );
}
