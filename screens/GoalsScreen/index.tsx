import React, { useEffect, useState } from "react";
import {
  View,
  StatusBar,
  Animated,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
  ImageBackground,
} from "react-native";
import Icons from "../../assets/icons";
import StepCard from "../../components/StepCard";
import { Text } from "../../components/Themed";
import {
  SCREEN_WIDTH,
  RANDOM_IMAGE,
  Colors,
  RANDOM_USER_URL,
  TAKE_TEST,
} from "../../constants";
import styles from "./styles";
import { Caption, Divider } from "react-native-paper";
import StickyParallaxHeader from "react-native-sticky-parallax-header";
import useColorScheme from "../../hooks/useColorScheme";
import { User } from "../../constants/Types";
import { path } from "ramda";
import RecomendedGoalCard from "../../components/RecomendedGoalCard";
import CustomLayout from "../../components/CustomLayout";

const recomendedGoals = [
  {
    title: "Бросить курить",
    image: RANDOM_IMAGE,
  },
  {
    title: "Бросить пить",
    image: RANDOM_IMAGE,
  },
  {
    title: "Начать курить",
    image: RANDOM_IMAGE,
  },
  {
    title: "Начать пить",
    text: "Наслаждаться результатом своей упорной работы, ты молодец ❤",
    progress: 16,
    image: RANDOM_IMAGE,
  },
];
export default function GoalsScreen({ navigation }) {
  StatusBar.setBarStyle("light-content");
  const colorScheme = useColorScheme();
  const scroll = new Animated.Value(0);
  const [value, setValue] = useState(0);
  const [user, setUser] = useState<User>();

  useEffect(() => {
    scroll.addListener(({ value }) => setValue(value));
    getUser();
  }, []);

  const getUser = async () => {
    const result = await fetch(RANDOM_USER_URL);
    const json = await result.json();
    const user: User | undefined = path(["results", 0], json);
    setUser(user);
  };

  const renderButtons = () => (
    <View style={styles.iconButtonContainer}>
      <TouchableOpacity style={styles.iconButton}>
        <Icons.BellIcon color="white" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconButton}>
        <Icons.SlidersIcon color="white" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconButton}>
        <Icons.HelpIcon color="white" />
      </TouchableOpacity>
    </View>
  );

  const SmallCard = () => (
    <ImageBackground
      source={require("../../assets/images/circles.png")}
      style={styles.smallCard}
    >
      <View style={{ margin: 10 }}>
        <Text>Растягиваться</Text>
        <Caption>30 дней</Caption>
      </View>
      <Image
        source={require("../../assets/images/person.png")}
        style={{
          height: 65,
          width: 45,
          position: "absolute",
          bottom: -5,
          right: 8,
        }}
      />
    </ImageBackground>
  );

  const Chip = ({ onPress, children }) => (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.chip}>{children}</Text>
    </TouchableOpacity>
  );

  const renderContent = () => (
    <CustomLayout openDrawer={navigation.openDrawer}>
      <View style={styles.content}>
        <View
          style={[
            styles.row,
            {
              width: SCREEN_WIDTH,
              alignItems: "center",
              paddingHorizontal: 20,
            },
          ]}
        >
          <Text style={[styles.caption]}>Рекомендуемые цели</Text>
        </View>
        <FlatList
          initialScrollIndex={1}
          showsHorizontalScrollIndicator={false}
          data={recomendedGoals}
          renderItem={({ item }) => (
            <RecomendedGoalCard
              style={styles.card}
              onPress={console.log}
              title={item.title}
              image={item.image}
            />
          )}
          keyExtractor={(item) => item.title}
          horizontal={true}
          style={styles.scrollContainer}
        />
        <View style={styles.divider}></View>
        <View style={styles.chipContainer}>
          <Chip
            onPress={() => {
              navigation.navigate(TAKE_TEST);
            }}
          >
            Тело
          </Chip>
          <Chip onPress={() => {}}>Разум</Chip>
          <Chip onPress={() => {}}>Душа</Chip>
          <Chip onPress={() => {}}>Энергия</Chip>
        </View>
        <ScrollView
          horizontal={true}
          pagingEnabled={true}
          snapToInterval={SCREEN_WIDTH}
          showsHorizontalScrollIndicator={false}
          style={{ flex: 1 }}
        >
          <View style={{ width: SCREEN_WIDTH }}>
            <View style={styles.smallCardContainer}>
              <SmallCard />
              <SmallCard />
              <SmallCard />
              <SmallCard />
            </View>
          </View>
          <View style={{ width: SCREEN_WIDTH }}>
            <View style={styles.smallCardContainer}>
              <SmallCard />
              <SmallCard />
              <SmallCard />
              <SmallCard />
            </View>
          </View>
        </ScrollView>
      </View>
    </CustomLayout>
  );

  return renderContent();
}
