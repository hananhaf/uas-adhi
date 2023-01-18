import * as React from "react";
import { View, StyleSheet, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Profil = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.profil}>
      <View style={styles.profilChild} />
      <Text style={[styles.text, styles.textTypo]}>9:41</Text>
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
      <Text style={styles.profilAnda}>Profil Anda</Text>
      <Text style={[styles.editProfile, styles.helpTypo]}>Edit Profile</Text>
      <Text style={[styles.editProfile, styles.helpTypo]}>Edit Profile</Text>
      <Text style={[styles.adhiprstyo23gmailcom, styles.textTypo]}>
        adhiprstyo.23@gmail.com
      </Text>
      <Text style={styles.adhiPrasetyo}>Adhi Prasetyo</Text>
      <Text style={[styles.payment, styles.paymentPosition, styles.helpTypo]}>
        Payment
      </Text>
      <Text style={[styles.notifications, styles.helpTypo]}>Notifications</Text>
      <Text style={[styles.security, styles.helpTypo]}>Security</Text>
      <Text style={[styles.help, styles.helpTypo]}>Help</Text>
      <Text style={[styles.darkTheme, styles.helpTypo]}>Dark Theme</Text>
      <Pressable
        style={styles.logout}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={[styles.logout1, styles.helpTypo]}>Logout</Text>
      </Pressable>
      <View
        style={[
          styles.rectangleParent,
          styles.groupChildLayout,
          styles.groupChildLayout1,
        ]}
      >
        <View
          style={[
            styles.groupChild,
            styles.groupChildLayout,
            styles.groupChildLayout1,
          ]}
        />
        <Image
          style={styles.groupItem}
          resizeMode="cover"
          source={require("../assets/ellipse-30.png")}
        />
      </View>
      <View style={[styles.groupParent, styles.groupLayout]}>
        <View style={[styles.groupContainer, styles.groupLayout]}>
          <View style={[styles.groupContainer, styles.groupLayout]}>
            <View style={[styles.groupInner, styles.groupLayout]} />
            <Pressable
              style={[styles.bxssearchLayout, styles.homePosition]}
              onPress={() => navigation.navigate("Beranda")}
            >
              <Image
                style={[styles.icon, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../assets/fluenthome16regular.png")}
              />
            </Pressable>
            <Pressable
              style={[styles.bxssearch, styles.bxssearchLayout]}
              onPress={() => navigation.navigate("Pencarian")}
            >
              <Image
                style={[styles.icon, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../assets/bxssearch.png")}
              />
            </Pressable>
            <Pressable
              style={[
                styles.healthiconsuiMenuNegative,
                styles.groupChildLayout,
              ]}
              onPress={() => navigation.navigate("HistoryBooking")}
            >
              <Image
                style={[styles.icon2, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../assets/healthiconsuimenunegative.png")}
              />
            </Pressable>
            <Image
              style={[
                styles.mdiaccountOutlineIcon,
                styles.profilePosition,
                styles.bxssearchLayout,
              ]}
              resizeMode="cover"
              source={require("../assets/mdiaccountoutline.png")}
            />
          </View>
          <Text style={[styles.home, styles.homeTypo, styles.homePosition]}>
            Home
          </Text>
          <Text style={[styles.search, styles.searchPosition, styles.homeTypo]}>
            Search
          </Text>
          <Text
            style={[styles.profile, styles.homeTypo, styles.profilePosition]}
          >
            Profile
          </Text>
          <Text style={[styles.booking, styles.homeTypo]}>Booking</Text>
        </View>
        <View style={[styles.rectangleView, styles.searchPosition]} />
      </View>
      <Image
        style={styles.logoudbRemovebgPreview1Icon}
        resizeMode="cover"
        source={require("../assets/logoudbremovebgpreview-1.png")}
      />
      <Image
        style={styles.boldLetterHLogo11}
        resizeMode="cover"
        source={require("../assets/bold-letter-h-logo-1-1.png")}
      />
      <Image
        style={styles.bxsmessageSquareEditIcon}
        resizeMode="cover"
        source={require("../assets/bxsmessagesquareedit.png")}
      />
      <Image
        style={styles.vectorIcon}
        resizeMode="cover"
        source={require("../assets/vector.png")}
      />
      <Image
        style={[
          styles.iconoirwalletLayout,
          styles.iconPosition1,
          styles.paymentPosition,
        ]}
        resizeMode="cover"
        source={require("../assets/iconoirwallet.png")}
      />
      <Image
        style={[
          styles.carbonsecurityIcon,
          styles.iconLayout,
          styles.iconPosition1,
        ]}
        resizeMode="cover"
        source={require("../assets/carbonsecurity.png")}
      />
      <Image
        style={[styles.fluentchatHelp20RegularIcon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/fluentchathelp20regular.png")}
      />
      <Image
        style={styles.heroiconsOutlineeye}
        resizeMode="cover"
        source={require("../assets/heroiconsoutlineeye.png")}
      />
      <Image
        style={[
          styles.mdiLightlogoutIcon,
          styles.iconPosition,
          styles.iconoirwalletLayout,
        ]}
        resizeMode="cover"
        source={require("../assets/mdilightlogout.png")}
      />
      <Image
        style={[
          styles.rinotification4LineIcon,
          styles.iconLayout,
          styles.iconPosition1,
        ]}
        resizeMode="cover"
        source={require("../assets/rinotification4line.png")}
      />
      <Image
        style={[styles.iconlylightmoreCircle, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/iconlylightmore-circle.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.bodyLargeSemibold,
    letterSpacing: 0,
    fontWeight: "600",
    position: "absolute",
  },
  groupIconPosition: {
    marginTop: -407,
    top: "50%",
    position: "absolute",
  },
  helpTypo: {
    width: 174,
    lineHeight: 24,
    fontSize: FontSize.size_base,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.bodyLargeSemibold,
    letterSpacing: 0,
  },
  paymentPosition: {
    top: 404,
    position: "absolute",
  },
  groupChildLayout: {
    height: 22,
    position: "absolute",
  },
  groupChildLayout1: {
    width: 40,
    height: 22,
  },
  groupLayout: {
    height: 83,
    width: 390,
    left: 0,
    position: "absolute",
  },
  homePosition: {
    left: 39,
    position: "absolute",
  },
  iconLayout1: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  bxssearchLayout: {
    width: 28,
    top: 10,
    height: 28,
  },
  profilePosition: {
    left: 324,
    position: "absolute",
  },
  homeTypo: {
    lineHeight: 14,
    fontSize: FontSize.size_6xs,
    top: 38,
    textAlign: "left",
    fontFamily: FontFamily.bodyLargeSemibold,
    letterSpacing: 0,
  },
  searchPosition: {
    left: 129,
    position: "absolute",
  },
  iconPosition1: {
    left: 19,
    overflow: "hidden",
  },
  iconLayout: {
    width: 22,
    height: 22,
    position: "absolute",
  },
  iconPosition: {
    left: 20,
    overflow: "hidden",
    position: "absolute",
  },
  iconoirwalletLayout: {
    height: 24,
    width: 24,
  },
  profilChild: {
    top: -1,
    backgroundColor: Color.gray_1000,
    height: 32,
    width: 390,
    left: 0,
    position: "absolute",
  },
  text: {
    marginTop: -413,
    fontSize: FontSize.bodyLargeSemibold_size,
    lineHeight: 22,
    width: 56,
    color: Color.othersBlack,
    top: "50%",
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.bodyLargeSemibold,
    letterSpacing: 0,
    left: 14,
  },
  groupIcon: {
    marginTop: -408,
    right: 17,
    height: 13,
    width: 24,
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
  profilAnda: {
    top: 65,
    left: 98,
    width: 286,
    height: 28,
    fontWeight: "700",
    lineHeight: 34,
    fontSize: FontSize.size_4xl,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.othersBlack,
    fontFamily: FontFamily.bodyLargeSemibold,
    letterSpacing: 0,
    position: "absolute",
  },
  editProfile: {
    top: 353,
    color: Color.gray_900,
    left: 61,
    fontWeight: "600",
    position: "absolute",
  },
  adhiprstyo23gmailcom: {
    top: 279,
    left: 107,
    fontSize: FontSize.size_2xs,
    lineHeight: 20,
    width: 194,
    color: Color.gray_900,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.bodyLargeSemibold,
    letterSpacing: 0,
  },
  adhiPrasetyo: {
    top: 239,
    left: 121,
    width: 166,
    fontWeight: "700",
    lineHeight: 34,
    fontSize: FontSize.size_4xl,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.othersBlack,
    fontFamily: FontFamily.bodyLargeSemibold,
    letterSpacing: 0,
    position: "absolute",
  },
  payment: {
    color: Color.gray_900,
    left: 61,
    fontWeight: "600",
  },
  notifications: {
    top: 454,
    color: Color.gray_900,
    left: 61,
    fontWeight: "600",
    position: "absolute",
  },
  security: {
    top: 504,
    color: Color.gray_900,
    left: 61,
    fontWeight: "600",
    position: "absolute",
  },
  help: {
    top: 555,
    color: Color.gray_900,
    left: 61,
    fontWeight: "600",
    position: "absolute",
  },
  darkTheme: {
    top: 606,
    color: Color.gray_900,
    left: 61,
    fontWeight: "600",
    position: "absolute",
  },
  logout1: {
    fontWeight: "500",
    color: "#f75555",
  },
  logout: {
    top: 657,
    left: 61,
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.gray_500,
    top: 0,
    left: 0,
    width: 40,
  },
  groupItem: {
    top: 2,
    left: 2,
    width: 18,
    height: 18,
    position: "absolute",
  },
  rectangleParent: {
    top: 607,
    left: 329,
  },
  groupInner: {
    borderRadius: Border.br_sm,
    top: 0,
    backgroundColor: Color.white,
    height: 83,
  },
  icon: {
    overflow: "hidden",
  },
  bxssearch: {
    left: 132,
    position: "absolute",
  },
  icon2: {
    borderRadius: Border.br_3xs,
    overflow: "hidden",
  },
  healthiconsuiMenuNegative: {
    left: 236,
    top: 13,
    width: 20,
  },
  mdiaccountOutlineIcon: {
    overflow: "hidden",
  },
  groupContainer: {
    top: 0,
  },
  home: {
    color: "#7d7d7d",
    fontWeight: "600",
  },
  search: {
    color: Color.gray_900,
  },
  profile: {
    color: "#008753",
  },
  booking: {
    left: 227,
    color: Color.gray_900,
    position: "absolute",
  },
  rectangleView: {
    top: 69,
    borderRadius: Border.br_4xl,
    backgroundColor: Color.gray_400,
    width: 125,
    height: 5,
  },
  groupParent: {
    top: 761,
  },
  logoudbRemovebgPreview1Icon: {
    top: 119,
    left: 152,
    width: 83,
    height: 109,
    position: "absolute",
  },
  boldLetterHLogo11: {
    top: 49,
    width: 77,
    height: 75,
    left: 14,
    position: "absolute",
  },
  bxsmessageSquareEditIcon: {
    top: 196,
    left: 235,
    width: 29,
    height: 29,
    overflow: "hidden",
    position: "absolute",
  },
  vectorIcon: {
    height: "2.21%",
    width: "4.79%",
    top: "42.18%",
    right: "89.83%",
    bottom: "55.61%",
    left: "5.38%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  carbonsecurityIcon: {
    top: 505,
  },
  fluentchatHelp20RegularIcon: {
    top: 556,
    width: 21,
    height: 21,
  },
  heroiconsOutlineeye: {
    top: 608,
    left: 21,
    width: 19,
    height: 19,
    overflow: "hidden",
    position: "absolute",
  },
  mdiLightlogoutIcon: {
    top: 657,
  },
  rinotification4LineIcon: {
    top: 455,
  },
  iconlylightmoreCircle: {
    top: 61,
    left: 351,
  },
  profil: {
    flex: 1,
    height: 844,
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default Profil;
