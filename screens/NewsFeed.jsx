import React, { useCallback, useContext, useRef } from "react";
import { View, FlatList } from "react-native";
import Header from "../components/NewsFeed/Header";
import Stories from "../components/NewsFeed/Stories";
import { AppContext } from "../context/AppContext";
import NewsFeedCard from "../components/NewsFeed/NewsFeedCard";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheet from "../components/BottomSheet";

const NewsFeed = () => {
  const { posts } = useContext(AppContext);

  const ref = useRef(null);
  const onPress = useCallback(() => {
    console.log("onPress");
    const isActive = ref?.current?.isActive();
    if (isActive) {
      ref?.current?.scrollTo(0);
    } else {
      ref?.current?.scrollTo(-200);
    }
  });
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
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
            renderItem={({ item }) => (
              <NewsFeedCard post={item} posts={posts} onPress={onPress} />
            )}
            showsVerticalScrollIndicator={false}
            ListFooterComponent={() => <View style={{ height: 120 }} />}
          />
        </View>
      </View>
      <BottomSheet ref={ref} />
    </GestureHandlerRootView>
  );
};

export default NewsFeed;
