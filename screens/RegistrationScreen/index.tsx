import React, { ReactElement, useEffect, useState } from "react";
import { Image, TextInput, Text, Linking } from "react-native";
import { RadioButton, Title, Checkbox } from "react-native-paper";
import { View } from "../../components/Themed";
import styles from "./styles";
import Icons from "../../assets/icons";
import Button from "../../components/Button";
import { IS_IOS, REGISTRATION_SCREEN } from "../../constants";
import {
  signUp as signUpAction,
  signIn as signInAction,
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
  const { email, password } = route.params;
  const [gender, setGender] = useState("");
  const [personalInfoAgreement, setPersonalInfoAgreement] = useState(false);
  const [medicalInervAgreement, setMedicalInervAgreement] = useState(false);
  const [calculatedAge, setCalculatedAge] = useState<number | undefined>();

  useEffect(() => {
    const bd = moment(birthDate?.split("/").reverse().join(""));
    const delta = moment().diff(bd, "years");
    setCalculatedAge(delta);
  }, [birthDate]);

  const signUp = () => {
    dispatch(signUpAction({ email, password }));
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

  return (
    <CustomSplash
      title="Здоровье PRO"
      image={
        <Image
          style={styles.icon}
          source={require("../../assets/images/icon.png")}
        />
      }
    >
      <View>
        <View style={styles.inputContainer}>
          <Icons.MailIcon />
          <TextInput
            onChangeText={setName}
            value={name || ""}
            placeholder="ФИО"
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
            placeholder="Дата рождения (день, месяц, год)"
            value={birthDate || ""}
            onChangeText={setBirthDate}
            style={styles.input}
            keyboardType="number-pad"
          />
        </View>
        {!!calculatedAge && (
          <View style={[typography.row, { marginBottom: 20 }]}>
            <Text>В этом году вам исполнилось</Text>
            <Text style={{ fontWeight: "bold" }}> {calculatedAge}</Text>
          </View>
        )}
        <Text>Пол</Text>
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
            <Text style={styles.gender}>Мужской</Text>
          </View>
          <View style={[typography.row, { marginLeft: 33 }]}>
            <RadioButton
              color="#6360FF"
              value="female"
              status={gender === "female" ? "checked" : "unchecked"}
              onPress={() => setGender("female")}
            />
            <Text style={styles.gender}>Женский</Text>
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
            <Text style={styles.description}>Согласие на обработку </Text>
            <Link href="https://zdorovie.pro/privacy">персональных данных</Link>
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
              Информированное добровольное согласие на
            </Text>
            <Link href="https://zdorovie.pro/medical ">
              медицинское вмешательство
            </Link>
          </View>
        </View>
        <Button
          style={{ marginTop: 33, marginBottom: 50 }}
          title="Закончить регистрацию"
          mode="contained"
          onPress={signUp}
        />
      </View>
    </CustomSplash>
  );
}
