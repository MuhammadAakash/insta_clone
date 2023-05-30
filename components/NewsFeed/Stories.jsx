import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../../constants/colors";

const Stories = ({ image }) => {
  return (
    <TouchableOpacity>
      <Image source={{ uri: image }} style={styles.imagestyle} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  imagestyle: {
    width: 70,
    height: 70,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: colors.orange,
    marginHorizontal: 10,
    marginBottom: 20,
  },
});
export default Stories;
