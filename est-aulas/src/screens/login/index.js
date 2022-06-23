import React, { Children } from "react";

import {View, Text, StyleSheet, TextInput , TouchableOpacity, Image} from "react-native";

import logo from "../../../assets/lejo.png";

export default function Login() {
    return <>
        <View style={styles.container}> 
            <View style={styles.logo}><Image source={logo}/></View>
            <TextInput style={styles.input} placeholder="Usuário"  />
            <TextInput style={styles.input}  secureTextEntry={true} placeholder="Senha" />
            <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Entrar</Text></TouchableOpacity>
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
    input: {
        height: 60,
        width: "90%",
        borderColor: '#464646',
        fontSize: 18,
        borderRadius: 20,
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 14,
    },
    button: {
        height: 60,
        width: "90%",
        backgroundColor: '#ffeb3b',
        borderRadius: 5,
    },
    buttonText: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#464646",
        textAlign: "center",
        paddingVertical: 16
    }

});