import * as React from "react";
import {
  Text,
  StyleSheet,
  StyleProp,
  TextStyle,
  TextProps,
} from "react-native";

export default function ({
  points,
  category,
  style,
  ...otherProps
}: {
  style?: StyleProp<TextStyle>;
  points: number;
  category: number;
} & TextProps) {
  const getContent = () => {
    switch (category) {
      case 0:
        if (points >= 0 && points < 2) {
          return (
            <Text {...otherProps} style={[styles.good, style]}>
              Никотиновая зависимость не выявлена
            </Text>
          );
        }
        if (points >= 3 && points < 7)
          return (
            <Text {...otherProps} style={[styles.normal, style]}>
              Слабая или умеренно выраженная никотиновая зависимость
            </Text>
          );
        if (points >= 7)
          return (
            <Text {...otherProps} style={[styles.bad, style]}>
              Сильно выраженная никотиновая зависимость
            </Text>
          );
        return <Text {...otherProps}></Text>;
      case 1:
        if (points >= 42)
          return (
            <Text {...otherProps} style={[styles.terrible, style]}>
              Потребление животного жира очень высокое - ваша диета содержит
              много жира и холестерина. Вам необходимо реже потреблять жирное
              мясо и мясные продукты, субпродукты и колбасные изделия. Замените
              их на низкожировые сорта мяса (грудка индейки, курицы). Ограничьте
              сливочное масло до 10-20г в день. Отдавайте предпочтение
              низкожировым сортам молочных продуктов: сыр 17% и менее, творог 5%
              и менее; йогурты , молоко и кефир 1-1,5%
            </Text>
          );
        if (points >= 28 && points <= 42)
          return (
            <Text {...otherProps} style={[styles.bad, style]}>
              Потребление животного жира высокое. Вы довольно часто потребляете
              жирные продукты. Отдавайте предпочтение низкожировым сортам мяса,
              реже потребляйте промышленно-переработанное мясо. Попытайтесь их
              уменьшить потребление жира, начав с продуктов, для которых Вы
              набрали наибольшее количество баллов. При приготовлении пище не
              используйте жиры, включая растительные. Не жарьте. Ограничьте
              сливочное масло до 10-20г в день. Отдавайте предпочтение
              низкожировым сортам молочных продуктов: сыр 17% и менее, творог 5%
              и менее; йогурты , молоко и кефир 1-1,5%
            </Text>
          );
        if (points >= 15 && points <= 27)
          return (
            <Text {...otherProps} style={[styles.normal, style]}>
              Вы потребляете животные жиры больше рекомендуемой величины.
              Выбирайте продукты с меньшим содержанием жира (см. этикетку).
            </Text>
          );
        if (points < 15)
          return (
            <Text {...otherProps} style={[styles.good, style]}>
              Потребление животных жиров в норме
            </Text>
          );
        return <Text {...otherProps}></Text>;
      case 2:
        if (points > 20)
          return (
            <Text style={[styles.bad, style]}>
              Ваше потребление важных компонентов питания: клетчатки, витаминов,
              микроэлементов очень низкое. Вам следует включить в свой рацион
              больше овощей, фруктов и зерновых продуктов. Овощей и фруктов, не
              считая картофеля, в рационе должно быть 400-500г и более. Замените
              соки и компоты на свежие или замороженные фрукты, а сахар – на
              сухофрукты. Рекомендуется половину хлеба потреблять в виде
              цельнозернового хлеба, или хлеба с отрубями; а крупы, макароны –
              из неочищенных и рафинированных продуктов.
            </Text>
          );
        if (points >= 6 && points <= 20)
          return (
            <Text {...otherProps} style={[styles.normal, style]}>
              Ваше потребление важных компонентов питания: клетчатки, витаминов,
              микроэлементов низкое Вам следует включить в свой рацион больше
              овощей и фруктов – до 400г и более. Откажитесь от каш быстрого
              приготовления. Отдавайте предпочтение цельнозерновому или
              отрубному хлебу.
            </Text>
          );
        if (points <= 5)
          return (
            <Text {...otherProps} style={[styles.good, style]}>
              Вы набрали желаемую сумму баллов. Вы потребляете достаточно
              зерновых продуктов, овощей и фруктов, Придерживайтесь этого
              питания
            </Text>
          );
        return <Text {...otherProps}></Text>;
      case 3:
        if (points >= 12)
          return (
            <Text {...otherProps} style={[styles.terrible, style]}>
              Ваше потребление поваренной соли очень высокое Вы в группе риска
              по развитию артериальной гипертонии. Резко ограничьте или
              исключите потребление маринадов, солений, копченостей и соленой
              рыбы. Консервируйте овощи путем замораживания. Не солите пищу за
              столом. Необходимо ограничить количество поваренной соли при
              приготовлении пищи. Суточное потребление в сумме должно составлять
              до 5г
            </Text>
          );
        if (points >= 5 && points < 12)
          return (
            <Text {...otherProps} style={[styles.bad, style]}>
              Ваше потребление поваренной соли высокое Ограничивайте количество
              тех продуктов, за счет которых набираете большее число баллов.
              Меньше используйте соль при приготовлении пищи. Не солите пищу за
              столом.
            </Text>
          );
        if (points >= 3 && points <= 4)
          return (
            <Text {...otherProps} style={[styles.normal, style]}>
              Ваше потребление поваренной соли превышает рекомендуемую норму в
              5г за сутки. Выбирайте менее соленые продукты. Меньше используйте
              соль при приготовлении пищи. Попробуйте не солить салаты и омлеты.
              Пеките свой хлеб из расчета 1/2ч.л соли на 500г домашнего хлеба.
            </Text>
          );
        if (points <= 2)
          return (
            <Text {...otherProps} style={[styles.good, style]}>
              Спасибо. Вы придерживайтесь разумного потребления поваренной соли,
              продолжайте
            </Text>
          );
        return <Text {...otherProps}></Text>;
      case 4:
        if (points > 9)
          return (
            <Text {...otherProps} style={[styles.terrible, style]}>
              Ваше потребление сахара очень высокое. Вы в группе риска по
              развитию артериальной сахарного диабета и ожирения. Резко
              ограничьте или исключите потребление сладких газированных
              напитков, десерта и мороженого. Необходимо ограничить количество
              сахара, используемого с чаем и кофе. Разбавляйте домашние компоты
              и соки. Консервируйте фрукты не с сахаром, а замораживая. Суточное
              потребление добавленного сахара должно составлять около 30г и
              менее за день
            </Text>
          );
        if (points <= 8 && points >= 3)
          return (
            <Text {...otherProps} style={[styles.normal, style]}>
              Ваше потребление сахара высокое. Ограничьте потребление за счет
              тех продуктов, за счет которых набираете большее количество
              баллов. Попробуйте меньше добавлять сахара в чай и кофе.
            </Text>
          );
        if (points <= 8 && points >= 3)
          return (
            <Text {...otherProps} style={[styles.good, style]}>
              Спасибо. Вы придерживайтесь разумного потребления поваренной соли,
              продолжайте
            </Text>
          );
        return <Text {...otherProps}></Text>;
      case 5:
        if (points > 109)
          return (
            <Text {...otherProps} style={[styles.good, style]}>
              Очень высокая
            </Text>
          );
        if (points >= 85 && points <= 108)
          return (
            <Text {...otherProps} style={[styles.good, style]}>
              Высокая
            </Text>
          );
        if (points >= 62 && points <= 84)
          return (
            <Text {...otherProps} style={[styles.normal, style]}>
              Умеренная{" "}
            </Text>
          );
        if (points > 38 && points < 62)
          return (
            <Text {...otherProps} style={[styles.bad, style]}>
              Низкая
            </Text>
          );
        if (points < 38)
          return (
            <Text {...otherProps} style={[styles.terrible, style]}>
              Очень низкая
            </Text>
          );
        return <Text {...otherProps}></Text>;
      default:
        return <Text {...otherProps}></Text>;
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
