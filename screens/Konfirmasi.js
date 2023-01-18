import * as React from "react";
import { View, StyleSheet, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border, Margin } from "../GlobalStyles";

const Konfirmasi = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.konfirmasi}>
      <View style={[styles.konfirmasiChild, styles.konfirmasiPosition]} />
      <Text style={[styles.text, styles.textFlexBox, styles.textPosition]}>
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
      <View style={[styles.konfirmasiItem, styles.konfirmasiPosition]} />
      <View style={[styles.konfirmasiInner, styles.rectangleViewShadowBox]} />
      <View
        style={[
          styles.rectangleView,
          styles.rectangleViewShadowBox,
          styles.konfirmasiPosition,
        ]}
      />
      <Text style={[styles.payment, styles.textFlexBox]}>Payment</Text>
      <Image
        style={[styles.iconlylightOutlinearrowL, styles.textPosition]}
        resizeMode="cover"
        source={require("../assets/iconlylightoutlinearrow--left.png")}
      />
      <Text style={[styles.continue, styles.continueClr, styles.textLayout]}>
        Continue
      </Text>
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChildPosition, styles.groupChildLayout]} />
        <Text
          style={[
            styles.checkIn,
            styles.checkTypo,
            styles.guestPosition1,
            styles.textLayout,
          ]}
        >
          Check in
        </Text>
        <Text style={[styles.checkOut, styles.checkTypo, styles.textLayout]}>
          Check out
        </Text>
        <Text
          style={[
            styles.guest,
            styles.guestPosition,
            styles.checkTypo,
            styles.guestPosition1,
          ]}
        >
          Guest
        </Text>
        <Text style={[styles.december162024, styles.decemberTypo]}>
          December 16, 2024
        </Text>
        <Text style={[styles.december1620241, styles.decemberTypo]}>
          December 16, 2024
        </Text>
        <Text style={[styles.text1, styles.guestPosition]}>3</Text>
      </View>
      <View
        style={[
          styles.rectangleGroup,
          styles.groupLayout3,
          styles.lineIconPosition,
        ]}
      >
        <View
          style={[
            styles.groupItem,
            styles.groupLayout2,
            styles.groupLayout3,
            styles.groupItemPosition,
          ]}
        />
        <View style={[styles.groupInner, styles.groupLayout2]} />
        <Text
          style={[
            styles.lagosNigeria,
            styles.cancelLayout,
            styles.lagosNigeriaPosition,
          ]}
        >
          Lagos, Nigeria
        </Text>
        <Text
          style={[
            styles.intercontinentalHotel,
            styles.lagosNigeriaPosition,
            styles.textLayout,
          ]}
        >
          Intercontinental Hotel
        </Text>
        <Text style={[styles.reviews, styles.reviewsPosition]}>
          <Text style={styles.text2}>5.0</Text>
          <Text style={styles.reviews1}>
            <Text>{`  `}</Text>
            <Text style={styles.reviews2}> (4,345 reviews)</Text>
          </Text>
        </Text>
        <Text style={[styles.night, styles.nightPosition, styles.textFlexBox]}>
          <Text style={styles.nightTxt}>
            <Text style={styles.text3}>
              <Text style={styles.text4}>$205</Text>
            </Text>
            <Text style={styles.night1}>
              <Text style={styles.night2}>
                <Text>{`  `}</Text>
                <Text style={styles.night3}>/night</Text>
              </Text>
            </Text>
          </Text>
        </Text>
        <View style={[styles.groupChild1, styles.nightPosition]} />
        <Image
          style={[styles.starIcon, styles.reviewsPosition]}
          resizeMode="cover"
          source={require("../assets/star-8.png")}
        />
      </View>
      <View style={[styles.groupParent, styles.groupLayout1]}>
        <View style={[styles.groupLayout1, styles.groupItemPosition]}>
          <View style={[styles.groupLayout1, styles.groupChildPosition]} />
          <Text style={[styles.text5, styles.textLayout]}>
            **** **** **** ****4679
          </Text>
          <Image
            style={[styles.groupChild3, styles.textPosition]}
            resizeMode="cover"
            source={require("../assets/group-22.png")}
          />
        </View>
        <Text
          style={[
            styles.change,
            styles.checkTypo,
            styles.textLayout,
            styles.textFlexBox,
          ]}
        >
          Change
        </Text>
      </View>
      <View style={[styles.groupView, styles.groupLayout]}>
        <View style={[styles.groupLayout, styles.groupChildPosition]} />
        <Text
          style={[
            styles.checkIn,
            styles.checkTypo,
            styles.guestPosition1,
            styles.textLayout,
          ]}
        >
          5 Nights
        </Text>
        <Text
          style={[
            styles.taxesFees,
            styles.checkTypo,
            styles.guestPosition1,
            styles.textLayout,
            styles.textFlexBox,
          ]}
        >{`Taxes & Fees (10%)`}</Text>
        <Text
          style={[
            styles.total,
            styles.checkTypo,
            styles.guestPosition1,
            styles.textLayout,
          ]}
        >
          Total
        </Text>
        <Text style={[styles.text6, styles.textTypo]}>$760.00</Text>
        <Text style={[styles.text7, styles.textLayout]}>$760.00</Text>
        <Text style={[styles.text8, styles.textTypo]}>$760.00</Text>
        <Image
          style={[styles.lineIcon, styles.lineIconPosition]}
          resizeMode="cover"
          source={require("../assets/line-3.png")}
        />
      </View>
      <View style={[styles.konfirmasiChild1, styles.groupItemPosition]} />
      <Image
        style={styles.konfirmasiChild2}
        resizeMode="cover"
        source={require("../assets/group-43.png")}
      />
      <Pressable
        style={[styles.wrapper, styles.wrapperLayout]}
        onPress={() => navigation.navigate("Beranda")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/rectangle-106.png")}
        />
      </Pressable>
      <Text style={[styles.cancel, styles.cancelLayout]}>Cancel</Text>
      <Pressable
        style={[styles.rectanglePressable, styles.wrapperLayout]}
        onPress={() => navigation.navigate("HistoryBooking")}
      />
      <Text
        style={[
          styles.lihatInvoice,
          styles.pembayaranFlexBox,
          styles.cancelLayout,
          styles.continueClr,
        ]}
      >
        Lihat Invoice
      </Text>
      <Text style={[styles.pembayaranBerhasil, styles.pembayaranFlexBox]}>
        Pembayaran Berhasil
      </Text>
      <Text
        style={[
          styles.berhasilMelakukanPembayaran,
          styles.pembayaranFlexBox,
          styles.textLayout,
        ]}
      >
        Berhasil melakukan pembayaran dan booking hotel
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  konfirmasiPosition: {
    left: 0,
    width: 390,
  },
  textFlexBox: {
    alignItems: "center",
    display: "flex",
    letterSpacing: 0,
  },
  textPosition: {
    left: 14,
    position: "absolute",
  },
  groupIconPosition: {
    marginTop: -407,
    top: "50%",
    position: "absolute",
  },
  rectangleViewShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    position: "absolute",
  },
  continueClr: {
    color: Color.white,
    fontWeight: "600",
  },
  textLayout: {
    lineHeight: 24,
    fontSize: FontSize.size_base,
  },
  groupChildLayout: {
    height: 141,
    width: 347,
    position: "absolute",
  },
  checkTypo: {
    fontWeight: "500",
    textAlign: "left",
  },
  guestPosition1: {
    left: 19,
    color: Color.gray_700,
    fontWeight: "500",
  },
  guestPosition: {
    top: 94,
    lineHeight: 24,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.bodyLargeSemibold,
    letterSpacing: 0,
    position: "absolute",
  },
  decemberTypo: {
    left: 178,
    textAlign: "center",
    lineHeight: 24,
    fontSize: FontSize.size_base,
    fontWeight: "700",
    color: Color.othersBlack,
    fontFamily: FontFamily.bodyLargeSemibold,
    letterSpacing: 0,
    position: "absolute",
  },
  groupLayout3: {
    height: 119,
    width: 348,
  },
  lineIconPosition: {
    left: 20,
    position: "absolute",
  },
  groupLayout2: {
    borderRadius: Border.br_xs,
    position: "absolute",
  },
  groupItemPosition: {
    top: 0,
    left: 0,
  },
  cancelLayout: {
    lineHeight: 20,
    fontSize: FontSize.size_2xs,
  },
  lagosNigeriaPosition: {
    left: 106,
    textAlign: "left",
    fontFamily: FontFamily.bodyLargeSemibold,
    letterSpacing: 0,
    position: "absolute",
  },
  reviewsPosition: {
    top: 86,
    position: "absolute",
  },
  nightPosition: {
    left: 302,
    position: "absolute",
  },
  groupLayout1: {
    height: 67,
    width: 347,
    position: "absolute",
  },
  groupChildPosition: {
    borderRadius: Border.br_2xs,
    top: 0,
    left: 0,
    backgroundColor: Color.white,
  },
  groupLayout: {
    height: 153,
    width: 348,
    position: "absolute",
  },
  textTypo: {
    left: 264,
    textAlign: "center",
    lineHeight: 24,
    fontSize: FontSize.size_base,
    fontWeight: "700",
    color: Color.othersBlack,
    fontFamily: FontFamily.bodyLargeSemibold,
    letterSpacing: 0,
    position: "absolute",
  },
  wrapperLayout: {
    height: 48,
    width: 266,
    left: 62,
    position: "absolute",
  },
  pembayaranFlexBox: {
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.bodyLargeSemibold,
    letterSpacing: 0,
    position: "absolute",
  },
  konfirmasiChild: {
    top: -1,
    backgroundColor: Color.gray_1000,
    height: 32,
    width: 390,
    position: "absolute",
  },
  text: {
    marginTop: -413,
    fontSize: FontSize.bodyLargeSemibold_size,
    lineHeight: 22,
    width: 56,
    textAlign: "left",
    color: Color.othersBlack,
    fontFamily: FontFamily.bodyLargeSemibold,
    fontWeight: "600",
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
  konfirmasiItem: {
    top: 713,
    height: 131,
    width: 390,
    position: "absolute",
    backgroundColor: Color.white,
  },
  konfirmasiInner: {
    top: 746,
    left: 32,
    borderRadius: Border.br_xl,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 5,
    elevation: 5,
    width: 328,
    height: 53,
    backgroundColor: Color.green_100,
  },
  rectangleView: {
    top: 105,
    backgroundColor: "#f8f8f8",
    shadowColor: "rgba(248, 248, 248, 0.5)",
    shadowRadius: 10,
    elevation: 10,
    height: 617,
    width: 390,
  },
  payment: {
    top: -59,
    left: 79,
    fontSize: FontSize.size_4xl,
    lineHeight: 34,
    width: 286,
    height: 258,
    fontWeight: "700",
    textAlign: "left",
    color: Color.othersBlack,
    fontFamily: FontFamily.bodyLargeSemibold,
    position: "absolute",
  },
  iconlylightOutlinearrowL: {
    width: 28,
    height: 28,
    top: 58,
  },
  continue: {
    top: 760,
    left: 159,
    textAlign: "center",
    fontFamily: FontFamily.bodyLargeSemibold,
    letterSpacing: 0,
    position: "absolute",
  },
  checkIn: {
    color: Color.gray_700,
    top: 22,
    fontFamily: FontFamily.bodyLargeSemibold,
    letterSpacing: 0,
    position: "absolute",
  },
  checkOut: {
    left: 18,
    color: Color.gray_700,
    top: 58,
    fontFamily: FontFamily.bodyLargeSemibold,
    letterSpacing: 0,
    position: "absolute",
  },
  guest: {
    color: Color.gray_700,
  },
  december162024: {
    top: 22,
  },
  december1620241: {
    top: 58,
  },
  text1: {
    left: 318,
    textAlign: "center",
    fontWeight: "700",
    color: Color.othersBlack,
  },
  rectangleParent: {
    top: 279,
    left: 22,
  },
  groupItem: {
    backgroundColor: Color.white,
  },
  groupInner: {
    top: 14,
    left: 11,
    backgroundColor: Color.blue,
    height: 91,
    width: 91,
  },
  lagosNigeria: {
    color: Color.gray_900,
    top: 58,
  },
  intercontinentalHotel: {
    top: 23,
    fontWeight: "700",
    color: Color.othersBlack,
  },
  text2: {
    color: Color.green_100,
    fontFamily: FontFamily.bodyLargeSemibold,
    fontWeight: "600",
  },
  reviews2: {
    color: Color.gray_800,
  },
  reviews1: {
    fontFamily: FontFamily.bodyLargeSemibold,
  },
  reviews: {
    left: 128,
    fontSize: FontSize.size_3xs,
    lineHeight: 18,
    textAlign: "left",
    letterSpacing: 0,
  },
  text4: {
    fontSize: FontSize.size_lg,
    color: Color.green_100,
    fontWeight: "700",
    fontFamily: FontFamily.bodyLargeSemibold,
  },
  text3: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  night3: {
    fontSize: FontSize.size_5xs,
  },
  night2: {
    color: Color.othersBlack,
    fontFamily: FontFamily.bodyLargeSemibold,
  },
  night1: {
    margin: Margin.m_md,
  },
  nightTxt: {
    lineBreak: "anywhere",
    width: "100%",
  },
  night: {
    top: 20,
    whiteSpace: "pre-wrap",
    width: 46,
    textAlign: "left",
  },
  groupChild1: {
    top: 73,
    backgroundColor: Color.gray_500,
    width: 36,
    height: 27,
  },
  starIcon: {
    left: 109,
    width: 18,
    height: 18,
  },
  rectangleGroup: {
    top: 132,
  },
  text5: {
    top: 18,
    left: 68,
    textAlign: "left",
    color: Color.othersBlack,
    fontFamily: FontFamily.bodyLargeSemibold,
    fontWeight: "600",
    letterSpacing: 0,
    position: "absolute",
  },
  groupChild3: {
    top: 19,
    width: 42,
    height: 29,
  },
  change: {
    top: 16,
    left: 266,
    width: 62,
    color: Color.green_100,
    fontFamily: FontFamily.bodyLargeSemibold,
    position: "absolute",
  },
  groupParent: {
    top: 622,
    left: 21,
  },
  taxesFees: {
    width: 145,
    height: 23,
    color: Color.gray_700,
    top: 58,
    fontFamily: FontFamily.bodyLargeSemibold,
    position: "absolute",
  },
  total: {
    top: 115,
    color: Color.gray_700,
    fontFamily: FontFamily.bodyLargeSemibold,
    letterSpacing: 0,
    position: "absolute",
  },
  text6: {
    top: 115,
  },
  text7: {
    left: 263,
    top: 22,
    textAlign: "center",
    fontWeight: "700",
    color: Color.othersBlack,
    fontFamily: FontFamily.bodyLargeSemibold,
    letterSpacing: 0,
    position: "absolute",
  },
  text8: {
    top: 57,
  },
  lineIcon: {
    top: 93,
    width: 308,
    height: 1,
  },
  groupView: {
    top: 443,
    left: 21,
  },
  konfirmasiChild1: {
    backgroundColor: "rgba(0, 3, 19, 0.75)",
    width: 390,
    position: "absolute",
    height: 844,
  },
  konfirmasiChild2: {
    top: 174,
    left: 41,
    width: 310,
    height: 489,
    position: "absolute",
  },
  icon: {
    borderRadius: 26,
    height: "100%",
    width: "100%",
  },
  wrapper: {
    top: 590,
  },
  cancel: {
    top: 604,
    left: 172,
    color: Color.green_100,
    textAlign: "left",
    fontFamily: FontFamily.bodyLargeSemibold,
    fontWeight: "600",
    letterSpacing: 0,
    position: "absolute",
  },
  rectanglePressable: {
    top: 528,
    borderRadius: Border.br_2xl,
    backgroundColor: Color.green_100,
  },
  lihatInvoice: {
    top: 542,
    left: 150,
    width: 91,
  },
  pembayaranBerhasil: {
    top: 422,
    left: 74,
    fontSize: FontSize.size_2xl,
    lineHeight: 28,
    width: 243,
    color: Color.green_100,
    fontWeight: "700",
  },
  berhasilMelakukanPembayaran: {
    top: 459,
    left: 56,
    width: 285,
    color: Color.gray_700,
    fontWeight: "600",
  },
  konfirmasi: {
    flex: 1,
    height: 844,
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default Konfirmasi;
