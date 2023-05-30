import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import BottomTabs from "./screens/TabBar";
import { AppContext } from "./context/AppContext";
import { UsersData } from "./utils/UsersData";
import { sharedData } from "./utils/SharedData";
import { useState } from "react";

export default function App() {
  const [users, setUsers] = useState(UsersData);
  const [posts, setPosts] = useState(sharedData);
  return (
    <SafeAreaProvider>
      <AppContext.Provider
        value={{
          user: users,
          setUser: setUsers,
          posts: posts,
          setPosts: setPosts,
        }}
      >
        <BottomTabs />
      </AppContext.Provider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
