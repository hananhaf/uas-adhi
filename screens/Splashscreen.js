import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const Splashscreen = () => {
  return (
    <LinearGradient
      style={styles.splashscreen}
      locations={[0, 1, 1, 1]}
      colors={["#fff", "#fff", "#fff", "#fff"]}
    >
      <Pressable
        style={styles.pressable}
        onPress={() => navigation.navigate("Startingpage1")}
      >
        <View style={styles.splashscreenChild} />
        <Text style={[styles.text, styles.textPosition]}>9:41</Text>
        <Image
          style={[styles.groupIcon, styles.textPosition]}
          resizeMode="cover"
          source={require("../assets/group.png")}
        />
        <Image
          style={[styles.groupIcon1, styles.groupIconPosition]}
          resizeMode="cover"
          source={require("../assets/group1.png")}
        />
        <Image
          style={[styles.groupIcon2, styles.groupIconPosition]}
          resizeMode="cover"
          source={require("../assets/group2.png")}
        />
        <Image
          style={styles.boldLetterHLogo11}
          resizeMode="cover"
          source={require("../assets/bold-letter-h-logo-1-12.png")}
        />
      </Pressable>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  textPosition: {
    top: "50%",
    position: "absolute",
  },
  groupIconPosition: {
    marginTop: -407,
    top: "50%",
    position: "absolute",
  },
  splashscreenChild: {
    top: -1,
    left: 0,
    backgroundColor: Color.gray_1000,
    width: 390,
    height: 32,
    position: "absolute",
  },
  text: {
    marginTop: -413,
    left: 14,
    fontSize: FontSize.bodyLargeSemibold_size,
    letterSpacing: 0,
    lineHeight: 22,
    fontWeight: "600",
    fontFamily: FontFamily.bodyLargeSemibold,
    color: Color.othersBlack,
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 56,
  },
  groupIcon: {
    marginTop: -408,
    right: 17,
    width: 24,
    height: 13,
  },
  groupIcon1: {
    right: 48,
    width: 14,
    height: 11,
  },
  groupIcon2: {
    right: 73,
    width: 16,
    height: 10,
  },
  boldLetterHLogo11: {
    top: 234,
    left: 7,
    width: 376,
    height: 377,
    position: "absolute",
  },
  pressable: {
    flex: 1,
    height: "100%",
    backgroundColor: "transparent",
    width: "100%",
  },
  splashscreen: {
    height: 844,
    width: "100%",
  },
});

export default Splashscreen;
