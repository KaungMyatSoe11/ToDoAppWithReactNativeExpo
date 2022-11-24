import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Header = () => {
  return <View style={styles.header}></View>;
};

export default Header;

const styles = StyleSheet.create({
  header: {
    height: 50,
    // backgroundColor: "red",
    color: "#fff",
    display: "flex",
    justifyContent: "center",
  },
});
