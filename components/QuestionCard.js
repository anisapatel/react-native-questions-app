import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import ListAnswers from "./ListAnswers";

const QuestionCard = ({ question, answers, userResponses, handleSubmit }) => {
  const [response, setUserResponse] = useState([]);

  const addResponse = (text) => {
    console.log(text, "<--text");
    setUserResponse((prevResponse) => {
      return [{ text }, ...prevResponse];
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Question: {question}</Text>
      <FlatList
        style={{ flex: 1 }}
        data={answers}
        renderItem={({ item }) => (
          <ListAnswers item={item} addResponse={addResponse} />
        )}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleSubmit(response)}
      >
        <Text style={styles.buttonText}>Submit Answers</Text>
      </TouchableOpacity>
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
  },
  text: {
    fontSize: 20,
    padding: 20,
  },
  button: {
    padding: 9,
    margin: 5,
    backgroundColor: "#24a0ed",
    borderRadius: 10,
    width: "70%",
    alignSelf: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
});
