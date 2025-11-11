import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const DanhSachTruyenCuoi = () => {
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.headerText}>Con gái</Text>
      </View>

      <TouchableOpacity style={styles.row}>
        <Text style={styles.icon}>☺︎</Text>
        <Text style={styles.itemText}>Việc học</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.row}>
        <Text style={styles.icon}>☺︎</Text>
        <Text style={styles.itemText}>Đỡ hai bên rồi</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.row}>
        <Text style={styles.icon}>☺︎</Text>
        <Text style={styles.itemText}>Cũng như nhau</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.row}>
        <Text style={styles.icon}>☺︎</Text>
        <Text style={styles.itemText}>Rất lạnh</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.row}>
        <Text style={styles.icon}>☺︎</Text>
        <Text style={styles.itemText}>Im lặng là vàng</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.row}>
        <Text style={styles.icon}>☺︎</Text>
        <Text style={styles.itemText}>Bài học về số nợ đã</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.row}>
        <Text style={styles.icon}>☺︎</Text>
        <Text style={styles.itemText}>Chưa chi đã đau</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.row}>
        <Text style={styles.icon}>☺︎</Text>
        <Text style={styles.itemText}>1 xu và 1 phút</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.row}>
        <Text style={styles.icon}>☺︎</Text>
        <Text style={styles.itemText}>Sao còn chưa thấy?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.row}>
        <Text style={styles.icon}>☺︎</Text>
        <Text style={styles.itemText}>Di tích hóa thạch</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.row}>
        <Text style={styles.icon}>☺︎</Text>
        <Text style={styles.itemText}>Nhầm lẫn tai hại</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.row}>
        <Text style={styles.icon}>☺︎</Text>
        <Text style={styles.itemText}>Cảnh giác</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFF" },
  header: {
    height: 50,
    backgroundColor: "#4CAF50",
    justifyContent: "center",
    paddingLeft: 15,
  },
  headerText: { color: "#FFF", fontSize: 18, fontWeight: "600" },
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderBottomColor: "#EEE",
    borderBottomWidth: 1,
  },
  icon: { fontSize: 30, marginRight: 12, color: "#4CAF50" },
  itemText: { fontSize: 16, color: "#444" },
});

export default DanhSachTruyenCuoi;
