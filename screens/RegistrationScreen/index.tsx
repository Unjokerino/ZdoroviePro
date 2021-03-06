import React, { useEffect, useState } from "react";
import { Image, TextInput, Linking } from "react-native";
import { Text } from "../../components/Themed";
import { Checkbox } from "react-native-paper";
import { View } from "../../components/Themed";
import styles from "./styles";
import Icons from "../../assets/icons";
import Button from "../../components/Button";
import { IS_IOS, REGISTRATION_SCREEN } from "../../constants";

import {
  signUp as signUpAction,
  signIn as signInAction,
  //@ts-ignore
} from "../../store/actions";
import { useDispatch } from "react-redux";
import moment from "moment";
import { LoginStackParamList } from "../../types";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { typography } from "../../constants/Typography";
import CustomSplash from "../../components/CustomSplash";
import { TextInputMask } from "react-native-masked-text";
import { TouchableOpacity } from "react-native-gesture-handler";
import RadioButton from "../../components/RadioButton";
import { SHOW_SNACK_BAR } from "../../store/action-types";

const keyboardBehavior = IS_IOS ? "padding" : "height";

interface Props {
  navigation: StackNavigationProp<
    LoginStackParamList,
    typeof REGISTRATION_SCREEN
  >;
  route: RouteProp<LoginStackParamList, typeof REGISTRATION_SCREEN>;
}

export default function RegistrationScreen({ navigation, route }: Props) {
  const dispatch = useDispatch();
  const [birthDate, setBirthDate] = useState<string | null>(null);
  const [name, setName] = useState<string | null>(null);
  const { email: tEmail, password: tPassword } = route.params;
  const [gender, setGender] = useState("");
  const [personalInfoAgreement, setPersonalInfoAgreement] = useState(false);
  const [medicalInervAgreement, setMedicalInervAgreement] = useState(false);
  const [calculatedAge, setCalculatedAge] = useState<number | undefined>();
  const [password, setPassword] = useState<string | null>(tPassword);
  const [email, setEmail] = useState<string | null>(tEmail);
  const [isValidEmail, setIsValidEmail] = useState<boolean | undefined>();

  useEffect(() => {
    const bd = moment(birthDate?.split("/").reverse().join(""));
    const delta = moment().diff(bd, "years");
    setCalculatedAge(delta);
  }, [birthDate]);

  const signUp = () => {
    if (email && password && isValidEmail) {
      dispatch(signUpAction({ email, password }));
    } else {
      dispatch({
        type: SHOW_SNACK_BAR,
        payload: "?????????????? email ?? ????????????",
      });
    }
  };

  const Link = ({ children, href }: { children: string; href: string }) => (
    <TouchableOpacity
      onPress={() => {
        Linking.openURL(href);
      }}
    >
      <Text style={[styles.description, { textDecorationLine: "underline" }]}>
        {children}
      </Text>
    </TouchableOpacity>
  );

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

  const onEmailChange = (email: string) => {
    setEmail(email);
    const isValid = validateEmail(email);

    setIsValidEmail(isValid);
  };

  return (
    <CustomSplash
      title="???????????????? PRO"
      image={
        <Image
          style={styles.icon}
          source={require("../../assets/images/icon.png")}
        />
      }
    >
      <>
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
        <View>
          <View style={styles.inputContainer}>
            <Icons.MailIcon />
            <TextInput
              onChangeText={setName}
              value={name || ""}
              placeholder="??????"
              style={styles.input}
            />
          </View>
          <View style={styles.inputContainer}>
            <Icons.LockIcon />
            <TextInputMask
              type={"datetime"}
              options={{
                format: "DD/MM/YYYY",
              }}
              placeholder="???????? ???????????????? (????????, ??????????, ??????)"
              value={birthDate || ""}
              onChangeText={setBirthDate}
              style={styles.input}
              keyboardType="number-pad"
            />
          </View>
          {!!calculatedAge && (
            <View style={[typography.row, { marginBottom: 20 }]}>
              <Text>?? ???????? ???????? ?????? ??????????????????????</Text>
              <Text style={{ fontWeight: "bold" }}> {calculatedAge}</Text>
            </View>
          )}
          <Text>??????</Text>
          <View
            style={[
              typography.row,
              { justifyContent: "flex-start", marginBottom: 15 },
            ]}
          >
            <View style={[typography.row]}>
              <RadioButton
                color="#6360FF"
                value="male"
                status={gender === "male" ? "checked" : "unchecked"}
                onPress={() => setGender("male")}
              />
              <Text style={styles.gender}>??????????????</Text>
            </View>
            <View style={[typography.row, { marginLeft: 33 }]}>
              <RadioButton
                color="#6360FF"
                value="female"
                status={gender === "female" ? "checked" : "unchecked"}
                onPress={() => setGender("female")}
              />
              <Text style={styles.gender}>??????????????</Text>
            </View>
          </View>
          <View style={[typography.row]}>
            <Checkbox
              color="#DF88B0"
              status={personalInfoAgreement ? "checked" : "unchecked"}
              onPress={() => {
                setPersonalInfoAgreement(!personalInfoAgreement);
              }}
            />
            <View style={[typography.row, { flex: 1, flexWrap: "wrap" }]}>
              <Text style={styles.description}>???????????????? ???? ?????????????????? </Text>
              <Link href="https://zdorovie.pro/privacy">
                ???????????????????????? ????????????
              </Link>
            </View>
          </View>
          <View style={[typography.row]}>
            <Checkbox
              color="#77A2D3"
              status={medicalInervAgreement ? "checked" : "unchecked"}
              onPress={() => {
                setMedicalInervAgreement(!medicalInervAgreement);
              }}
            />
            <View style={[typography.row, { flex: 1, flexWrap: "wrap" }]}>
              <Text style={styles.description}>
                ?????????????????????????????? ???????????????????????? ???????????????? ????
              </Text>
              <Link href="https://zdorovie.pro/medical ">
                ?????????????????????? ??????????????????????????
              </Link>
            </View>
          </View>
          <Button
            style={{ marginTop: 33, marginBottom: 50 }}
            title="?????????????????? ??????????????????????"
            mode="contained"
            onPress={signUp}
          />
        </View>
      </>
    </CustomSplash>
  );
}
