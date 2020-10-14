import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

const Response = (props) => {
  const { userData } = props.route.params;

  console.log(userData, "<--userData");
  return (
    <View>
      <Text style={styles.text}>Your chosen options were ...</Text>
      {userData.map((response) => {
        return (
          <View style={styles.container}>
            <Text style={styles.text}>{response.text}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default Response;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: "#f8f8f8",
    borderBottomWidth: 1,
    borderColor: "#eee",
    margin: 10,
  },
  text: {
    padding: 20,
    fontSize: 18,
  },
});
