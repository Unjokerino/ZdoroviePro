import React, { useEffect, useState } from "react";
import {
  View,
  StatusBar,
  Animated,
  Image,
  TouchableOpacity,
} from "react-native";
import Icons from "../../assets/icons";
import StepCard from "../../components/StepCard";
import { Text } from "../../components/Themed";
import {
  SCREEN_WIDTH,
  RANDOM_IMAGE,
  Colors,
  RANDOM_USER_URL,
} from "../../constants";
import styles from "./styles";
import { Caption, IconButton } from "react-native-paper";
import StickyParallaxHeader from "react-native-sticky-parallax-header";
import useColorScheme from "../../hooks/useColorScheme";
import { User } from "../../constants/Types";
import { path } from "ramda";

const cards = [
  {
    title: "Шаг 1",
    text: "Пройти анкетирование и получить полный бла бла бла",
    progress: 10,
    image: RANDOM_IMAGE,
  },
  {
    title: "Шаг 2",
    text: "Факторы риска (тест-система) Поставьте цели тут ближайшие бла бла",
    progress: 100,
    image: RANDOM_IMAGE,
  },
  {
    title: "Шаг 3",
    text:
      "Факторы остальны вещей которые лень писать но ты и так все знаешь :)",
    progress: 4,
    image: RANDOM_IMAGE,
  },
  {
    title: "Шаг 4",
    text: "Наслаждаться результатом своей упорной работы, ты молодец ❤",
    progress: 16,
    image: RANDOM_IMAGE,
  },
];
export default function DetailedGoalScreen({ navigation }) {
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

  const renderForeground = () => (
    <View style={styles.foreground}>
      <IconButton
        onPress={() => navigation.goBack()}
        icon="arrow-left"
        color="white"
      />
      <View style={[styles.row]}>
        <Image style={styles.avatar} source={{ uri: user?.picture.medium }} />
        <View style={{ margin: 12, flex: 1 }}>
          <Caption style={styles.headerCaption}>Добро пожаловать</Caption>
          <Text style={styles.headerTitle}>
            {`${user?.name.last} ${user?.name.first}`}
          </Text>
        </View>
        {renderButtons()}
      </View>
    </View>
  );

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

  const renderContent = () => (
    <View style={styles.content}>
      <View style={[styles.row, { width: SCREEN_WIDTH, alignItems: "center" }]}>
        <Icons.UnionIcon />
        <Text style={[styles.caption]}>Первые шаги</Text>
      </View>
      <View style={{ marginTop: 17 }}>
        {cards.map((card, i) => (
          <StepCard style={styles.card} {...card} />
        ))}
      </View>
    </View>
  );

  const renderHeader = () => {
    const opacity = scroll.interpolate({
      inputRange: [0, 160, 210],
      outputRange: [0, 0, 1],
      extrapolate: "clamp",
    });

    return (
      <View style={styles.headerWrapper}>
        <Animated.View style={[styles.header, { opacity }]}>
          <View style={[styles.row]}>
            <IconButton
              onPress={() => navigation.goBack()}
              icon="arrow-left"
              color="white"
            />

            <View style={[styles.row]}>
              <Image
                style={styles.avatar}
                source={{ uri: user?.picture.medium }}
              />
              <Text style={[styles.headerTitle, { margin: 12 }]}>
                {`${user?.name.last} ${user?.name.first}`}
              </Text>
            </View>
          </View>
          {renderButtons()}
        </Animated.View>
      </View>
    );
  };

  return (
    <StickyParallaxHeader
      leftTopIcon={null}
      parallaxHeight={150}
      scrollEvent={Animated.event(
        [{ nativeEvent: { contentOffset: { y: scroll } } }],
        {
          useNativeDriver: false,
        }
      )}
      header={renderHeader}
      backgroundColor={Colors[colorScheme].header}
      foreground={renderForeground}
      renderBody={renderContent}
      headerType="AvatarHeader"
    />
  );
}
