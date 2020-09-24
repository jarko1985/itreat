import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "../App/Screens/HomeScreen";
import Header from "../shared/Header";

const screens = {
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} title="itreat" />,
        headerStyle: { backgroundColor: "#000" },
      };
    },
  },
};

export default HomeStack = createStackNavigator(screens);
