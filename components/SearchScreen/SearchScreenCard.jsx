import { Image, StyleSheet, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

const SearchScreenCard = ({ post }) => {
  return (
    <SafeAreaProvider>
      <View>
        <Image style={styles.image} source={{ uri: post.postImage }} />
      </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 180,
    height: 200,
    margin: 5,
    borderRadius: 10,
  },
});

export default SearchScreenCard;
