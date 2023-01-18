const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Splashscreen from "./screens/Splashscreen";
import Profil from "./screens/Profil";
import HistoryBooking from "./screens/HistoryBooking";
import Konfirmasi from "./screens/Konfirmasi";
import Pembayaran from "./screens/Pembayaran";
import ProdukDetail2 from "./screens/ProdukDetail2";
import ProdukDetail1 from "./screens/ProdukDetail1";
import Pencarian from "./screens/Pencarian";
import Beranda from "./screens/Beranda";
import BuatAkun from "./screens/BuatAkun";
import Login from "./screens/Login";
import Startingpage3 from "./screens/Startingpage3";
import Startingpage2 from "./screens/Startingpage2";
import Startingpage1 from "./screens/Startingpage1";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);
  const [fontsLoaded] = useFonts({
    Urbanist: require("./assets/fonts/Urbanist.ttf"),
  });

  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 3000);
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator
            initialRouteName="Startingpage1"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen
              name="Splashscreen"
              component={Splashscreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profil"
              component={Profil}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HistoryBooking"
              component={HistoryBooking}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Konfirmasi"
              component={Konfirmasi}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Pembayaran"
              component={Pembayaran}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ProdukDetail2"
              component={ProdukDetail2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ProdukDetail1"
              component={ProdukDetail1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Pencarian"
              component={Pencarian}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Beranda"
              component={Beranda}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BuatAkun"
              component={BuatAkun}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Startingpage3"
              component={Startingpage3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Startingpage2"
              component={Startingpage2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Startingpage1"
              component={Startingpage1}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : (
          <Splashscreen />
        )}
      </NavigationContainer>
    </>
  );
};
export default App;
