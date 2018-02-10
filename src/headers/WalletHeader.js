import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../icons/Icon';
import { StyleSheet, View, Text, Image, } from 'react-native';

const WalletHeader = props => {
  const {
    curentBalance,
    income,
    expenses,
  } = props;

  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>Current Balance</Text>
      <Text style={styles.headerSubtitle}>{curentBalance}</Text>
      <View style={styles.balance}>
        <View style={styles.balanceValue}>
          <Icon
            color='#78AEF9'
            height= {26}
            width= {26}
            name='plus'
            size={12} 
            style={styles.icon1} />
          <View style={styles.balanceAmount}>
            <Text style={styles.balanceTitle}>Income</Text>
            <Text style={styles.balanceSubtitle}>{income}</Text>
          </View>
        </View>
        <View style={styles.balanceValue}>
          <Icon
            color='#78AEF9'
            height= {26}
            width= {26}
            name='minus'
            size={12} 
            style={styles.icon1} />
          <View style={styles.balanceAmount}>
            <Text style={styles.balanceTitle}>Expenses</Text>
            <Text style={styles.balanceSubtitle}>{expenses}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

WalletHeader.defaultProps = {
  curentBalance: '',
  income: '',
  expenses: '',
};
WalletHeader.propTypes = {
  curentBalance: PropTypes.string,
  income: PropTypes.string,
  expenses: PropTypes.string,
};


const styles = StyleSheet.create({
  header: {
    flexDirection: 'column',
    backgroundColor: '#78AEF9',
    margin: 20,
    borderRadius: 10,
    padding: 20,
    marginBottom: 30,
    shadowColor: '#78AEF9',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.5,
    shadowRadius: 15,
  },
  balance: {
    flexDirection: 'row',
    height: 40,
  },
  balanceValue: {
    flexDirection: 'row',
    flex: 1,
  },
  balanceAmount: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTitle: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'normal',
  },
  headerSubtitle: {
    color: '#fff',
    fontSize: 32,
    fontWeight: '300',
    marginTop: 10,
    marginBottom: 20,
  },
  balanceTitle: {
    color: '#fff',
    fontSize: 11,
    fontWeight: 'normal',
    opacity: 0.8,
  },
  balanceSubtitle: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'normal',
  },
  icon1: {
    backgroundColor: 'rgba(255,255,255,0.24)',
    borderRadius: 22,
    width: 25,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
  },
});

export default WalletHeader;
