import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text } from 'react-native';

const LandingHeader = props => {
  const {
    mainTitle,
  } = props;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        
        <Text style={styles.mainTitle}>{mainTitle}</Text>
      </View>
      
    </View>
  );
};

LandingHeader.defaultProps = {
  mainTitle: '',
};

LandingHeader.propTypes = {
  mainTitle: PropTypes.string,
  valueTitle: PropTypes.string,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    display: 'flex',
  },
  header: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainTitle: {
    fontSize: 35,
    marginTop: 150,
    color: '#fff'
  },

});

export default LandingHeader;
