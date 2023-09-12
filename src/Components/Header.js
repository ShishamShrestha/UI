import { StyleSheet, Text, View,Image,ImageBackground } from 'react-native'
import React from 'react'
import IconsAwesoome from 'react-native-vector-icons/FontAwesome'

//  const logoImg = require("../../src/assets/drop.jpg");
const Header = () => {
  return (
    <View >
        
      <View style={{ flexDirection:'row', backgroundColor:'white'}}>
      <Image style={{height:60,width:60,borderRadius:100, margin:10, marginLeft:13}} source={{uri:'https://wallpapers.com/images/high/cat-with-shades-cool-picture-lkenou4wsqrbib37.webp'}}/>
    {/* <Image style={{height:80,width:80,borderRadius:100, margin:10}} source={logoImg}/> */}
    
    <View>
    <Text style={{fontSize:25,color:"#000",marginVertical:20}}>Hi, <Text style={{fontSize:25, marginTop:20,fontWeight:"bold",color:"#000",marginLeft:50,marginVertical:-20}}>Alfa Anggara</Text></Text>
    
    </View>
    {/* <Image style={{height:80,width:80,borderRadius:100, marginLeft:80,marginVertical:10,}} source={logoImg}/> */}
    <IconsAwesoome name='bell'  size={30} style={{height:50,width:50, marginLeft:100,marginTop:25}}/>
    </View>
    
    </View>
  )
}

export default Header;

const styles = StyleSheet.create({})