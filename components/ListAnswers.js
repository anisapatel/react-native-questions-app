import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  TextInput,
} from "react-native";

const ListAnswers = ({ answer, addResponse }) => {
  const [rank, setRank] = useState(null);
  const [response, setResponse] = useState({});

  const handleChange = (rank) => {
    console.log(text, "<--text");
    //update rank and text on button
    //{"text": "c#", "rank", 1 }
    //set response and pass that into function instead
    setRank(rank);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => addResponse(answer)}>
        <Text style={styles.text}>{answer}</Text>
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        placeholder="Rank number"
        keyboardType="numeric"
        onChangeText={handleChange}
      />
    </View>
  );
};

export default ListAnswers;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: "#f8f8f8",
    borderBottomWidth: 1,
    borderColor: "#eee",
    margin: 10,
  },
  text: {
    fontSize: 18,
  },
  input: {
    justifyContent: "flex-end",
    alignSelf: "flex-end",
    fontSize: 20,
  },
});
