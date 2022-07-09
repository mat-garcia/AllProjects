import React, { useEffect } from "react";

import {Text, View, StyleSheet, FlatList} from "react-native";

import useProdutores from "../../../hooks/useProdutores";

/* PEGA OS PRODUTORES DO BANCO DE DADOS (SIMULA) */
/* import { carregaProdutores } from "../../../services/carregaDados"; */
import Produtor from "./Produtor";

export default function Produtores({topo: Topo}) {
    const [titulo, lista] = useProdutores();
    /* HOOK LISTA DE PRODUTORES  COM USE EFFECTS*/
 /*    const [titulo, setTitulo] = React.useState("");
    const [lista, setLista] = React.useState([]);


    useEffect(() => {
        const retorno = carregaProdutores();
        setTitulo(retorno.titulo);
        setLista(retorno.lista);
    }, []); */

    const TopoLista = () => {
        return <>
            <Topo />
            <Text style={styles.titulo}>{ titulo }</Text>
        </>
        
    }

/* FLAT LIST PRODUTORES */
  return <FlatList style={styles.container}
        data={lista}
        renderItem={({item}) => <Produtor {...item}/>}
        keyExtractor={({nome})=> nome}
        ListHeaderComponent={TopoLista}/>
}


const styles = StyleSheet.create({
    titulo: {
        fontSize: 20,
        lineHeight: 32,
        marginHorizontal: 16,
        marginTop: 16,
        fontWeight: 'bold',
        color: '#464646',
    },
    container: {
        backgroundColor: '#FFFF',
    }
});