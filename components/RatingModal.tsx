import { useNavigation } from "@react-navigation/native";
import moment from "moment";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { IconButton, Title } from "react-native-paper";
import { useDispatch } from "react-redux";
import Button from "./Button";
import { Rating, AirbnbRating } from "react-native-ratings";
//@ts-ignore
import { updateTask } from "../store/actions";

export default function RatingModal() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);

  const send = () => {
    const update = {
      comment,
      rating,
    };
    dispatch(updateTask(update));
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <IconButton
        onPress={() => navigation.goBack()}
        color="#fff"
        icon="close"
      />
      <ScrollView
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.dateContainer}>
          <Text style={styles.text}>{moment().format("D MMMM YYYY")}</Text>
        </View>
        <Title style={styles.text}>Как вы себя чувствуете?</Title>
        <Rating
          type="heart"
          tintColor="#6360FF"
          onFinishRating={setRating}
          style={{ paddingVertical: 10 }}
        />
        <Text style={styles.text}>
          Оцените свое самочувствие по 5 бальной системе
        </Text>
        <KeyboardAvoidingView behavior="height">
          <TextInput
            value={comment}
            onChangeText={setComment}
            placeholderTextColor="#fff"
            style={styles.textInput}
            placeholder="Оставьте ваш комментарий к записи"
            numberOfLines={6}
            multiline
          />
        </KeyboardAvoidingView>
        <Button
          mode="contained"
          onPress={send}
          backgroundColor="#FF8181"
          textColor="#fff"
          title="Завершить"
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#6360FF",
  },
  textInput: {
    padding: 20,
    borderRadius: 30,
    marginVertical: 20,

    height: 300,
    backgroundColor: "#4642EE",
    color: "#fff",
  },
  text: {
    color: "#fff",
    textAlign: "center",
  },

  dateContainer: {
    flexDirection: "row",
    marginVertical: 30,
  },
});
