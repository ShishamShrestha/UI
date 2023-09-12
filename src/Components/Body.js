import { View, Text,  StyleSheet } from 'react-native'
import React,{useState} from 'react'
import { Dimensions } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native';
import { Image } from 'react-native';

const images=[
    'https://cdn.pixabay.com/photo/2018/08/19/10/16/nature-3616194_1280.jpg',
    'https://cdn.pixabay.com/photo/2018/01/21/01/19/tree-3095683_1280.jpg'
]

const WIDTH=Dimensions.get('window').width;
const HEIGHT=Dimensions.get('window').height;

const Body = () => {
    const[imgActive,setimgActive]= useState(0 );
    onchange=(nativeEvent)=>{

    }

  return (
    <SafeAreaView style={styles.Container}>
    <View style={styles.wrap}>
      <ScrollView
      onScroll={({nativeEvent}) => onchange(nativeEvent)}
      showsHorizontalScrollIndicator={false}
      pagingEnabled
      horizontal
      style={styles.wrap}
      >
        {
            images.map((e,index)=>
            <Image key={e}
            resizeMode='stretch'
            style={styles.wrap}
            source={{uri:e}}
            />
            )
        }
      </ScrollView>
      <View style={styles.wrapDot}>
        {/* images.map((e,index) =>
        <Text
        key={e}
        style={imgActive == index ? styles.dotActive : styles.dot} 
        ></Text>
        
        ) */}
      </View>
    </View>
    </SafeAreaView>
  )
}

export default Body
const styles = StyleSheet.create({
    Container:{
        flex:1,
    },
    wrap:{
        width: WIDTH,
        height: HEIGHT * 0.25
    },
    wrapDot:{
        position:'absolute',
        bottom:0,
        flexDirection:'row',
        alignSelf:'center'
    },
    dotActive:{
        margin:3,
        color:'black'
    },
    dot:{
        margin:'3',
        color:'#fff'
    }
})