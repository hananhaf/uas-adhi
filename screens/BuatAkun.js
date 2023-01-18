import * as React from "react";
import { View, StyleSheet, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const BuatAkun = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.buatAkun}>
      <View style={[styles.buatAkunChild, styles.buatPosition]} />
      <Text style={[styles.text, styles.textFlexBox, styles.textFlexBox1]}>
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
      <View style={[styles.buatAkunItem, styles.buatPosition]} />
      <Pressable
        style={styles.buatAkunInner}
        onPress={() => navigation.navigate("Login")}
      />
      <View style={[styles.rectangleView, styles.buatPosition]} />
      <View style={[styles.buatAkunChild1, styles.buatChildLayout2]} />
      <View style={[styles.buatAkunChild2, styles.buatChildLayout2]} />
      <View
        style={[
          styles.buatAkunChild3,
          styles.buatChildLayout1,
          styles.buatChildPosition,
        ]}
      />
      <View
        style={[
          styles.buatAkunChild4,
          styles.buatChildLayout1,
          styles.buatChildPosition,
        ]}
      />
      <View style={[styles.buatAkunChild5, styles.buatChildLayout1]} />
      <View
        style={[
          styles.buatAkunChild6,
          styles.buatChildLayout1,
          styles.buatChildPosition,
        ]}
      />
      <Text style={[styles.password, styles.emailTypo, styles.emailPosition]}>
        Password
      </Text>
      <Image
        style={styles.iconlylightOutlinearrowL}
        resizeMode="cover"
        source={require("../assets/iconlylightoutlinearrow--left.png")}
      />
      <Text style={[styles.namaDepan, styles.namaPosition, styles.namaTypo]}>
        Nama Depan
      </Text>
      <Text
        style={[styles.tanggalLahir, styles.namaPosition, styles.emailTypo]}
      >
        Tanggal Lahir
      </Text>
      <Text style={[styles.email, styles.emailTypo, styles.emailPosition]}>
        Email
      </Text>
      <Text style={[styles.nomerTelepon, styles.emailTypo]}>Nomer Telepon</Text>
      <Text style={[styles.namaBelakang, styles.namaPosition, styles.namaTypo]}>
        Nama Belakang
      </Text>
      <Text style={styles.buatAkunAnda}>Buat Akun Anda</Text>
      <View style={[styles.buatAkunChild7, styles.namaPosition]} />
      <View style={[styles.autoLayoutHorizontal, styles.textFlexBox]}>
        <Image
          style={styles.iconlylightarrowDown2}
          resizeMode="cover"
          source={require("../assets/iconlylightarrow--down-2.png")}
        />
      </View>
      <View style={[styles.buatAkunChild8, styles.buatChildLayout]} />
      <View style={[styles.buatAkunChild9, styles.buatChildLayout]} />
      <View style={styles.buatAkunChild10} />
      <Image
        style={styles.groupIcon3}
        resizeMode="cover"
        source={require("../assets/group27.png")}
      />
      <Image
        style={styles.iconlycurvedmessage}
        resizeMode="cover"
        source={require("../assets/iconlycurvedmessage.png")}
      />
      <Text
        style={[styles.buatAkunAnda1, styles.textFlexBox, styles.textFlexBox1]}
      >
        Buat Akun Anda
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  buatPosition: {
    width: 390,
    left: 0,
    position: "absolute",
  },
  textFlexBox: {
    alignItems: "center",
    position: "absolute",
  },
  textFlexBox1: {
    display: "flex",
    textAlign: "left",
    color: Color.othersBlack,
    fontFamily: FontFamily.bodyLargeSemibold,
    letterSpacing: 0,
    alignItems: "center",
  },
  groupIconPosition: {
    marginTop: -407,
    top: "50%",
    position: "absolute",
  },
  buatChildLayout2: {
    width: 355,
    borderWidth: 1,
    borderColor: "#c4c4c4",
    borderStyle: "solid",
    borderRadius: Border.br_2xs,
    left: 18,
    backgroundColor: Color.gray_200,
    height: 53,
    position: "absolute",
  },
  buatChildLayout1: {
    width: 359,
    borderWidth: 1,
    borderColor: "#c4c4c4",
    borderStyle: "solid",
    backgroundColor: Color.gray_200,
    borderRadius: Border.br_2xs,
    height: 53,
    position: "absolute",
  },
  buatChildPosition: {
    left: 15,
    width: 359,
  },
  emailTypo: {
    width: 174,
    fontWeight: "500",
    lineHeight: 24,
    fontSize: FontSize.size_base,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.othersBlack,
    fontFamily: FontFamily.bodyLargeSemibold,
    letterSpacing: 0,
  },
  emailPosition: {
    left: 35,
    width: 174,
    position: "absolute",
  },
  namaPosition: {
    left: 36,
    position: "absolute",
  },
  namaTypo: {
    fontWeight: "500",
    left: 36,
    lineHeight: 24,
    fontSize: FontSize.size_base,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.othersBlack,
    fontFamily: FontFamily.bodyLargeSemibold,
    letterSpacing: 0,
  },
  buatChildLayout: {
    height: 30,
    width: 38,
    left: 335,
    backgroundColor: Color.gray_200,
    position: "absolute",
  },
  buatAkunChild: {
    top: -1,
    backgroundColor: Color.gray_1000,
    height: 32,
  },
  text: {
    marginTop: -413,
    fontSize: FontSize.bodyLargeSemibold_size,
    lineHeight: 22,
    width: 56,
    fontWeight: "600",
    display: "flex",
    textAlign: "left",
    color: Color.othersBlack,
    fontFamily: FontFamily.bodyLargeSemibold,
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
    height: 10,
    width: 16,
  },
  buatAkunItem: {
    top: 713,
    height: 131,
    backgroundColor: Color.white,
  },
  buatAkunInner: {
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
  rectangleView: {
    top: 273,
    height: 438,
    backgroundColor: Color.white,
  },
  buatAkunChild1: {
    top: 293,
  },
  buatAkunChild2: {
    top: 360,
  },
  buatAkunChild3: {
    top: 427,
  },
  buatAkunChild4: {
    top: 494,
  },
  buatAkunChild5: {
    top: 560,
    left: 14,
  },
  buatAkunChild6: {
    top: 627,
  },
  password: {
    top: 639,
  },
  iconlylightOutlinearrowL: {
    top: 58,
    width: 28,
    height: 28,
    left: 14,
    position: "absolute",
  },
  namaDepan: {
    top: 308,
    width: 203,
  },
  tanggalLahir: {
    top: 439,
  },
  email: {
    top: 508,
  },
  nomerTelepon: {
    top: 576,
    left: 92,
    position: "absolute",
  },
  namaBelakang: {
    top: 375,
    width: 182,
  },
  buatAkunAnda: {
    top: 760,
    left: 132,
    color: Color.white,
    textAlign: "center",
    lineHeight: 24,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.bodyLargeSemibold,
    fontWeight: "600",
    letterSpacing: 0,
    position: "absolute",
  },
  buatAkunChild7: {
    top: 572,
    width: 52,
    height: 33,
    backgroundColor: Color.gray_200,
    left: 36,
  },
  iconlylightarrowDown2: {
    height: 16,
    width: 16,
  },
  autoLayoutHorizontal: {
    top: 582,
    left: 38,
    flexDirection: "row",
  },
  buatAkunChild8: {
    top: 638,
  },
  buatAkunChild9: {
    top: 505,
  },
  buatAkunChild10: {
    top: 438,
    height: 29,
    width: 38,
    left: 335,
    backgroundColor: Color.gray_200,
    position: "absolute",
  },
  groupIcon3: {
    height: "2.15%",
    width: "4.35%",
    top: "52.52%",
    right: "6.87%",
    bottom: "45.33%",
    left: "88.78%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  iconlycurvedmessage: {
    top: 512,
    left: 345,
    width: 20,
    height: 20,
    position: "absolute",
    overflow: "hidden",
  },
  buatAkunAnda1: {
    top: 64,
    left: 49,
    fontSize: FontSize.size_7xl,
    lineHeight: 63,
    fontWeight: "700",
    width: 286,
    height: 258,
    display: "flex",
    textAlign: "left",
    color: Color.othersBlack,
    fontFamily: FontFamily.bodyLargeSemibold,
    letterSpacing: 0,
  },
  buatAkun: {
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default BuatAkun;
