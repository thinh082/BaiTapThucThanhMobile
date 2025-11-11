import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ChiTietTruyen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.backText}>{"<"}</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Con gái</Text>
        <View style={{ width: 30 }} /> 
      </View>

      <ScrollView contentContainerStyle={styles.contentWrapper}>
        <Text style={styles.storyTitle}>Ba kể con nghe</Text>

        <Text style={styles.storyText}>
        Khi xưa ba bé hơn đàn
        </Text>
        <Text style={styles.storyText}>
        Nghe guitar rung lên không bao giờ xao lãng
        </Text>
        <Text style={styles.storyText}>
        Dây buông dây bấm ngân vang, âm thanh đi khắp không gian
        </Text>
        <Text style={styles.storyText}>
        Piano lại khó hơn nhiều
        </Text>
        <Text style={styles.storyText}>
        Thêm đôi tay nhỏ bé hơn biết bao nhiêu
        </Text>
        <Text style={styles.storyText}>
        Vẫn lướt trên mặt đàn, vẫn khát khao ngập tràn
        </Text>
        <Text style={styles.storyText}>
            Yêu thương đi khắp không gian.
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 50,
    backgroundColor: "#4CAF50",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    justifyContent: "space-between",
  },
  backText: {
    fontSize: 20,
    color: "#fff",
    width: 30,
  },
  headerTitle: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "600",
  },
  contentWrapper: {
    padding: 20,
  },
  storyTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#4CAF50",
    textAlign: "center",
    marginBottom: 15,
  },
  storyText: {
    fontSize: 16,
    color: "#444",
    marginBottom: 12,
    lineHeight: 22,
  },
});

export default ChiTietTruyen;
