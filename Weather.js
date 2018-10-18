import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from "expo";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import PropTypes from "prop-types";


const weatherCases = {
  Rain : {
    colors:['#00C6F8', "#005BEA"],
    title: "Raining like a MF",
    subtitle: "For more info look outside",
    icon : 'weather-rainy'
  },
  Clear: {
    colors:['#FEF253', "#FF7300"],
    title: "Sunny as fuck",
    subtitle: "Go get your ass burnt",
    icon : 'weather-sunny'
  },
  Thunderstorm: {
    colors:['#00ECBC', "#007ADF"],
    title: "Thunderstorm in the house",
    subtitle: "For more info look outside",
    icon : 'weather-lightning'
  },
  Clouds: {
    colors:['#D7D2CC', "#304352"],
    title: "Clouds",
    subtitle: "I know, weather is cloud",
    icon : 'weather-cloudy'
  },
  Snow: {
    colors:['#7DE2FC', "#8986E5"],
    title: "Cold as balls",
    subtitle: "Do you want to build a snowmain?",
    icon : 'weather-snowy'
  },
  Drizzle: {
    colors:['#89F7FE', "#66A6FF"],
    title: "Drizzle",
    subtitle: "Is like rain, but together cloud and sunny?",
    icon : 'weather-hail'
  },
  haze: {
    colors:['#89F7FE', "#66A6FF"],
    title: "haze",
    subtitle: "hazinggggg~",
    icon : 'weather-windy'
  },
  Mist: {
    colors:['#D7D2CC', "#304352"],
    title: "Mist",
    subtitle: "fog fog fog fog!!",
    icon : 'weather-fog'
  },
}

function Weather({ weatherName, temp }){
  return(
    <LinearGradient
    colors = {weatherCases[weatherName].colors}
    style = {styles.container}
    >

    <View style = {styles.upper}>
      <MaterialCommunityIcons color = "white" size={144} name={weatherCases[weatherName].icon} />
      <Text style = {styles.temp}>{temp}º</Text>
    </View>

    <View style = {styles.lower}>
      <Text style = {styles.title}> {weatherCases[weatherName].title} </Text>
      <Text style = {styles.subtitle}> {weatherCases[weatherName].subtitle }</Text>
    </View>

  </LinearGradient>

  );
}

Weather.propTypes = {
  temp : PropTypes.number.isRequired,
  weatherName: PropTypes.string.isRequired
};


export default Weather;






const styles = StyleSheet.create({
    container : {
      flex : 1,
    },
    temp : {
      fontSize : 48,
      backgroundColor : "transparent",
      color : "white",
      marginTop : 10,
    },
    upper : {
      flex: 1,
      alignItems: "center",
      justifyContent : "center",
      backgroundColor : "transparent",
    },
    lower: {
      flex : 1,
      alignItems:"flex-start",
      justifyContent : "flex-end",
      paddingLeft : 25
    },
    title: {
      fontSize : 38,
      backgroundColor : "transparent",
      color : "white",
      marginBottom : 10,
      fontWeight : "100",
    },
    subtitle : {
      fontSize : 24,
      backgroundColor : "transparent",
      color : "white",
      marginBottom : 24,

    },
});
