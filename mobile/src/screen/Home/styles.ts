import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  logo: {
    width: 214,
    height: 120,
    marginTop: 50,
    marginBottom: 16,
  },
  contentList: {
    paddingLeft: 32,
    paddingRight: 64,
  },
} as const);
