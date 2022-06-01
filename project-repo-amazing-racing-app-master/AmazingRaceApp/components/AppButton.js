import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

import colors from "../config/colors";


//Settings for buttons to be used within the app and listen for what button is pressed.
function AppButton({ title, onPress}) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}


//Button Styling.
const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.secondary,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
    marginVertical: 10,
  },

  text: {
    color: colors.white,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});
export default AppButton;
