import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const QuestionCard = () => {
  return (
    <View>
      <Text>Question</Text>
      <TouchableOpacity>
        <Text>Answer</Text>
      </TouchableOpacity>
    </View>
  );
};

export default QuestionCard;
