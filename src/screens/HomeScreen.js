import { StyleSheet, Text, View, FlatList, Image,ScrollView , TextInput, SafeAreaView, useState, TouchableOpacity } from 'react-native'
import React from 'react'
// import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/Ionicons'
// import  ScrollView  from 'react-native-gesture-handler'
// import Location from '../const/Location'
const HomeScreen = () => {
  const data = [
    {
      id: 1,
      name: "Chitwan",
      address: 'Chitwan,Nepal',
      Description: '',
      Price: '300',
      image: require('../Assets/Chitwan.png')
    },
    {
      id: 2,
      name: "Sagarmatha National Park",
      address: 'Sagarmatha,Nepal',
      Description: '',
      Price: '300',
      image: require('../Assets/MtEverest.jpg')
    },
    {
      id: 3,
      name: "Pashupatinath Temple",
      address: 'Ktm,Nepal',
      Description: '',
      Price: '300',
      image: require('../Assets/PashupatinathTemple.jpg')
    },
    {
      id: 4,
      name: "Pokhara",
      address: 'Pokhara,Nepal',
      Description: '',
      Price: '300',
      image: require('../Assets/Pokhara_at_dawn.jpg')
    }
  ]
  const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);

  // const ListCategory=()=>{
  //   return 
  //   // <ScrollView 
  //   // horizontal
  //   // showsHorizontalScrollIndicator={false}
  //   // contentContainerStyle={styles.categoriesListContainer}
  //   // {Location.map(()=>{

  //   // })}
  //   // ></ScrollView>
  // }
  return (
    <SafeAreaView >
      <View style={styles.inputContainer}><Icon name='search' />
        <TextInput
          style={{ color: '#000' }}
          placeholder='Search for Location....' />

      </View><Text style={styles.text}>Special for You</Text>
      <Text style={styles.text2}>Explore</Text>
      <View
        style={{
          marginTop: 40,
          flexDirection: 'row',
          paddingHorizontal: 20,

        }}
      >
        {/* <Location/> */}
        <FlatList data={data}
          horizontal
          renderItem={({ item }) => <View >
            <Image
              source={require('../Assets/MtEverest.jpg')}
              style={{
                height: 200,
                width: 200,
                marginHorizontal: 20,
                borderRadius: 20,
                top:-5
              
              }}
            /><Text style={styles.list}>{item.name}</Text>
            <Text style={styles.list}>{item.address}</Text>
          </View>
          
          }
        />

      </View>
      <View>
        <Text style={styles.text}>Popular Places</Text>
        <Text style={styles.text2}>Explore</Text>
      </View>
      <TouchableOpacity>
        
      <ScrollView > 
            <Image
              source={require('../Assets/Pokhara_at_dawn.jpg')}
              style={{
                height: 200,
                width: 200,
                marginVertical: 20,
                borderRadius: 20,
                top:-4
              
              }}
            />
             
       </ScrollView>  
          </TouchableOpacity>
         
        
    </SafeAreaView>);

}

export default HomeScreen

const styles = StyleSheet.create({
  header: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    top: -10,
    left: 10,
    paddingTop: 7,
    color: '#000',
    // backgroundColor:'#000'
  },
  text2: {
    fontSize: 18,
    top: -10,
    paddingVertical: -20,
    left: 80,
    paddingLeft: 240,
  },
  inputContainer: {
    flex: 0,
    height: 50,
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingHorizontal: 10,
    top:-29
  },
  categoriesListContainer: {
    padding: 30,
    alignItems: 'center',
    paddingHorizontal: 20,
    // fontWeight:'bold'
  },
  list: {
    fontSize: 19,
    paddingHorizontal: 35,
  }
})