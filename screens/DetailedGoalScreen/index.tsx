import { useNavigation } from "@react-navigation/native";
import React, { useCallback, useEffect, useMemo } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from "react-native";
import { Text } from "../../components/Themed";
import { Modal, Portal, Title } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/Button";
import {
  Colors,
  GOAL_DESCRIPTION,
  PHYSICAL_ACTIVITY,
  RATING_MODAL,
} from "../../constants";
import { RootState } from "../../types/store";
//@ts-ignore
import { getUserTask, failUserGoal } from "../../store/actions";
import moment from "moment";
import { Event } from "../../types/store/goals";

export default function DetailedGoalScreen() {
  const [visible, setVisible] = React.useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const showModal = () => setVisible(true);

  const hideModal = () => setVisible(false);
  const {
    goalsReducer: { currentGoal, currentTask },
  } = useSelector((state: RootState) => state);

  const { complete_days, duration } = currentGoal?.purpose || {
    complete_days: 0,
    duration: 0,
  };

  const ActionButton = useCallback(() => {
    switch (currentGoal.purpose?.description) {
      case "Улучшить физическую активность":
        return (
          <Button
            onPress={() => {
              navigation.navigate(
                currentGoal.status === "active"
                  ? PHYSICAL_ACTIVITY
                  : GOAL_DESCRIPTION,
                { currentGoal, leaveRating }
              );
            }}
            style={styles.endButton}
            backgroundColor="#FF8181"
            textColor="#fff"
            title={"Начать"}
          />
        );
      case "Есть только правильную пищу":
        return (
          <Button
            onPress={showModal}
            style={styles.endButton}
            backgroundColor="#FF8181"
            textColor="#fff"
            title={"Хочу вредной еды"}
          />
        );
      default:
        return (
          <Button
            onPress={showModal}
            style={styles.endButton}
            backgroundColor="#FF8181"
            textColor="#fff"
            title={"Хочу курить"}
          />
        );
    }
  }, []);

  const closeGoal = () => {
    dispatch(failUserGoal());
    hideModal();
    navigation.goBack();
  };

  const leaveRating = () => {
    navigation.navigate(RATING_MODAL);
  };

  useEffect(() => {
    dispatch(getUserTask());
  }, []);

  const threes = [
    [
      {
        source: require("../../assets/images/smokeGoal/11.png"),
      },
      {
        source: require("../../assets/images/smokeGoal/12.png"),
      },
      {
        source: require("../../assets/images/smokeGoal/13.png"),
      },
      {
        source: require("../../assets/images/smokeGoal/14.png"),
      },
      {
        source: require("../../assets/images/smokeGoal/15.png"),
      },
      {
        source: require("../../assets/images/smokeGoal/16.png"),
      },
      {
        source: require("../../assets/images/smokeGoal/17.png"),
      },
    ],
    [
      {
        source: require("../../assets/images/smokeGoal/21.png"),
      },
      {
        source: require("../../assets/images/smokeGoal/22.png"),
      },
      {
        source: require("../../assets/images/smokeGoal/23.png"),
      },
      {
        source: require("../../assets/images/smokeGoal/24.png"),
      },
      {
        source: require("../../assets/images/smokeGoal/25.png"),
      },
      {
        source: require("../../assets/images/smokeGoal/26.png"),
      },
      {
        source: require("../../assets/images/smokeGoal/27.png"),
      },
    ],
    [
      {
        source: require("../../assets/images/smokeGoal/31.png"),
      },
      {
        source: require("../../assets/images/smokeGoal/32.png"),
      },
      {
        source: require("../../assets/images/smokeGoal/33.png"),
      },
      {
        source: require("../../assets/images/smokeGoal/34.png"),
      },
      {
        source: require("../../assets/images/smokeGoal/35.png"),
      },
      {
        source: require("../../assets/images/smokeGoal/36.png"),
      },
      {
        source: require("../../assets/images/smokeGoal/37.png"),
      },
    ],
  ];

  const EventCard = (event: Event) => {
    const color = event.title?.toLowerCase().includes("провалена")
      ? Colors.light.error
      : Colors.light.header;
    return (
      <View style={styles.eventRow}>
        <View style={styles.outerCircle}>
          <View style={[styles.innerCircle, { borderColor: color }]} />
        </View>
        <View style={styles.eventTextContainer}>
          <Text style={styles.eventTitle}>{event.title}</Text>
          <View style={styles.dateContainer}>
            <Text style={styles.eventDate}>
              {moment.utc(event.created_date).format("MM/DD/YYYY")}
            </Text>
            <Text style={styles.eventDate}>
              {moment.utc(event.created_date).format("hh:mm")}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  const Feedback = () => {
    const isActive =
      moment(currentTask?.end_date).diff(moment(), "seconds") < 0;

    return (
      <TouchableOpacity onPress={leaveRating} style={styles.feedBackContainer}>
        <View
          style={[
            styles.feedbackIndicator,
            { backgroundColor: isActive ? "#4DD0E1" : "#FF8181" },
          ]}
        />
        <View>
          <Text>
            {isActive
              ? "Расскажите о Ваших ощущениях сегодня"
              : "На сегодня все, спасибо за фидбек :)"}
          </Text>
          {isActive && (
            <Text>
              До {moment.utc(currentTask?.end_date).format("DD-MM-YY  HH:mm ")}
            </Text>
          )}
        </View>
      </TouchableOpacity>
    );
  };

  const defaultImage = useMemo(() => {
    switch (currentGoal.purpose?.description) {
      case "Улучшить физическую активность":
        return require("../../assets/images/avocadoBackground.png");
      case "Есть только правильную пищу":
        return require("../../assets/images/home.png");
      default:
        return require("../../assets/images/smokeBackground.png");
    }
  }, []);
  return (
    <ScrollView>
      <ImageBackground
        style={styles.imageBackground}
        resizeMode="stretch"
        source={currentGoal?.background || defaultImage}
      >
        {currentGoal.purpose?.description ===
          "Избавиться от никотиновой зависимости" &&
          threes.map((three, index) => {
            return (
              <Image
                style={{
                  height: 200,
                  width: 100,
                  left: 10 + index * 25,
                  bottom: 50 + index * 8,
                }}
                resizeMode="contain"
                source={three[0].source}
              />
            );
          })}
      </ImageBackground>
      <View style={styles.mainContainer}>
        <Title>День {complete_days}</Title>
        <Text style={{ fontWeight: "bold" }}>Каждый день я побеждаю</Text>
        <View style={styles.progressCircle}>
          <Text style={styles.progressText}>
            {Math.round((complete_days || 0 / duration) * 100) || 0}%
          </Text>
        </View>
        <ActionButton />
      </View>
      <Feedback />
      <View>
        <Title style={{ marginHorizontal: 20 }}>Ход событий</Title>
        {currentGoal?.event_history
          ?.sort((a, b) =>
            moment(b.created_date).diff(moment(a.created_date), "seconds")
          )
          .map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
      </View>
      <Portal>
        <Modal
          contentContainerStyle={styles.modalContainer}
          visible={visible}
          onDismiss={hideModal}
        >
          <Image
            resizeMode="stretch"
            style={{ marginBottom: 20, width: "100%" }}
            source={require("../../assets/images/sky.png")}
          />
          <Title>Не сдавайся.</Title>
          <Text style={styles.motivationalText}>
            Тут какой нибудь важный текст о том почему не нанада сдаваться
          </Text>
          <TouchableOpacity onPress={hideModal}>
            <Text style={styles.continueText}>Я хочу продолжить</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={closeGoal}>
            <Text>Закурить и сбросить таймер</Text>
          </TouchableOpacity>
        </Modal>
      </Portal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  eventRow: {
    flexDirection: "row",
    marginBottom: 21,
    alignItems: "center",
    marginHorizontal: 20,
  },
  modalContainer: {
    backgroundColor: "#fff",
    paddingBottom: 20,
    marginHorizontal: 20,
    alignItems: "center",
  },
  motivationalText: {
    paddingVertical: 36,
    paddingHorizontal: 20,
    textAlign: "center",
  },
  continueText: { color: "#6360FF", fontWeight: "bold" },
  mainContainer: {
    marginTop: -20,
    backgroundColor: "white",
    marginHorizontal: 50,
    borderRadius: 10,
    alignItems: "center",
  },
  progressCircle: {
    marginVertical: 20,
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 10,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#CFD8DC",
  },
  progressText: { fontWeight: "bold", fontSize: 34 },
  endButton: { width: "100%" },
  feedBackContainer: {
    backgroundColor: "#fff",
    flexDirection: "row",
    paddingHorizontal: 18,
    paddingVertical: 14,
    marginHorizontal: 10,
    marginVertical: 10,
    alignItems: "center",
  },
  feedbackIndicator: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 10,
    backgroundColor: "#4DD0E1",
  },
  imageBackground: {
    height: 300,
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-end",
  },
  eventTextContainer: {
    flexDirection: "row",
    marginHorizontal: 8,
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  dateContainer: {
    flex: 0.7,
  },
  eventTitle: { flex: 1 },
  eventDate: { flex: 0.7, opacity: 0.6 },
  outerCircle: {
    backgroundColor: "#fff",
    width: 48,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 24,
  },
  innerCircle: {
    borderColor: "#6360FF",
    borderWidth: 3,
    width: 28,
    height: 28,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 14,
  },
});
