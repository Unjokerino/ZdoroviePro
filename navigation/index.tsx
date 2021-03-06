import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { ColorSchemeName, View, ActivityIndicator } from "react-native";
import { Text } from "../components/Themed";
import { LoginStackParamList, RootStackParamList } from "../types";
import BottomTabNavigator from "./BottomTabNavigator";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerContentComponentProps,
  DrawerContentOptions,
} from "@react-navigation/drawer";
import LinkingConfiguration from "./LinkingConfiguration";
import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
  useNavigation,
} from "@react-navigation/native";
import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
  IconButton,
  Provider as PaperProvider,
  Snackbar,
} from "react-native-paper";
import merge from "deepmerge";
import LoginScreen from "../screens/LoginScreen";
import TakeTestScreen from "../screens/TakeTestScreen";
import { SecondPartDescriptionScreen, TestScreen } from "../screens";
import {
  ACHIEVEMENTS_SCREEN,
  CONGRATULATIONS_SCREEN,
  DESCRIPTION_SCREEN,
  EXAMINATION_SCREEN,
  GOALS_SCREEN,
  HEALTH_PROFILE_SCREEN,
  IS_IOS,
  LOGIN_SCREEN,
  PROFESSIONAL_EXAMINATION_SCREEN,
  PROFESSIONAL_PREPARATIONS_SCREEN,
  PROFILE_SCREEN,
  RECOMENDATION_SCREEN,
  REGISTRATION_SCREEN,
  SECOND_PART_DESCRIPTION_SCREEN,
  SILVER_CONGRATULATIONS_SCREEN,
  TAKE_TEST,
  TEST_FILL_INFO,
  TEST_SCREEN,
} from "../constants";
import { ExaminationScreen } from "../screens";
import ProfessionalExaminationScreen from "../screens/ProfessionalExaminationScreen";
import CongratulationsScreen from "../screens/CongratulationsScreen";

import { useDispatch, useSelector } from "react-redux";
//@ts-ignore
import { hideSnackBar } from "../store/actions";
import { RootState } from "../types/store";
import { useEffect, useState } from "react";
import init from "../utils/init";
import RegistrationScreen from "../screens/RegistrationScreen";
import TestFillInfo from "../screens/TestFillInfo";
import { MaterialIcons } from "@expo/vector-icons";
import { typography } from "../constants/Typography";
import ExaminationPreparationsScreen from "../screens/ExaminationPreparationsScreen";
import SilverCongratulationsScreen from "../screens/SilverCongratulationsScreen";
import HealthProfileScreen from "../screens/HealthProfileScreen";
import DescriptionScreen from "../screens/DescriptionScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import RecomendationScreen from "../screens/RecomendationScreen";

const CombinedDefaultTheme = merge(PaperDefaultTheme, NavigationDefaultTheme);
const CombinedDarkTheme = merge(PaperDarkTheme, NavigationDarkTheme);

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  const theme =
    colorScheme === "dark" ? CombinedDarkTheme : CombinedDefaultTheme;

  const dispatch = useDispatch();

  const {
    authReducer: { identity },
    systemReducer: { shouldShowSnackBar, snackBarMessage },
  } = useSelector((state: RootState) => state);

  const onDismissSnackBar = () => dispatch(hideSnackBar());

  useEffect(() => {
    const initialize = async () => {
      await init();
    };
    initialize();
  }, []);

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer linking={LinkingConfiguration} theme={theme}>
        {identity.access_token ? <DrawerNavigator /> : <LoginNavigator />}
      </NavigationContainer>
      <Snackbar
        visible={shouldShowSnackBar}
        onDismiss={onDismissSnackBar}
        action={{
          label: "Undo",
          onPress: () => {
            // Do something
          },
        }}
      >
        {snackBarMessage}
      </Snackbar>
    </PaperProvider>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

const LoginStack = createStackNavigator<LoginStackParamList>();

function LoginNavigator() {
  return (
    <LoginStack.Navigator screenOptions={{ headerShown: false }}>
      <LoginStack.Screen
        name={LOGIN_SCREEN}
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <LoginStack.Screen
        name={REGISTRATION_SCREEN}
        component={RegistrationScreen}
        options={{ headerShown: false }}
      />
    </LoginStack.Navigator>
  );
}

const Drawer = createDrawerNavigator();

