import React from "react";


import { View, StyleSheet} from "react-native";

import Estrela from "./Estrela";

export default function Estrelas({
    quantidade: quantidadeAntiga , 
    editavel = true, 
    grande = false}) {

        /* state das estrelas */
        const [quantidade, setQuantidade] = React.useState(quantidadeAntiga);



        /* renderiza as estreleas */
        const RenderEstrelas = () => {
            const listaEstrelas = [];
            for ( let i=0; i < 5; i++ ) {
                listaEstrelas.push(
                   <Estrela key={i} onPress={() => setQuantidade(i + 1)}
                            desabilitada={!editavel}
                            preenchida={i < quantidade}
                            grande={grande}/>

                
                );
        }
        return listaEstrelas
    }

        return <View style={styles.estrelas}>
            
            <RenderEstrelas></RenderEstrelas>
        </View>

}

const styles = StyleSheet.create({
    estrelas: {
        flexDirection: 'row',
    },

})