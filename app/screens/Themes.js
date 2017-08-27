import React, { Component } from 'react';
import { View, ScrollView, StatusBar } from 'react-native';
import { Separator, ListItem } from '../components/List';
import styles from '../layouts/styles';

class Themes extends Component {
  handleThemeSelect = () => {
    console.log('Select theme');
  };
  render() {
    return (
      <View>
        <StatusBar barStyle="default" translucent={false} />
        <ScrollView style={styles.statusBarPadding} />
        <ListItem text="Red" onPress={this.handleThemeSelect} />
      </View>
    );
  }
}
