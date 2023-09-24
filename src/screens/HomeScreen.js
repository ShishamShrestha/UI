import { StyleSheet, Text, View, FlatList,SafeAreaView ,useState} from 'react-native'
import React from 'react'
// import { SafeAreaView } from 'react-native-safe-area-context'
import { Icon } from 'react-native-vector-icons/MaterialIcons'
// import { ScrollView } from 'react-native-gesture-handler'
import Location from '../const/Location'
const HomeScreen = () => {
  const [selectedCategoryIndex,setSelectedCategoryIndex] = React.useState(0);

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
      <View ><Text style={styles.text}>Special for You</Text>
        <Text style={styles.text2}>Explore</Text>
      </View>
      <View
        style={{
          marginTop: 40,
          flexDirection: 'row',
          paddingHorizontal: 20,
          
        }}
      >
        <Location/>
      </View> 
     
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
    top: 35,
    left: 10,
    paddingTop: 10,
    color: '#000'
  },
  text2: {
    fontSize: 18,
    top: 26,
    paddingVertical: -20,
    left: 80,
    paddingLeft: 240,
  },
  inputContainer:{
    flex:1,
    height:50,
    borderRadius:10,
    flexDirection:'row',
    backgroundColor:'#222',
    alignItems:'center',
    paddingHorizontal:20
  },
  categoriesListContainer:{
    padding:30,
    alignItems:'center',
    paddingHorizontal:20,
  }
})