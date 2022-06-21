import React from "react";

import {TouchableOpacity, StyleSheet} from "react-native";

import Texto from "./Texto";

export default function Botao ({title}) {
    return <>
        <TouchableOpacity style={estilos.botao} onPress={() => {alert('Te Amo cusuda!')}}>
            <Texto style={estilos.textoBotao}>{title}</Texto>
        </TouchableOpacity>
    </>
      
}

const estilos = StyleSheet.create({
    botao: {
        marginTop: 16,
        backgroundColor: "#2a9f85",
        paddingVertical: 16,
        borderRadius: 6,

    },
    textoBotao: {
        textAlign: "center",
        color: "#fff",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold",

    }
})