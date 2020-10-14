import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const Home = () => {
  const [questions, setQuestions] = useState([]);
  const [answers, setUserAnswers] = useState([]);

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
