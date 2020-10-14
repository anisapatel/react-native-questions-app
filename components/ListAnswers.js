import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  TextInput,
} from "react-native";

const ListAnswers = ({ item, addResponse }) => {
  const [rank, setRank] = useState(null);
  const [option, setOption] = useState("");
  const [response, setResponse] = useState({});

  const handleChange = (text) => {
    setRank(text);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => addResponse(item)}>
        <Text style={styles.text}>{item}</Text>
      </TouchableOpacity>
      <View style={styles.rankContainer}>
        <TextInput
          style={styles.input}
          placeholder="Rank number"
          keyboardType="numeric"
          onChangeText={handleChange}
        />
      </View>
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
  rankContainer: {
    justifyContent: "flex-end",
    alignSelf: "flex-end",
  },
  //   input: {
  //     height: 50,
  //     padding: 8,
  //     fontSize: 16,
  //   },
});
