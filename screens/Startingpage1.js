import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const Startingpage1 = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.startingpage1}
      onPress={() => navigation.navigate("Startingpage2")}
    >
      <Image
        style={[styles.startingpage1Child, styles.startingpage1Position]}
        resizeMode="cover"
        source={require("../assets/rectangle-4.png")}
      />
      <Text
        style={[
          styles.selamatDatangDi,
          styles.selamatDatangDiLayout,
          styles.textFlexBox,
          styles.udibyTypo,
        ]}
      >
        Selamat Datang di
      </Text>
      <View style={[styles.startingpage1Item, styles.startingpage1Position]} />
      <Text style={[styles.text, styles.textTypo, styles.textFlexBox]}>
        9:41
      </Text>
      <Image
        style={styles.groupIcon}
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
      <Text
        style={[
          styles.aplikasiBookingHotel,
          styles.textTypo,
          styles.selamatDatangDiLayout,
        ]}
      >
        Aplikasi booking hotel terbaik untuk menemani liburan Anda
      </Text>
      <Text style={[styles.udiby, styles.udibyTypo]}>Udiby</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  startingpage1Position: {
    width: 390,
    left: 0,
    position: "absolute",
  },
  selamatDatangDiLayout: {
    width: 349,
    color: Color.white,
    left: 31,
  },
  textFlexBox: {
    alignItems: "center",
    display: "flex",
  },
  udibyTypo: {
    textAlign: "left",
    fontFamily: FontFamily.bodyLargeSemibold,
    fontWeight: "700",
    letterSpacing: 0,
    position: "absolute",
  },
  textTypo: {
    fontWeight: "600",
    lineHeight: 22,
    fontSize: FontSize.bodyLargeSemibold_size,
    textAlign: "left",
    fontFamily: FontFamily.bodyLargeSemibold,
    letterSpacing: 0,
    position: "absolute",
  },
  groupIconPosition: {
    marginTop: -407,
    top: "50%",
    position: "absolute",
  },
  startingpage1Child: {
    top: 0,
    height: 844,
  },
  selamatDatangDi: {
    top: 501,
    fontSize: 40,
    lineHeight: 56,
    height: 179,
  },
  startingpage1Item: {
    top: -1,
    backgroundColor: Color.gray_1000,
    height: 32,
  },
  text: {
    marginTop: -413,
    left: 14,
    color: Color.othersBlack,
    width: 56,
    top: "50%",
  },
  groupIcon: {
    marginTop: -408,
    right: 17,
    width: 24,
    height: 13,
    top: "50%",
    position: "absolute",
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
  aplikasiBookingHotel: {
    top: 735,
    height: 51,
  },
  udiby: {
    top: 609,
    fontSize: 64,
    lineHeight: 90,
    color: Color.green_100,
    left: 31,
    fontFamily: FontFamily.bodyLargeSemibold,
    fontWeight: "700",
    letterSpacing: 0,
  },
  startingpage1: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 844,
  },
});

export default Startingpage1;
