import React, { ReactElement, useEffect, useRef, useState } from "react";
import {
  View,
  Animated,
  TouchableOpacity,
  Image,
  ScrollView,
  StatusBar,
  FlatList,
} from "react-native";
import { Text } from "../../components/Themed";
import styles from "./styles";
import Icons from "../../assets/icons";
import { User } from "../../constants/Types";
import { path } from "ramda";
import {
  Colors,
  DETAILED_GOAL,
  EXAMINATION_SCREEN,
  PROFESSIONAL_EXAMINATION_SCREEN,
  RANDOM_USER_URL,
  SCREEN_WIDTH,
  TAKE_TEST,
} from "../../constants";
import { Modal, Portal, Title } from "react-native-paper";
import GoalCard from "../../components/GoalCard";
import MessageCard from "../../components/MessageCard";

const GOALS = [
  {
    title: "Бросить курить за 60 дней",
    progress: 20,
    status: "Выполняется",
    dificulty: "нормальная",
    deadline: 30,
  },
  {
    title: "Бросить пить за 30 дней",
    progress: 0,
    status: "Ожидает выполнения",
    dificulty: "высокая",
    deadline: 30,
  },
  {
    title: "Начать пить за 10 дней",
    progress: 0,
    status: "Отменено",
    dificulty: "легкая",
    deadline: 30,
  },
];

