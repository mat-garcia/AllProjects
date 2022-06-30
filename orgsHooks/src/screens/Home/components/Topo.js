import React from "react";
import { Text, View , StyleSheet, Image} from "react-native";

import { carregaTopo } from "../../../services/carregaDados";

import logo from '../../../../assets/logo.png';

class Topo extends React.Component {
    state = {
        topo: {
            boasVindas: "",
            legenda: "",
        }
    }

    atualizaTopo(){
        const retorno = carregaTopo();
        this.setState({topo: retorno});
    }
    componentDidMount() {
        this.atualizaTopo();
    }
    render() {
    return <View style={styles.topo}>
        <Image style={styles.imagem} source={logo}/>
        <Text style={styles.boasVindas}> {this.state.topo.boasVindas} </Text>
        <Text style={styles.legenda}> {this.state.topo.legenda} </Text>

    </View>
}}


const styles = StyleSheet.create({
    topo:{
        backgroundColor: '#F6F6F6',
        padding: 16,
    },
    imagem: {
        width: 70,
        height: 28,
    },
    boasVindas:{
        marginTop: 24,
        fontSize: 26,
        lineHeight: 42,
        fontWeight: 'bold',
    },
    legenda: {
        fontSize: 16,
        lineHeight: 26,
    }

});

export default Topo;