import * as React from "react";
import { View, StyleSheet, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize, Margin } from "../GlobalStyles";

const HistoryBooking = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.historyBooking}>
      <View style={[styles.historyBookingChild, styles.historyPosition]} />
      <View style={[styles.historyBookingItem, styles.historyPosition]} />
      <Text
        style={[
          styles.text,
          styles.textFlexBox,
          styles.hotelFlexBox,
          styles.textFlexBox1,
        ]}
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
      <Text
        style={[
          styles.historyTransaksi,
          styles.textFlexBox,
          styles.hotelFlexBox,
          styles.textFlexBox1,
        ]}
      >{`History Transaksi `}</Text>
      <Image
        style={styles.iconlylightOutlinearrowL}
        resizeMode="cover"
        source={require("../assets/iconlylightoutlinearrow--left.png")}
      />
      <View style={[styles.historyBookingInner, styles.historyLayout]} />
      <View style={[styles.rectangleView, styles.historyLayout]} />
      <View style={[styles.historyBookingChild1, styles.historyLayout]} />
      <Image
        style={[styles.rectangleIcon, styles.historyChildLayout4]}
        resizeMode="cover"
        source={require("../assets/rectangle-65.png")}
      />
      <Image
        style={[styles.historyBookingChild2, styles.historyChildLayout4]}
        resizeMode="cover"
        source={require("../assets/rectangle-69.png")}
      />
      <Image
        style={[styles.historyBookingChild3, styles.historyChildLayout4]}
        resizeMode="cover"
        source={require("../assets/rectangle-73.png")}
      />
      <View style={[styles.historyBookingChild4, styles.historyChildLayout3]} />
      <View style={[styles.historyBookingChild5, styles.historyChildLayout3]} />
      <View style={[styles.historyBookingChild6, styles.historyChildLayout3]} />
      <Text
        style={[
          styles.gedongtengenYogyakarta,
          styles.yogyakartaTypo,
          styles.textFlexBox,
        ]}
      >
        Gedongtengen, Yogyakarta
      </Text>
      <Text style={[styles.depokYogyakarta, styles.yogyakartaTypo]}>
        Depok, Yogyakarta
      </Text>
      <Text style={[styles.umbulharjoYogyakarta, styles.yogyakartaTypo]}>
        Umbulharjo, Yogyakarta
      </Text>
      <Text style={[styles.hotelNeoBy, styles.hotelTypo, styles.hotelFlexBox]}>
        Hotel NEO by Aston
      </Text>
      <Text
        style={[styles.royalAmbarukmo, styles.hotelTypo, styles.hotelFlexBox]}
      >
        Royal Ambarukmo
      </Text>
      <Text
        style={[styles.gaiaCosmoHotel, styles.hotelTypo, styles.hotelFlexBox]}
      >
        GAIA Cosmo Hotel
      </Text>
      <Text style={[styles.reviews, styles.reviewsTypo]}>
        <Text style={[styles.text1, styles.text1Clr]}>5.0</Text>
        <Text style={styles.reviews1}>
          <Text>{`  `}</Text>
          <Text style={styles.reviews2}> (4,345 reviews)</Text>
        </Text>
      </Text>
      <Text style={[styles.reviews3, styles.reviewsTypo]}>
        <Text style={[styles.text1, styles.text1Clr]}>5.0</Text>
        <Text style={styles.reviews1}>
          <Text>{`  `}</Text>
          <Text style={styles.reviews2}> (4,345 reviews)</Text>
        </Text>
      </Text>
      <Text style={[styles.reviews6, styles.reviewsTypo]}>
        <Text style={[styles.text1, styles.text1Clr]}>5.0</Text>
        <Text style={styles.reviews1}>
          <Text>{`  `}</Text>
          <Text style={styles.reviews2}> (4,345 reviews)</Text>
        </Text>
      </Text>
      <Text style={styles.rp600kNightContainer}>
        <Text style={styles.rp600kNightContainer1}>
          <Text style={styles.rp600k}>
            <Text style={[styles.rp600k1, styles.text1Clr]}>Rp 600k</Text>
          </Text>
          <Text style={styles.night}>
            <Text style={styles.night1}>
              <Text>{`  `}</Text>
              <Text style={styles.night2}>/night</Text>
            </Text>
          </Text>
        </Text>
      </Text>
      <Text
        style={[styles.rp800kNightContainer, styles.nightContainerPosition]}
      >
        <Text style={styles.rp600kNightContainer1}>
          <Text style={styles.rp600k}>
            <Text style={[styles.rp600k1, styles.text1Clr]}>Rp 800k</Text>
          </Text>
          <Text style={styles.night}>
            <Text style={styles.night1}>
              <Text>{`  `}</Text>
              <Text style={styles.night2}>/night</Text>
            </Text>
          </Text>
        </Text>
      </Text>
      <Text
        style={[styles.rp700kNightContainer, styles.nightContainerPosition]}
      >
        <Text style={styles.rp600kNightContainer1}>
          <Text style={styles.rp600k}>
            <Text style={[styles.rp600k1, styles.text1Clr]}>Rp 700k</Text>
          </Text>
          <Text style={styles.night}>
            <Text style={styles.night1}>
              <Text>{`  `}</Text>
              <Text style={styles.night2}>/night</Text>
            </Text>
          </Text>
        </Text>
      </Text>
      <View style={[styles.historyBookingChild7, styles.historyChildLayout2]} />
      <View style={[styles.historyBookingChild8, styles.historyChildLayout2]} />
      <View style={[styles.historyBookingChild9, styles.historyChildLayout2]} />
      <View
        style={[styles.historyBookingChild10, styles.historyChildLayout1]}
      />
      <View
        style={[styles.historyBookingChild11, styles.historyChildLayout1]}
      />
      <Image
        style={[styles.starIcon, styles.historyChildLayout]}
        resizeMode="cover"
        source={require("../assets/star-8.png")}
      />
      <Image
        style={[styles.historyBookingChild12, styles.historyChildLayout]}
        resizeMode="cover"
        source={require("../assets/star-8.png")}
      />
      <Image
        style={[styles.historyBookingChild13, styles.historyChildLayout]}
        resizeMode="cover"
        source={require("../assets/star-8.png")}
      />
      <Image
        style={[
          styles.jambookmarkMinusFIcon,
          styles.iconPosition,
          styles.jambookmarkIconLayout,
        ]}
        resizeMode="cover"
        source={require("../assets/jambookmarkminusf.png")}
      />
      <Image
        style={[
          styles.jambookmarkMinusIcon,
          styles.iconPosition,
          styles.jambookmarkIconLayout,
        ]}
        resizeMode="cover"
        source={require("../assets/jambookmarkminus.png")}
      />
      <Image
        style={[
          styles.jambookmarkMinusIcon1,
          styles.iconPosition,
          styles.jambookmarkIconLayout,
        ]}
        resizeMode="cover"
        source={require("../assets/jambookmarkminus.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/vector1.png")}
      />
      <Image
        style={[styles.healthiconsuiMenuNegative, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/healthiconsuimenunegative1.png")}
      />
      <Pressable
        style={styles.rectanglePressable}
        onPress={() => navigation.navigate("Beranda")}
      />
      <Text style={[styles.tutup, styles.hotelTypo]}>Tutup</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  historyPosition: {
    width: 390,
    left: 0,
    position: "absolute",
  },
  textFlexBox: {
    alignItems: "center",
    display: "flex",
  },
  hotelFlexBox: {
    textAlign: "left",
    color: Color.othersBlack,
  },
  textFlexBox1: {
    letterSpacing: 0,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.bodyLargeSemibold,
    position: "absolute",
  },
  groupIconPosition: {
    marginTop: -407,
    top: "50%",
    position: "absolute",
  },
  historyLayout: {
    height: 119,
    width: 348,
    borderRadius: Border.br_xs,
    position: "absolute",
    backgroundColor: Color.white,
  },
  historyChildLayout4: {
    height: 91,
    width: 91,
    borderRadius: Border.br_xs,
    position: "absolute",
  },
  historyChildLayout3: {
    width: 183,
    height: 28,
    position: "absolute",
    backgroundColor: Color.white,
  },
  yogyakartaTypo: {
    color: Color.gray_900,
    lineHeight: 20,
    fontSize: FontSize.size_2xs,
    textAlign: "left",
    fontFamily: FontFamily.bodyLargeSemibold,
    letterSpacing: 0,
    position: "absolute",
  },
  hotelTypo: {
    lineHeight: 24,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.bodyLargeSemibold,
    letterSpacing: 0,
    position: "absolute",
  },
  reviewsTypo: {
    lineHeight: 18,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    letterSpacing: 0,
    position: "absolute",
  },
  text1Clr: {
    color: Color.green_100,
    fontFamily: FontFamily.bodyLargeSemibold,
  },
  nightContainerPosition: {
    left: 294,
    whiteSpace: "pre-wrap",
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    letterSpacing: 0,
    position: "absolute",
  },
  historyChildLayout2: {
    height: 27,
    width: 36,
    position: "absolute",
    backgroundColor: Color.white,
  },
  historyChildLayout1: {
    height: 23,
    width: 23,
    top: 61,
    position: "absolute",
    backgroundColor: Color.white,
  },
  historyChildLayout: {
    height: 18,
    width: 18,
    position: "absolute",
  },
  iconPosition: {
    overflow: "hidden",
    position: "absolute",
  },
  jambookmarkIconLayout: {
    height: 25,
    width: 29,
    overflow: "hidden",
  },
  historyBookingChild: {
    top: 94,
    backgroundColor: Color.gray_300,
    height: 750,
  },
  historyBookingItem: {
    top: -1,
    backgroundColor: Color.gray_1000,
    height: 32,
  },
  text: {
    marginTop: -413,
    fontSize: FontSize.bodyLargeSemibold_size,
    lineHeight: 22,
    width: 56,
    fontFamily: FontFamily.bodyLargeSemibold,
    fontWeight: "600",
    left: 14,
    letterSpacing: 0,
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
  historyTransaksi: {
    top: 46,
    left: 59,
    fontSize: FontSize.size_4xl,
    lineHeight: 34,
    width: 195,
    height: 50,
    fontWeight: "700",
    fontFamily: FontFamily.bodyLargeSemibold,
  },
  iconlylightOutlinearrowL: {
    top: 58,
    width: 28,
    height: 28,
    left: 14,
    position: "absolute",
  },
  historyBookingInner: {
    top: 114,
    left: 22,
  },
  rectangleView: {
    top: 255,
    left: 21,
  },
  historyBookingChild1: {
    top: 396,
    left: 20,
  },
  rectangleIcon: {
    top: 128,
    left: 33,
  },
  historyBookingChild2: {
    left: 32,
    top: 269,
  },
  historyBookingChild3: {
    top: 410,
    left: 31,
  },
  historyBookingChild4: {
    left: 127,
    top: 137,
  },
  historyBookingChild5: {
    left: 126,
    top: 278,
  },
  historyBookingChild6: {
    left: 125,
    top: 419,
  },
  gedongtengenYogyakarta: {
    top: 172,
    left: 128,
    width: 180,
  },
  depokYogyakarta: {
    top: 313,
    left: 127,
  },
  umbulharjoYogyakarta: {
    top: 454,
    left: 126,
  },
  hotelNeoBy: {
    left: 132,
    top: 137,
    fontWeight: "700",
  },
  royalAmbarukmo: {
    top: 278,
    left: 127,
    fontWeight: "700",
  },
  gaiaCosmoHotel: {
    top: 419,
    left: 126,
    fontWeight: "700",
  },
  text1: {
    fontWeight: "600",
  },
  reviews2: {
    color: Color.gray_800,
  },
  reviews1: {
    fontFamily: FontFamily.bodyLargeSemibold,
  },
  reviews: {
    top: 200,
    left: 150,
  },
  reviews3: {
    top: 341,
    left: 149,
  },
  reviews6: {
    top: 482,
    left: 148,
  },
  rp600k1: {
    fontSize: FontSize.size_lg,
    fontWeight: "700",
  },
  rp600k: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  night2: {
    fontSize: FontSize.size_5xs,
  },
  night1: {
    color: Color.othersBlack,
    fontFamily: FontFamily.bodyLargeSemibold,
  },
  night: {
    margin: Margin.m_md,
  },
  rp600kNightContainer1: {
    lineBreak: "anywhere",
    width: "100%",
  },
  rp600kNightContainer: {
    top: 134,
    left: 296,
    width: 69,
    whiteSpace: "pre-wrap",
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    letterSpacing: 0,
    position: "absolute",
  },
  rp800kNightContainer: {
    width: 73,
    top: 269,
  },
  rp700kNightContainer: {
    top: 412,
    width: 72,
  },
  historyBookingChild7: {
    top: 187,
    left: 324,
  },
  historyBookingChild8: {
    top: 328,
    left: 323,
  },
  historyBookingChild9: {
    top: 469,
    left: 322,
  },
  historyBookingChild10: {
    left: 311,
  },
  historyBookingChild11: {
    left: 346,
  },
  starIcon: {
    top: 199,
    left: 132,
  },
  historyBookingChild12: {
    top: 340,
    left: 131,
  },
  historyBookingChild13: {
    top: 481,
    left: 130,
  },
  jambookmarkMinusFIcon: {
    top: 188,
    left: 327,
  },
  jambookmarkMinusIcon: {
    top: 329,
    left: 326,
  },
  jambookmarkMinusIcon1: {
    top: 470,
    left: 325,
  },
  vectorIcon: {
    height: "2.25%",
    width: "4.87%",
    top: "7.46%",
    right: "5.9%",
    bottom: "90.28%",
    left: "89.23%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  healthiconsuiMenuNegative: {
    top: 63,
    left: 313,
    borderRadius: Border.br_3xs,
    width: 19,
    height: 19,
  },
  rectanglePressable: {
    top: 767,
    left: 37,
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
    width: 328,
    height: 53,
    position: "absolute",
  },
  tutup: {
    top: 782,
    left: 173,
    color: Color.white,
    textAlign: "center",
    fontWeight: "600",
  },
  historyBooking: {
    flex: 1,
    height: 844,
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default HistoryBooking;
