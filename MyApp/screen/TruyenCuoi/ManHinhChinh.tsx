import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ManHinhChinh = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>TRUYỆN CƯỜI</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4C8A2B",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
    letterSpacing: 2,
  },
});

export default ManHinhChinh;
