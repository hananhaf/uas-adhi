import * as React from "react";
import { View, StyleSheet, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const Beranda = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.beranda}>
      <View style={[styles.berandaChild, styles.berandaChildPosition]} />
      <View style={[styles.berandaItem, styles.berandaChildPosition]} />
      <Text style={[styles.text, styles.textFlexBox, styles.textTypo]}>
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
      <View style={[styles.berandaInner, styles.berandaInnerLayout]} />
      <Pressable
        style={[
          styles.rectanglePressable,
          styles.berandaChild1Bg,
          styles.berandaInnerLayout,
        ]}
      />
      <View style={[styles.rectangleView, styles.berandaChildPosition]} />
      <Pressable
        style={[styles.wrapper, styles.wrapperLayout]}
        onPress={() => navigation.navigate("ProdukDetail1")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-34.png")}
        />
      </Pressable>
      <Image
        style={[styles.rectangleIcon, styles.wrapperLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-48.png")}
      />
      <Text
        style={[styles.helloAdhiPrasetyo, styles.udibyTypo, styles.textFlexBox]}
      >
        Hello, Adhi Prasetyo
      </Text>
      <View style={[styles.berandaChild1, styles.berandaChild1Bg]} />
      <View style={styles.berandaChild2} />
      <View style={styles.berandaChild3} />
      <View style={[styles.berandaChild4, styles.berandaChildLayout1]} />
      <Text style={[styles.recommended, styles.trendingTypo]}>Recommended</Text>
      <Text style={[styles.popular, styles.trendingTypo]}>Popular</Text>
      <Text style={[styles.trending, styles.trendingTypo]}>Trending</Text>
      <Text style={[styles.udiby, styles.udibyTypo, styles.udibyFlexBox]}>
        Udiby
      </Text>
      <Text style={[styles.cariHotel, styles.cariHotelTypo]}>Cari Hotel</Text>
      <View style={[styles.berandaChild5, styles.berandaChildLayout]} />
      <View style={[styles.berandaChild6, styles.berandaChildLayout]} />
      <View style={[styles.berandaChild7, styles.berandaChildPosition]} />
      <Text style={[styles.historyBookingAnda, styles.lihatSemuaTypo]}>
        History Booking Anda
      </Text>
      <Text style={[styles.lihatSemua, styles.lihatSemuaTypo]}>
        Lihat Semua
      </Text>
      <View style={styles.berandaChild8} />
      <View style={[styles.berandaChild9, styles.berandaChildLayout1]} />
      <Text style={[styles.trending1, styles.trendingTypo]}>Trending</Text>
      <Image
        style={styles.boldLetterHLogo11}
        resizeMode="cover"
        source={require("../assets/bold-letter-h-logo-1-11.png")}
      />
      <Image
        style={[styles.rinotification4LineIcon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/rinotification4line1.png")}
      />
      <Image
        style={[styles.jambookmarkMinusIcon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/jambookmarkminus.png")}
      />
      <Text style={[styles.text1, styles.udibyFlexBox]}>
        <Text style={[styles.text2, styles.textTypo]}>5.0</Text>
        <Text style={styles.text3}>{` `}</Text>
      </Text>
      <Image
        style={styles.starIcon}
        resizeMode="cover"
        source={require("../assets/star-11.png")}
      />
      <Image
        style={[styles.berandaChild10, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/group-96.png")}
      />
      <Text
        style={[
          styles.malioboroInnHotel,
          styles.udibyTypo,
          styles.udibyFlexBox,
        ]}
      >
        Malioboro Inn Hotel
      </Text>
      <Text
        style={[
          styles.malioboroYogyakarta,
          styles.malioboroYogyakartaPosition,
          styles.cariHotelTypo,
        ]}
      >
        Malioboro, Yogyakarta
      </Text>
      <Text
        style={[
          styles.rp600000MalamContainer,
          styles.malioboroYogyakartaPosition,
          styles.textFlexBox,
        ]}
      >
        <Text style={styles.rp600000MalamContainer1}>
          <Text
            style={[styles.rp600000, styles.udibyTypo]}
          >{`Rp 600.000 `}</Text>
          <Text style={styles.malam}>/malam</Text>
        </Text>
      </Text>
      <Image
        style={styles.jambookmarkMinusIcon1}
        resizeMode="cover"
        source={require("../assets/jambookmarkminus8.png")}
      />
      <Image
        style={[
          styles.evasearchOutlineIcon,
          styles.malioboroYogyakartaPosition,
        ]}
        resizeMode="cover"
        source={require("../assets/evasearchoutline.png")}
      />
      <View style={styles.groupParent}>
        <View style={styles.groupPosition}>
          <View style={styles.groupPosition}>
            <View style={[styles.groupChild, styles.groupPosition]} />
            <Image
              style={[styles.fluenthome16RegularIcon, styles.bxssearchLayout]}
              resizeMode="cover"
              source={require("../assets/fluenthome16regular1.png")}
            />
            <Pressable
              style={[
                styles.bxssearch,
                styles.bxssearchLayout,
                styles.bxssearchLayout1,
              ]}
              onPress={() => navigation.navigate("Pencarian")}
            >
              <Image
                style={[styles.icon1, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/bxssearch.png")}
              />
            </Pressable>
            <Pressable
              style={styles.healthiconsuiMenuNegative}
              onPress={() => navigation.navigate("HistoryBooking")}
            >
              <Image
                style={[styles.icon2, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/healthiconsuimenunegative.png")}
              />
            </Pressable>
            <Pressable
              style={[
                styles.mdiaccountOutline,
                styles.bxssearchLayout,
                styles.bxssearchLayout1,
              ]}
              onPress={() => navigation.navigate("Profil")}
            >
              <Image
                style={[styles.vectorIcon, styles.vectorIconLayout]}
                resizeMode="cover"
                source={require("../assets/vector7.png")}
              />
            </Pressable>
          </View>
          <Text style={styles.home}>Home</Text>
          <Text style={[styles.cari, styles.cariTypo]}>Cari</Text>
          <Text style={[styles.profil, styles.cariTypo]}>Profil</Text>
          <Text style={[styles.history, styles.cariTypo]}>{`History `}</Text>
        </View>
        <View style={styles.groupItem} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  berandaChildPosition: {
    width: 390,
    left: 0,
    position: "absolute",
  },
  textFlexBox: {
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    letterSpacing: 0,
  },
  textTypo: {
    fontWeight: "600",
    fontFamily: FontFamily.bodyLargeSemibold,
  },
  groupIconPosition: {
    marginTop: -407,
    top: "50%",
    position: "absolute",
  },
  berandaInnerLayout: {
    height: 54,
    width: 348,
    left: 21,
  },
  berandaChild1Bg: {
    backgroundColor: Color.gray_200,
    position: "absolute",
  },
  wrapperLayout: {
    height: 335,
    width: 266,
    top: 359,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  udibyTypo: {
    fontWeight: "700",
    fontFamily: FontFamily.bodyLargeSemibold,
  },
  berandaChildLayout1: {
    width: 87,
    borderWidth: 2,
    borderColor: "#1ab65c",
    borderStyle: "solid",
    height: 31,
    borderRadius: Border.br_lg,
    top: 254,
    position: "absolute",
    backgroundColor: Color.white,
  },
  trendingTypo: {
    lineHeight: 21,
    fontSize: FontSize.size_xs,
    top: 259,
    textAlign: "left",
    fontFamily: FontFamily.bodyLargeSemibold,
    fontWeight: "600",
    letterSpacing: 0,
    position: "absolute",
  },
  udibyFlexBox: {
    textAlign: "left",
    letterSpacing: 0,
    position: "absolute",
  },
  cariHotelTypo: {
    lineHeight: 20,
    fontSize: FontSize.size_2xs,
    textAlign: "left",
    fontFamily: FontFamily.bodyLargeSemibold,
    letterSpacing: 0,
  },
  berandaChildLayout: {
    width: 35,
    top: 68,
    height: 31,
    position: "absolute",
    backgroundColor: Color.white,
  },
  lihatSemuaTypo: {
    height: 25,
    top: 715,
    textAlign: "left",
    fontFamily: FontFamily.bodyLargeSemibold,
    fontWeight: "600",
    lineHeight: 22,
    letterSpacing: 0,
    fontSize: FontSize.bodyLargeSemibold_size,
    position: "absolute",
  },
  iconPosition: {
    top: 71,
    height: 25,
    position: "absolute",
    overflow: "hidden",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  malioboroYogyakartaPosition: {
    left: 41,
    position: "absolute",
  },
  groupPosition: {
    top: 0,
    height: 83,
    width: 390,
    left: 0,
    position: "absolute",
  },
  bxssearchLayout: {
    height: 28,
    width: 28,
    top: 10,
    position: "absolute",
  },
  bxssearchLayout1: {
    width: 28,
    top: 10,
  },
  cariTypo: {
    color: Color.gray_900,
    lineHeight: 14,
    fontSize: FontSize.size_6xs,
    top: 38,
    textAlign: "left",
    fontFamily: FontFamily.bodyLargeSemibold,
    letterSpacing: 0,
    position: "absolute",
  },
  berandaChild: {
    top: 332,
    backgroundColor: Color.gray_100,
    height: 512,
  },
  berandaItem: {
    top: -1,
    backgroundColor: Color.gray_1000,
    height: 32,
  },
  text: {
    marginTop: -413,
    left: 14,
    width: 56,
    color: Color.othersBlack,
    fontFamily: FontFamily.bodyLargeSemibold,
    lineHeight: 22,
    fontSize: FontSize.bodyLargeSemibold_size,
    alignItems: "center",
    display: "flex",
    fontWeight: "600",
    top: "50%",
    position: "absolute",
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
  berandaInner: {
    top: 56,
    position: "absolute",
    backgroundColor: Color.white,
  },
  rectanglePressable: {
    top: 172,
    borderRadius: Border.br_2xs,
  },
  rectangleView: {
    top: 239,
    height: 64,
    backgroundColor: Color.white,
  },
  icon: {
    borderRadius: Border.br_3xl,
  },
  wrapper: {
    left: 21,
  },
  rectangleIcon: {
    left: 305,
    borderRadius: Border.br_3xl,
  },
  helloAdhiPrasetyo: {
    top: 32,
    left: 19,
    fontSize: FontSize.size_5xl,
    lineHeight: 45,
    width: 350,
    height: 207,
    color: Color.othersBlack,
    position: "absolute",
  },
  berandaChild1: {
    top: 187,
    left: 325,
    width: 32,
    height: 27,
  },
  berandaChild2: {
    width: 129,
    height: 31,
    borderRadius: Border.br_lg,
    top: 254,
    backgroundColor: Color.green_100,
    left: 21,
    position: "absolute",
  },
  berandaChild3: {
    left: 157,
    width: 77,
    borderWidth: 2,
    borderColor: "#1ab65c",
    borderStyle: "solid",
    height: 31,
    borderRadius: Border.br_lg,
    top: 254,
    position: "absolute",
    backgroundColor: Color.white,
  },
  berandaChild4: {
    left: 243,
  },
  recommended: {
    left: 34,
    color: Color.white,
  },
  popular: {
    left: 169,
    color: Color.green_100,
  },
  trending: {
    left: 255,
    color: Color.green_100,
  },
  udiby: {
    top: 67,
    left: 70,
    fontSize: FontSize.size_4xl,
    lineHeight: 34,
    color: Color.othersBlack,
  },
  cariHotel: {
    top: 190,
    left: 81,
    color: Color.gray_500,
    position: "absolute",
  },
  berandaChild5: {
    left: 293,
  },
  berandaChild6: {
    left: 334,
  },
  berandaChild7: {
    top: 708,
    height: 49,
    backgroundColor: Color.white,
  },
  historyBookingAnda: {
    width: 168,
    left: 21,
    color: Color.othersBlack,
  },
  lihatSemua: {
    left: 283,
    width: 94,
    color: Color.green_100,
  },
  berandaChild8: {
    top: 396,
    left: 203,
    borderRadius: 22,
    width: 62,
    height: 26,
    backgroundColor: Color.green_100,
    position: "absolute",
  },
  berandaChild9: {
    left: 337,
  },
  trending1: {
    left: 349,
    color: Color.green_100,
  },
  boldLetterHLogo11: {
    top: 47,
    width: 76,
    height: 73,
    left: 0,
    position: "absolute",
  },
  rinotification4LineIcon: {
    left: 298,
    width: 25,
  },
  jambookmarkMinusIcon: {
    width: 29,
    left: 337,
  },
  text2: {
    color: Color.white,
    fontFamily: FontFamily.bodyLargeSemibold,
  },
  text3: {
    color: Color.othersBlack,
    fontFamily: FontFamily.bodyLargeSemibold,
  },
  text1: {
    top: 401,
    left: 233,
    fontSize: FontSize.size_3xs,
    lineHeight: 18,
  },
  starIcon: {
    top: 400,
    left: 215,
    width: 18,
    height: 18,
    position: "absolute",
  },
  berandaChild10: {
    height: "1.91%",
    width: "5.9%",
    top: "22.63%",
    right: "9.74%",
    bottom: "75.45%",
    left: "84.36%",
  },
  malioboroInnHotel: {
    top: 593,
    left: 40,
    fontSize: FontSize.size_2xl,
    lineHeight: 28,
    color: Color.white,
  },
  malioboroYogyakarta: {
    top: 625,
    fontWeight: "500",
    color: Color.white,
  },
  rp600000: {
    fontSize: FontSize.size_lg,
  },
  malam: {
    fontSize: FontSize.size_5xs,
    fontFamily: FontFamily.bodyLargeSemibold,
  },
  rp600000MalamContainer1: {
    lineBreak: "anywhere",
    width: "100%",
  },
  rp600000MalamContainer: {
    top: 644,
    width: 158,
    color: Color.white,
  },
  jambookmarkMinusIcon1: {
    top: 638,
    left: 248,
    height: 21,
    width: 24,
    position: "absolute",
    overflow: "hidden",
  },
  evasearchOutlineIcon: {
    top: 188,
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  groupChild: {
    borderRadius: Border.br_sm,
    backgroundColor: Color.white,
  },
  fluenthome16RegularIcon: {
    left: 39,
    width: 28,
    top: 10,
    overflow: "hidden",
  },
  icon1: {
    overflow: "hidden",
  },
  bxssearch: {
    left: 132,
  },
  icon2: {
    borderRadius: Border.br_3xs,
    overflow: "hidden",
  },
  healthiconsuiMenuNegative: {
    left: 236,
    top: 13,
    width: 20,
    height: 22,
    position: "absolute",
  },
  vectorIcon: {
    height: "66.67%",
    width: "66.67%",
    top: "16.67%",
    right: "16.67%",
    bottom: "16.67%",
    left: "16.67%",
  },
  mdiaccountOutline: {
    left: 324,
    overflow: "hidden",
  },
  home: {
    lineHeight: 14,
    fontSize: FontSize.size_6xs,
    top: 38,
    left: 39,
    color: Color.green_100,
    textAlign: "left",
    fontFamily: FontFamily.bodyLargeSemibold,
    fontWeight: "600",
    letterSpacing: 0,
    position: "absolute",
  },
  cari: {
    left: 136,
  },
  profil: {
    left: 327,
  },
  history: {
    left: 230,
  },
  groupItem: {
    top: 64,
    left: 129,
    borderRadius: Border.br_4xl,
    backgroundColor: Color.gray_400,
    width: 125,
    height: 5,
    position: "absolute",
  },
  groupParent: {
    top: 771,
    height: 83,
    width: 390,
    left: 0,
    position: "absolute",
  },
  beranda: {
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default Beranda;