function CustomDrawerContent({
  navigation,
}: DrawerContentComponentProps<DrawerContentOptions>) {
  const {
    authReducer: { identity },
  } = useSelector((state: RootState) => state);
  const circle = {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3B5A9A",
  };
  return (
    <View style={{ flex: 1, paddingTop: IS_IOS ? 0 : 30 }}>
      <IconButton
        onPress={() => navigation.closeDrawer()}
        icon="close"
        color="#000"
        style={{ marginTop: 20 }}
        accessibilityComponentType={undefined}
        accessibilityTraits={undefined}
      />
      <Text
        style={{
          alignSelf: "center",
          textAlign: "center",
          marginTop: 50,
          fontWeight: "700",
          marginBottom: 36,
        }}
      >
        {identity.email}
      </Text>
      <View style={{ paddingLeft: 28, marginBottom: 10 }}>
        <Text
          onPress={() => navigation.navigate("Test", { screen: TAKE_TEST })}
          style={{ fontSize: 18, marginBottom: 10 }}
        >
          ???????????????????????????????? ?????????????????????? ???????????? / ??????????????????????????????
        </Text>
        <Text style={{ fontSize: 17, opacity: 0.6 }}>
          ???????????????? ?????????? ??????????????????
        </Text>
      </View>
      <DrawerContentScrollView>
        <View style={{ flex: 1 }}>
          <DrawerItem
            icon={() => (
              <MaterialIcons size={16} name="label-important-outline" />
            )}
            label="??????????????"
            onPress={() => alert("???????????????????? ?? ????????????????????")}
          />
          <DrawerItem
            icon={() => (
              <MaterialIcons size={16} name="label-important-outline" />
            )}
            label="?? ??????????????"
            onPress={() => alert("???????????????????? ?? ????????????????????")}
          />
          <DrawerItem
            icon={() => (
              <MaterialIcons size={16} name="label-important-outline" />
            )}
            label="????????????????"
            onPress={() => alert("???????????????????? ?? ????????????????????")}
          />
        </View>
      </DrawerContentScrollView>
      <View
        style={[
          typography.row,
          {
            justifyContent: "space-between",
            paddingHorizontal: 20,
            borderTopWidth: 1,
            borderTopColor: "#D6E4EC",
            paddingTop: 20,
            paddingBottom: 40,
          },
        ]}
      >
        <View style={circle}>
          <IconButton
            color="white"
            icon={require("../assets/images/vk.png")}
            accessibilityComponentType={undefined}
            accessibilityTraits={undefined}
          />
        </View>
        <View style={circle}>
          <IconButton
            color="white"
            icon={require("../assets/images/fb.png")}
            accessibilityComponentType={undefined}
            accessibilityTraits={undefined}
          />
        </View>
        <View style={circle}>
          <IconButton
            color="white"
            icon={require("../assets/images/insta.png")}
            accessibilityComponentType={undefined}
            accessibilityTraits={undefined}
          />
        </View>
        <View style={circle}>
          <IconButton
            color="white"
            icon={require("../assets/images/youtube.png")}
            accessibilityComponentType={undefined}
            accessibilityTraits={undefined}
          />
        </View>
      </View>
    </View>
  );
}

function DrawerNavigator() {
  const [testStatus, setTestStatus] = React.useState(false);
  const [loading, setLoading] = useState<boolean>(true);
  const {
    authReducer: { identity },
  } = useSelector((state: RootState) => state);

  const fetchTestStatus = async () => {
    setLoading(true);
    try {
      const status = !!(await AsyncStorage.getItem(
        `@user_${identity.email}_testDone`
      ));
      setTestStatus(status);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTestStatus();
  }, []);
  if (loading) {
    return <ActivityIndicator />;
  }
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      initialRouteName={testStatus ? "Home" : "Test"}
    >
      <Drawer.Screen name="Home" component={BottomTabNavigator} />
      <Drawer.Screen name="Test" component={TestNavigator} />
    </Drawer.Navigator>
  );
}

const GoalsStack = createStackNavigator();

function GoalsNavigator() {}

function TestNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={SECOND_PART_DESCRIPTION_SCREEN}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={TAKE_TEST} component={TakeTestScreen} />
      <Stack.Screen
        name={TEST_SCREEN}
        component={TestScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name={EXAMINATION_SCREEN}
        component={ExaminationScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={PROFESSIONAL_EXAMINATION_SCREEN}
        component={ProfessionalExaminationScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={GOALS_SCREEN}
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={CONGRATULATIONS_SCREEN}
        component={CongratulationsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={TEST_FILL_INFO}
        component={TestFillInfo}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={PROFESSIONAL_PREPARATIONS_SCREEN}
        component={ExaminationPreparationsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={SILVER_CONGRATULATIONS_SCREEN}
        component={SilverCongratulationsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={RECOMENDATION_SCREEN}
        component={RecomendationScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={SECOND_PART_DESCRIPTION_SCREEN}
        component={SecondPartDescriptionScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={HEALTH_PROFILE_SCREEN}
        component={HealthProfileScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={DESCRIPTION_SCREEN}
        component={DescriptionScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
