import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

const Header = ({title}) =>{
  return(
    <View style={styles.header}>
      <Text style={styles.text}> {title}</Text>
    </View>
  );
};

Header.defaultProps = {
  title: 'backTrack',
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 10,
    backgroundColor: 'darkslateblue'
  },
  text: {
      color: "#fff",
      fontSize: 30,
      textAlign: 'center',
  }
});

export default Header;