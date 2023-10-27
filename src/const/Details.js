import { StyleSheet, Text, View, Image, ScrollView,FlatList, Button } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import StarRating from 'react-native-star-rating-widget'
import ReadMore from '@fawazahmed/react-native-read-more'
// import Location from './Location'
import React from 'react'

const Details = () => {
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
    const [rating, setRating] = React.useState(0);
    return (
        <ScrollView>
            <View style={{ backgroundColor: '#EEEDED' }}>
                <View style={{
                    height: 1000,
                    width: 420,
                    borderRadius: 55,
                    backgroundColor: '#fff'
                }}>
                    <View>
                        <Image source={require('../Assets/Chitwan.png')}
                            style={{
                                height: 350,
                                width: 300,
                                marginHorizontal: 54,
                                borderRadius: 35,
                            }}

                        />
                        <Text style={{
                            paddingLeft: 70,
                            top: -120,
                            fontSize: 25,
                            color: '#fff',
                            fontWeight: '700'
                        }}>Chitwan,Nepal</Text>
                        <Text style={{
                            paddingLeft: 70,
                            top: -115,
                            fontSize: 18,
                            color: '#fff',
                            fontWeight: '700'
                        }}><Icon
                                name='location-sharp'

                            />Chitwan,Nepal</Text>
                        <StarRating
                            rating={4.5}
                            onChange={setRating}
                            //  color='#000'
                            starSize={20}
                            width={20}
                            style={styles.star}

                        />

                        <ReadMore numberOfLines={3} name={'Read more'} style={{
                            marginVertical: 70,
                            paddingLeft: 20,
                            marginLeft: 35,
                            // top: -54,
                            fontSize: 18,
                            color: '#948885'
                        }}>
                            {
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        }</ReadMore>
                    </View>
                    <View style={{
            height:83,
            width:400,
            borderRadius:20,
            top:-40,
            marginHorizontal:10,
            elevation:10,
            backgroundColor:'#fff'
            }}>
                    <FlatList data={data}
          horizontal
          renderItem={({ item }) => <View >
            <Image
              source={item.image}
              style={{
                height: 60,
                width: 60,
                marginHorizontal: 15,
                marginVertical:10,
                borderRadius: 10,
                alignItems: 'center',
                // top:-5,
                // padding:10
              }}
            />
            </View>
          }
            />
            </View>
            <View>
                <Text style={{

                }}>$200<Text>/Person</Text><Button title='Continue' style={styles.continue} /></Text>
            </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default Details

const styles = StyleSheet.create({
    star: {
        marginTop: -110,
        marginHorizontal: 75
    },
    continue:{
        marginHorizontal:'200'
    }
})