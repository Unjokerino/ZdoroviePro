import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { View, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import { ScrollView } from "react-native-gesture-handler";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../constants";
import { Text } from "../../components/Themed";
import Button from "../../components/Button";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import { useNavigation } from "@react-navigation/native";
import * as TaskManager from "expo-task-manager";

export default function PhysicalActivityScreen({
  route: {
    params: { leaveRating },
  },
}) {
  const duration = 1800;
  const maxDistance = 5;
  const [isPlaying, setIsPlaying] = useState(true);
  const [location, setLocation] = useState<Location.LocationData>();
  const [errorMsg, setErrorMsg] = useState<string>();
  const [distance, setDistance] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [remainingTime, setRemainingTime] = useState(duration);
  const navigation = useNavigation();

  const LOCATION_TASK_NAME = "background-location-task";

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
      Location.startLocationUpdatesAsync(LOCATION_TASK_NAME, {});

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  TaskManager.defineTask(LOCATION_TASK_NAME, async ({ data, error }) => {
    if (error) {
      console.warn(error);
      return;
    }
    if (data) {
      const { locations } = data;
      console.warn(locations);
    }
  });

  const time = useCallback((remainingTime) => {
    const seconds = remainingTime % 60;
    const minutes = Math.floor(remainingTime / 60);
    return `${minutes < 10 ? "0" + minutes : minutes}м ${
      seconds < 10 ? "0" + seconds : seconds
    }сек`;
  }, []);
  const scrollViewRef = useRef<ScrollView>(null);

  const onPress = () => {
    setIsPlaying(!isPlaying);
    scrollViewRef.current?.scrollTo({ x: isPlaying ? SCREEN_WIDTH : 0 });
  };

  const formatTime = useCallback((remainingTime) => {
    const seconds = remainingTime % 60;
    const minutes = Math.floor(remainingTime / 60);
    const hours = Math.floor(minutes / 60);
    return `${hours < 10 ? "0" + hours : hours}:${
      minutes < 10 ? "0" + minutes : minutes
    }:${seconds < 10 ? "0" + seconds : seconds}`;
  }, []);

  const updateRemainingTime = (remainingTime: number) => {
    setRemainingTime(remainingTime);
  };

  const Timer = useCallback(
    () => (
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",

          width: SCREEN_WIDTH,
        }}
      >
        <CountdownCircleTimer
          isPlaying={isPlaying}
          duration={duration}
          initialRemainingTime={remainingTime}
          colors={[
            ["#FF8181", 0.4],
            ["#F7B801", 0.4],
            ["#6360FF", 0.2],
          ]}
        >
          {({ remainingTime, animatedColor }) => {
            useEffect(() => {
              updateRemainingTime(remainingTime);
            }, [remainingTime]);
            return (
              <>
                <Text style={{ color: "#707070" }}>{time(remainingTime)}</Text>
                <Text style={{ color: "#707070" }}>осталось</Text>
              </>
            );
          }}
        </CountdownCircleTimer>
      </View>
    ),
    [isPlaying]
  );

  const Map = useCallback(() => {
    const isComplete = distance >= 10;

    return location?.coords ? (
      <View>
        <MapView
          initialRegion={{
            ...location?.coords,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          region={{
            ...location?.coords,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          style={styles.map}
        >
          <Marker coordinate={location.coords} />
        </MapView>
        <View
          style={[
            styles.goalResultContainer,
            { backgroundColor: isComplete ? "#6360FF" : "#FF8181" },
          ]}
        >
          <View style={styles.circle} />
          <Text style={styles.goalResultText}>
            {isComplete
              ? "Цель успешно достигнута"
              : "Цель сегодня еще не достигнута"}
          </Text>
        </View>
      </View>
    ) : (
      <Text style={{ width: SCREEN_WIDTH }}>
        Необходим доступ к геолокации{" "}
      </Text>
    );
  }, [location]);

  return (
    <View style={{ flex: 1, paddingVertical: 20, backgroundColor: "#fff" }}>
      <StatusBar style="dark" />
      <ScrollView
        style={{ flex: 1, flexGrow: 1 }}
        scrollEnabled={false}
        pagingEnabled
        horizontal
        ref={scrollViewRef}
      >
        <Timer />
        <Map />
      </ScrollView>
      <View style={{ paddingHorizontal: 32 }}>
        <View
          style={{
            alignSelf: "center",
            marginVertical: 43,
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 42, fontWeight: "100" }}>
            {formatTime(remainingTime)}
          </Text>
          <Text style={{ textAlign: "center" }}>Время</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View>
            <Text style={{ fontSize: 42, fontWeight: "100" }}>
              {distance} км
            </Text>
            <Text>Дистанция</Text>
          </View>
          <View>
            <Text style={{ fontSize: 42, fontWeight: "100" }}>
              {speed} км/ч
            </Text>
            <Text>Cредняя скорость</Text>
          </View>
        </View>
        <Button
          style={{ marginVertical: 15 }}
          mode="contained"
          onPress={onPress}
          title={isPlaying ? "Остановить" : "Продолжить"}
        />
        <Button
          onPress={() => {
            navigation.goBack();
            leaveRating();
          }}
          mode="outlined"
          title="Завершить"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: SCREEN_WIDTH,
    height: "100%",
  },
  circle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 10,
    backgroundColor: "white",
  },
  goalResultText: {
    color: "#fff",
  },
  goalResultContainer: {
    flexDirection: "row",
    padding: 10,
    alignItems: "center",

    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
  },
});
