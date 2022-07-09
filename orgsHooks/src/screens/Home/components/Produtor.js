import React, { useReducer, useMemo } from "react";
import { Text, View , Image, StyleSheet, TouchableOpacity } from "react-native";
import Estrelas from "../../../components/Estrelas";

export default function Produtor({nome, imagem , distancia , estrelas}) {

/* const [selecionado,setSelecionado] = useState(false) */
//switch com Reducer
const [selecionado, inverterSelecionado] = useReducer(
    (selecionado) => !selecionado,
    false
)

const distanciaEmMetros = (distancia) => {
    return `${distancia}m`;
}
const distanciaTexto = useMemo(() => distanciaEmMetros(distancia), [distancia]);
  return <TouchableOpacity style={styles.card} onPress={inverterSelecionado}>
    <Image source={imagem} accessibilityLabel={nome} style={styles.imagem}></Image>
        <View style={styles.informacoes}>
            <View>
            <Text style={styles.nome}>{nome}</Text>
            <Estrelas 
                quantidade={estrelas}
                editavel={selecionado} 
                grande={selecionado}></Estrelas>

            </View>
            <Text style={styles.distancia}>{distanciaTexto}</Text>
        </View>
    
  </TouchableOpacity>
  
}


const styles = StyleSheet.create({

    card:{
        backgroundColor: '#F6F6F6',
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 8,
        flexDirection: 'row',

        //android
        elevation: 4,

        //ios
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,


    },
    imagem:{
        width: 48,
        height: 48,
        borderRadius: 8,
        marginVertical: 16,
        marginLeft: 16,

    },
    informacoes:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 12,
        marginVertical: 16,
        marginRight: 16,
    },
    nome: {
        fontSize: 14,
        lineHeight: 22,
        fontWeight: 'bold',


    },
    distancia: {
        fontSize: 12,
        lineHeight: 19,
    }


})
