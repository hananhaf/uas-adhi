import * as React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const Startingpage3 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.startingpage3}>
      <Text style={[styles.text, styles.textLayout]}>9:41</Text>
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
        style={styles.startingpage3Child}
        resizeMode="cover"
        source={require("../assets/rectangle-1.png")}
      />
      <View style={[styles.startingpage3Item, styles.startingpage3Position]} />
      <Pressable
        style={styles.startingpage3Inner}
        onPress={() => navigation.navigate("Login")}
      />
      <Text style={[styles.lanjut, styles.lanjutTypo]}>Lanjut</Text>
      <View style={styles.rectangleView} />
      <Image
        style={[
          styles.ellipseIcon,
          styles.startingpage3ChildPosition,
          styles.ellipseIconLayout,
        ]}
        resizeMode="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Image
        style={[
          styles.startingpage3Child1,
          styles.startingpage3ChildPosition,
          styles.ellipseIconLayout,
        ]}
        resizeMode="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <View
        style={[styles.startingpage3Child2, styles.startingpage3ChildPosition]}
      />
      <Text style={[styles.perjalananMenjadiMudah, styles.text1Position]}>
        Perjalanan menjadi mudah di tangan Anda
      </Text>
      <View
        style={[styles.startingpage3Child3, styles.mauYangMenegangkanPosition]}
      />
      <View
        style={[styles.startingpage3Child4, styles.startingpage3Position]}
      />
      <Text style={[styles.text1, styles.text1Position, styles.textLayout]}>
        9:41
      </Text>
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
        style={[
          styles.mauYangMenegangkan,
          styles.mauYangMenegangkanPosition,
          styles.lanjutTypo,
        ]}
      >
        Mau yang menegangkan? Atau yang bikin relaks? Temuin semuanya di sini.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textLayout: {
    width: 56,
    fontWeight: "600",
    lineHeight: 22,
    fontSize: FontSize.bodyLargeSemibold_size,
    top: "50%",
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
  startingpage3Position: {
    width: 390,
    left: 0,
    position: "absolute",
  },
  lanjutTypo: {
    textAlign: "left",
    fontFamily: FontFamily.bodyLargeSemibold,
    letterSpacing: 0,
  },
  startingpage3ChildPosition: {
    height: 6,
    top: 636,
    position: "absolute",
  },
  ellipseIconLayout: {
    width: 6,
    height: 6,
    top: 636,
  },
  text1Position: {
    left: 14,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.othersBlack,
    fontFamily: FontFamily.bodyLargeSemibold,
    letterSpacing: 0,
    position: "absolute",
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
    alignItems: "center",
    display: "flex",
    color: Color.othersBlack,
    width: 56,
    textAlign: "left",
    fontFamily: FontFamily.bodyLargeSemibold,
    letterSpacing: 0,
    position: "absolute",
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
  startingpage3Child: {
    width: 391,
    height: 352,
    left: 0,
    top: -1,
    position: "absolute",
  },
  startingpage3Item: {
    top: 444,
    backgroundColor: Color.gray_100,
    height: 400,
  },
  startingpage3Inner: {
    top: 759,
    left: 39,
    borderRadius: Border.br_2xl,
    width: 320,
    height: 55,
    backgroundColor: Color.green_100,
    position: "absolute",
  },
  lanjut: {
    top: 776,
    left: 176,
    color: Color.white,
    fontWeight: "600",
    lineHeight: 22,
    fontSize: FontSize.bodyLargeSemibold_size,
    textAlign: "left",
    fontFamily: FontFamily.bodyLargeSemibold,
    letterSpacing: 0,
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
  startingpage3Child1: {
    left: 211,
  },
  startingpage3Child2: {
    left: 172,
    borderRadius: Border.br_4xs,
    width: 25,
    height: 6,
    top: 636,
    backgroundColor: Color.green_100,
  },
  perjalananMenjadiMudah: {
    top: 260,
    fontSize: FontSize.size_6xl,
    lineHeight: 60,
    fontWeight: "700",
    width: 352,
    height: 258,
  },
  startingpage3Child3: {
    left: 30,
    width: 329,
    height: 61,
    backgroundColor: Color.white,
  },
  startingpage3Child4: {
    backgroundColor: Color.gray_1000,
    height: 32,
    top: -1,
    width: 390,
  },
  text1: {
    marginTop: -413,
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
    left: 33,
    fontSize: FontSize.size_2xs,
    lineHeight: 20,
    color: Color.greyscale700,
    width: 342,
    height: 51,
    textAlign: "left",
    fontFamily: FontFamily.bodyLargeSemibold,
    letterSpacing: 0,
    top: 544,
  },
  startingpage3: {
    flex: 1,
    width: "100%",
    height: 844,
    backgroundColor: Color.white,
  },
});

export default Startingpage3;
