import { createContext } from "react";

export const AppContext = createContext({
  user: {},
  setUser: () => {},
  posts: [],
  setPosts: () => {},
});
