import * as React from "react";
import { View, StyleSheet, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily, Margin } from "../GlobalStyles";

const Pencarian = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.pencarian}>
      <View style={styles.pencarianChild} />
      <Text style={styles.text}>9:41</Text>
      <Image
        style={[styles.groupIcon, styles.iconLayout2]}
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
      <View
        style={[
          styles.pencarianItem,
          styles.groupItemLayout,
          styles.itemLayout,
        ]}
      />
      <View style={[styles.pencarianInner, styles.innerLayout]} />
      <View style={styles.rectangleView} />
      <Text style={[styles.lagosNigeria, styles.searchTypo]}>
        Lagos, Nigeria
      </Text>
      <Text
        style={[
          styles.presidentialHotel,
          styles.text3Typo,
          styles.presidentialHotelTypo,
        ]}
      >
        Presidential Hotel
      </Text>
      <Text style={[styles.reviews, styles.reviewsTypo]}>
        <Text style={[styles.text1, styles.homeTypo1]}>5.0</Text>
        <Text style={styles.reviews1}>
          <Text>{`  `}</Text>
          <Text style={styles.reviews2}> (4,345 reviews)</Text>
        </Text>
      </Text>
      <Text style={[styles.night, styles.nightFlexBox, styles.nightPosition]}>
        <Text style={styles.nightTxt}>
          <Text style={styles.text2}>
            <Text style={[styles.text3, styles.text3Typo]}>$160</Text>
          </Text>
          <Text style={styles.night1}>
            <Text style={styles.night2}>
              <Text>{`  `}</Text>
              <Text style={styles.night3}>/night</Text>
            </Text>
          </Text>
        </Text>
      </Text>
      <View
        style={[
          styles.pencarianChild1,
          styles.childLayout,
          styles.nightPosition,
        ]}
      />
      <View
        style={[
          styles.pencarianChild2,
          styles.pencarianChildBg,
          styles.groupParentPosition,
        ]}
      />
      <View style={styles.pencarianChild3} />
      <View style={styles.pencarianChild4} />
      <View style={[styles.pencarianChild5, styles.pencarianChildBorder]} />
      <View style={[styles.pencarianChild6, styles.pencarianChildBorder]} />
      <Text style={[styles.allHotel, styles.popularTypo]}>All Hotel</Text>
      <Text style={[styles.recommended, styles.popularTypo]}>Recommended</Text>
      <Text style={[styles.popular, styles.popularTypo]}>Popular</Text>
      <View style={[styles.pencarianChild7, styles.pencarianChildBorder]} />
      <Text style={[styles.trending, styles.popularTypo]}>Trending</Text>
      <Text style={[styles.search, styles.searchTypo]}>Search</Text>
      <View style={[styles.pencarianChild8, styles.pencarianChildBg]} />
      <Image
        style={[styles.pencarianChild9, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/group-96.png")}
      />
      <Text style={styles.recommended484579}>Recommended (484,579)</Text>
      <View style={[styles.pencarianChild10, styles.pencarianChildLayout]} />
      <View style={[styles.pencarianChild11, styles.pencarianChildLayout]} />
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector1.png")}
      />
      <Image
        style={[styles.healthiconsuiMenuNegative, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/healthiconsuimenunegative1.png")}
      />
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Pressable
          style={[
            styles.groupParent,
            styles.groupParentPosition,
            styles.groupItemLayout,
          ]}
        >
          <Pressable
            style={[styles.rectangleGroup, styles.groupItemLayout]}
            onPress={() => navigation.navigate("ProdukDetail1")}
          >
            <View
              style={[
                styles.groupItem,
                styles.groupItemLayout,
                styles.itemLayout,
              ]}
            />
            <Image
              style={[
                styles.groupInner,
                styles.groupInnerPosition,
                styles.innerLayout,
              ]}
              resizeMode="cover"
              source={require("../assets/rectangle-571.png")}
            />
            <Text style={styles.malioboroJogjakarta}>
              Malioboro, Jogjakarta
            </Text>
            <Text style={styles.malioboroInn}>Malioboro Inn</Text>
            <Text style={[styles.reviews3, styles.reviewsTypo]}>
              <Text style={[styles.text1, styles.homeTypo1]}>5.0</Text>
              <Text style={styles.reviews1}>
                <Text>{`  `}</Text>
                <Text style={styles.reviews2}> (4,345 reviews)</Text>
              </Text>
            </Text>
            <Text
              style={[
                styles.rp600kNightContainer,
                styles.nightContainerFlexBox,
              ]}
            >
              <Text style={styles.nightTxt}>
                <Text style={styles.text2}>
                  <Text style={[styles.text3, styles.text3Typo]}>Rp 600k</Text>
                </Text>
                <Text style={styles.night1}>
                  <Text style={styles.night2}>
                    <Text>{`  `}</Text>
                    <Text style={styles.night3}>/night</Text>
                  </Text>
                </Text>
              </Text>
            </Text>
            <View
              style={[
                styles.groupChild1,
                styles.night16Position,
                styles.childLayout,
              ]}
            />
            <Image
              style={[styles.starIcon, styles.starIconLayout]}
              resizeMode="cover"
              source={require("../assets/star-8.png")}
            />
          </Pressable>
          <Image
            style={[styles.jambookmarkMinusIcon, styles.jambookmarkIconLayout]}
            resizeMode="cover"
            source={require("../assets/jambookmarkminus.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.rectangleContainer, styles.groupItemLayout]}
          onPress={() => navigation.navigate("ProdukDetail2")}
        >
          <View
            style={[
              styles.groupItem,
              styles.groupItemLayout,
              styles.itemLayout,
            ]}
          />
          <Image
            style={[
              styles.groupInner,
              styles.groupInnerPosition,
              styles.innerLayout,
            ]}
            resizeMode="cover"
            source={require("../assets/rectangle-611.png")}
          />
          <View style={[styles.groupChild3, styles.groupChildPosition]} />
          <Text style={styles.malioboroJogjakarta}>
            Condongcatur, Jogjakarta
          </Text>
          <Text style={styles.malioboroInn}>{`The Alana Hotel `}</Text>
          <Text style={[styles.reviews3, styles.reviewsTypo]}>
            <Text style={[styles.text1, styles.homeTypo1]}>5.0</Text>
            <Text style={styles.reviews1}>
              <Text>{`  `}</Text>
              <Text style={styles.reviews2}> (4,345 reviews)</Text>
            </Text>
          </Text>
          <Text style={styles.rp750kNightContainer}>
            <Text style={styles.nightTxt}>
              <Text style={styles.text2}>
                <Text style={[styles.text3, styles.text3Typo]}>Rp 750k</Text>
              </Text>
              <Text style={styles.night1}>
                <Text style={styles.night2}>
                  <Text>{`  `}</Text>
                  <Text style={styles.night3}>/night</Text>
                </Text>
              </Text>
            </Text>
          </Text>
          <View
            style={[
              styles.groupChild1,
              styles.night16Position,
              styles.childLayout,
            ]}
          />
          <Image
            style={[styles.starIcon, styles.starIconLayout]}
            resizeMode="cover"
            source={require("../assets/star-8.png")}
          />
          <Image
            style={[styles.jambookmarkMinusIcon, styles.jambookmarkIconLayout]}
            resizeMode="cover"
            source={require("../assets/jambookmarkminus.png")}
          />
        </Pressable>
        <Pressable style={[styles.groupPressable, styles.groupItemLayout]}>
          <View
            style={[
              styles.groupItem,
              styles.groupItemLayout,
              styles.itemLayout,
            ]}
          />
          <Image
            style={[
              styles.groupInner,
              styles.groupInnerPosition,
              styles.innerLayout,
            ]}
            resizeMode="cover"
            source={require("../assets/rectangle-69.png")}
          />
          <View style={[styles.groupChild3, styles.groupChildPosition]} />
          <Text style={styles.malioboroJogjakarta}>Depok, Jogjakarta</Text>
          <Text
            style={[
              styles.portaByTheContainer,
              styles.groupInnerPosition,
              styles.text3Typo,
              styles.presidentialHotelTypo,
            ]}
          >
            <Text style={styles.text2}>{`PORTA by `}</Text>
            <Text style={styles.night1}>The Ambarukmo</Text>
          </Text>
          <Text style={[styles.reviews3, styles.reviewsTypo]}>
            <Text style={[styles.text1, styles.homeTypo1]}>5.0</Text>
            <Text style={styles.reviews1}>
              <Text>{`  `}</Text>
              <Text style={styles.reviews2}> (4,345 reviews)</Text>
            </Text>
          </Text>
          <Text style={styles.rp500kNightContainer}>
            <Text style={styles.nightTxt}>
              <Text style={styles.text2}>
                <Text style={[styles.text3, styles.text3Typo]}>Rp 500k</Text>
              </Text>
              <Text style={styles.night1}>
                <Text style={styles.night2}>
                  <Text>{`  `}</Text>
                  <Text style={styles.night3}>/night</Text>
                </Text>
              </Text>
            </Text>
          </Text>
          <View
            style={[
              styles.groupChild1,
              styles.night16Position,
              styles.childLayout,
            ]}
          />
          <Image
            style={[styles.starIcon, styles.starIconLayout]}
            resizeMode="cover"
            source={require("../assets/star-8.png")}
          />
          <Image
            style={[styles.jambookmarkMinusIcon, styles.jambookmarkIconLayout]}
            resizeMode="cover"
            source={require("../assets/jambookmarkminus.png")}
          />
        </Pressable>
        <View style={[styles.groupView, styles.groupViewPosition]}>
          <View
            style={[
              styles.groupItem,
              styles.groupItemLayout,
              styles.itemLayout,
            ]}
          />
          <Text
            style={[styles.rp750kNightContainer2, styles.nightContainerFlexBox]}
          >
            <Text style={styles.nightTxt}>
              <Text style={styles.text2}>
                <Text style={[styles.text3, styles.text3Typo]}>Rp 750k</Text>
              </Text>
              <Text style={styles.night1}>
                <Text style={styles.night2}>
                  <Text>{`  `}</Text>
                  <Text style={styles.night3}>/night</Text>
                </Text>
              </Text>
            </Text>
          </Text>
          <Image
            style={[
              styles.groupInner,
              styles.groupInnerPosition,
              styles.innerLayout,
            ]}
            resizeMode="cover"
            source={require("../assets/rectangle-73.png")}
          />
          <View style={[styles.groupChild13, styles.groupChildPosition]} />
          <Text style={styles.malioboroJogjakarta}>Umbulharjo, Jogjakarta</Text>
          <Text style={styles.malioboroInn}>IBIS Style Hotel</Text>
          <Text style={[styles.reviews3, styles.reviewsTypo]}>
            <Text style={[styles.text1, styles.homeTypo1]}>5.0</Text>
            <Text style={styles.reviews1}>
              <Text>{`  `}</Text>
              <Text style={styles.reviews2}> (4,345 reviews)</Text>
            </Text>
          </Text>
          <View
            style={[
              styles.groupChild1,
              styles.night16Position,
              styles.childLayout,
            ]}
          />
          <Image
            style={[styles.starIcon, styles.starIconLayout]}
            resizeMode="cover"
            source={require("../assets/star-8.png")}
          />
          <Image
            style={[styles.jambookmarkMinusIcon, styles.jambookmarkIconLayout]}
            resizeMode="cover"
            source={require("../assets/jambookmarkminus.png")}
          />
        </View>
        <View style={[styles.rectangleParent1, styles.groupViewPosition]}>
          <View
            style={[
              styles.groupItem,
              styles.groupItemLayout,
              styles.itemLayout,
            ]}
          />
          <Image
            style={[
              styles.groupInner,
              styles.groupInnerPosition,
              styles.innerLayout,
            ]}
            resizeMode="cover"
            source={require("../assets/rectangle-691.png")}
          />
          <View style={[styles.groupChild3, styles.groupChildPosition]} />
          <Text style={styles.malioboroJogjakarta}>Lagos, Nigeria</Text>
          <Text style={styles.malioboroInn}>Federal Palace Hotel</Text>
          <Text style={[styles.reviews3, styles.reviewsTypo]}>
            <Text style={[styles.text1, styles.homeTypo1]}>5.0</Text>
            <Text style={styles.reviews1}>
              <Text>{`  `}</Text>
              <Text style={styles.reviews2}> (4,345 reviews)</Text>
            </Text>
          </Text>
          <Text
            style={[
              styles.night16,
              styles.night16Position,
              styles.nightFlexBox,
            ]}
          >
            <Text style={styles.nightTxt}>
              <Text style={styles.text2}>
                <Text style={[styles.text3, styles.text3Typo]}>$200</Text>
              </Text>
              <Text style={styles.night1}>
                <Text style={styles.night2}>
                  <Text>{`  `}</Text>
                  <Text style={styles.night3}>/night</Text>
                </Text>
              </Text>
            </Text>
          </Text>
          <View
            style={[
              styles.groupChild1,
              styles.night16Position,
              styles.childLayout,
            ]}
          />
          <Image
            style={[styles.groupChild20, styles.starIconLayout]}
            resizeMode="cover"
            source={require("../assets/star-21.png")}
          />
          <Image
            style={[styles.jambookmarkMinusIcon4, styles.jambookmarkIconLayout]}
            resizeMode="cover"
            source={require("../assets/jambookmarkminus6.png")}
          />
        </View>
      </View>
      <Image
        style={[styles.evasearchOutlineIcon, styles.iconLayout2]}
        resizeMode="cover"
        source={require("../assets/evasearchoutline.png")}
      />
      <View style={[styles.groupContainer, styles.groupLayout]}>
        <View style={[styles.groupParent1, styles.groupLayout]}>
          <View style={[styles.groupParent1, styles.groupLayout]}>
            <View style={[styles.groupChild21, styles.groupLayout]} />
            <Image
              style={[styles.iconLayout, styles.homePosition1]}
              resizeMode="cover"
              source={require("../assets/fluenthome16regular1.png")}
            />
            <Image
              style={[styles.bxssearchIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/bxssearch.png")}
            />
            <Pressable
              style={styles.healthiconsuiMenuNegative1}
              onPress={() => navigation.navigate("HistoryBooking")}
            >
              <Image
                style={[styles.icon, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../assets/healthiconsuimenunegative.png")}
              />
            </Pressable>
            <Image
              style={[styles.profilePosition, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/mdiaccountoutline1.png")}
            />
          </View>
          <Text
            style={[
              styles.home,
              styles.homeTypo,
              styles.homePosition,
              styles.homePosition1,
              styles.homeTypo1,
            ]}
          >
            Home
          </Text>
          <Text
            style={[
              styles.search1,
              styles.search1Position,
              styles.homeTypo,
              styles.homePosition,
            ]}
          >
            Search
          </Text>
          <Text
            style={[
              styles.profile,
              styles.homeTypo,
              styles.homePosition,
              styles.profilePosition,
            ]}
          >
            Profile
          </Text>
          <Text style={[styles.history, styles.homeTypo]}>History</Text>
        </View>
        <View style={[styles.groupChild22, styles.search1Position]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout2: {
    width: 24,
    position: "absolute",
  },
  groupIconPosition: {
    marginTop: -407,
    top: "50%",
    position: "absolute",
  },
  groupItemLayout: {
    height: 119,
    position: "absolute",
  },
  itemLayout: {
    borderRadius: Border.br_xs,
    height: 119,
    width: 348,
    backgroundColor: Color.white,
  },
  innerLayout: {
    height: 91,
    width: 91,
    borderRadius: Border.br_xs,
  },
  searchTypo: {
    lineHeight: 20,
    fontSize: FontSize.size_2xs,
    textAlign: "left",
    fontFamily: FontFamily.bodyLargeSemibold,
    letterSpacing: 0,
    position: "absolute",
  },
  text3Typo: {
    fontWeight: "700",
    fontFamily: FontFamily.bodyLargeSemibold,
  },
  presidentialHotelTypo: {
    lineHeight: 24,
    fontSize: FontSize.size_base,
    fontWeight: "700",
    textAlign: "left",
    color: Color.othersBlack,
    letterSpacing: 0,
  },
  reviewsTypo: {
    lineHeight: 18,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    letterSpacing: 0,
    position: "absolute",
  },
  homeTypo1: {
    fontWeight: "600",
    color: Color.green_100,
  },
  nightFlexBox: {
    width: 46,
    whiteSpace: "pre-wrap",
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    letterSpacing: 0,
  },
  nightPosition: {
    left: 319,
    position: "absolute",
  },
  childLayout: {
    height: 27,
    width: 36,
  },
  pencarianChildBg: {
    backgroundColor: Color.gray_200,
    position: "absolute",
  },
  groupParentPosition: {
    left: 21,
    width: 348,
  },
  pencarianChildBorder: {
    borderWidth: 2,
    borderColor: "#1ab65c",
    borderStyle: "solid",
    height: 31,
    borderRadius: Border.br_lg,
    top: 144,
    position: "absolute",
    backgroundColor: Color.white,
  },
  popularTypo: {
    lineHeight: 21,
    fontSize: FontSize.size_xs,
    top: 149,
    textAlign: "left",
    fontFamily: FontFamily.bodyLargeSemibold,
    fontWeight: "600",
    letterSpacing: 0,
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  pencarianChildLayout: {
    height: 23,
    width: 23,
    top: 193,
    position: "absolute",
    backgroundColor: Color.white,
  },
  iconLayout1: {
    borderRadius: Border.br_3xs,
    overflow: "hidden",
  },
  groupChildLayout: {
    height: 727,
    width: 390,
    left: 0,
    position: "absolute",
  },
  groupInnerPosition: {
    top: 14,
    position: "absolute",
  },
  nightContainerFlexBox: {
    width: 71,
    whiteSpace: "pre-wrap",
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    letterSpacing: 0,
    position: "absolute",
  },
  night16Position: {
    left: 302,
    position: "absolute",
  },
  starIconLayout: {
    height: 18,
    width: 18,
    position: "absolute",
  },
  jambookmarkIconLayout: {
    height: 25,
    width: 29,
    position: "absolute",
    overflow: "hidden",
  },
  groupChildPosition: {
    left: 105,
    top: 23,
    height: 28,
    position: "absolute",
    backgroundColor: Color.white,
  },
  groupViewPosition: {
    left: 18,
    height: 119,
    position: "absolute",
  },
  groupLayout: {
    height: 78,
    width: 390,
    left: 0,
    position: "absolute",
  },
  homePosition1: {
    left: 39,
    position: "absolute",
  },
  iconLayout: {
    width: 28,
    top: 10,
    height: 28,
    overflow: "hidden",
  },
  homeTypo: {
    lineHeight: 14,
    fontSize: FontSize.size_6xs,
    textAlign: "left",
    fontFamily: FontFamily.bodyLargeSemibold,
    letterSpacing: 0,
  },
  homePosition: {
    top: 38,
    lineHeight: 14,
    fontSize: FontSize.size_6xs,
  },
  search1Position: {
    left: 129,
    position: "absolute",
  },
  profilePosition: {
    left: 324,
    position: "absolute",
  },
  pencarianChild: {
    top: -1,
    backgroundColor: Color.gray_1000,
    height: 32,
    width: 390,
    left: 0,
    position: "absolute",
  },
  text: {
    marginTop: -413,
    left: 14,
    fontSize: FontSize.bodyLargeSemibold_size,
    lineHeight: 22,
    width: 56,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    letterSpacing: 0,
    color: Color.othersBlack,
    fontFamily: FontFamily.bodyLargeSemibold,
    fontWeight: "600",
    top: "50%",
    position: "absolute",
  },
  groupIcon: {
    marginTop: -408,
    right: 17,
    height: 13,
    top: "50%",
    width: 24,
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
  pencarianItem: {
    top: 790,
    left: 17,
    width: 348,
  },
  pencarianInner: {
    top: 804,
    left: 28,
    backgroundColor: Color.blue,
    position: "absolute",
  },
  rectangleView: {
    height: 28,
    width: 183,
    left: 122,
    top: 813,
    position: "absolute",
    backgroundColor: Color.white,
  },
  lagosNigeria: {
    top: 848,
    color: Color.gray_900,
    left: 123,
  },
  presidentialHotel: {
    left: 123,
    top: 813,
    lineHeight: 24,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  text1: {
    color: Color.green_100,
    fontFamily: FontFamily.bodyLargeSemibold,
  },
  reviews2: {
    color: Color.gray_800,
  },
  reviews1: {
    fontFamily: FontFamily.bodyLargeSemibold,
  },
  reviews: {
    top: 876,
    left: 145,
  },
  text3: {
    fontSize: FontSize.size_lg,
    color: Color.green_100,
  },
  text2: {
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
    top: 810,
  },
  pencarianChild1: {
    top: 863,
    backgroundColor: Color.gray_500,
  },
  pencarianChild2: {
    top: 61,
    borderRadius: Border.br_2xs,
    height: 54,
  },
  pencarianChild3: {
    top: 129,
    width: 426,
    height: 64,
    left: 0,
    position: "absolute",
    backgroundColor: Color.white,
  },
  pencarianChild4: {
    backgroundColor: Color.green_100,
    width: 82,
    height: 31,
    borderRadius: Border.br_lg,
    top: 144,
    left: 21,
    position: "absolute",
  },
  pencarianChild5: {
    left: 110,
    width: 127,
  },
  pencarianChild6: {
    left: 243,
    width: 77,
  },
  allHotel: {
    left: 34,
    color: Color.white,
  },
  recommended: {
    color: Color.green_100,
    left: 122,
    fontSize: FontSize.size_xs,
    top: 149,
  },
  popular: {
    left: 255,
    color: Color.green_100,
  },
  pencarianChild7: {
    left: 328,
    width: 87,
  },
  trending: {
    left: 342,
    color: Color.green_100,
  },
  search: {
    top: 77,
    left: 77,
    color: Color.gray_500,
  },
  pencarianChild8: {
    top: 71,
    left: 320,
    width: 35,
    height: 34,
  },
  pencarianChild9: {
    height: "1.91%",
    width: "5.9%",
    top: "9.48%",
    right: "10.51%",
    bottom: "88.61%",
    left: "83.59%",
  },
  recommended484579: {
    top: 193,
    left: 21,
    lineHeight: 24,
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.othersBlack,
    fontFamily: FontFamily.bodyLargeSemibold,
    fontWeight: "600",
    letterSpacing: 0,
    position: "absolute",
  },
  pencarianChild10: {
    left: 311,
  },
  pencarianChild11: {
    left: 346,
  },
  vectorIcon: {
    height: "2.25%",
    width: "4.87%",
    top: "23.1%",
    right: "5.9%",
    bottom: "74.64%",
    left: "89.23%",
  },
  healthiconsuiMenuNegative: {
    top: 195,
    left: 313,
    width: 19,
    height: 19,
    position: "absolute",
  },
  groupChild: {
    backgroundColor: Color.gray_300,
    top: 0,
  },
  groupItem: {
    top: 0,
    width: 348,
    left: 0,
  },
  groupInner: {
    left: 11,
  },
  malioboroJogjakarta: {
    top: 58,
    left: 106,
    color: Color.gray_900,
    lineHeight: 20,
    fontSize: FontSize.size_2xs,
    textAlign: "left",
    fontFamily: FontFamily.bodyLargeSemibold,
    letterSpacing: 0,
    position: "absolute",
  },
  malioboroInn: {
    top: 23,
    left: 106,
    fontWeight: "700",
    lineHeight: 24,
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.othersBlack,
    fontFamily: FontFamily.bodyLargeSemibold,
    letterSpacing: 0,
    position: "absolute",
  },
  reviews3: {
    left: 128,
    top: 86,
  },
  rp600kNightContainer: {
    left: 272,
    top: 16,
  },
  groupChild1: {
    top: 73,
    backgroundColor: Color.white,
  },
  starIcon: {
    left: 109,
    top: 86,
  },
  rectangleGroup: {
    top: 0,
    width: 348,
    left: 0,
  },
  jambookmarkMinusIcon: {
    top: 74,
    left: 305,
  },
  groupParent: {
    top: 19,
  },
  groupChild3: {
    width: 183,
    left: 105,
  },
  rp750kNightContainer: {
    left: 270,
    top: 10,
    width: 71,
    whiteSpace: "pre-wrap",
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    letterSpacing: 0,
    position: "absolute",
  },
  rectangleContainer: {
    top: 160,
    left: 20,
    width: 348,
  },
  portaByTheContainer: {
    left: 109,
  },
  rp500kNightContainer: {
    left: 276,
    width: 69,
    top: 16,
    whiteSpace: "pre-wrap",
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    letterSpacing: 0,
    position: "absolute",
  },
  groupPressable: {
    top: 301,
    left: 19,
    width: 348,
  },
  rp750kNightContainer2: {
    top: 9,
    left: 280,
  },
  groupChild13: {
    width: 172,
  },
  groupView: {
    top: 442,
    width: 351,
  },
  night16: {
    top: 20,
  },
  groupChild20: {
    top: 906,
    left: 127,
  },
  jambookmarkMinusIcon4: {
    top: 894,
    left: 323,
  },
  rectangleParent1: {
    top: 583,
    width: 348,
  },
  rectangleParent: {
    top: 237,
  },
  evasearchOutlineIcon: {
    top: 76,
    left: 41,
    height: 24,
    overflow: "hidden",
  },
  groupChild21: {
    borderRadius: Border.br_sm,
    top: 0,
    backgroundColor: Color.white,
  },
  bxssearchIcon: {
    left: 132,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  healthiconsuiMenuNegative1: {
    left: 236,
    top: 13,
    width: 20,
    height: 22,
    position: "absolute",
  },
  groupParent1: {
    top: 0,
  },
  home: {
    color: Color.green_100,
  },
  search1: {
    color: Color.gray_900,
  },
  profile: {
    color: Color.gray_900,
  },
  history: {
    top: 37,
    left: 231,
    color: Color.gray_900,
    position: "absolute",
  },
  groupChild22: {
    top: 64,
    borderRadius: Border.br_4xl,
    backgroundColor: Color.gray_400,
    width: 125,
    height: 5,
  },
  groupContainer: {
    top: 769,
  },
  pencarian: {
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default Pencarian;
