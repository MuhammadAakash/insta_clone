import React, { useContext, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { colors } from "../../constants/colors";
import { AppContext } from "../../context/AppContext";
import { Ionicons } from "@expo/vector-icons";

const Comments = ({ route }) => {
  const { comments } = route.params;
  const { post } = route.params;

  const [text, setText] = useState("");

  const handleChangeText = (inputText) => {
    setText(inputText);
  };
  const { setPosts } = useContext(AppContext);

  const addComment = () => {
    if (text === "") return;
    setPosts((prevData) => {
      const newData = [...prevData];
      const dataIndex = newData.findIndex((item) => item.id === post.id);

      if (dataIndex !== -1) {
        newData[dataIndex].comments.push({
          id: newData[dataIndex].comments.length + 1,
          comment: text,
          profileImage: newData[dataIndex].profileImage,
        });
      }

      return newData;
    });
    setText("");
  };

  return (
    <>
      <FlatList
        data={comments}
        style={{ flex: 1, backgroundColor: `${colors.primary}` }}
        renderItem={({ item }) => (
          <View style={styles.comment}>
            <Image
              source={{ uri: item.profileImage }}
              style={styles.profilePicture}
            />
            <Text style={styles.commentText}>{item.comment}</Text>
          </View>
        )}
      />

      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Enter Comment"
          value={text}
          onChangeText={handleChangeText}
          placeholderTextColor="#999"
          underlineColorAndroid="transparent"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TouchableOpacity onPress={addComment}>
          <Ionicons
            name="send-sharp"
            size={30}
            color={text.length > 1 ? "black" : "#ccc"}
          />
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  comment: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: `${colors.primary}`,
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  commentText: {
    fontSize: 16,
    color: `${colors.secondary}`,
  },
  profilePicture: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: `${colors.primary}`,
    color: `${colors.secondary}`,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  input: {
    width: "90%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 10,
    borderRadius: 8,
    fontSize: 16,
    marginRight: 10,
    color: `${colors.secondary}`,
  },
});

export default Comments;
