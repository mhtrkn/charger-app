import { Image, ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS, PADDING } from './src/constants';
import Background from "./assets/background.png";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback, useState } from 'react';
import Car from "./assets/car.png";
import Scooter from "./assets/scooter.png";

SplashScreen.preventAutoHideAsync();


export default function App() {
  const [fontsLoaded] = useFonts({
    'Poppins300': require('./assets/fonts/Poppins-Light.ttf'),
    'Poppins': require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins500': require('./assets/fonts/Poppins-Medium.ttf'),
    'Poppins600': require('./assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins700': require('./assets/fonts/Poppins-Bold.ttf'),
    'Poppins800': require('./assets/fonts/Poppins-ExtraBold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const handleRoute = (type) => {
    switch (type) {
      case "CAR":

      case "SCOOTER":

      default:
        return console.log(type)
    }
  }

  const activeStyle = {
    borderWidth: 3,
    borderColor: COLORS.secondary,
  }



  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <ImageBackground style={styles.container} source={Background}>
        <View style={styles.bannerContainer}>
          <Text style={styles.bannerText}>
            "Özgürlüğün Anahtarını Tut! İster Araba, İster Scooter, Sürüşe Başla!"
          </Text>
        </View>
        <View style={styles.insider}>
          <View style={styles.insiderTop}>
            <Text style={styles.topHeader}>
              Merhaba,
            </Text>
            <Text style={styles.topSubtitle}>
              Bugün ne ile gitmek istersin?
            </Text>
          </View>
          <View style={styles.insiderBottom}>
            {/* CAR */}
            <TouchableOpacity onPress={() => handleRoute("CAR")} activeOpacity={.6} style={[styles.carContainer]}>
              <View style={styles.vehicleContainer}>
                <Image source={Car} style={styles.vehicleImage} />
                <Text style={styles.vehicleHeader}>
                  Araba ile dilediğin yere, hızlıca ulaşabilirsin!
                </Text>
              </View>
              <View style={styles.vehicleBottomTag}>
                <Text style={styles.vehicleBottomText}>
                  Araba
                </Text>
              </View>
            </TouchableOpacity>

            {/* SCOOTER */}
            <TouchableOpacity onPress={() => handleRoute("SCOOTER")} activeOpacity={.6} style={[styles.scooterContainer]}>
              <View style={styles.vehicleContainer}>
                <Image source={Scooter} style={styles.vehicleImage} />
                <Text style={styles.vehicleHeader}>
                  Scooter ile dilediğin gibi git, gez ve tadını çıkar!
                </Text>
              </View>
              <View style={styles.vehicleBottomTag}>
                <Text style={styles.vehicleBottomText}>
                  Scooter
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
    position: 'relative',
  },
  insider: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '60%',
    backgroundColor: COLORS.primary,
    borderTopLeftRadius: '25%',
    borderTopRightRadius: '25%',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.45,
    shadowRadius: 20,
    elevation: 5,
  },
  insiderTop: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingVertical: PADDING.verticalPadding,
    paddingHorizontal: PADDING.horizontalPadding
  },
  topHeader: {
    fontFamily: 'Poppins600',
    fontSize: 24,
    color: COLORS.textColor
  },
  topSubtitle: {
    fontFamily: 'Poppins',
    fontSize: 16,
    color: COLORS.textColor
  },
  insiderBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: PADDING.verticalPadding,
    paddingHorizontal: PADDING.horizontalPadding,
    height: '67.5%',
  },
  carContainer: {
    width: '47.5%',
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 12,
    position: 'relative',
    height: '100%',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 5,
    borderWidth: 3,
    borderColor: COLORS.secondary,
  },
  scooterContainer: {
    width: '47.5%',
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 12,
    position: 'relative',
    height: '100%',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 5,
  },
  vehicleContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '90%',
  },
  vehicleImage: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
  },
  vehicleHeader: {
    fontFamily: 'Poppins500',
    fontSize: 14,
    color: COLORS.textColor
  },
  vehicleBottomTag: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.secondary,
    paddingVertical: PADDING.verticalPadding,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  vehicleBottomText: {
    color: COLORS.primary,
    fontFamily: 'Poppins500',
    fontSize: 18
  },
  bannerContainer: {
    position: 'absolute',
    top: '12%',
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 12,
    paddingVertical: PADDING.verticalPadding,
    paddingHorizontal: PADDING.horizontalPadding,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.15,
    elevation: 5,
  },
  bannerText: {
    fontFamily: 'Poppins600',
    fontSize: 24,
    color: COLORS.textColor,
    textAlign: 'center'
  },
});
