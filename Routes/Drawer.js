import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";

import HomeStack from "../Routes/HomeStack";
import HomeStack2 from "./HomeStack2";

const Screens = {
  home: {
    screen: HomeStack,
  },
  contact: {
    screen: HomeStack2,
  },
};
const RootDrawer = createDrawerNavigator(Screens);

export default createAppContainer(RootDrawer);
