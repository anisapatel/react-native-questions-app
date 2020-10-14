import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";

const ListAnswers = ({ item, addResponse }) => {
  return (
    <TouchableOpacity onPress={() => addResponse(item)}>
      <View style={styles.container}>
        <Text style={styles.text}>{item}</Text>
      </View>
    </TouchableOpacity>
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
});
