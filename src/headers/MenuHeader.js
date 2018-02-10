import React from 'react';
import PropTypes from 'prop-types';
import Button from '../buttons/Button'
import Icon from '../icons/Icon';
import { StyleSheet, View, Text, Image, } from 'react-native';

const MenuHeader = props => {
  const {
    mainTitle,
    subTitle,
    image,
    imageSize,
  } = props;

  return (
    <View>
      <View style={styles.header}>
        <Image
        style={[MenuHeader.defaultProps.imageSize, imageSize && imageSize]}
        source={image}
        />
        <View style={{flexDirection: 'column', margin: 20}}>
          <Text style={styles.mainTitle}>{mainTitle}</Text>
          <Text style={styles.subTitle}>{subTitle}</Text>
        </View>  
      </View>
      <View style={styles.navButtons}>
        <Button 
          buttonStyle={styles.button}
          title={<View style={styles.buttonStyle}><Icon
            color='#fff'
            name='bar-chart'
            size={18}
          /><Text style={styles.textSocial}>DASHBOARD</Text></View>}
          />
        <Button 
          buttonStyle={styles.button}
          title={<View style={styles.buttonStyle}><Icon
            color='#fff'
            name='bell-o'
            size={18}
          /><Text style={styles.textSocial}>NOTIFICATION</Text></View>}
          />
          <Button 
          buttonStyle={styles.button}
          title={<View style={styles.buttonStyle}><Icon
            color='#fff'
            name='pie-chart'
            size={18}
          /><Text style={styles.textSocial}>BUDGET</Text></View>}
          />
        <Button 
          buttonStyle={styles.button}
          title={<View style={styles.buttonStyle}><Icon
            color='#fff'
            name='calendar-o'
            size={18}
          /><Text style={styles.textSocial}>SCHEDULED PAYMENT</Text></View>}
          />
          <Button 
          buttonStyle={styles.button}
          title={<View style={styles.buttonStyle}><Icon
            color='#fff'
            name='user-o'
            size={18}
          /><Text style={styles.textSocial}>ACCOUNTS</Text></View>}
          />
        <Button 
          buttonStyle={styles.button}
          title={<View style={styles.buttonStyle}><Icon
            color='#fff'
            name='cog'
            size={18}
          /><Text style={styles.textSocial}>SETTINGS</Text></View>}
          />
          <Button 
          buttonStyle={styles.button}
          title={<View style={styles.buttonStyle}><Icon
            color='#fff'
            name='sign-out'
            size={18}
          /><Text style={styles.textSocial}>SIGN OUT</Text></View>}
          />
      </View>
    </View>
  );
};

MenuHeader.defaultProps = {
  mainTitle: '',
  subTitle: '',
  image: require('../images/facebook.png'),
  imageSize: {width: 48, height: 48}
};

MenuHeader.propTypes = {
  mainTitle: PropTypes.string,
  subTitle: PropTypes.string,
  valueTitle: PropTypes.string,
};

const styles = StyleSheet.create({
  header: {
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 30,
    marginTop: 60,
  },
  mainTitle: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600'
  },
  subTitle: {
    fontSize: 12,
    color: '#fff',
    fontWeight: '500'
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
    paddingTop: 20,
    width: 300,
    height: 55, 
    marginTop: 20,
  },
  textSocial: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
    paddingLeft: 20
  },
});

export default MenuHeader;
