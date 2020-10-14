import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import ListAnswers from "./ListAnswers";

const QuestionCard = ({ question, answers, userResponses }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Question: {question}</Text>
      <FlatList
        style={{ flex: 1 }}
        data={answers}
        renderItem={({ item }) => <ListAnswers item={item} />}
      />
    </View>
  );
};

export default QuestionCard;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    // backgroundColor: "#ffffff",
    // padding: 20,
  },
  text: {
    fontSize: 20,
  },
});
