import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { SearchBar } from '@rneui/themed'
import { Icon } from 'react-native-vector-icons/MaterialIcons';

export default class SBar extends React.Component {
    state = {
      search: '',
      
    };
    
  
    updateSearch = (search) => {
      this.setState({ search });
    };
  
    render() {
      const { search } = this.state;
  
      return (
        <SearchBar
          placeholder="Search for Location"
          onChangeText={this.updateSearch}
          value={search} 
          
        />
      );
    }
  }
// const SBar  = () => {
// return(
//   <View style={styles.inputContainer}>
//           <Icon name="search"/>
//         </View>
// );
// }
// export default {SBar};

// const style =StyleSheet.create({
//   inputContainer:{
//     flex:1,
//     height:50,
//     borderRadius:10,
//     flexDirection:'row',
//     backgroundColor:'#222',
//     alignItems:'center',
//     paddingHorizontal:20
//   }
// })