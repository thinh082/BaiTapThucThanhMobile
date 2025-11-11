import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import * as ScreenOrientation from "expo-screen-orientation";

export default function BaiTap1() {
  const [lock, setLock] = useState(false);

  const handleToggle = async () => {
    if (lock) {
      await ScreenOrientation.unlockAsync();
      setLock(false);
    } else {
      await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.PORTRAIT_UP
      );
      setLock(true);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TouchableOpacity
        onPress={handleToggle}
        style={{
          backgroundColor: lock ? "red" : "green",
          padding: 15,
          borderRadius: 10,
        }}
      >
        <Text style={{ color: "#fff", fontSize: 18 }}>
          {lock ? "OFF (không cho xoay ngang)" : "ON (cho phép xoay ngang)"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
