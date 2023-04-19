import React from "react"; // for jsx compatibility , not needed now ? 
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import indexScreen from "./src/screens/indexScreen";
import { BlogProvider, Provider } from "./src/context/BlogContext";

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
const App = createAppContainer(navigator);

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
}