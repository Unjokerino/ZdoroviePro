import React, { useState } from "react";
import {
  ImageBackground,
  Image,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Caption, Title } from "react-native-paper";
import { View } from "../../components/Themed";
import styles from "./styles";
import Icons from "../../assets/icons";
import Button from "../../components/Button";
import * as Animatable from "react-native-animatable";
import { IS_IOS, REGISTRATION_SCREEN } from "../../constants";
import {
  signIn as signInAction,
  signUp as signUpAction,
} from "../../store/actions";
import { SHOW_SNACK_BAR } from "../../store/action-types";
import { useDispatch } from "react-redux";
import SocialButton from "../../components/SocialButton";

const keyboardBehavior = IS_IOS ? "padding" : undefined;

export default function TestScreen({ navigation }) {
  const dispatch = useDispatch();
  const [password, setPassword] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [isValidEmail, setIsValidEmail] = useState<boolean | undefined>();
  const signIn = () => {
    if (email && password && isValidEmail) {
      dispatch(signInAction({ email, password }));
    } else {
      dispatch({
        type: SHOW_SNACK_BAR,
        payload: "Введите email и пароль",
      });
    }
  };

  const validateEmail = (mail: string) => {
    if (
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        mail
      )
    ) {
      return true;
    }

    return false;
  };

  const signUp = () => {
    if (email && password && isValidEmail) {
      navigation.navigate(REGISTRATION_SCREEN, { email, password });
    } else {
      dispatch({
        type: SHOW_SNACK_BAR,
        payload: "Введите email и пароль",
      });
    }
  };

  const onEmailChange = (email: string) => {
    setEmail(email);
    const isValid = validateEmail(email);

    setIsValidEmail(isValid);
  };

  const socialAuth = () => {
    alert("Данный тип авторизации недоступен на данный момент.");
  };

  return (
    <KeyboardAvoidingView behavior={keyboardBehavior} style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/backgroundLines.png")}
        style={styles.container}
      >
        <Animatable.Image
          animation="bounceIn"
          style={styles.icon}
          source={require("../../assets/images/icon.png")}
        />
        <Title style={styles.title}>Здоровье PRO</Title>

        <ScrollView style={styles.wrapper}>
          <View
            style={[
              styles.inputContainer,
              isValidEmail === false ? { backgroundColor: "#e91e63" } : {},
            ]}
          >
            <Icons.MailIcon />
            <TextInput
              onChangeText={onEmailChange}
              value={email || ""}
              autoCompleteType="email"
              placeholder="Email"
              style={styles.input}
            />
          </View>
          <View style={styles.inputContainer}>
            <Icons.LockIcon />
            <TextInput
              value={password || ""}
              onChangeText={setPassword}
              autoCompleteType="password"
              placeholder="Password"
              style={styles.input}
              secureTextEntry
            />
          </View>
          <Button title="Войти" mode="contained" onPress={signIn} />
          <Button
            backgroundColor="#fff"
            textColor="#6360FF"
            style={{ marginTop: 20 }}
            title="Регистрация"
            mode="contained"
            onPress={signUp}
          />

          <Caption style={styles.caption}>
            Или регистрация через социальные сети
          </Caption>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <SocialButton icon="Google" onPress={socialAuth} />
            <SocialButton icon="Vk" onPress={socialAuth} />
            <SocialButton icon="Apple" onPress={socialAuth} />
          </View>
          <View
            style={{
              height: 1,
              backgroundColor: "#B3B3B3",
              marginVertical: 27,
            }}
          />
          <TouchableOpacity
            onPress={() => alert("Ссылки скоро появятся")}
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              marginBottom: 50,
              alignItems: "center",
            }}
          >
            <Image
              resizeMode="contain"
              style={styles.socialIcon}
              source={require("../../assets/images/vk.png")}
            />
            <Image
              resizeMode="contain"
              style={styles.socialIcon}
              source={require("../../assets/images/fb.png")}
            />
            <Image
              resizeMode="contain"
              style={styles.socialIcon}
              source={require("../../assets/images/insta.png")}
            />
            <Image
              resizeMode="contain"
              style={styles.socialIcon}
              source={require("../../assets/images/youtube.png")}
            />
            <Image
              resizeMode="contain"
              style={styles.socialIconBig}
              source={require("../../assets/images/nmic.png")}
            />
            <Image
              resizeMode="contain"
              style={styles.socialIconBig}
              source={require("../../assets/images/vshous.png")}
            />
          </TouchableOpacity>
        </ScrollView>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
}
