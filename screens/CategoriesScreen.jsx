import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGrid from "../components/CategoryGrid";

export default function CategoriesScreen() {
  const renderCategoryItem = (itemData) => {
    return <CategoryGrid title={itemData.item.title} color={itemData.item.color}/>;
  };

  return (
    <FlatList
    style={styles.flatlist}
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}

const styles = StyleSheet.create({
    flatlist:{
        marginTop:40
    }
});
