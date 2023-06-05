import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet, TextInput } from "react-native";
import { posts } from "../utils/posts";
import SearchScreenCard from "../components/SearchScreen/SearchScreenCard";
import { colors } from "../constants/colors";
import { Ionicons } from "@expo/vector-icons";

const SearchScreen = () => {
  const [allPosts, setAllPosts] = useState(posts);
  const [filteredPosts, setFilteredPosts] = useState(posts);

  const handleSearchTextChange = (text) => {
    const filteredPosts = posts.filter((post) => {
      if (post && post.description && text !== "") {
        return post.description.toLowerCase().includes(text.toLowerCase());
      }
    });

    setAllPosts(filteredPosts);
  };
  console.log("Filtered posts are :", allPosts);
  return (
    <View style={styles.flatList}>
      <Ionicons
        name="search-outline"
        style={styles.searchIcon}
        color="gray"
      ></Ionicons>
      <TextInput
        placeholder="Search..."
        style={styles.searchInput}
        onChangeText={handleSearchTextChange}
      />
      <FlatList
        data={allPosts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <SearchScreenCard post={item} />}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={() => <View style={{ height: 120 }} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  flatList: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: `${colors.primary}`,
  },
  searchInput: {
    backgroundColor: "white",
    margin: 10,
    borderRadius: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "gray",
    marginTop: 20,
    paddingLeft: 60,
  },

  searchIcon: {
    position: "absolute",
    top: 49,
    left: 20,
    zIndex: 1,
    fontSize: 32,
  },
});
export default SearchScreen;
