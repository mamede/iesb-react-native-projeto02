import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 26,
    marginTop: 24,
    fontWeight: "bold",
  },
  containerInputs: {
    flex: 2,
    justifyContent: "center",
  },
  textInput: {
    height: 40,
    borderWidth: 0.3,
    borderColor: "grey",
    marginTop: 8,
    borderRadius: 5,
    padding: 5,
  },
  button: {
    height: 45,
    backgroundColor: "#000",
    justifyContent: "center",
    marginTop: 16,
    borderRadius: 5,
  },
  label: {
    color: "#FFF",
    textAlign: "center",
  },
  whiteBackground: {
    backgroundColor: "#FFF",
  },
  blackLabel: {
    color: "#000",
  },
  containerFooter: {
    flex: 1,
    justifyContent: "center",
  },
  socialButton: {
    borderColor: "blue",
    borderWidth: 0.3,
    backgroundColor: "#FFF",
  },
  socialLabel: {
    color: "blue",
  },
  boldWeight: {
    fontWeight: "bold",
  },
  divider: {
    textAlign: "center",
    color: "grey",
  },
  underline: {
    textDecorationLine: "underline",
  },
});
