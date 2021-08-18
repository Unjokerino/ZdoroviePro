import React, { useEffect, useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { Text } from "../../components/Themed";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles";
import CustomLayout from "../../components/CustomLayout";
import Button from "../../components/Button";
import { Colors, GOALS_SCREEN, RECOMENDATION_SCREEN } from "../../constants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { RootState } from "../../types/store";
import { Answers } from "../TestScreen";
import { useNavigation } from "@react-navigation/native";
import CategoryResult from "../../components/CategoryResult";
import CategoryGraph from "../../components/CategoryGraph";
import { VictoryBar, VictoryLabel, VictoryTheme } from "victory-native";

export interface CardProps {
  title: string;
  color: string;
  icon: "Graph" | "Activity" | "Food" | "Smoking";
  subtitle: string;
  text: string;
  name: string;
  image: any;
}

export default function HealthProfileScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [testResults, setTestResults] = useState<Answers[]>([]);
  const [testGraphData, setTestGraphData] =
    useState<{ x: number; y: number; label: string | string[] }[]>();
  const {
    testsReducer: { answers, currentTest },
  } = useSelector((state: RootState) => state);

  const getTestResults = async () => {
    const results = await AsyncStorage.getItem("testResults");

    const storedTestResults: Answers[] | undefined = results
      ? JSON.parse(results)
      : undefined;
    const testResults = answers ? answers : storedTestResults;
    setTestResults(testResults);
  };

  useEffect(() => {
    getTestResults();
  }, []);

  useEffect(() => {
    if (testResults.length > 0) {
      const getCategory = (category?: string) => {
        return category?.split(":").map((text) => text.trim());
      };
      const data = testResults.map((answer, index) => ({
        y: CategoryGraph(
          index,
          answer.reduce((acc, cur) => {
            return cur?.answer?.points ? (acc += cur?.answer?.points) : acc;
          }, 0)
        ).result,
        x: index,
        label: getCategory(answer[0].category) || " ",
      }));

      console.log(data);
      setTestGraphData(data);
    }
  }, [testResults]);

  const startGoals = () => {
    navigation.replace(GOALS_SCREEN);
  };

  const chartConfig = {
    backgroundColor: Colors.light.header,
    backgroundGradientFrom: Colors.light.header,
    backgroundGradientTo: Colors.light.header,
    decimalPlaces: 0, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16,
    },
    propsForDots: {
      r: "6",
      strokeWidth: "2",
      stroke: "#ffa726",
    },
  };

  const Card = ({ answers, index }: { answers: Answers; index: number }) => {
    const icon =
      currentTest.categories && currentTest.categories[index].category.icon;

    //const Icon = Icons[icon];
    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() =>
          navigation.navigate(RECOMENDATION_SCREEN, { answers, index })
        }
      >
        <View
          style={[styles.iconContainer, { backgroundColor: "#000" }]}
        ></View>
        <View style={[styles.cardInfo]}>
          <Text style={styles.title}>
            {testGraphData && testGraphData[index].label}
          </Text>
          <CategoryResult
            ellipsizeMode="tail"
            style={styles.subtitle}
            numberOfLines={1}
            category={index}
            points={testGraphData ? testGraphData[index].y : 0}
          />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <CustomLayout>
      <View style={styles.container}>
        <View style={styles.graphContainer}>
          <VictoryBar
            theme={VictoryTheme.material}
            data={testGraphData}
            style={{
              data: {
                fill: ({ datum }) => {
                  if (datum.y > 0 && datum.y < 50) {
                    return Colors.light.header;
                  }
                  if (datum.y >= 50 && datum.y < 75) {
                    return Colors.light.warning;
                  }
                  if (datum.y >= 75) {
                    return Colors.light.error;
                  }
                  return Colors.light.header;
                },

                stroke: "black",
                strokeWidth: 2,
              },
              labels: { fill: "black", fontWeight: "bold" },
            }}
            scale={{ x: "linear", y: "linear" }}
            horizontal
            labelComponent={
              <VictoryLabel x={40} dy={-22} angle={0} verticalAnchor="middle" />
            }
          />
        </View>
        {testResults?.map((answers, index) => (
          <Card answers={answers} index={index} />
        ))}
        <Button
          onPress={startGoals}
          style={{ marginVertical: 20 }}
          textColor="#fff"
          backgroundColor="#6360FF"
          title="Выбрать цели"
        />
      </View>
    </CustomLayout>
  );
}
