import { FlatList, View, StyleSheet, Text } from "react-native";
import Stories from "./Stories";
import UserInformation from "./UserInformation";
import Post from "./Post";
import LikeComment from "./LikeComment";

const NewsFeedCard = ({ post }) => {
  return (
    <View style={styles.mainCard}>
      <UserInformation user={post} />
      <Post isvideo={false} url={post.postImage} />
      <LikeComment />
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
});

export default NewsFeedCard;
