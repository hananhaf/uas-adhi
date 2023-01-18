import * as React from "react";
import { View, StyleSheet, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Border, Color } from "../GlobalStyles";

const Pembayaran = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.pembayaran}>
      <View style={[styles.pembayaranChild, styles.pembayaranPosition]} />
      <Text style={[styles.text, styles.textFlexBox]}>9:41</Text>
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
      <View style={[styles.pembayaranItem, styles.pembayaranPosition]} />
      <Pressable
        style={styles.pembayaranInner}
        onPress={() => navigation.navigate("Konfirmasi")}
      />
      <Text style={styles.pembayaran1}>Pembayaran</Text>
      <Image
        style={[styles.iconlylightOutlinearrowL, styles.logoPosition]}
        resizeMode="cover"
        source={require("../assets/iconlylightoutlinearrow--left.png")}
      />
      <Text style={[styles.lanjut, styles.lanjutTypo]}>Lanjut</Text>
      <Text style={[styles.metodePembayran, styles.lihatSemuaTypo]}>
        Metode Pembayran
      </Text>
      <Text
        style={[styles.lihatSemua, styles.lihatSemuaTypo, styles.textFlexBox]}
      >
        Lihat Semua
      </Text>
      <View
        style={[
          styles.rectangleParent,
          styles.groupLayout,
          styles.rectanglePosition,
        ]}
      >
        <View
          style={[styles.groupChild, styles.childPosition, styles.groupLayout]}
        />
        <Text style={[styles.gopay, styles.danaTypo]}>Gopay</Text>
        <Image
          style={styles.toppng1Icon}
          resizeMode="cover"
          source={require("../assets/toppng-1.png")}
        />
        <Image
          style={[styles.groupItem, styles.itemLayout]}
          resizeMode="cover"
          source={require("../assets/group-20.png")}
        />
      </View>
      <View
        style={[
          styles.rectangleGroup,
          styles.groupLayout,
          styles.rectanglePosition,
        ]}
      >
        <View
          style={[styles.groupChild, styles.childPosition, styles.groupLayout]}
        />
        <Text style={[styles.dana, styles.danaTypo]}>Dana</Text>
        <Image
          style={[styles.groupItem, styles.itemLayout]}
          resizeMode="cover"
          source={require("../assets/group-20.png")}
        />
        <Image
          style={[styles.danaLogoPng21Icon, styles.logoPosition]}
          resizeMode="cover"
          source={require("../assets/dana-logo-png2-1.png")}
        />
      </View>
      <View style={[styles.rectangleContainer, styles.pembayaranPosition]}>
        <View style={[styles.frameChild, styles.childPosition]} />
        <Text style={[styles.shopeepay, styles.lanjutTypo]}>ShopeePay</Text>
        <Image
          style={[styles.frameItem, styles.itemLayout]}
          resizeMode="cover"
          source={require("../assets/group-19.png")}
        />
        <Image
          style={[styles.logoShopeepay1, styles.logoPosition]}
          resizeMode="cover"
          source={require("../assets/logo-shopeepay-1.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pembayaranPosition: {
    width: 390,
    left: 0,
    position: "absolute",
  },
  textFlexBox: {
    alignItems: "center",
    display: "flex",
    textAlign: "left",
  },
  groupIconPosition: {
    marginTop: -407,
    top: "50%",
    position: "absolute",
  },
  logoPosition: {
    left: 14,
    position: "absolute",
  },
  lanjutTypo: {
    lineHeight: 24,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.bodyLargeSemibold,
    fontWeight: "600",
    letterSpacing: 0,
    position: "absolute",
  },
  lihatSemuaTypo: {
    top: 144,
    lineHeight: 24,
    fontSize: FontSize.size_base,
    fontWeight: "700",
    fontFamily: FontFamily.bodyLargeSemibold,
    letterSpacing: 0,
    position: "absolute",
  },
  groupLayout: {
    height: 66,
    width: 346,
  },
  rectanglePosition: {
    left: 4,
    width: 346,
    position: "absolute",
  },
  childPosition: {
    borderRadius: Border.br_2xs,
    left: 0,
    position: "absolute",
    backgroundColor: Color.white,
  },
  danaTypo: {
    height: 24,
    left: 105,
    lineHeight: 24,
    fontSize: FontSize.size_base,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.othersBlack,
    fontFamily: FontFamily.bodyLargeSemibold,
    fontWeight: "600",
    letterSpacing: 0,
    position: "absolute",
  },
  itemLayout: {
    height: 18,
    width: 18,
    position: "absolute",
  },
  pembayaranChild: {
    top: -1,
    backgroundColor: Color.gray_1000,
    height: 32,
  },
  text: {
    marginTop: -413,
    fontSize: FontSize.bodyLargeSemibold_size,
    lineHeight: 22,
    width: 56,
    color: Color.othersBlack,
    fontFamily: FontFamily.bodyLargeSemibold,
    fontWeight: "600",
    letterSpacing: 0,
    alignItems: "center",
    display: "flex",
    left: 14,
    top: "50%",
    position: "absolute",
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
  pembayaranItem: {
    top: 713,
    height: 131,
    backgroundColor: Color.white,
  },
  pembayaranInner: {
    top: 746,
    left: 32,
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
  pembayaran1: {
    top: 44,
    left: 85,
    fontSize: FontSize.size_4xl,
    lineHeight: 34,
    width: 167,
    height: 55,
    fontWeight: "700",
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.othersBlack,
    fontFamily: FontFamily.bodyLargeSemibold,
    letterSpacing: 0,
    position: "absolute",
  },
  iconlylightOutlinearrowL: {
    top: 58,
    width: 28,
    height: 28,
  },
  lanjut: {
    top: 760,
    left: 171,
    color: Color.white,
    textAlign: "center",
  },
  metodePembayran: {
    left: 20,
    textAlign: "center",
    color: Color.othersBlack,
  },
  lihatSemua: {
    left: 246,
    color: Color.green_100,
    width: 123,
  },
  groupChild: {
    top: 0,
  },
  gopay: {
    width: 53,
    top: 22,
  },
  toppng1Icon: {
    top: 8,
    left: 6,
    width: 47,
    height: 51,
    position: "absolute",
  },
  groupItem: {
    top: 25,
    left: 308,
  },
  rectangleParent: {
    top: 296,
  },
  dana: {
    top: 19,
    width: 42,
  },
  danaLogoPng21Icon: {
    width: 77,
    height: 21,
    top: 22,
  },
  rectangleGroup: {
    top: 390,
  },
  frameChild: {
    top: 196,
    width: 347,
    height: 67,
  },
  shopeepay: {
    top: 217,
    left: 103,
    textAlign: "left",
    lineHeight: 24,
    fontSize: FontSize.size_base,
    color: Color.othersBlack,
  },
  frameItem: {
    top: 220,
    left: 310,
  },
  logoShopeepay1: {
    top: 210,
    height: 40,
    width: 53,
  },
  rectangleContainer: {
    borderRadius: Border.br_4xs,
    borderStyle: "solid",
    borderColor: "rgba(0, 0, 0, 0.1)",
    borderWidth: 1,
    height: 278,
    overflow: "hidden",
    top: 0,
  },
  pembayaran: {
    flex: 1,
    width: "100%",
    height: 844,
    backgroundColor: Color.white,
  },
});

export default Pembayaran;
