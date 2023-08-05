import { StyleSheet, TouchableOpacity } from "react-native";

import AccountScreen from "./src/screens/AccountScreen";
import LoginScreen from "./src/screens/LoginScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import TrackListScreen from "./src/screens/TrackListScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import { MaterialIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='Login'
        activeColor='#f0edf6'
        inactiveColor='#3e2465'
        barStyle={{ backgroundColor: "#694fad" }}
      >
        <Tab.Screen
          name='Login'
          component={LoginScreen}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color }) => (
              <MaterialIcons name='home' color={color} size={30} />
            ),
          }}
        />
        <Tab.Screen name='SignUp' component={SignUpScreen} />
        <Tab.Screen name='Account' component={AccountScreen} />
      </Tab.Navigator>
      <Tab.Screen name='TrackCreate' component={TrackCreateScreen} />
      <Tab.Screen name='TrackDetail' component={TrackDetailScreen} />
      <Tab.Screen name='TrackList' component={TrackListScreen} />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
