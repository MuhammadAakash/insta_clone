import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../constants/colors";
import { View, Text, Image, StyleSheet } from "react-native";

const UserInformation = ({ user }) => {
  return (
    <View style={styles.userInformation}>
      <View style={styles.userText}>
        <Image style={styles.userImage} source={{ uri: user.profileImage }} />
        <Text style={styles.userName}>{user.name}</Text>
        <Ionicons
          name="checkmark-done-circle"
          size={20}
          color={colors.darkGreen}
        ></Ionicons>
      </View>
      <View style={styles.userIcon}>
        <Ionicons name="ellipsis-vertical" size={30} color="black" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  userInformation: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
    resizeMode: "cover",
  },
  userText: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 200,
    gap: 10,
    marginLeft: 10,
  },
  userName: {
    fontWeight: "bold",
    fontSize: 16,
  },
  userLocation: {
    fontSize: 14,
    color: "gray",
  },
  userIcon: {
    marginRight: 10,
  },
});

export default UserInformation;
