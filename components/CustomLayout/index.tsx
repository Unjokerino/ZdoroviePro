import { path } from "ramda";
import React, { ReactElement, useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  Animated,
  TouchableOpacity,
  Image,
  StatusBar,
  ScrollView,
  Dimensions,
} from "react-native";
import Icons from "../../assets/icons";
import { Colors, RANDOM_USER_URL } from "../../constants";
import { User } from "../../constants/Types";
import styles from "./styles";

const SCREEN_HEIGHT = Dimensions.get("screen").height;

export default function CustomLayout({ children }: { children: ReactElement }) {
  const [user, setUser] = useState<User>();
  const headerAnim = useRef(new Animated.Value(0)).current;
  const scrollY = new Animated.Value(0);
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

  useEffect(() => {
    StatusBar.setBackgroundColor(Colors.light.header);

    getUser();
  }, []);

  const getUser = async () => {
    const result = await fetch(RANDOM_USER_URL);
    const json = await result.json();
    const user: User | undefined = path(["results", 0], json);
    setUser(user);
  };

  const borderRadius = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [30, 0],
    extrapolate: "clamp",
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.header,
          {
            height: scrollY.interpolate({
              inputRange: [0, 100],
              outputRange: [100, 75],
              extrapolate: "clamp",
            }),
          },
        ]}
      >
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
      <Animated.View
        style={[
          styles.wrapper,
          {
            borderTopStartRadius: borderRadius,
            borderTopEndRadius: borderRadius,
          },
        ]}
      >
        <ScrollView
          style={styles.scrollView}
          onScroll={Animated.event([
            {
              nativeEvent: {
                contentOffset: {
                  y: scrollY,
                },
              },
            },
          ])}
          showsVerticalScrollIndicator={false}
        >
          {children}
        </ScrollView>
      </Animated.View>
    </View>
  );
}
