import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {useEffect, useState} from "react"
import { PermissionsAndroid } from 'react-native';
import * as Location from 'expo-location';
//import Contacts from 'react-native-contacts';

export default function App() {
  const [long, setLong ] = useState(15)
  const [lat, setLat ] = useState(175)

  useEffect(() => {
    (async () => {
      console.log("\n***\nWaiting on permission request.")
      let permission = await Location.requestForegroundPermissionsAsync();
      console.log("\n***\nPermission: " + permission.status)
      if(permission.status=='granted') {
        let location = await Location.getCurrentPositionAsync({});
        setLong(location.coords.longitude)
        setLat(location.coords.latitude)
        console.log("allowed")
        console.log("LONG: " + location.coords.longitude);
        console.log("LAT:  " + location.coords.latitude);
        console.log("ALT:  " + location.coords.altitude);
        console.log("SPD:  " + location.coords.speed);
      } else {  
        console.log("denied")
      }
    })();
  },[]);

  return (
    <View style={styles.container}>
      <Text>LONG: {long}  a</Text>
      <Text>LAT: {lat}   a</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


/*
import React from 'react';
import { Text, View } from 'react-native';

const HelloWorldApp = () => {
  return (
    <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

      }}>
      <Text>Testing 1 </Text>
      <Text>Testing 2 </Text>
    </View>
  );
}

export default HelloWorldApp;
*/