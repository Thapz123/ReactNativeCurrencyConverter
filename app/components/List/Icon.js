import React from 'react';
import PropTypes from 'prop-types';
import { View, Image } from 'react-native';
import styles from './styles';

const Icon = ({ checkmark, visible }) => {
  const iconStyles = [styles.icon];
  if (visible) {
    iconStyles.push(styles.iconVisible);
  }
  return (
    <View style={iconStyles}>
      <Image resizeMode="contain" style={styles.checkIcon} source={require('./images/check.png')} />
    </View>
  );
};
Icon.propTypes = {
  checkmark: PropTypes.bool,
  visible: PropTypes.bool,
};

export default Icon;
