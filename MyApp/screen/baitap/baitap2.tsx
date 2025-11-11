import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { LANG_VI, LANG_EN, LANG_FR } from "../../assets/setting/Language";

export default function BaiTap2() {
  const [lang, setLang] = useState(LANG_VI);

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.topBarText}>{lang.appName}</Text>
      </View>

      <Text style={styles.title}>{lang.welcome}</Text>

      <TextInput placeholder={lang.email} style={styles.input} placeholderTextColor="#ccc" />
      <TextInput placeholder={lang.password} style={styles.input} placeholderTextColor="#ccc" />

      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>{lang.login}</Text>
      </TouchableOpacity>

      <Text style={styles.noAccount}>{lang.noAccount}</Text>

      <View style={styles.languageRow}>
        <TouchableOpacity onPress={() => setLang(LANG_VI)}>
          <Text style={styles.langBtn}>{lang.vietnamese}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setLang(LANG_EN)}>
          <Text style={styles.langBtn}>{lang.english}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setLang(LANG_FR)}>
          <Text style={styles.langBtn}>{lang.french}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F1D66",
    padding: 20,
    paddingTop: 50,
  },
  topBar: {
    backgroundColor: "#3F51B5",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  topBarText: { color: "#fff", fontSize: 16 },
  title: {
    fontSize: 32,
    color: "#fff",
    textAlign: "center",
    marginTop: 40,
    marginBottom: 30,
  },
  input: {
    backgroundColor: "transparent",
    borderBottomWidth: 1,
    borderBottomColor: "#C2185B",
    color: "#fff",
    fontSize: 16,
    marginBottom: 25,
  },
  loginBtn: {
    backgroundColor: "#ddd",
    paddingVertical: 12,
    borderRadius: 5,
    marginTop: 10,
  },
  loginText: {
    textAlign: "center",
    color: "#000",
    fontSize: 16,
  },
  noAccount: {
    color: "#fff",
    textAlign: "center",
    marginTop: 20,
  },
  languageRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 35,
  },
  langBtn: {
    color: "#fff",
    fontSize: 16,
  },
});
