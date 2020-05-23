import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import SearchScreen from "./SearchScreen";
import HomeScreen from "./HomeScreen";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Entypo , MaterialIcons} from "@expo/vector-icons";

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="HomeScreen">
        <Tab.Screen
          options={{
            tabBarColor: "red",
            tabBarIcon: () => <Entypo name="thunder-cloud" color="#fff" size={24} />,
            title: "Home",
          }}
          name="HomeScreen"
          initialParams={{city:"Bhagalpur"}}
          component={HomeScreen}
        />
        <Tab.Screen
          options={{
            tabBarIcon: () => (
              <MaterialIcons name="location-city" color="#fff" size={25} />
            ),
            title: "Search",
          }}
          name="SearchScreen"
          component={SearchScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

//const Stack = createStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer independent={true}>
//       <Stack.Navigator initialRouteName="HomeScreen">
//         <Stack.Screen
//           name="HomeScreen"
//           component={HomeScreen}
//           options={{ headerShown: false }}
//         />
//         <Stack.Screen
//           name="SearchScreen"
//           component={SearchScreen}
//           options={{ headerShown: false }}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
