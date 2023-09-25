/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import BottomNav from './src/navigation/BottomNav';
import Header from './src/Components/Header';
import SBar from './src/Components/SBar';
import Body from './src/Components/Body';
import HomeScreen from './src/screens/HomeScreen';
import Location from './src/const/Location';

function App() {
  return (
    <View >
      <Header/>
      <View style={{height:30,width:500,marginTop:5,margin:10}}>
        {/* <SBar/> */}
      </View>
      <HomeScreen/>
      
      {/* <BottomNav/> */}
      
    </View>
    
  );
}

// const Home= () => {
//   return(
//     <View ><Text style={{height:30,width:500,marginTop:15,margin:10,backgroundColor:'#000'}}>
//       My HOme1</Text>
//     </View>
//   );
//   }
const styles = StyleSheet.create({
  Container: {
    height:500,width:500,borderCurve:40,borderRadius:100
  },
  text:{
    fontSize:25,
    fontWeight:'bold',
    top:35,
    left:10,
    paddingTop:10,
    color:'#000'
  },
  text2:{
    fontSize:18,
    top:26,
    paddingVertical:-20,
    left:80,
    paddingLeft:240,
  }
});

export default App;
