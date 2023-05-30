import React, { useContext } from "react";
import { View, FlatList } from "react-native";
import Header from "../components/NewsFeed/Header";
import Stories from "../components/NewsFeed/Stories";
import { AppContext } from "../context/AppContext";
import NewsFeedCard from "../components/NewsFeed/NewsFeedCard";

const NewsFeed = () => {
  const { posts } = useContext(AppContext);
  return (
    <View style={{ flex: 1, paddingTop: 20 }}>
      <Header />
      <View style={{ flex: 1 }}>
        <FlatList
          data={posts}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <Stories image={item.postImage} />}
        />
        <FlatList
          data={posts}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <NewsFeedCard post={item} posts={posts} />}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={() => <View style={{ height: 120 }} />}
        />
      </View>
    </View>
  );
};

export default NewsFeed;
