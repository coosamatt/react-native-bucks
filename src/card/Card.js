import PropTypes from 'prop-types';
import React from 'react';
import {
  View,
  StyleSheet,
  Platform,
  Image,
  TouchableHighlight,
  Text as NativeText,
} from 'react-native';
import colors from '../config/colors';
import Icon from '../icons/Icon';
import Text from '../text/Text';
import fonts from '../config/fonts';
import normalize from '../helpers/normalizeText';
import ViewPropTypes from '../config/ViewPropTypes';

const TYPES = {
  mastercard: {
    source: require('../images/mastercard.png'),
  },
  paypal: {
    source: require('../images/paypal.png'),
  },
  visa: {
    source: require('../images/visa.png'),
  },
};

const Card = props => {
  const {
    flexDirection,
    containerStyle,
    wrapperStyle,
    title,
    subTitle,
    subTitleStyle,
    type,
    color,
    number,
    expiration,
    titleStyle,
    ...attributes
  } = props;

  let cardColor = color ? color : colors.blue;

  return (
    <View
      style={[
        styles.container,
        containerStyle && containerStyle,
      ]}
      {...attributes}
    >
      {expiration ? <View
        style={[
          styles.cardColorBlock,
          {backgroundColor: cardColor},
        ]} 
      >
      </View> : null}
      <View
        style={[
          styles.wrapper,
          wrapperStyle && wrapperStyle,
          flexDirection && { flexDirection },
        ]}
      >
        <View
          style={[
            styles.topContainer
          ]}
        >
          <View
            style={[
              styles.titleSubtitleContainer
            ]}
          >
            {title !== null &&
            <View>
              <Text
                style={[
                  styles.cardTitle,
                  titleStyle && titleStyle,
                ]}
              >
                {title}
              </Text>
            </View>}
            {subTitle !== null &&
            <View>
              <Text
                style={[
                  styles.cardSubTitle,
                  subTitleStyle && subTitleStyle,
                ]}
              >
                {subTitle}
              </Text>
            </View>}
          </View>
          <View>
            <Image
              style={styles.typeImage}
              resizeMode="contain"
              source={TYPES[type].source}
            />
          </View>
        </View>
        <View
          style={[
            styles.numberContainer
          ]}
        >
          <Text
            style={[
              styles.numberAsterix
            ]}
          >
            **** **** ****
          </Text>
          <Text
            style={[
              styles.number
            ]}
          >
            {number}
          </Text>
        </View>
          {expiration ? 
            <View style={[
              styles.bottomContainer]}>
            <View>
            <Text>
              {expiration}
            </Text>
          </View>
          <View>
            <TouchableHighlight>
              <View
                style={[
                  styles.moreButton
                ]}
              >
                <Text
                  style={[
                    styles.moreText
                  ]}
                >
                  More
                </Text>
                <Icon
                  color={colors.link}
                  name='chevron-right'
                  size={13}
                />
              </View>
            </TouchableHighlight>
          </View>
        </View> : null}
      </View>
    </View>
  );
};

Card.defaultProps = {
  // underlayColor: 'white',
  // leftIconUnderlayColor: 'white',
  // chevronColor: colors.grey4,
  // rightIcon: { name: 'chevron-right' },
  // hideChevron: true,
  // roundAvatar: false,
  // switchButton: false,
  // textInputEditable: true,
  // titleNumberOfLines: 1,
  // subtitleNumberOfLines: 1,
  // rightTitleNumberOfLines: 1,
};


Card.propTypes = {
  flexDirection: PropTypes.string,
  containerStyle: ViewPropTypes.style,
  wrapperStyle: ViewPropTypes.style,
  overlayStyle: ViewPropTypes.style,
  title: PropTypes.string,
  titleStyle: NativeText.propTypes.style,
  subTitle: PropTypes.string,
  subTitleStyle: NativeText.propTypes.style,
  type: PropTypes.oneOf([
    'mastercard',
    'visa',
    'paypal'
  ]),
  number: PropTypes.string,
  expiration: PropTypes.string,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
    margin: 15,
    paddingTop: 26,
    marginBottom: 0,
    marginTop: 19,
    borderRadius: 8,
    flexDirection: 'row',
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(0, 0, 0, 0.04)',
        shadowOffset: { height: 10, width: 0 },
        shadowOpacity: 1,
        shadowRadius: 14,
      },
      android: {
        elevation: 1,
      },
    }),
  },
  wrapper: {
    backgroundColor: 'transparent',
    marginLeft: 10,
    flexDirection: 'column',
    flex: 1,
    marginBottom: 5,
  },
  topContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 0,
  },
  titleSubtitleContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  bottomContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 22,
  },
  cardColorBlock: {
    height: 26,
    width: 26,
    borderRadius: 4,
    backgroundColor: colors.blue,
  },
  typeImage: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    flex: 0.15,
    width: 60,
    height: 30,
  },
  cardTitle: {
    fontSize: normalize(18),
    textAlign: 'left',
    marginBottom: 5,
    color: colors.black,
    letterSpacing: 1.3,
  },
  cardSubTitle: {
    flex: 1,
    color: colors.grey0,
    fontSize: normalize(10),
    opacity: 0.7,
    ...Platform.select({
      ios: {
        fontWeight: 'normal',
      },
      android: {
        ...fonts.android.normal,
      },
    }),
  },
  numberContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  numberAsterix: {
    fontSize: normalize(25),
    color: colors.grey0,
    opacity: 0.7,
    letterSpacing: 2,
    lineHeight: 0.1,
    marginTop: 17,
  },
  number: {
    fontSize: normalize(26),
    color: colors.grey0,
    marginTop: 4,
    fontFamily: 'Ayuthaya',
  },
  moreButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: 10,
  },
  moreText: {
    color: colors.link,
    fontSize: normalize(11),
    marginRight: 10,
  },
  overlayContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    alignSelf: 'stretch',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default Card;
