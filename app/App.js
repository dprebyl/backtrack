import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import Time from './Components/Time';
import Header from './Components/Header';
import Alerts from './Components/Alerts';
import {getLocation,isHome,haversine} from './location-service.js';
import {createAlert,getAlerts,clearAlert} from './Request';
import { requestForegroundPermissionsAsync } from 'expo-location';


//app it self
const App = () =>{
  const [long, setLong] = useState("");
  const [lat, setLat] = useState("");
  const [alerts,setAlerts] = useState(["Alert 1","Alert 2"]);
  const [userPhone, setUserPhone] = useState("+13149205055");
  const [contactPhone,setContactPhone] = useState("+13149205055"); 
  const [address, setAdress] = useState('1234 N 123 St Number City Number'); //stores address, use address to access it
  const [time, setTime] = useState("11:11");
  const [locString, setLocString] = useState("");
  const [homeLong, setHomeLong] = useState(-95.25036368196945);
  const [homeLat, setHomeLat] = useState(38.965795247022086);
  const [buttonColor, setColor] = useState("#99ccff");
  const [radius, setRadius] = useState("0.05 km"); //50 meters   
  
  const checkAlertTrigger = async () => {
    let currentDate = new Date();

    //every 55 check if alert goes out
    for(let i = 0; i < alertCache.length; i++) {
      if(alertCache[i].alert_time <= currentDate) {

      }
    }
  }

  const buttonHandler = () => {
    console.log(radius);
    isHome(homeLong,homeLat,long,lat,radius)
    if(isHome(homeLong,homeLat,long,lat,radius) == true) {
      console.log("blue");
      setColor("#3366ff");
    } else {
      console.log("red");
      setColor("#ff3300");
    }
  }

  useEffect(() => {
      (async () => {
        try {
          let location = await getLocation()
          let long = location.coords.longitude;
          let lat  = location.coords.latitude;

          setLocString("Current Location: " + lat + ", " + long + "\nHome Location: " + homeLat + ", " + homeLong + 
                      "\nYou are " + haversine(lat,long,homeLat,homeLong) + " km from home");
                      setLong(long);
                      setLat(lat);
        } catch (err) {
          setLong(err.message)
        }
      })();
  },[]);

  return(
    <View style={styles.container}>
      <Header />
      {/* Address field*/}
      <Text>Address :</Text>
      <TextInput style={styles.addressInput}
       placeholder="Street Address, City, State, and Zip"
       onChangeText={(getAddress) => setAdress(getAddress)} /> 
      <Time/>
      <Alerts/>
      <Text>Radius:</Text>
      <TextInput
       placeholder={radius}
       onChangeText={(getRadius) => setRadius(getRadius)} /> 
      <Button 
        title="Am I Home?"
        onPress={buttonHandler}
        color={buttonColor}
      />
      <Text>{locString}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
  addressInput: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width:325,
  },
});

export default App;