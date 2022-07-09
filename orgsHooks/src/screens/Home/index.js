import React from "react";
import { Text, View , StyleSheet} from "react-native";

import Produtores from "./components/Produtores";
import Topo from "./components/Topo";

export default function Home() {
    return <Produtores topo={Topo}/>
        
  
}

const styles = StyleSheet.create({

});