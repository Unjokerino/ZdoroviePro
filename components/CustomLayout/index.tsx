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
import { useDispatch, useSelector } from "react-redux";
import Icons from "../../assets/icons";
import { Colors, RANDOM_USER_URL } from "../../constants";
import { signOut as signOutAction } from "../../store/actions";
import styles from "./styles";
import selectState from "../../store/selectors/auth";
import { IconButton } from "react-native-paper";

const SCREEN_HEIGHT = Dimensions.get("screen").height;

export default function CustomLayout({
  children,
  openDrawer,
}: {
  children: ReactElement;
  openDrawer: (_: any) => void;
}) {
  const { identity: user } = useSelector(selectState);
  const dispatch = useDispatch();
  const headerAnim = useRef(new Animated.Value(0)).current;
  const scrollY = new Animated.Value(0);
  const signOut = () => {
    dispatch(signOutAction());
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
      <Animated.View
        style={[
          styles.header,
          {
            height: 100,
            justifyContent: "center",
            alignItems: "center",
            paddingTop: 25,
          },
        ]}
      >
        <View
          style={[
            {
              justifyContent: "flex-start",
              flexDirection: "row",
              alignItems: "center",
              alignSelf: "center",
              height: "100%",
            },
          ]}
        >
          <IconButton onPress={openDrawer} icon="menu" color="white" />
          <Image
            style={styles.avatar}
            source={{
              uri: user?.picture || "https://i.stack.imgur.com/l60Hf.png",
            }}
          />
          <Text
            numberOfLines={1}
            style={[
              styles.headerTitle,
              { margin: 12, alignItems: "center", maxWidth: 100 },
            ]}
          >
            {`${user?.email}`}
          </Text>
        </View>
        <View
          style={{
            justifyContent: "space-between",
            flex: 1,
          }}
        >
          {renderButtons()}
        </View>
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
