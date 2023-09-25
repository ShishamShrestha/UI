
import { View, Text,Image, SafeAreaView, FlatList } from 'react-native'
import React from 'react'
const Location=()=>{
const data  = [
        {
            id:1,
            name:"Chitwan",
            address:'Chitwan,Nepal',
            Description:'',
            Price:'300',
            image:require('../Assets/Chitwan.png')
        },
        {
            id:2,
            name:"Sagarmatha National Park",
            address:'Sagarmatha,Nepal',
            Description:'',
            Price:'300',
            image:require('../Assets/MtEverest.jpg')
        },
        {
            id:3,
            name:"Pashupatinath Temple",
            address:'Ktm,Nepal',
            Description:'',
            Price:'300',
            image:require('../Assets/PashupatinathTemple.jpg')
        },
        {
            id:4,
            name:"Pokhara",
            address:'Pokhara,Nepal',
            Description:'',
            Price:'300',
            image:require('../Assets/Pokhara_at_dawn.jpg')
        }
    ];
return(
<View>
    
    {/* <FlatList 
    data={data}
    horizontal
    renderItem={({item})=>
    <View>
         <Image 
        source={item.image}
        style={{height:200,
        width:200,
        
        }}/> 
      <Text>{item.name}</Text>
    </View>}
    style={{top:100}}
    /> */}
</View>
);
}

export default {Location};