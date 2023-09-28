
import { StyleSheet, Text, View, FlatList, map, Image, ScrollView, TextInput, SafeAreaView, useState, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import StarRating from 'react-native-star-rating-widget'
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
      image: require('../Assets/Chitwan.png'),
      
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
  const [rating, setRating] = React.useState(0);

  const arylist = () => {
    data.map = ((loc) => {
      <Text style={{ fontSize: 20 }}>{loc}</Text>
    })
  }
  const details=()=>{
    console.warn("hello");
  }

  return (
    <ScrollView >
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
              source={item.image}
              style={{
                height: 180,
                width: 200,
                marginHorizontal: 20,
                borderRadius: 20,
                alignItems: 'center',
                // top:-5,
                // padding:10
              }}
            /><Text style={styles.list}>{item.name}</Text>
            <Text style={styles.list2}><Icon name='location-sharp'
            />{item.address}</Text>
            <StarRating
              rating={4.5}
              onChange={setRating}
              //  color='#000'
              starSize={15}
              width={20}
              style={styles.star}
              
            />
          </View>

          }
        />

      </View>
      <View>
        <Text style={styles.text3}>Popular Places</Text>
        <Text style={styles.text4}>Explore</Text>
      </View>
      <TouchableOpacity style={{backgroundColor:'#EEEDED',borderRadius:30}}>

        <View style={{
          height: 150,
          width: 350,
          borderRadius: 35,
          backgroundColor:'#fff',
          marginHorizontal: 25,
          top:15,
          elevation:10
        }}>
          <Image
            source={require('../Assets/Chitwan.png')}
            style={{
              height: 100,
              width: 100,
              marginHorizontal: 10,
              borderRadius: 20,
              top: 30
            }}
          />
          <Text style={{
            paddingLeft: 130,
            top: -69,
            fontSize: 20,
            color: '#000',
            fontWeight: '700'
          }}>Chitwan,Nepal</Text>

          <Text style={{
            flex:1,
            paddingLeft: 130,
            top: -54,
            fontSize: 15,
            color: '#948885'
          }}>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </Text>
        </View>

        <View style={{
          height: 150,
          width: 350,
          borderRadius: 35,
          backgroundColor:'#fff',
          marginHorizontal: 25,
          marginVertical:40,
          
          // padding:30,
          elevation:10
        }}>
          <Image
            source={require('../Assets/Pokhara_at_dawn.jpg')}
            style={{
              height: 100,
              width: 100,
              marginHorizontal: 10,
              borderRadius: 20,
              top: 20

            }}
          />
          <Text style={{ paddingLeft: 130,
            top: -79,
            fontSize: 20,
            color: '#000',
            fontWeight: '700'}}>Pokhara,Nepal</Text>

            <Text style={{
            paddingLeft: 130,
            top: -56,
            fontSize: 15,
            color: '#948885',
            flex:1
          }}>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </Text>
          <Text style={{paddingLeft: 130,
            top: -29,
            fontSize: 20,
            color: 'blue',
            fontWeight: '900'}}>$200</Text>
        </View>
        
        <View style={{
          height: 150,
          width: 350,
          borderRadius: 35,
          backgroundColor:'#fff',
          marginHorizontal: 25,
          marginVertical:-10,
          elevation:10
        }}>

          <Image
            source={require('../Assets/MtEverest.jpg')}
            style={{
              height: 100,
              width: 100,
              marginHorizontal: 10,
              borderRadius: 20,
              top: 20

            }}
          />
          <Text style={{
            paddingLeft: 130,
            top: -79,
            fontSize: 20,
            color: '#000',
            fontWeight: '700'
          }}>MtEverest,Nepal</Text>

          <Text style={{
            paddingLeft: 130,
            top: -62,
            fontSize: 15,
            color: '#948885'
          }}>
              fsafa
          </Text>
        </View>

        <View style={{
           height: 150,
           width: 350,
           borderRadius: 35,
           backgroundColor:'#fff',
           marginHorizontal: 25,
           marginVertical:40,
           elevation:10
        }}>

          <Image
            source={require('../Assets/PashupatinathTemple.jpg')}
            style={{
              height: 100,
              width: 100,
              marginHorizontal: 10,
              borderRadius: 20,
              top: 20

            }}
          />
          <Text style={{
            paddingLeft: 130,
            top: -79,
            fontSize: 20,
            color: '#000',
            fontWeight: '700'
          }}>Pashupatinath,Nepal</Text>

          <Text style={{
            paddingLeft: 130,
            top: -65,
            fontSize: 15,
            color: '#948885'
          }}>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </Text>
        </View>

      </TouchableOpacity>

    </ScrollView>
  );

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
    top: 14,
    left: 10,
    paddingTop: 3,
    color: '#000',
    // backgroundColor:'#000'
  },
  text2: {
    fontSize: 18,
    top: -10,
    paddingVertical: 0,
    left: 80,
    paddingLeft: 240,
  },
  text3: {
    fontSize: 25,
    fontWeight: 'bold',
    top: 25,
    left: 10,
    paddingTop: 9,
    color: '#000',
    // backgroundColor:'#000'
  },
  text4: {
    fontSize: 18,
    top: -2,
    paddingVertical: -20,
    left: 80,
    paddingLeft: 240,
  },
  inputContainer: {
    width: 320,
    height: 50,
    borderRadius: 30,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
     marginHorizontal: 45,
     margin:10

  },
  categoriesListContainer: {
    padding: 30,
    alignItems: 'center',
    paddingHorizontal: 20,
    // fontWeight:'bold'
  },
  list: {
    width: 250,
    fontSize: 17,
    paddingHorizontal: 35,
    top: -84,
    fontWeight: 'bold',
    color: '#fff',
  },
  list2: {
    width: 250,
    fontSize: 16,
    paddingHorizontal: 35,
    top: -84,
    fontWeight: 'bold',
    color: '#fff',
  },
  star: {
    // fontWeight:'100',
    // backgroundColor:'#000',
    marginTop: -80,
    marginHorizontal: 25
  },
  pop: {

    height: 150,
    width: 350,
    borderRadius: 15,
    backgroundColor: '#999',
    marginHorizontal: 25

  }
})