import React from "react";

import  {Text, StyleSheet } from "react-native";
export default function Texto({children, style}) {
    let estilo = estilos.texto;

    if (style?.fontWeight === "bold") {
        estilo = estilos.textoNegrito;
    }

    return <Text style={[estilo, style]}>{children}</Text>
}

const estilos = StyleSheet.create({
    texto: {
        fontWeight: "normal",
        fontFamily: 'MontserratRegular',
    },
    textoNegrito : {
        fontWeight: "normal",
        fontFamily: 'MontserratBold',
    }
})