import React, { useState } from 'react'
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const Time = () =>{
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };
    
    //const [min, setMin] = useState("00:11");
    //const [hour, setHour] = useState("11:00");

    /*
<TouchableOpacity onPress={() => alert('Alert Added')} style={styles.buttonAdd}>
<Text style={styles.textAdd}>Add </Text>
</TouchableOpacity>
*/
  return(
    <View >
        <View style>
          <TouchableOpacity onPress={showDatepicker} style={styles.dateSelect}>
          <Text>Date</Text>
          </TouchableOpacity>
        </View>
        <View>
        <TouchableOpacity onPress={showTimepicker} style={styles.timeSelect}>
          <Text>Time</Text>
          </TouchableOpacity>
        </View>
        <Text>Selected: {date.toLocaleString()}</Text>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            display='default'
            onChange={onChange}
          /> )}
    </View>
  );
};

const styles = StyleSheet.create({
  dateSelect: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width:55,
  },
  timeSelect: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width:55,
  }, 
});

export default Time;