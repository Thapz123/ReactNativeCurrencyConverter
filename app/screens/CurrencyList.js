import React, { Component } from 'react';
import { FlatList, Text, View, StatusBar } from 'react-native';
import currencies from '../data/currencies';
import { ListItem, Separator } from '../components/List';
import styles from '../layouts/styles';

const TEMP_CURRENT_CURRENCY = 'CAD';
class CurrencyList extends Component {
  handlePress = () => {
    console.log('row press');
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="default" translucent={false} />
        <FlatList
          style={styles.statusBarPadding}
          data={currencies}
          renderItem={({ item }) =>
            (<ListItem
              text={item}
              selected={item === TEMP_CURRENT_CURRENCY}
              onPress={this.handlePress}
            />)}
          keyExtractor={item => item}
          ItemSeparatorComponent={Separator}
        />
      </View>
    );
  }
}

export default CurrencyList;
