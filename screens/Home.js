import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { questionData } from "../data/index";
import QuestionCard from "../components/QuestionCard";

const Home = ({ navigation }) => {
  const [questions, setQuestions] = useState(questionData);
  const [answers, setUserAnswers] = useState([]);
  const [number, setNumber] = useState(0);

  //   useEffect(() => {
  //     fetchQuestions();
  //   }, []);

  //   const fetchQuestions = () => {
  //     setQuestions(questionData);
  //     setNumber(0);
  //   };

  const handleSubmit = (responses) => {
    console.log(responses, "<--responses");
    navigation.navigate("Response", { userData: responses });
  };

  return (
    <View style={styles.container}>
      <QuestionCard
        question={questions[0].question}
        answers={questions[0].answers}
        questionNum={number + 1}
        handleSubmit={handleSubmit}
      />
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
