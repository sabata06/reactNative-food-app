import { StyleSheet, Text, View } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FoodOverviewScreen from "./screens/FoodOverviewScreen";
import FoodDetailScreen from "./screens/FoodDetailScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavoritesScreen from "./screens/FavoritesScreen";
import { MaterialIcons } from "@expo/vector-icons";
import FavoritesContextProvider from "./store/favoritesContext";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "blue" },
        headerTintColor: "white",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          drawerIcon: () => (
            <MaterialIcons name="list" size={24} color="black" />
          ),
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          drawerIcon: () => (
            <MaterialIcons name="favorite" size={24} color="black" />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <FavoritesContextProvider>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "blue" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "lightblue" },
          }}
        >
          {/* <Stack.Screen
          name="Categories"
          options={{ title: "All Categories" }}
          component={CategoriesScreen}
        /> */}
          <Stack.Screen
            name="Drawer"
            options={{ headerShown: false }}
            component={DrawerNavigator}
          />
          <Stack.Screen name="FoodOverview" component={FoodOverviewScreen} />
          <Stack.Screen
            name="FoodDetail"
            component={FoodDetailScreen}
            options={{ title: "İçerik" }}
          />
        </Stack.Navigator>
      </FavoritesContextProvider>
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
