import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import Time from './Components/Time';
import Header from './Components/Header';
import {createAlert,getAlerts} from './Request';


//app it self
const App = () =>{
  const [address, setAdress] = useState('1234 N 123 St Number City Number'); //stores address, use address to access it
  const [time, setTime] = useState("11:11");
  return(
    <View style={styles.container}>
      <Header />
      {/* Address field*/}
      <Text>Address :</Text>
      <TextInput style={styles.addressInput}
       placeholder="Street Address, City, State, and Zip"
       onChangeText={(getAddress) => setAdress(getAddress)} /> 
      <Time/>

      <Button
        onPress={
          (userPhone,contactPhone,alertTime,alertMessage) => {
            const d = new Date();
            const db_date = d => d.toISOString().slice(0, 19).replace('T', ' ');
            createAlert('+13149205055','+13149205055',db_date(d),'help!')
          }
        }
        title="PUSH TEST"
      />
      <Text/>
      <Text/>
      <Button
        onPress={
          () => {
            getAlerts('+1349205055')
          }
        }
        title="GET TEST"
      />

    </View>
  );
};

/*address input
const addressGetter = () =>{
  const [address, setAdress] = useState('2020 N 44th St Kansas City KS');
  return(
    <View style={styles.container}>
      <Text>Adress :</Text>
      <TextInput style={styles.input} />
    </View>
  );
}; */


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