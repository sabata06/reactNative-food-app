import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Pressable,
} from "react-native";
import React, { useContext, useLayoutEffect } from "react";
import { FOODS } from "../data/dummy-data";
import FoodIngredients from "../components/FoodIngredients";
import { MaterialIcons } from "@expo/vector-icons";
// import { FavoritesContext } from "../store/favoritesContext";
import {useSelector,useDispatch } from "react-redux"
import { addFavorite, removeFavorite } from "../store/redux/favoritesSlice";

export default function FoodDetailScreen({ route, navigation }) {
  // const favoriteFoodContext = useContext(FavoritesContext);
  const favoriteFoodIds = useSelector((state) => state.favoriteFoods.ids)
  const foodId = route.params.foodId;
  const selectedFood = FOODS.find((food) => food.id === foodId);
  console.log(foodId);
  const foodIsFavorite = favoriteFoodIds?.includes(foodId);
  const dispatch = useDispatch()

  const favoriteHandler = () => {};

  function changeFavorite() {
    if (foodIsFavorite) {
      // favoriteFoodContext.removeFavorite(foodId);
      dispatch(removeFavorite({id:foodId}))
    } else {
      dispatch(addFavorite({id:foodId}))
      // favoriteFoodContext.addFavorite(foodId);
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <Pressable
            onPress={favoriteHandler}
            style={({ pressed }) => pressed && styles.pressed}
          >
            <MaterialIcons
              name={foodIsFavorite ? "favorite" : "favorite-outline"}
              size={24}
              color="white"
              onPress={changeFavorite}
            />
          </Pressable>
        );
      },
    });
  }, [navigation, changeFavorite]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedFood.imageUrl }} />
      <Text style={styles.title}>{selectedFood.title}</Text>
      <View style={styles.details}>
        <Text style={styles.detailItem}>{selectedFood.complexity}</Text>
        <Text style={styles.detailItem}>{selectedFood.affordability}</Text>
      </View>
      <View style={styles.listContainer}>
        <View style={styles.subTitleContainer}>
          <Text style={styles.subTitle}>İçindekiler</Text>
        </View>
        <FoodIngredients data={selectedFood.ingredients} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 50,
  },

  image: {
    width: "100%",
    height: 300,
  },
  title: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 5,
  },

  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
    color: "red",
  },
  listContainer: {
    width: "100%",
    paddingHorizontal: 10,
  },
  subTitleContainer: {
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: "orange",
    marginVertical: 5,
  },
  subTitle: {
    color: "orange",
    fontSize: 24,
    fontWeight: "bold",
  },
  pressed: {
    opacity: 0.5,
  },
});
