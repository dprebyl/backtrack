import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View,Button } from 'react-native';
import AlertList from './AlertList';


const Alerts = () =>{
  return(
    <View style ={styles.container}>

        {/*Add Button*/}
        <TouchableOpacity onPress={() => alert('Alert Added')} style={styles.buttonAdd}>
        <Text style={styles.textAdd}>Add </Text>
        </TouchableOpacity>

        {/*Alerts*/}
        <View style={styles.alertWrapper}>
            <Text style={styles.alertTitle}>Alerts</Text>

                {/*Alert Lists will be below*/}
                <View style={styles.alerts}>
                   <AlertList text={'ALERT 1 '} />
                   <AlertList text={'ALERT 2 '} />
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