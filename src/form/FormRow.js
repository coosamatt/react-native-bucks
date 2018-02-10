import React from 'react';
import FormInput from '../form/FormInput';
import PropTypes from 'prop-types';
import FormLabel from '../form/FormLabel';
import colors from '../config/colors';
import Icon from '../icons/Icon';
import { StyleSheet, View} from 'react-native';

const FormRow = props => {
  const {
    error,
    label,
    icon,
    iconName,
    hasError,
  } = props; 
 
  return (
    <View>
      {
        hasError ? (
          <View style={styles.errorInput}>
            <FormLabel 
              labelStyle={{}}
              error={true} >
              Please add the correct {label}
            </FormLabel>
            <FormInput />
            <Icon
              color={colors.danger}
              name='question-circle'
              size={20}
              style={styles.inputIcon}
            />
          </View>
        ) : <View>
              <FormLabel 
                labelStyle={{}}>
                {label}
              </FormLabel>
              <FormInput />
              {icon ? <Icon
                  color={colors.link}
                  name={iconName}
                  size={20}
                  style={styles.inputIcon}
                /> : null}
            </View>
      }
      </View>
  );
};

FormRow.defaultProps = {
  error: false,
};

FormRow.propTypes = {
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
    padding: 10
  },
    errorInput: {
    borderLeftWidth: 4,
    borderColor: '#FE4F68',
  },
});

export default FormRow;