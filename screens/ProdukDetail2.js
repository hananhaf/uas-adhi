import * as React from "react";
import { View, StyleSheet, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const ProdukDetail2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.produkDetail2}>
      <View style={[styles.produkDetail2Child, styles.produkPosition]} />
      <Image
        style={[styles.produkDetail2Item, styles.produkPosition]}
        resizeMode="cover"
        source={require("../assets/rectangle-61.png")}
      />
      <Text style={[styles.text, styles.textFlexBox, styles.textClr]}>
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
        style={styles.produkDetail2Inner}
        onPress={() => navigation.navigate("Pembayaran")}
      />
      <Text
        style={[styles.condongcaturJogjakarta, styles.bookingSekarangFlexBox]}
      >
        Condongcatur, Jogjakarta
      </Text>
      <Text
        style={[
          styles.galleryPhotos,
          styles.galleryPhotosTypo,
          styles.seeAllLayout,
        ]}
      >
        Gallery Photos
      </Text>
      <Text style={[styles.theAlanaHotel, styles.galleryPhotosTypo]}>
        The Alana Hotel
      </Text>
      <Image
        style={[styles.rectangleIcon, styles.produkChildLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-17.png")}
      />
      <Image
        style={[styles.produkDetail2Child1, styles.produkChildLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-18.png")}
      />
      <Image
        style={[styles.rectangleViewPosition, styles.produkChildLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-19.png")}
      />
      <Pressable
        style={[styles.iconlylightOutlinearrowL, styles.iconLayout]}
        onPress={() => navigation.navigate("Pencarian")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/iconlylightoutlinearrow--left3.png")}
        />
      </Pressable>
      <Text style={[styles.bookingSekarang, styles.bookingSekarangFlexBox]}>
        Booking Sekarang
      </Text>
      <View style={[styles.lineView, styles.linePosition]} />
      <Image
        style={[styles.lineIcon, styles.linePosition]}
        resizeMode="cover"
        source={require("../assets/line-5.png")}
      />
      <Text style={[styles.description, styles.detailsTypo]}>Description</Text>
      <Text style={[styles.details, styles.detailsTypo]}>Details</Text>
      <Text style={[styles.hotels, styles.sqftTypo]}>Hotels</Text>
      <Text style={[styles.bedrooms, styles.bedroomsTypo]}>4 Bedrooms</Text>
      <Text style={[styles.bathrooms, styles.bedroomsTypo]}>2 Bathrooms</Text>
      <Text style={[styles.sqft, styles.sqftTypo]}>3000 sqft</Text>
      <Text style={[styles.rp750kNightContainer, styles.textFlexBox]}>
        <Text style={styles.rp750kNightContainer1}>
          <Text style={styles.rp750kTypo}>
            <Text style={styles.rp750k1}>Rp 750k</Text>
            <Text>{` `}</Text>
          </Text>
          <Text style={[styles.night, styles.textClr]}>/night</Text>
        </Text>
      </Text>
      <View style={[styles.rectangleView, styles.rectangleViewPosition]} />
      <Text style={[styles.seeAll, styles.rp750kTypo, styles.seeAllLayout]}>
        See All
      </Text>
      <Image
        style={styles.iconlyboldlocation}
        resizeMode="cover"
        source={require("../assets/iconlyboldlocation.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector2.png")}
      />
      <Image
        style={[styles.bxhotelIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/bxhotel.png")}
      />
      <Image
        style={[styles.bxsbathIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/bxsbath.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector3.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  produkPosition: {
    width: 390,
    left: 0,
    position: "absolute",
  },
  textFlexBox: {
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    letterSpacing: 0,
    position: "absolute",
  },
  textClr: {
    color: Color.othersBlack,
    fontFamily: FontFamily.bodyLargeSemibold,
  },
  groupIconPosition: {
    marginTop: -407,
    top: "50%",
    position: "absolute",
  },
  bookingSekarangFlexBox: {
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.bodyLargeSemibold,
    letterSpacing: 0,
    position: "absolute",
  },
  galleryPhotosTypo: {
    fontWeight: "700",
    textAlign: "center",
    color: Color.othersBlack,
    fontFamily: FontFamily.bodyLargeSemibold,
    letterSpacing: 0,
    position: "absolute",
  },
  seeAllLayout: {
    lineHeight: 27,
    fontSize: FontSize.size_xl,
  },
  produkChildLayout: {
    height: 107,
    width: 135,
    borderRadius: Border.br_sm,
    top: 459,
  },
  iconLayout: {
    height: 28,
    width: 28,
    position: "absolute",
  },
  linePosition: {
    height: 1,
    left: 21,
    position: "absolute",
  },
  detailsTypo: {
    lineHeight: 28,
    fontSize: FontSize.size_2xl,
    left: 21,
    textAlign: "center",
    color: Color.othersBlack,
    fontFamily: FontFamily.bodyLargeSemibold,
    fontWeight: "600",
    letterSpacing: 0,
    position: "absolute",
  },
  sqftTypo: {
    fontWeight: "300",
    lineHeight: 17,
    fontSize: FontSize.size_4xs,
    top: 658,
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    display: "flex",
    color: Color.othersBlack,
    fontFamily: FontFamily.bodyLargeSemibold,
    letterSpacing: 0,
    position: "absolute",
  },
  bedroomsTypo: {
    top: 659,
    fontWeight: "300",
    lineHeight: 17,
    fontSize: FontSize.size_4xs,
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    display: "flex",
    color: Color.othersBlack,
    fontFamily: FontFamily.bodyLargeSemibold,
    letterSpacing: 0,
    position: "absolute",
  },
  rectangleViewPosition: {
    left: 311,
    position: "absolute",
  },
  rp750kTypo: {
    color: Color.green_100,
    fontWeight: "700",
    fontFamily: FontFamily.bodyLargeSemibold,
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  produkDetail2Child: {
    top: -1,
    backgroundColor: Color.gray_1000,
    height: 32,
  },
  produkDetail2Item: {
    top: 0,
    height: 302,
  },
  text: {
    marginTop: -413,
    fontSize: FontSize.bodyLargeSemibold_size,
    lineHeight: 22,
    width: 56,
    fontWeight: "600",
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
  produkDetail2Inner: {
    top: 752,
    left: 123,
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
    width: 238,
    height: 53,
    position: "absolute",
  },
  condongcaturJogjakarta: {
    top: 342,
    left: 66,
    fontSize: FontSize.size_2xs,
    lineHeight: 20,
    color: Color.gray_900,
    width: 167,
  },
  galleryPhotos: {
    top: 422,
    left: 21,
  },
  theAlanaHotel: {
    top: 296,
    left: 30,
    fontSize: 31,
    lineHeight: 43,
  },
  rectangleIcon: {
    left: 21,
    position: "absolute",
  },
  produkDetail2Child1: {
    left: 166,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  iconlylightOutlinearrowL: {
    top: 58,
    left: 14,
  },
  bookingSekarang: {
    top: 765,
    left: 169,
    fontSize: FontSize.size_base,
    lineHeight: 24,
    color: Color.white,
    width: 142,
    fontWeight: "600",
  },
  lineView: {
    top: 394,
    borderStyle: "solid",
    borderColor: "rgba(0, 0, 0, 0.25)",
    borderTopWidth: 1,
    width: 349,
  },
  lineIcon: {
    top: 733,
    width: 348,
  },
  description: {
    top: 696,
  },
  details: {
    top: 592,
  },
  hotels: {
    left: 41,
    width: 40,
  },
  bedrooms: {
    left: 103,
    width: 77,
  },
  bathrooms: {
    left: 202,
    width: 82,
  },
  sqft: {
    left: 307,
    width: 62,
  },
  rp750k1: {
    fontSize: FontSize.size_3xl,
  },
  night: {
    fontSize: FontSize.size_5xs,
  },
  rp750kNightContainer1: {
    lineBreak: "anywhere",
    width: "100%",
  },
  rp750kNightContainer: {
    top: 767,
    left: 22,
    width: 89,
    height: 20,
  },
  rectangleView: {
    top: 427,
    width: 61,
    height: 22,
    backgroundColor: Color.white,
  },
  seeAll: {
    top: 425,
    left: 309,
    textAlign: "left",
    letterSpacing: 0,
    color: Color.green_100,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  iconlyboldlocation: {
    top: 346,
    left: 46,
    width: 12,
    height: 12,
    position: "absolute",
  },
  vectorIcon: {
    height: "2.13%",
    width: "5.13%",
    top: "75.36%",
    right: "81.79%",
    bottom: "22.51%",
    left: "13.08%",
  },
  bxhotelIcon: {
    top: 631,
    left: 128,
    overflow: "hidden",
  },
  bxsbathIcon: {
    top: 630,
    left: 229,
    overflow: "hidden",
  },
  vectorIcon1: {
    height: "3.32%",
    width: "7.18%",
    top: "74.41%",
    right: "9.74%",
    bottom: "22.27%",
    left: "83.08%",
  },
  produkDetail2: {
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default ProdukDetail2;
