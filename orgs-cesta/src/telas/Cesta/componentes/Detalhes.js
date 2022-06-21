import React from "react";
import { View, Image , StyleSheet, ViewBase } from "react-native";

import logo from '../../../../assets/logo.png'

import Texto from "../../../componentes/Texto";
export default function Detalhes ({nome,logoFazenda,nomeFazenda, descricao, preco}){
    return <>
        <Texto style={estilos.nomme}>{nome}</Texto>
        <View style={estilos.fazenda}>
            <Image style={estilos.imagemFazenda} source={logoFazenda}></Image>
            <Texto style={estilos.nomeFazenda}>{nomeFazenda} </Texto>
        </View>
       
        <Texto style={estilos.descricao}>{descricao} </Texto>
        <Texto style={estilos.preco}>{preco}</Texto>
    </>
}
const estilos = StyleSheet.create({
    nomme: {
        fontSize: 26,
        lineHeight: 42,
        color: "#464646",
        fontWeight: "bold",
    },
    fazenda: {
        flexDirection: "row",
        paddingVertical: 12,
    },
    imagemFazenda : {
        width: 32,
        height: 32,
    },
    nomeFazenda: {
        fontSize: 18,
        lineHeight: 26,
        marginLeft: 12,
    },
    descricao: {
        color: "#a3a3a3",
        fontSize: 16,
        lineHeight: 26,
    },
    preco: {
        color: "#2a9f85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8
    }

})