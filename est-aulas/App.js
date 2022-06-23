

import { Animated,SafeAreaView, StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';


/* import Login from './src/screens/login'; */

import Home from './src/screens/main/Home';


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    /* navigation */
    <NavigationContainer>
      <SafeAreaView style={ { flex: 1 }}>
        <StatusBar/>
        <Animated>
        <Drawer.Navigator initialRouteName='Home'>
          <Drawer.Screen name='Home' component={Home} />
          
        </Drawer.Navigator>
        </Animated>
      </SafeAreaView>
    </NavigationContainer>
  );
}
