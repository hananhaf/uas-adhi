import * as React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Startingpage2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.startingpage2}>
      <Text style={[styles.text, styles.textTypo]}>9:41</Text>
      <Image
        style={[
          styles.groupIcon,
          styles.groupIconLayout2,
          styles.groupIconPosition1,
        ]}
        resizeMode="cover"
        source={require("../assets/group31.png")}
      />
      <Image
        style={[
          styles.groupIcon1,
          styles.groupIconLayout1,
          styles.groupIconPosition1,
        ]}
        resizeMode="cover"
        source={require("../assets/group32.png")}
      />
      <Image
        style={[styles.groupIcon2, styles.groupIconLayout]}
        resizeMode="cover"
        source={require("../assets/group33.png")}
      />
      <Image
        style={styles.startingpage2Child}
        resizeMode="cover"
        source={require("../assets/rectangle-11.png")}
      />
      <View style={[styles.startingpage2Item, styles.startingpage2Position]} />
      <Pressable
        style={styles.startingpage2Inner}
        onPress={() => navigation.navigate("Startingpage3")}
      />
      <Text style={styles.lanjut}>Lanjut</Text>
      <View style={styles.rectangleView} />
      <Image
        style={[
          styles.ellipseIcon,
          styles.startingpage2ChildPosition,
          styles.ellipseIconLayout,
        ]}
        resizeMode="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Image
        style={[
          styles.startingpage2Child1,
          styles.startingpage2ChildPosition,
          styles.ellipseIconLayout,
        ]}
        resizeMode="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <View
        style={[styles.startingpage2Child2, styles.startingpage2ChildPosition]}
      />
      <Text style={styles.mariNikmatiLiburan}>
        Mari nikmati liburan terbaik bersama kami
      </Text>
      <View
        style={[styles.startingpage2Child3, styles.mauYangMenegangkanPosition]}
      />
      <View
        style={[styles.startingpage2Child4, styles.startingpage2Position]}
      />
      <Text style={[styles.text1, styles.textTypo]}>9:41</Text>
      <Image
        style={[styles.groupIcon3, styles.groupIconLayout]}
        resizeMode="cover"
        source={require("../assets/group.png")}
      />
      <Image
        style={[
          styles.groupIcon4,
          styles.groupIconPosition,
          styles.groupIconLayout1,
        ]}
        resizeMode="cover"
        source={require("../assets/group1.png")}
      />
      <Image
        style={[
          styles.groupIcon5,
          styles.groupIconPosition,
          styles.groupIconLayout2,
        ]}
        resizeMode="cover"
        source={require("../assets/group2.png")}
      />
      <Text
        style={[styles.mauYangMenegangkan, styles.mauYangMenegangkanPosition]}
      >
        Mau yang menegangkan? Atau yang bikin relaks? Temuin semuanya di sini.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    width: 56,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.othersBlack,
    fontFamily: FontFamily.bodyLargeSemibold,
    fontWeight: "600",
    lineHeight: 22,
    letterSpacing: 0,
    fontSize: FontSize.bodyLargeSemibold_size,
    top: "50%",
    position: "absolute",
  },
  groupIconLayout2: {
    height: 10,
    width: 16,
  },
  groupIconPosition1: {
    top: "50%",
    position: "absolute",
  },
  groupIconLayout1: {
    height: 11,
    width: 14,
  },
  groupIconLayout: {
    height: 13,
    width: 24,
    top: "50%",
    position: "absolute",
  },
  startingpage2Position: {
    left: 0,
    width: 390,
    position: "absolute",
  },
  startingpage2ChildPosition: {
    height: 6,
    top: 636,
    position: "absolute",
  },
  ellipseIconLayout: {
    width: 6,
    height: 6,
    top: 636,
  },
  mauYangMenegangkanPosition: {
    top: 544,
    position: "absolute",
  },
  groupIconPosition: {
    marginTop: -407,
    top: "50%",
    position: "absolute",
  },
  text: {
    marginTop: -410,
    left: 23,
  },
  groupIcon: {
    marginTop: -403,
    right: 71,
  },
  groupIcon1: {
    marginTop: -404,
    right: 52,
  },
  groupIcon2: {
    marginTop: -405,
    right: 23,
  },
  startingpage2Child: {
    left: -1,
    height: 367,
    width: 390,
    top: -1,
    position: "absolute",
  },
  startingpage2Item: {
    top: 444,
    backgroundColor: Color.gray_100,
    height: 400,
  },
  startingpage2Inner: {
    top: 758,
    borderRadius: Border.br_2xl,
    width: 320,
    height: 55,
    backgroundColor: Color.green_100,
    left: 34,
    position: "absolute",
  },
  lanjut: {
    top: 775,
    left: 173,
    color: Color.white,
    textAlign: "left",
    fontFamily: FontFamily.bodyLargeSemibold,
    fontWeight: "600",
    lineHeight: 22,
    letterSpacing: 0,
    fontSize: FontSize.bodyLargeSemibold_size,
    position: "absolute",
  },
  rectangleView: {
    top: 627,
    left: 137,
    width: 134,
    height: 23,
    position: "absolute",
    backgroundColor: Color.white,
  },
  ellipseIcon: {
    left: 202,
  },
  startingpage2Child1: {
    left: 211,
  },
  startingpage2Child2: {
    left: 172,
    borderRadius: Border.br_4xs,
    width: 25,
    height: 6,
    top: 636,
    backgroundColor: Color.green_100,
  },
  mariNikmatiLiburan: {
    top: 282,
    left: 12,
    fontSize: FontSize.size_6xl,
    lineHeight: 60,
    fontWeight: "700",
    width: 380,
    height: 258,
    alignItems: "center",
    display: "flex",
    color: Color.othersBlack,
    textAlign: "left",
    fontFamily: FontFamily.bodyLargeSemibold,
    letterSpacing: 0,
    position: "absolute",
  },
  startingpage2Child3: {
    left: 30,
    width: 331,
    height: 61,
    backgroundColor: Color.white,
  },
  startingpage2Child4: {
    backgroundColor: Color.gray_1000,
    height: 32,
    top: -1,
    left: 0,
  },
  text1: {
    marginTop: -413,
    left: 14,
  },
  groupIcon3: {
    marginTop: -408,
    right: 17,
  },
  groupIcon4: {
    right: 48,
  },
  groupIcon5: {
    right: 73,
  },
  mauYangMenegangkan: {
    fontSize: FontSize.size_2xs,
    lineHeight: 20,
    color: Color.greyscale700,
    width: 349,
    height: 51,
    left: 34,
    top: 544,
    textAlign: "left",
    fontFamily: FontFamily.bodyLargeSemibold,
    letterSpacing: 0,
  },
  startingpage2: {
    flex: 1,
    width: "100%",
    height: 844,
    backgroundColor: Color.white,
  },
});

export default Startingpage2;
