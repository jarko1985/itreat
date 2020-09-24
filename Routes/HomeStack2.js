import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import ContactScreen from "../App/Screens/ContactScreen";
import Header from "../shared/Header";

const screens = {
  Contact: {
    screen: ContactScreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} title="itreat" />,
        headerStyle: { backgroundColor: "#000" },
      };
    },
  },
};

export default HomeStack = createStackNavigator(screens);
