import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View,Button } from 'react-native';

const AlertList = (props) => {
    return(
        <View style={styles.list}>
            <View style={styles.listLeft}>
                <TouchableOpacity onPress={() => alert('Alert Checked')} style={styles.square}></TouchableOpacity>
                <Text style={styles.listText}>{props.text}</Text>
            </View>
            {/* <View style ={styles.circular}></View> */}
            
        </View>
    );
};

/*
<TouchableOpacity onPress={() => alert('Alert Added')} style={styles.buttonAdd}>
<Text style={styles.textAdd}>Add </Text>
</TouchableOpacity>
*/

const styles = StyleSheet.create({
    list:{
        backgroundColor: '#0066CC',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        opacity: 0.5,
    },
    listLeft:{
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        
    },
    square:{
        width: 24,
        height: 24,
        backgroundColor: '#00FF66',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },
    listText:{
        maxWidth: '80%',
    },
    circular:{
        width: 15,
        height: 15,
        backgroundColor: '#55BCF6',
        borderRadius: 5,
        borderWidth: 3,
    },
    });

export default AlertList;