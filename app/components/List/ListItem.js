import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableHighlight } from 'react-native';
import styles from './styles';
import { Icon } from './';

const ListItem = ({
  onPress,
  text,
  selected = false,
  checkmark = true,
  visible = true,
  customIcon = null,
}) =>
  (<TouchableHighlight onPress={onPress} style={styles.$underlayColor}>
    <View style={styles.row}>
      <Text style={styles.text}>
        {text}
      </Text>
      {selected ? <Icon visible={visible} checkmark={checkmark} /> : <Icon />}
      {customIcon}
    </View>
  </TouchableHighlight>);

ListItem.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
  selected: PropTypes.bool,
  visible: PropTypes.bool,
  checkmark: PropTypes.bool,
  customIcon: PropTypes.element,
};

export default ListItem;