export default function HomeScreen({ navigation }) {
  const [user, setUser] = useState<User>();
  const [scrollY] = useState(new Animated.Value(0));
  const [visible, setVisible] = React.useState(false);
  const scrollRef = useRef();
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const [goalsIndex, setGoalsIndex] = useState(0);
  useEffect(() => {
    StatusBar.setBackgroundColor(Colors.light.header);
    showModal();
    getUser();
  }, []);

  const getUser = async () => {
    const result = await fetch(RANDOM_USER_URL);
    const json = await result.json();
    const user: User | undefined = path(["results", 0], json);
    setUser(user);
  };

  const ProfileInfoItem = ({
    caption,
    title,
    icon,
  }: {
    caption: string;
    title: string;
    icon: ReactElement;
  }) => (
    <View style={styles.profileInfoItem}>
      <View style={styles.profileInfoIcon}>{icon}</View>
      <View style={{ alignSelf: "flex-start" }}>
        <Text style={{ width: "98%", color: "#91919F", fontSize: 10 }}>
          {caption}
        </Text>
        <Text>{title}</Text>
      </View>
    </View>
  );

  const ProfileInfo = () => (
    <Animated.View
      style={[
        {
          transform: [{ translateY: -0 }],
          marginBottom: profileInfoMargin,
          zIndex: 100,
          width: SCREEN_WIDTH * 0.9,
          alignSelf: "center",
        },
      ]}
    >
      <View style={styles.profileInfoContainer}>
        <Title style={{ marginBottom: 15 }}>Профиль пользователя</Title>
        <ProfileInfoItem
          title="3"
          caption="Фактор риска"
          icon={<Icons.PieChart />}
        />
        <ProfileInfoItem
          title="1"
          caption="Группа здоровья"
          icon={<Icons.UserIcon />}
        />
        <ProfileInfoItem
          title="3"
          caption="Целей поставлено"
          icon={<Icons.AwardIcon />}
        />
        <ProfileInfoItem
          title="3"
          caption="Выполнено целей"
          icon={<Icons.AwardIcon />}
        />
      </View>
    </Animated.View>
  );
  const renderButtons = () => (
    <View style={styles.iconButtonContainer}>
      <TouchableOpacity>
        <Icons.BellIcon color="white" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icons.SlidersIcon color="white" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icons.HelpIcon color="white" />
      </TouchableOpacity>
    </View>
  );
  const renderItem = ({ item }) => (
    <View style={{ marginBottom: 8 }}>
      <GoalCard {...item} onPress={() => navigation.push(DETAILED_GOAL)} />
    </View>
  );

  const scrollTo = (x = 0, y = 0) => {
    if (scrollRef && scrollRef.current) {
      scrollRef.current?.scrollTo({
        x,
        y,
        animated: true,
      });
    }
  };

  const headerHeight = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [100, 75],
    extrapolate: "clamp",
  });

  const profileInfoMargin = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [-100, -200],
    extrapolate: "clamp",
  });

  const mainContainerPaddingTop = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [120, 200],
    extrapolate: "clamp",
  });

  return (
    <>
      <Animated.View style={[styles.header, { height: headerHeight }]}>
        <View style={[styles.row]}>
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
      <View style={styles.container}>
        <ScrollView
          scrollEventThrottle={16}
          alwaysBounceVertical={false}
          showsVerticalScrollIndicator={false}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {
                    y: scrollY,
                  },
                },
              },
            ],
            { useNativeDriver: false }
          )}
          style={styles.container}
        >
          <ProfileInfo />
          <Animated.View
            style={[
              styles.mainContainer,
              { paddingTop: mainContainerPaddingTop },
            ]}
          >
            <View style={styles.menuContainer}>
              {["Поставленные цели", "Завершенные"].map((item, index) => (
                <TouchableOpacity
                  onPress={() => scrollTo(index * SCREEN_WIDTH, 0)}
                >
                  <Text style={[goalsIndex === index && styles.title]}>
                    {item}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            <ScrollView
              scrollEventThrottle={16}
              ref={scrollRef}
              onScroll={(event) => {
                const newIndex = Math.abs(
                  Math.round(event.nativeEvent.contentOffset.x / SCREEN_WIDTH)
                );
                newIndex !== goalsIndex && setGoalsIndex(newIndex);
              }}
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              pagingEnabled={true}
              snapToInterval={SCREEN_WIDTH}
            >
              <View style={styles.contentWrapper}>
                <FlatList
                  showsVerticalScrollIndicator={false}
                  data={GOALS}
                  renderItem={renderItem}
                  keyExtractor={(item) => item.title}
                />
                <TouchableOpacity style={styles.addGoalsButton}>
                  <Text
                    style={{
                      color: "white",
                    }}
                  >
                    Добавить цель
                  </Text>
                </TouchableOpacity>
              </View>

              <View style={styles.contentWrapper}>
                <FlatList
                  showsVerticalScrollIndicator={false}
                  data={GOALS}
                  renderItem={renderItem}
                  keyExtractor={(item) => item.title}
                />
              </View>
            </ScrollView>
            <View style={styles.contentWrapper}>
              <View style={styles.row}>
                <Icons.LightBulb />
                <Title style={styles.marginLeft}>Это интересно</Title>
              </View>
              <MessageCard
                onPress={() => navigation.navigate(EXAMINATION_SCREEN)}
                title="Записаться на диспансеризацию"
                description="Диспансеризация и профилактические медицинские осмотры"
              />
              <MessageCard
                onPress={() =>
                  navigation.navigate(PROFESSIONAL_EXAMINATION_SCREEN)
                }
                title="Записаться на профосмтр"
                description="Диспансеризация и профилактические медицинские осмотры"
              />
            </View>
          </Animated.View>
          <Portal>
            <Modal visible={visible} onDismiss={hideModal}>
              <View
                style={{
                  backgroundColor: "white",
                  height: "70%",
                  marginHorizontal: 15,
                  borderRadius: 15,
                  padding: 28,
                }}
              >
                <Title>Это важно</Title>
                <Text
                  style={{ flex: 1, lineHeight: 20, justifyContent: "center" }}
                >
                  Уважаемая Мария Лукина предлагаем Вам пройти Тест бла бла бла
                  для того чтобы мы могли подобрать для Вас рекомендуе мые цели
                  и тут чето еще
                </Text>
                <View style={[styles.row, { justifyContent: "space-between" }]}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.push(TAKE_TEST);
                      hideModal();
                    }}
                    style={{
                      backgroundColor: Colors.light.header,
                      borderRadius: 10,
                      paddingVertical: 8,
                      paddingHorizontal: 16,
                    }}
                  >
                    <Text style={{ color: "white" }}>Пройти сейчас</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={hideModal}
                    style={{
                      backgroundColor: Colors.light.background,
                      borderRadius: 10,
                      paddingVertical: 8,
                      paddingHorizontal: 16,
                    }}
                  >
                    <Text style={{ color: "black" }}>Может позже</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
          </Portal>
        </ScrollView>
      </View>
    </>
  );
}
