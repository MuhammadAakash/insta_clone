import { FlatList, View, StyleSheet, Text } from "react-native";
import Stories from "./Stories";
import UserInformation from "./UserInformation";
import Post from "./Post";
import LikeComment from "./LikeComment";
import { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";

const NewsFeedCard = ({ post, onPress }) => {
  const [isLike, setIsLike] = useState(false);
  const LikeText = `${
    post.likes > 1 ? post.likes + " likes" : post.likes + "like"
  }    `;

  return (
    <View style={styles.mainCard}>
      <UserInformation user={post} />
      <Post isvideo={false} url={post.postImage} />
      <LikeComment
        post={post}
        isLike={isLike}
        setIsLike={setIsLike}
        commentPres={onPress}
      />
      {post.likes > 0 && <Text style={styles.likeTextStyle}>{LikeText}</Text>}
      <Text
        style={{
          paddingLeft: 15,
        }}
      >
        <Text style={styles.username}>{post.name} </Text> {post.description}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  username: {
    fontSize: 16,
    fontWeight: "bold",
    marginHorizontal: 10,
    marginTop: 10,
  },
  likeTextStyle: {
    fontSize: 16,
    fontWeight: "bold",
    paddingLeft: 15,
    marginBottom: 5,
  },
});

export default NewsFeedCard;
