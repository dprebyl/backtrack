import React, { useState } from 'react';
import {StyleSheet, Text, TouchableOpacity, View,Button } from 'react-native';
import AlertList from './AlertList';



const Alerts = () =>{
  const [alerts,setAlerts] = useState(["Alert 1","Alert 2"]);
  const [userPhone, setUserPhone] = useState("+13149205055");
  const [contactPhone,setContactPhone] = useState("+13149205055"); 

  const addAlert = () => {
    alert("Alert Added!");
  }

  return(
    <View style ={styles.container}>

        {/*Add Button*/}
        <TouchableOpacity onPress={() => addAlert()} style={styles.buttonAdd}>
        <Text style={styles.textAdd}>Add </Text>
        </TouchableOpacity>

        {/*Alerts*/}
        <View style={styles.alertWrapper}>
            <Text style={styles.alertTitle}>Alerts</Text>

                {/*Alert Lists will be below*/}
                <View style={styles.alerts}>
                   <AlertList text={alerts[0]} />
                   <AlertList text={alerts[1]} />
                </View>
        </View>


    </View>
  );
};

const styles = StyleSheet.create({
  textAdd:{
    fontSize: 20,
    color: '#fff',
  },
  container:{
    flex: 1,
  },
  buttonAdd: {
    backgroundColor: "blue",
    padding: 10,
    width: "20%",
    marginHorizontal:300,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  alertWrapper:{
      padding: 80,
      paddingHorizontal:20,
      paddingVertical: 15,
  },
  alertTitle:{
      fontSize: 30,
      fontWeight: 'bold',
  },
  alerts:{
      marginTop: 5,
  },
});

export default Alerts;