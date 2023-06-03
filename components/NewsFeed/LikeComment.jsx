import { Ionicons } from "@expo/vector-icons";
import { useContext, useState } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { AppContext } from "../../context/AppContext";
import { useNavigation } from "@react-navigation/native";

const LikeComment = ({ post, isLike, setIsLike }) => {
  //   const [isLike, setIsLike] = useState(false);
  const [isBookmark, setIsBookmark] = useState(false);
  const { setPosts } = useContext(AppContext);

  const onLikePress = () => {
    setIsLike(!isLike);
    setPosts((prev) => {
      return prev.map((item) => {
        if (item.id === post.id) {
          return {
            ...item,
            likes: isLike ? item.likes - 1 : item.likes + 1,
          };
        }
        return item;
      });
    });
  };
  const onBookmarkPress = () => {
    setIsBookmark(!isBookmark);
  };
  const navigation = useNavigation();

  return (
    <View style={styles.mainContainer}>
      <View style={styles.likeCommentBtn}>
        <TouchableOpacity onPress={onLikePress}>
          <Ionicons
            name={isLike ? "heart" : "heart-outline"}
            size={30}
            color={isLike ? "red" : "black"}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={navigation.navigate("comments")}>
          <Ionicons name="chatbubble-outline" size={30} color="black" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity>
        <Ionicons
          name={isBookmark ? "bookmark" : "bookmark-outline"}
          size={30}
          color="black"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
    marginVertical: 10,
  },
  likeCommentBtn: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 80,
    gap: 10,
  },
});

export default LikeComment;
