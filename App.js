import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import indexScreen from "./src/screens/indexScreen";

const navigator = createStackNavigator({
  Index: indexScreen
},
  {
    initialRouteName: 'Index',
    defaultNavigationOptions: {
      title: 'Blogs',
    }
  }
);

export default createAppContainer(navigator);