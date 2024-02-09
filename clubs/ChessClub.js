import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  TextInput,
  Dimensions,
  Button,
  Alert
} from "react-native";

import { RFValue } from "react-native-responsive-fontsize";
import * as Font from "expo-font";
import firebase from "firebase"
import * as SplashScreen from 'expo-splash-screen';
SplashScreen.preventAutoHideAsync();

let customFonts = {
  "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf")
};

export default class ChessClub extends Component{
    constructor(props){
        super(props);
        this.state={
            light_theme: true
        }
    }


render(){
    return(
        <><SafeAreaView style={styles.droidSafeArea}/>
        <View style={styles.appTitle}>
        <View style={styles.appTitleTextContainer}>
          <Text
            style={this.state.light_theme
              ? styles.appTitleTextLight
              : styles.appTitleText}>
            Chess Club
          </Text>
          <View style={styles.descriptionContainer}>
            <View style={styles.descriptionText}>
              <Text 
              style={this.state.light_theme
              ? styles.descriptionTextLight
              : styles.descriptionText}>
                Welcome to our Chess Club, where strategic minds converge for thrilling battles on the 64 squares. Whether you're a grandmaster or just learning the game, join us in a welcoming environment to hone your skills, share tactics, and foster a community united by the timeless game of chess. Checkmate boredom, elevate your strategy, and make lasting connections at our Chess Club!
              </Text>
              <View style={styles.numberText}>
                <Text 
                style={styles.numberText
                ? styles.numberText
                : styles.numberText}>
                  Total members: 10
                </Text>
              <View style={styles.numberText}>
                <Text 
                style={styles.registerButton}>
                  Total members: 10
                </Text>
                <TouchableOpacity
                  style={[styles.registerButton, { marginTop: 20 }]}
                  onPress={() => this.hide(registerButton)}>
                  <Text 
                  style={styles.registerButtonText
                  ? registerButtonText
                  : registerButtonTextLight }>
                    Register
                  </Text>
                </TouchableOpacity>
              </View>
              </View>          
            </View>
          </View>
        </View>
      </View></>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#15193c",
  },
  droidSafeArea: {
    marginTop:
      Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35),
  },
  appTitle: {
    flex: 0.07,
    flexDirection: "row",
    alignItems:"center"
  },
  appIcon: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
  },
  iconImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  appTitleTextContainer: {
    flex: 0.7,
    justifyContent: "center",
  },
  appTitleText: {
    color: "white",
    fontSize: RFValue(28),
    fontFamily: "Bubblegum-Sans",
  },
  fieldsContainer: {
    flex: 0.85,
  },
  previewImage: {
    width: "93%",
    height: RFValue(250),
    alignSelf: "center",
    borderRadius: RFValue(10),
    marginVertical: RFValue(10),
    resizeMode: "contain",
  },
  inputFont: {
    height: RFValue(40),
    marginTop: RFValue(40),
    borderColor: "white",
    borderWidth: RFValue(1),
    borderRadius: RFValue(10),
    paddingLeft: RFValue(10),
    color: "white",
    fontFamily: "Bubblegum-Sans",
  },
  inputFontExtra: {
    marginTop: RFValue(15),
  },
  inputTextBig: {
    textAlignVertical: "top",
    padding: RFValue(5),
  },
  submitButton: {
    marginTop: RFValue(20),
    alignItems: "center",
    justifyContent: "center"
  },
  registerButton: {
    width: RFValue(100),
    height: RFValue(75),
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderRadius: RFValue(30),
    backgroundColor: "white",
    marginBottom: RFValue(20)
  },
  descriptionContainer: {
    marginTop: RFValue(5)
  },
  descriptionText: {
    fontFamily: "Bubblegum-Sans",
    fontSize: RFValue(13),
    color: "white"
  },
  descriptionTextLight: {
    fontFamily: "Bubblegum-Sans",
    fontSize: RFValue(13),
    color: "black"
  },
  numberText: {
    fontFamily: "Bubblgum-Sans",
    fontSize: RFValue(13),
    color: "white"
  },
  numberTextLight: {
    fontFamily: "Bubblgum-Sans",
    fontSize: RFValue(13),
    color: "black"
  },
  registerButonText: {
    fontFamily: "Bubblgum-Sans",
    fontSize: RFValue(20),
    color: "white"
  },
  registerButtonTextLight: {
    fontFamily: "Bubblgum-Sans",
    fontSize: RFValue(20),
    color: "black"
  }
 
});
