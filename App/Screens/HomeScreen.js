import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Platform,
  Button,
  TouchableOpacity,
  Alert,
} from "react-native";

import { useFonts, Modak_400Regular } from "@expo-google-fonts/modak";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";

export default function HomeScreen() {
  let [fontsLoaded] = useFonts({
    Modak_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <ImageBackground
        style={styles.container}
        source={require("../../assets/bg.jpg")}
      >
        <View style={styles.iconBox1}>
          <View style={styles.iconContainer}>
            <MaterialCommunityIcons
              style={{ alignSelf: "center" }}
              name="truck-delivery"
              size={30}
              color="#FFF"
            />
            <Text style={{ color: "#FFF" }}>Delivery</Text>
          </View>
          <View style={styles.iconContainer}>
            <AntDesign
              style={{ alignSelf: "center" }}
              name="calendar"
              size={30}
              color="#FFF"
            />
            <Text style={{ color: "#FFF" }}>Booking</Text>
          </View>
        </View>
        <View style={styles.textView}>
          <Text
            style={{
              fontFamily: "Modak_400Regular",
              fontSize: 60,
              color: "#F8D210",
              backgroundColor: "#000",
              padding: 10,
              borderRadius: 30,
            }}
          >
            itreat
          </Text>
        </View>
        <View style={styles.iconBox1}>
          <View style={styles.iconContainer1}>
            <MaterialCommunityIcons
              style={{ alignSelf: "center" }}
              name="barcode-scan"
              size={30}
              color="#FFF"
            />
            <Text style={{ color: "#FFF" }}>Payment</Text>
          </View>
          <View style={styles.iconContainer1}>
            <MaterialCommunityIcons
              style={{ alignSelf: "center" }}
              name="cart"
              size={30}
              color="#FFF"
            />
            <Text style={{ color: "#FFF" }}>comme</Text>
          </View>
        </View>
        <View style={styles.btnView}>
          <TouchableOpacity
            style={{
              backgroundColor: "#FF0D86",
              flexDirection: "row",
              paddingHorizontal: 30,
              paddingVertical: 20,
              borderRadius: 30,
            }}
            onPress={() => alert("learn more Pressed")}
          >
            <Text style={{ color: "#FFF", fontSize: 16 }}>learn more</Text>
            <MaterialCommunityIcons
              name="chevron-double-down"
              size={20}
              color="#FFF"
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //marginTop: Platform.OS === "android" ? 50 : null,
  },
  iconBox1: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  textView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  btnView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  iconContainer: {
    backgroundColor: "#000",
    borderRadius: 40,
    padding: 15,
  },
  iconContainer1: {
    backgroundColor: "#000",
    padding: 15,
    borderRadius: 40,
  },
});
