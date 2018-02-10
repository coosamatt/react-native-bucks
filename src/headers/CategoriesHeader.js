import React from 'react';
import Button from '../buttons/Button'
import Icon from '../icons/Icon';
import FormLogin from '../form/FormLogin';
import { StyleSheet, View, Text} from 'react-native';

const CategoriesHeader = props => {
  return (
    <View>
      <View style={styles.header}>
        <FormLogin
          label=''
          placeholder='SEARCH'
          />
        <Icon
          color='#fff'
          name='search'
          size={18}
          style={styles.searchIcon}
        />
      </View>
      <View style={styles.navButtons}>
        <Button
          buttonStyle={styles.button}
          title={<View style={styles.buttonStyle}><Icon
            color='#FFCC54'
            name='home'
            size={18}
            style={styles.icon1}
          /><Text style={styles.textSocial}>RENT</Text></View>}
          />
        <Button
          buttonStyle={styles.button}
          title={<View style={styles.buttonStyle}><Icon
            color='#F65252'
            name='shower'
            size={18}
            style={styles.icon2}
          /><Text style={styles.textSocial}>UTILITIES</Text></View>}
          />
          <Button
          buttonStyle={styles.button}
          title={<View style={styles.buttonStyle}><Icon
            color='#FF844D'
            name='shield'
            size={18}
            style={styles.icon3}
          /><Text style={styles.textSocial}>INSURANCE</Text></View>}
          />
        <Button
          buttonStyle={styles.button}
          title={<View style={styles.buttonStyle}><Icon
            color='#78AEF9'
            name='file-text-o'
            size={18}
            style={styles.icon4}
          /><Text style={styles.textSocial}>BILL</Text></View>}
          />
          <Button
          buttonStyle={styles.button}
          title={<View style={styles.buttonStyle}><Icon
            color='#C075C9'
            name='desktop'
            size={18}
            style={styles.icon5}
          /><Text style={styles.textSocial}>ELECTRONIC</Text></View>}
          />
        <Button
          buttonStyle={styles.button}
          title={<View style={styles.buttonStyle}><Icon
            color='#50C1B6'
            name='black-tie'
            size={18}
            style={styles.icon6}
          /><Text style={styles.textSocial}>CLOTHING</Text></View>}
          />
          <Button
          buttonStyle={styles.button}
          title={<View style={styles.buttonStyle}><Icon
            color='#73CC72'
            name='mobile'
            size={18}
            style={styles.icon7}
          /><Text style={styles.textSocial}>GADGET</Text></View>}
          />
          <Button
          buttonStyle={styles.button}
          title={<View style={styles.buttonStyle}><Icon
            color='#F45D90'
            name='usd'
            size={18}
            style={styles.icon8}
          /><Text style={styles.textSocial}>SAVINGS</Text></View>}
          />
      </View>
    </View>
  );
};



const styles = StyleSheet.create({
  header: {
    height: 130,
    paddingTop: 50,
  },
  mainTitle: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'normal'
  },
  subTitle: {
    fontSize: 12,
    color: '#fff',
    fontWeight: 'normal'
  },
  navButtons: {
    flexDirection: 'column',
  },
  buttonStyle: {
    flexDirection: 'row',
    height: 20,
    width: 300,
    alignItems: 'center'
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    paddingTop: 28,
    width: 300,
    height: 55,
    marginTop: 20,
    backgroundColor: '#fff'
  },
  textSocial: {
    color: '#595F66',
    fontWeight: 'normal',
    fontSize: 12,
    paddingLeft: 20
  },
  searchIcon: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    padding: 10,
    backgroundColor: '#6AE1C4',
    borderRadius: 22,
  },
  icon1: {
    backgroundColor: 'rgba(255,204,84,0.16)',
    borderRadius: 22,
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon2: {
    backgroundColor: 'rgba(246,82,82,0.16)',
    borderRadius: 22,
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon3: {
    backgroundColor: 'rgba(255,132,77,0.16)',
    borderRadius: 22,
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon4: {
    backgroundColor: 'rgba(120,174,249,0.16)',
    borderRadius: 22,
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon5: {
    backgroundColor: 'rgba(192,117,201,0.16)',
    borderRadius: 22,
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon6: {
    backgroundColor: 'rgba(80,193,182,0.16)',
    borderRadius: 22,
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon7: {
    backgroundColor: 'rgba(115,204,114,0.16)',
    borderRadius: 22,
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon8: {
    backgroundColor: 'rgba(244,93,144,0.16)',
    borderRadius: 22,
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center'
  },
});

export default CategoriesHeader;
