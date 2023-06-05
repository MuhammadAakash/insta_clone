import React from "react";
import { View, Text, FlatList } from "react-native";
import { posts } from "../utils/posts";
import SearchScreenCard from "../components/SearchScreen/SearchScreenCard";

const SearchScreen = () => {
  return (
    <View>
      <FlatList
        data={posts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <SearchScreenCard post={item} />}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={() => <View style={{ height: 120 }} />}
      />
    </View>
  );
};
export default SearchScreen;
