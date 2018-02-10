import React from 'react';
import FormInput from '../form/FormInput';
import PropTypes from 'prop-types';
import Icon from '../icons/Icon';
import ViewPropTypes from '../config/ViewPropTypes';
import { StyleSheet, View} from 'react-native';

const FormSearch = props => {
  const {
    error,
    label,
    icon,
    search,
    search2,
    iconName,
    iconSearch,
    iconName2,
    iconSearch2,
    containersStyle,
    hasError,
  } = props; 

if (search2) {
  
  containersStyle.backgroundColor= '#E9EFF7';
}
 
  return (
    <View style={[styles.searchBar, containersStyle && containersStyle]}>
    
      <FormInput inputStyle={{}} containerStyle={{}} placeholder='Search' search={true} />
        {search2 ? <Icon
          color='#8795A8'
          name={iconName}
          size={20}
          style={styles.inputIcon}
        /> : <Icon
          color='white'
          name={iconName}
          size={20}
          style={styles.inputIcon}
        />}

        {search2 ? <Icon
          color='#8795A8'
          name={iconSearch}
          size={20}
          style={styles.inputSearch}
        /> : <Icon
          color='white'
          name={iconSearch}
          size={20}
          style={styles.inputSearch}
        />}
    </View>
    
  );
};

FormSearch.defaultProps = {
  error: false,
  search2: false,
};

FormSearch.propTypes = {
  containerStyle: ViewPropTypes.style,
  error: PropTypes.bool,
  label: PropTypes.string,
  icon : PropTypes.bool,
  iconName: PropTypes.string,
  hasError: PropTypes.bool,
};

const styles = StyleSheet.create({
  inputIcon: {
    position: 'absolute',
    right: 10,
    bottom: 0,
    padding: 10,
  },
  inputSearch: {
    position: 'absolute',
    left: 10,
    bottom: 0,
    padding: 10
  },
  inputIcon2: {
    position: 'absolute',
    right: 10,
    bottom: 0,
    padding: 10
  },
  inputSearch2: {
    position: 'absolute',
    left: 10,
    bottom: 0,
    padding: 10
  },
  searchBar: {
    backgroundColor: '#1259C4',
    paddingLeft: 30,
    paddingRight: 30,
    position: 'absolute',
    top: 7,
    borderRadius: 4,
    width: 350,
    height: 40,
    paddingTop: 3
  },
});

export default FormSearch;