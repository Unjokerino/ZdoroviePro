import { path } from "ramda";
import React, { ReactElement, useEffect } from "react";
import {
  View,
  Animated,
  TouchableOpacity,
  Image,
  StatusBar,
  ScrollView,
  Dimensions,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Icons from "../../assets/icons";
import { Colors, RANDOM_USER_URL } from "../../constants";
import { signOut as signOutAction } from "../../store/actions";
import styles from "./styles";
import selectState from "../../store/selectors/auth";
import { IconButton } from "react-native-paper";
import { Text } from "../../components/Themed";
import { useNavigation } from "@react-navigation/native";

const SCREEN_HEIGHT = Dimensions.get("screen").height;

export default function CustomLayout({ children }: { children: ReactElement }) {
  const navigation = useNavigation();
  const { identity: user } = useSelector(selectState);
  const dispatch = useDispatch();
  const scrollY = new Animated.Value(0);
  const signOut = () => {
    dispatch(signOutAction());
  };
  const openDrawer = () => {
    navigation.openDrawer();
  };
  const renderButtons = () => (
    <View style={styles.iconButtonContainer}>
      <TouchableOpacity>
        <Icons.BellIcon color="white" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icons.SlidersIcon color="white" />
      </TouchableOpacity>
      <TouchableOpacity onPress={signOut}>
        <Icons.HelpIcon color="white" />
      </TouchableOpacity>
    </View>
  );

  useEffect(() => {
    StatusBar.setBackgroundColor(Colors.light.header);
  }, []);

  const borderRadius = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [30, 0],
    extrapolate: "clamp",
  });

  return (
    <View style={styles.container}>
      <View style={[styles.header]}>
        <View style={[styles.userInfo]}>
          <IconButton onPress={openDrawer} icon="menu" color="white" />
          <Image
            style={styles.avatar}
            source={{
              uri: user?.picture || "https://i.stack.imgur.com/l60Hf.png",
            }}
          />
          <View style={styles.textInfoContainer}>
            <Text style={styles.greetings}>Добро пожаловать</Text>
            <Text numberOfLines={1} style={[styles.headerTitle]}>
              {`${user?.email || ""}`}
            </Text>
          </View>
        </View>
        <View
          style={{
            justifyContent: "space-between",
            flex: 1,
          }}
        >
          {renderButtons()}
        </View>
      </View>
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
          nestedScrollEnabled
          scrollEventThrottle={16}
          style={styles.scrollView}
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
            {
              useNativeDriver: false,
            }
          )}
          showsVerticalScrollIndicator={false}
        >
          {children}
        </ScrollView>
      </Animated.View>
    </View>
  );
}
