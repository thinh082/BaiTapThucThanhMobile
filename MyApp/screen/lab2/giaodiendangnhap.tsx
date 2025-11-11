import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function GiaoDienDangNhap() {
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.headerLogin}>Đăng nhập</Text>
      </View>

      <View style={styles.form}>

        <View style={styles.inputWrapper}>
          <Ionicons name="mail-outline" size={20} color="#666" style={styles.inputIcon} />
          <TextInput
            placeholder="Email"
            placeholderTextColor="#666"
            style={styles.input}
          />
        </View>


        <View style={styles.inputWrapper}>
          <Ionicons name="key-outline" size={20} color="#666" style={styles.inputIcon} />
          <TextInput
            placeholder="Mật khẩu"
            placeholderTextColor="#666"
            secureTextEntry
            style={styles.input}
          />
        </View>

        <Text style={styles.forgot}>Quên mật khẩu?</Text>

        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>Đăng nhập</Text>
        </TouchableOpacity>

        <Text style={styles.footer}>
          Không có tài khoản?
          <Text style={styles.register}> Đăng ký</Text>
        </Text>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F1EF",
  },

  header: {
    height: 230,
    backgroundColor: "orange",
    borderBottomRightRadius: 80,
    padding: 20,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  headerLogin: {
    color: "#fff",
    fontSize: 22,
    marginBottom: 20,
  },

  form: {
    padding: 20,
    marginTop: 10,
  },

  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 25,
    paddingHorizontal: 15,
    marginBottom: 15,
  },

  inputIcon: {
    marginRight: 10,
  },

  input: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 15,
    color: "#333",
  },

  forgot: {
    textAlign: "right",
    color: "#555",
    marginBottom: 20,
  },

  loginBtn: {
    backgroundColor: "orange",
    padding: 13,
    borderRadius: 25,
  },
  loginText: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },

  footer: {
    textAlign: "center",
    marginTop: 30,
    color: "#444",
  },

  register: {
    color: "orange",
    fontWeight: "600",
  },
});
