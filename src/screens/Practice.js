import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Practice = () => {
  return (
    <View style={{backgroundColor:'red'}}>
      <View style={styles.first} ><Text>Hlelo</Text></View>
      {/* <View/>
      <View/> 
      <View/> */}
    </View>
  )
}

export default Practice

const styles = StyleSheet.create({
    first:{
        height:200,
        width:200,
        borderRadius:20,
        backgroundColor:'red',
        alignContent:'space-between'
    }
})