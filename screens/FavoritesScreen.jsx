import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { FavoritesContext } from "../store/favoritesContext";
import { FOODS } from "../data/dummy-data";
import FoodList from "../components/FoodList";

export default function FavoritesScreen() {
  const favoriteFoodContext = useContext(FavoritesContext);

  const favoriteFoods = FOODS.filter((food) =>
    favoriteFoodContext.ids.includes(food.id)
  );

if(favoriteFoods.length === 0){
  return(
    <View style={styles.container} >
      <Text  style={styles.text}>You Have No Favorite Foods</Text>
    </View>
  )
}

  return <FoodList items={favoriteFoods} />;
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center"
  },
  text:{
    fontSize:18,
    fontWeight:"bold"
  }
});
