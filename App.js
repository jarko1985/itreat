import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Navigator from "./Routes/Drawer";

export default function App() {
  return (
    <View style={styles.container}>
      <Navigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 56,
    flex: 1,
  },
  textContainer: {
    fontSize: 40,
  },
});
