import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import { RadioButton } from "react-native-paper";
import { TextInput } from "react-native-gesture-handler";

const ContactScreen = () => {
  const [checked, setChecked] = React.useState("first");
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>Are you interested in?</Text>
      </View>
      <View style={styles.iconContainer}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <MaterialCommunityIcons name="truck-delivery" size={30} />
          <RadioButton
            value="first"
            status={checked === "first" ? "checked" : "unchecked"}
            onPress={() => setChecked("first")}
          />
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <AntDesign name="calendar" size={30} />
          <RadioButton
            value="second"
            status={checked === "second" ? "checked" : "unchecked"}
            onPress={() => setChecked("second")}
          />
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <MaterialCommunityIcons name="barcode-scan" size={30} />
          <RadioButton
            value="third"
            status={checked === "third" ? "checked" : "unchecked"}
            onPress={() => setChecked("third")}
          />
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <MaterialCommunityIcons name="cart" size={30} />
          <RadioButton
            value="fourth"
            status={checked === "fourth" ? "checked" : "unchecked"}
            onPress={() => setChecked("fourth")}
          />
        </View>
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.textStyle}>Tell us who are you?</Text>
        <TextInput
          style={styles.textInputStyle}
          defaultValue="shop name"
          autoCorrect={false}
        />
        <TextInput
          style={styles.textInputStyle}
          defaultValue="company email"
          autoCorrect={false}
        />
        <TextInput
          style={styles.textInputStyle}
          defaultValue="company  number"
          autoCorrect={false}
        />
        <TextInput
          style={styles.textInputStyle}
          defaultValue="shop Address"
          autoCorrect={false}
        />
        <TouchableOpacity
          style={{
            backgroundColor: "#FF0D86",
            flexDirection: "row",
            paddingHorizontal: 30,
            paddingVertical: 20,
            borderRadius: 30,
            justifyContent: "space-between",
          }}
          onPress={() => alert("Send inquiry pressed")}
        >
          <Text style={{ color: "#FFF", fontSize: 16, marginRight: 10 }}>
            send inquiry
          </Text>
          <MaterialCommunityIcons
            name="chevron-double-right"
            size={25}
            color="#FFF"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ContactScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textContainer: {
    flex: 0.5,
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  iconContainer: {
    flex: 0.5,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  formContainer: {
    flex: 2,
    alignItems: "center",
  },
  // callContainer: {
  //   flex: 1,
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
  textStyle: {
    color: "#FF0D86",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    alignSelf: "center",
  },
  textInputStyle: {
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    lineHeight: 1,
    textAlign: "center",
    marginVertical: 12,
    marginHorizontal: 10,
    width: 300,
  },
});
