import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import questionData from "../data/index";

const Home = () => {
  const [questions, setQuestions] = useState([]);
  const [answers, setUserAnswers] = useState([]);

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = () => {
    setQuestions(questionData);
    console.log(questionData, "<--data");
  };

  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
  },
});
