import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { SafeAreaView } from "react-native-safe-area-context";
import { VI, EN } from "../../assets/setting/lang";

export default function ConTho() {
  const [isEnglish, setIsEnglish] = useState(false);
  const lang = isEnglish ? EN : VI;
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{lang.animal}</Text>
      </View>

      <ScrollView contentContainerStyle={styles.container}>

        <View style={styles.row}>
          <View style={styles.titleBadge}>
            <Text style={styles.titleText}>{lang.rabbit}</Text>
          </View>

          <TouchableOpacity>
            <Text style={styles.heart}>♡</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.description}>
          {lang.description_rabbit}
        </Text>

        <Image
          source={require("../../assets/images/contho.jpg")}
          style={styles.image}
          contentFit="cover"
        />
        <TouchableOpacity onPress={() => setIsEnglish(!isEnglish)}>
          <Text style={{ fontSize: 16,backgroundColor: "#7A1FF1",padding: 10,borderRadius: 10 }}>
            {isEnglish ? "VI" : "EN"}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 55,
    backgroundColor: "#7A1FF1",
    justifyContent: "center",
    paddingHorizontal: 15,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "600",
  },

  container: {
    padding: 20,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  titleBadge: {
    backgroundColor: "#7A1FF1",
    paddingVertical: 6,
    paddingHorizontal: 20,
    borderRadius: 25,
  },

  titleText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },

  heart: {
    fontSize: 28,
    color: "red",
    marginRight: 10,
  },

  description: {
    marginTop: 15,
    fontSize: 15,
    color: "#444",
    lineHeight: 22,
  },

  image: {
    marginTop: 20,
    width: "100%",
    height: 260,
    borderRadius: 10,
  },
});
