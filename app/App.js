import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import Time from './Components/Time';
import Header from './Components/Header';
import Alerts from './Components/Alerts';


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
      <Alerts/>
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