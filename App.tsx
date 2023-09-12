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

import Header from './src/Components/Header';
import SBar from './src/Components/SBar';
import Body from './src/Components/Body';

function App() {
 

  return (
    <View >
      <Header/>
      <View style={{height:30,width:500,marginTop:15,margin:10,backgroundColor:'#fff'}}>
        <SBar/>
      </View>
      <Body/>
      
    </View>
    
  );
}

const styles = StyleSheet.create({
  Container: {
    height:500,width:500,borderCurve:40,borderRadius:100
  },
  
});

export default App;
