import { View, Text } from 'react-native'
import React from 'react'
import { SearchBar } from '@rneui/themed'

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
          placeholder="Type Here..."
          onChangeText={this.updateSearch}
          value={search} 
        />
      );
    }
  }

