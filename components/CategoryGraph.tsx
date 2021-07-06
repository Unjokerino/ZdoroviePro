import * as React from "react";
import { Text, StyleSheet } from "react-native";

export default function (category: number, points: number) {
  const getContent = () => {
    switch (category) {
      case 0:
        if (points >= 0 && points < 2) {
          return { result: 0 };
        }
        if (points >= 3 && points < 7) return { result: 50 };
        if (points >= 7) return { result: 100 };
        return { result: points };
      case 1:
        if (points >= 42) return { result: 100 };
        if (points >= 28 && points <= 42) return { result: 75 };
        if (points >= 15 && points <= 27) return { result: 50 };
        if (points < 15) return { result: points };
        return { result: 0 };
      case 2:
        if (points > 20) return { result: 100 };
        if (points >= 6 && points <= 20) return { result: 50 };
        if (points <= 5) return { result: 0 };
        return { result: 0 };
      case 3:
        if (points >= 12) return { result: 100 };
        if (points >= 5 && points < 12) return { result: 75 };
        if (points >= 3 && points <= 4) return { result: 50 };
        if (points <= 2) return { result: points };
        return { result: 0 };
      case 4:
        if (points > 9) return { result: 100 };
        if (points <= 8 && points >= 3) return { result: 50 };
        if (points <= 8 && points >= 3) return { result: points };
        return { result: 0 };
      case 5:
        if (points > 109) return { result: 100 };
        if (points >= 85 && points <= 108) return { result: 75 };
        if (points >= 62 && points <= 84) return { result: 50 };
        if (points > 38 && points < 62) return { result: 25 };
        if (points < 38) return { result: points };
        return { result: 0 };
      default:
        return { result: 0 };
    }
  };

  return getContent();
}

const styles = StyleSheet.create({
  good: {
    color: "#009688",
  },
  normal: {
    color: "#ff9800",
  },
  terrible: {
    color: "#D8000C",
  },
  bad: {
    color: "#e91e63",
  },
});
