
import { StyleSheet, Text, View, FlatList, onPress, map, Image, ScrollView, TextInput, SafeAreaView, useState, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import {useNavigation} from '@react-navigation/native';
import StarRating from 'react-native-star-rating-widget'
import Details from '../const/Details'
import Header from '../Components/Header'
import {ROUTES} from '../const/ROUTES';

// import  ScrollView  from 'react-native-gesture-handler'
// import Location from '../const/Location'

const HomeScreen = () => {
  const navigation = useNavigation();

  const data = [
    {
      id: 1,
      name: "Chitwan",
      address: 'Chitwan,Nepal',
      Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      Price: '$300',
      image: require('../Assets/Chitwan.png'),
      stars: 4.0,
      

    },
    {
      id: 2,
      name: "Sagarmatha NP",
      address: 'Sagarmatha,Nepal',
      Description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      Price: '$300',
      image: require('../Assets/MtEverest.jpg'),
      stars: 4.2,
    },
    {
      id: 3,
      name: "Pashupatinath Temple",
      address: 'Ktm,Nepal',
      Description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      Price: '$300',
      image: require('../Assets/PashupatinathTemple.jpg'),
      stars: 4.8,
      size:16
    },
    {
      id: 4,
      name: "Pokhara",
      address: 'Pokhara,Nepal',
      Description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      Price: '$300',
      image: require('../Assets/Pokhara_at_dawn.jpg'),
      stars: 5.0,
      
    }
  ]
  const [rating, setRating] = React.useState(0);

  const stars =()=>{
    <StarRating
              rating={4.5}
              onChange={setRating}
              //  color='#000'
              starSize={15}
              width={20}
              style={styles.star}/>
  }

  const onPressImage = value => {
    navigation.navigate(ROUTES.DETAIL, value);
  };
  return (
    <ScrollView >
      <Header/>
      <View style={styles.inputContainer}><Icon name='search' />
        <TextInput
          style={{ color: '#000' }}
          placeholder='Search for Location....' />

      </View><Text style={styles.text}>Special for You</Text>
      <Text style={styles.text2}>Explore</Text>
      <View
        style={{
          marginTop: 40,
          // flexDirection: 'row',
          paddingHorizontal: 20,
        }}
      >
        {/* <Location/> */}
        <FlatList data={data}
        showsHorizontalScrollIndicator={false}
          horizontal
          
          renderItem={({ item }) => <View style={{elevation:10}} >
            <Image
              source={item.image}
              style={{
                height: 240,
                width: 220,
                marginHorizontal: 20,
                borderRadius: 20,
                alignItems: 'center',
              }}
            /><Text style={styles.list} size={item.size}>{item.name}</Text>
            <Text style={styles.list2}><Icon name='location-sharp'
            size={20}/>{item.address}</Text>
            <StarRating 
            rating={item.stars}
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
      <TouchableOpacity style={{ backgroundColor: '#EEEDED', borderRadius: 30 }}>
        <FlatList
          data={data}
          
          
          renderItem={({ item }) => <View style={{
            height: 150,
            width: 350,
            borderRadius: 35,
            backgroundColor: '#fff',
            marginHorizontal: 25,
            marginVertical:20,
            elevation: 10
          }} >
            <Image
              source={item.image}
              style={{
                height: 100,
                width: 100,
                marginHorizontal: 10,
                borderRadius: 20,
                top: 15
              }}
              onPressImage={onPress}
            /><Text style={{
              paddingLeft: 130,
              top: -75,
              fontSize: 20,
              color: '#000',
              fontWeight: '700'
            }}>{item.name}</Text>
            <Text style={{
              paddingLeft: 130,
              top: -69,
              fontSize: 15,
              color: '#948885'
            }} numberOfLines={1}>{item.Description}</Text>
            <Text style={{
            paddingLeft: 130,
            top: -59,
            fontSize: 20,
            color: 'blue',
            fontWeight: '900'}}>{item.Price}</Text>
          </View>}
        />
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
    margin: 10,
    elevation: 10
  },
  list: {
    width: 280,
    fontSize: 20,
    paddingHorizontal: 38,
    top: -87,
    fontWeight: 'bold',
    color: '#fff',
  },
  list2: {
    width: 250,
    fontSize: 18,
    paddingHorizontal: 35,
    top: -87,
    fontWeight: 'bold',
    color: '#fff',
  },
  star: {
    // fontWeight:'100',
    // backgroundColor:'#000',
    marginTop: -84,
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