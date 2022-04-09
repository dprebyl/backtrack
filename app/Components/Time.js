import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native';

const Time = () =>{
    const [min, setMin] = useState("00:11");
    const [hour, setHour] = useState("11:00");
  return(
    <View>
        {/* Time field*/}
        <Text>Time :</Text>
        <TextInput style={styles.timeInput1}
        placeholder="11:11 "
        onChangeText={(getHour) => setHour(getHour)} /> 
    </View>
  );
};

const styles = StyleSheet.create({
  timeInput1: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width:55,
  },
  timeInput2: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width:55,
  },
});

export default Time;