import * as React from 'react';
 import { View, Text, Button } from 'react-native';

 function About({navigation}) {
     return (
     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        
        <Text>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</Text>
        
         <Button title='Ir para Home' onPress={() => navigation.navigate('Home')} />
     </View>
     );
 }
 
 export default About;