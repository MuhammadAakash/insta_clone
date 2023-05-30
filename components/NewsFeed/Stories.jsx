import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../../constants/colors";

const Stories = ({ image }) => {
  return (
    <TouchableOpacity>
      <Image style={styles.image} source={image} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 70,
    height: 70,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: colors.orange,
    marginHorizontal: 10,
  },
});
export default Stories;
