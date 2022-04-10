import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {useEffect, useState} from "react"


import {getLocation} from './location-service.js';

export default function App() {
  const [long, setLong ] = useState(15)
  const [lat, setLat ] = useState(175)

  useEffect(() => {
    (async () => {
      try {
        let location = await getLocation()
        setLong(location.coords.longitude)
        setLat(location.coords.latitude)
      } catch (err) {
        setLong(err.message)
      }
    })();
  },[]);
  
  
  return (
    <View style={styles.container}>
      <Text>LONG: {long}</Text>
      <Text>LAT: {lat}</Text>
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