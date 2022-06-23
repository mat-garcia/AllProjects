import React, { Children } from "react";

import {View, Text, StyleSheet, Image , Button} from "react-native";

import logo from "../../../assets/lejo.png";

export default function Home({navigation}) {
    return <>
        <View style={styles.container}> 
            <Text style={styles.text}>Bem vindo!</Text>
            <Button title='Ir para About' onPress={() => navigation.navigate('About')} />
        </View>
    </>
        
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: "50%",
        paddingHorizontal: 16,
        alignItems: "center",
    },
    text: {
        fontSize: 40,
        fontWeight: "bold",
    }
   

});