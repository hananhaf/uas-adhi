import * as React from "react";
import { View, StyleSheet, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize, Margin } from "../GlobalStyles";

const Login = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.login}>
      <View style={styles.loginChild} />
      <Text
        style={[styles.text, styles.akunContainerFlexBox, styles.textFlexBox]}
      >
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
      <Pressable
        style={styles.loginItem}
        onPress={() => navigation.navigate("Beranda")}
      />
      <View style={[styles.loginInner, styles.loginPosition]} />
      <Text
        style={[
          styles.loginKeAkunContainer,
          styles.signUpTypo,
          styles.akunContainerFlexBox,
          styles.textFlexBox,
        ]}
      >
        <Text style={styles.loginKeAkunContainer1}>
          <Text style={styles.loginKeAkun}>Login ke Akun</Text>
          <Text style={styles.anda}>Anda</Text>
        </Text>
      </Text>
      <View
        style={[
          styles.rectangleView,
          styles.groupItemBorder,
          styles.loginChild1Layout,
        ]}
      />
      <View
        style={[
          styles.loginChild1,
          styles.groupItemBorder,
          styles.loginChild1Layout,
        ]}
      />
      <Image
        style={styles.iconlylightOutlinearrowL}
        resizeMode="cover"
        source={require("../assets/iconlylightoutlinearrow--left.png")}
      />
      <Text style={[styles.email, styles.emailTypo]}>Email</Text>
      <View style={[styles.loginChild2, styles.loginChildPosition]} />
      <Text style={[styles.ingatSaya, styles.ingatSayaFlexBox]}>
        Ingat Saya
      </Text>
      <Text style={[styles.password, styles.emailTypo]}>Password</Text>
      <Text style={[styles.login1, styles.login1Typo]}>Login</Text>
      <View style={[styles.loginChild3, styles.loginChild3Layout]} />
      <Pressable
        style={[
          styles.belumPunyaAkunContainer,
          styles.ingatSayaFlexBox,
          styles.akunContainerFlexBox,
        ]}
        onPress={() => navigation.navigate("BuatAkun")}
      >
        <Text style={styles.loginKeAkunContainer1}>
          <Text style={styles.belumPunyaAkun}>
            <Text style={styles.belumPunyaAkun1}>Belum punya akun?</Text>
            <Text>{` `}</Text>
          </Text>
          <Text style={[styles.signUp, styles.signUpTypo]}> Sign up</Text>
        </Text>
      </Pressable>
      <View style={[styles.loginChild4, styles.loginPosition]} />
      <Text style={[styles.masukDengan, styles.login1Typo]}>masuk dengan</Text>
      <View style={[styles.lineView, styles.lineLayout]} />
      <Image
        style={[styles.lineIcon, styles.lineLayout]}
        resizeMode="cover"
        source={require("../assets/line-31.png")}
      />
      <View style={[styles.loginChild5, styles.loginChildPosition]} />
      <View style={[styles.loginChild6, styles.googleIconLayout]} />
      <Image
        style={[styles.iconlycurvedmessage, styles.vectorIconPosition]}
        resizeMode="cover"
        source={require("../assets/iconlycurvedmessage1.png")}
      />
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupPosition1, styles.groupChildLayout]} />
        <View
          style={[
            styles.rectangleGroup,
            styles.groupLayout,
            styles.groupPosition,
          ]}
        >
          <View
            style={[
              styles.groupItem,
              styles.groupLayout,
              styles.groupPosition1,
              styles.groupItemBorder,
            ]}
          />
          <Image
            style={[styles.facebookIcon, styles.loginChild3Layout]}
            resizeMode="cover"
            source={require("../assets/facebook.png")}
          />
        </View>
        <View
          style={[
            styles.rectangleContainer,
            styles.groupLayout,
            styles.groupPosition,
          ]}
        >
          <View
            style={[
              styles.groupItem,
              styles.groupLayout,
              styles.groupPosition1,
              styles.groupItemBorder,
            ]}
          />
          <Image
            style={[styles.googleIcon, styles.googleIconLayout]}
            resizeMode="cover"
            source={require("../assets/google.png")}
          />
        </View>
        <View
          style={[styles.groupView, styles.groupLayout, styles.groupPosition]}
        >
          <View
            style={[
              styles.groupItem,
              styles.groupLayout,
              styles.groupPosition1,
              styles.groupItemBorder,
            ]}
          />
          <Image
            style={[styles.vectorIcon, styles.vectorIconPosition]}
            resizeMode="cover"
            source={require("../assets/vector8.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  akunContainerFlexBox: {
    alignItems: "center",
    display: "flex",
  },
  textFlexBox: {
    textAlign: "left",
    letterSpacing: 0,
    alignItems: "center",
    display: "flex",
    color: Color.othersBlack,
    position: "absolute",
  },
  groupIconPosition: {
    marginTop: -407,
    top: "50%",
    position: "absolute",
  },
  loginPosition: {
    width: 390,
    left: 0,
    position: "absolute",
    backgroundColor: Color.white,
  },
  signUpTypo: {
    fontWeight: "700",
    fontFamily: FontFamily.bodyLargeSemibold,
  },
  groupItemBorder: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  loginChild1Layout: {
    borderColor: "#c4c4c4",
    borderRadius: Border.br_2xs,
    borderWidth: 1,
    backgroundColor: Color.gray_200,
    height: 53,
    width: 328,
    left: 31,
    position: "absolute",
  },
  emailTypo: {
    left: 83,
    fontWeight: "500",
    textAlign: "left",
    color: Color.othersBlack,
    fontFamily: FontFamily.bodyLargeSemibold,
    lineHeight: 22,
    letterSpacing: 0,
    fontSize: FontSize.bodyLargeSemibold_size,
    position: "absolute",
  },
  loginChildPosition: {
    position: "absolute",
    backgroundColor: Color.white,
  },
  ingatSayaFlexBox: {
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
  },
  login1Typo: {
    lineHeight: 24,
    fontSize: FontSize.size_base,
    textAlign: "center",
    fontFamily: FontFamily.bodyLargeSemibold,
    letterSpacing: 0,
    position: "absolute",
  },
  loginChild3Layout: {
    height: 41,
    position: "absolute",
  },
  lineLayout: {
    height: 1,
    position: "absolute",
  },
  googleIconLayout: {
    width: 32,
    height: 32,
    position: "absolute",
  },
  vectorIconPosition: {
    overflow: "hidden",
    position: "absolute",
  },
  groupChildLayout: {
    height: 86,
    width: 390,
    position: "absolute",
  },
  groupLayout: {
    height: 55,
    width: 81,
    position: "absolute",
  },
  groupPosition: {
    top: 18,
    width: 81,
  },
  groupPosition1: {
    top: 0,
    left: 0,
    backgroundColor: Color.white,
  },
  loginChild: {
    top: -1,
    backgroundColor: Color.gray_1000,
    height: 32,
    width: 390,
    left: 0,
    position: "absolute",
  },
  text: {
    marginTop: -413,
    width: 56,
    fontFamily: FontFamily.bodyLargeSemibold,
    fontWeight: "600",
    lineHeight: 22,
    fontSize: FontSize.bodyLargeSemibold_size,
    textAlign: "left",
    letterSpacing: 0,
    left: 14,
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
  loginItem: {
    top: 521,
    borderRadius: Border.br_xl,
    backgroundColor: Color.green_100,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 5,
    elevation: 5,
    shadowOpacity: 1,
    height: 53,
    width: 328,
    left: 31,
    position: "absolute",
  },
  loginInner: {
    top: 275,
    height: 235,
  },
  loginKeAkun: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  anda: {
    margin: Margin.m_md,
  },
  loginKeAkunContainer1: {
    lineBreak: "anywhere",
    width: "100%",
  },
  loginKeAkunContainer: {
    top: 112,
    fontSize: FontSize.size_7xl,
    lineHeight: 63,
    width: 286,
    height: 133,
    left: 31,
    textAlign: "left",
    letterSpacing: 0,
    fontWeight: "700",
  },
  rectangleView: {
    top: 311,
  },
  loginChild1: {
    top: 387,
  },
  iconlylightOutlinearrowL: {
    top: 58,
    width: 28,
    height: 28,
    left: 14,
    position: "absolute",
  },
  email: {
    top: 326,
    fontWeight: "500",
  },
  loginChild2: {
    top: 461,
    left: 88,
    width: 214,
    height: 38,
  },
  ingatSaya: {
    left: 175,
    top: 468,
    fontWeight: "500",
    color: Color.othersBlack,
    textAlign: "center",
    fontFamily: FontFamily.bodyLargeSemibold,
    lineHeight: 22,
    fontSize: FontSize.bodyLargeSemibold_size,
  },
  password: {
    top: 400,
    fontWeight: "500",
  },
  login1: {
    top: 535,
    left: 173,
    color: Color.white,
    fontWeight: "600",
  },
  loginChild3: {
    top: 775,
    left: 58,
    width: 270,
    backgroundColor: Color.white,
  },
  belumPunyaAkun1: {
    color: "#696767",
  },
  belumPunyaAkun: {
    fontFamily: FontFamily.bodyLargeSemibold,
  },
  signUp: {
    color: Color.green_100,
  },
  belumPunyaAkunContainer: {
    top: 785,
    left: 98,
    fontSize: FontSize.size_2xs,
    lineHeight: 20,
    width: 210,
  },
  loginChild4: {
    top: 621,
    height: 33,
  },
  masukDengan: {
    top: 625,
    left: 138,
    color: Color.gray_700,
    fontWeight: "500",
  },
  lineView: {
    top: 640,
    left: 261,
    borderColor: "rgba(0, 0, 0, 0.25)",
    borderTopWidth: 1,
    width: 99,
    borderStyle: "solid",
  },
  lineIcon: {
    top: 639,
    width: 98,
    left: 31,
  },
  loginChild5: {
    left: 128,
    borderRadius: 6,
    borderColor: "#1ab65c",
    borderWidth: 2.8,
    width: 21,
    height: 21,
    top: 468,
    borderStyle: "solid",
  },
  loginChild6: {
    top: 321,
    left: 35,
    backgroundColor: Color.gray_200,
    width: 32,
  },
  iconlycurvedmessage: {
    top: 327,
    left: 41,
    width: 20,
    height: 20,
  },
  groupItem: {
    borderRadius: Border.br_md,
    borderColor: "#e5e5e5",
  },
  facebookIcon: {
    top: 7,
    left: 20,
    width: 41,
  },
  rectangleGroup: {
    left: 51,
  },
  googleIcon: {
    top: 11,
    left: 25,
  },
  rectangleContainer: {
    left: 164,
  },
  vectorIcon: {
    height: "50.91%",
    width: "29.63%",
    top: "20%",
    right: "34.57%",
    bottom: "29.09%",
    left: "35.8%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  groupView: {
    left: 278,
  },
  rectangleParent: {
    top: 666,
    left: 0,
    height: 86,
  },
  login: {
    flex: 1,
    height: 844,
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default Login;
