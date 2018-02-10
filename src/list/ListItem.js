import PropTypes from 'prop-types';
import React from 'react';
import {
  View,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  Platform,
  Switch,
  TextInput,
} from 'react-native';
// import Avatar from '../avatar/Avatar';
// import Badge from '../badge/badge';
import Icon from '../icons/Icon';
import Text from '../text/Text';
import colors from '../config/colors';
import fonts from '../config/fonts';
import normalize from '../helpers/normalizeText';
import ViewPropTypes from '../config/ViewPropTypes';

const ListItem = props => {
  const {
    onPress,
    title,
    leftIcon,
    leftIconStyle,
    rightSubtitle,
    rightIcon,
    leftIconOnPress,
    leftIconOnLongPress,
    leftIconUnderlayColor,
    leftIconContainerStyle,
    transaction,
    leftIconContainerColor,
    avatarStyle,
    avatarContainerStyle,
    avatarOverlayContainerStyle,
    underlayColor,
    subtitle,
    subtitleStyle,
    containerStyle,
    leftWrapperStyle,
    wrapperStyle,
    titleNumberOfLines,
    titleStyle,
    titleContainerStyle,
    hideChevron,
    chevronColor,
    roundAvatar,
    component,
    fontFamily,
    rightTitle,
    rightTitleContainerStyle,
    rightTitleStyle,
    rightTitleNumberOfLines,
    subtitleContainerStyle,
    subtitleNumberOfLines,
    badge,
    label,
    onLongPress,
    switchButton,
    onSwitch,
    switchDisabled,
    switchOnTintColor,
    switchThumbTintColor,
    switchTintColor,
    switched,
    textInput,
    textInputAutoCapitalize,
    textInputAutoCorrect,
    textInputAutoFocus,
    textInputEditable,
    textInputKeyboardType,
    textInputMaxLength,
    textInputMultiline,
    textInputOnChangeText,
    textInputOnFocus,
    textInputOnBlur,
    textInputSelectTextOnFocus,
    textInputReturnKeyType,
    textInputValue,
    textInputSecure,
    textInputStyle,
    billing,
    transactions,
    transactions2,
    wallet1,
    wallet2,
    wallet3,
    wallet4,
    payment,
    textInputContainerStyle,
    textInputPlaceholder,
    onPressRightIcon,
    ...attributes
  } = props;

  let { avatar } = props;

  let Component = onPress || onLongPress ? TouchableHighlight : View;
  let LeftIconWrapper = leftIconOnPress || leftIconOnLongPress
    ? TouchableHighlight
    : View;
  if (component) {
    Component = component;
  }
  if (typeof avatar === 'string') {
    avatar = { uri: avatar };
  }
  if(transaction) {
    rightTitleContainerStyle.position = 'absolute';
    rightTitleContainerStyle.right = 5;
    rightTitleContainerStyle.top = 0;
  }

  if (leftIconContainerColor) {
    iconBackgroundColor = { backgroundColor: leftIconContainerColor }
  }

  if(transactions) {
    leftIcon.color ='#FFCC54'
  }
  if(transactions2) {
    leftIcon.color ='green'
  }
  if(billing) {
    leftIcon.size = 16;
    leftIcon.color = colors.black;
  }
  if(wallet1) {
    leftIcon.color ='#FF844D';
  }
  if(wallet2) {
    leftIcon.color ='#C075C9'
  }
  if(wallet3) {
    leftIcon.color ='#50C1B6'
  }
  if(wallet4) {
    leftIcon.color ='#73CC72'
  }
  return (
    <Component
      onLongPress={onLongPress}
      onPress={onPress}
      underlayColor={underlayColor}
      style={[styles.container, containerStyle && containerStyle,]}
      {...attributes}
    >
      <View style={[styles.leftWrapper, leftWrapperStyle && leftWrapperStyle]}>
        {React.isValidElement(leftIcon)
          ? leftIcon
          : leftIcon &&
          leftIcon.name &&
          <LeftIconWrapper
            onLongPress={leftIconOnLongPress}
            onPress={leftIconOnPress}
            underlayColor={leftIconUnderlayColor}
            style={[
              styles.iconStyle,
              leftIconContainerStyle && leftIconContainerStyle,
              iconBackgroundColor && iconBackgroundColor,
            ]}
          >
            <View>
              <Icon
                type={leftIcon.type}
                iconStyle={[styles.icon, leftIcon.style && leftIcon.style]}
                name={leftIcon.name}
                color={leftIcon.color || colors.grey3}
                size={leftIcon.size || 15}
              />
            </View>
          </LeftIconWrapper>}
        {avatar &&
        <View style={styles.avatar}>
          {React.isValidElement(avatar)
            ? avatar
            : <Avatar
              avatarStyle={avatarStyle && avatarStyle}
              containerStyle={avatarContainerStyle && avatarContainerStyle}
              overlayContainerStyle={
                avatarOverlayContainerStyle && avatarOverlayContainerStyle
              }
              rounded={roundAvatar}
              source={avatar}
            />}
        </View>}
      </View>
      <View style={[styles.wrapper, wrapperStyle && wrapperStyle]}>
        <View style={styles.titleSubtitleContainer}>
          <View style={titleContainerStyle}>
            {title !== null &&
            (typeof title === 'string' || typeof title === 'number')
              ? <Text
                numberOfLines={titleNumberOfLines}
                style={[
                  styles.title,
                  !leftIcon && { marginLeft: 10 },
                  titleStyle && titleStyle,
                  fontFamily && { fontFamily },
                ]}
              >
                {title}
              </Text>
              : <View>
                {title}
              </View>}
          </View>
          <View style={subtitleContainerStyle}>
            {subtitle !== null &&
            (typeof subtitle === 'string' || typeof subtitle === 'number')
              ? <Text
                numberOfLines={subtitleNumberOfLines}
                style={[
                  styles.subtitle,
                  !leftIcon && { marginLeft: 10 },
                  subtitleStyle && subtitleStyle,
                  fontFamily && { fontFamily },
                ]}
              >
                {subtitle}
              </Text>
              : <View>
                {subtitle}
              </View>}
              
          </View>
        </View>
        {rightTitle &&
        rightTitle !== '' &&
        !textInput &&
        <View style={[styles.rightTitleContainer, rightTitleContainerStyle]}>
          <Text
            numberOfLines={rightTitleNumberOfLines}
            style={[styles.rightTitleStyle, rightTitleStyle]}
          >
            {rightTitle}
          </Text>
        </View>}
        {rightSubtitle ? <View style={{position: 'relative', top: 10}}><Text style={{color: colors.grey0, opacity: 0.7}}>{rightSubtitle}</Text></View> : null}
        {textInput &&
        <View style={[styles.rightTitleContainer, textInputContainerStyle]}>
          <TextInput
            style={[styles.textInputStyle, textInputStyle]}
            defaultValue={rightTitle}
            value={textInputValue}
            placeholder={textInputPlaceholder}
            autoCapitalize={textInputAutoCapitalize}
            autoCorrect={textInputAutoCorrect}
            autoFocus={textInputAutoFocus}
            editable={textInputEditable}
            keyboardType={textInputKeyboardType}
            maxLength={textInputMaxLength}
            multiline={textInputMultiline}
            onChangeText={textInputOnChangeText}
            onFocus={textInputOnFocus}
            onBlur={textInputOnBlur}
            secureTextEntry={textInputSecure}
            selectTextOnFocus={textInputSelectTextOnFocus}
            returnKeyType={textInputReturnKeyType}
          />
        </View>}
        {badge && !rightTitle && <Badge {...badge} />}
        {!hideChevron &&
        (React.isValidElement(rightIcon)
          ? rightIcon
          : <TouchableOpacity
            onPress={onPressRightIcon}
            disabled={!onPressRightIcon}
            style={styles.chevronContainer}
          >
            <Icon
              type={rightIcon.type}
              iconStyle={rightIcon.style}
              size={28}
              name={rightIcon.name || 'chevron-right'}
              color={rightIcon.color || chevronColor}
            />
          </TouchableOpacity>)}
        {switchButton &&
        hideChevron &&
        <View style={styles.switchContainer}>
          <Switch
            onValueChange={onSwitch}
            disabled={switchDisabled}
            onTintColor={switchOnTintColor}
            thumbTintColor={switchThumbTintColor}
            tintColor={switchTintColor}
            value={switched}
          />
        </View>}
        {label && label}
      </View>
    </Component>
  );
};

ListItem.defaultProps = {
  underlayColor: 'white',
  leftIconUnderlayColor: 'white',
  chevronColor: colors.grey4,
  rightIcon: { name: 'chevron-right' },
  hideChevron: true,
  roundAvatar: false,
  switchButton: false,
  textInputEditable: true,
  titleNumberOfLines: 1,
  subtitleNumberOfLines: 1,
  rightTitleNumberOfLines: 1,
};

ListItem.propTypes = {
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
  ]),
  avatar: PropTypes.any,
  icon: PropTypes.any,
  onPress: PropTypes.func,
  rightIcon: PropTypes.oneOfType([PropTypes.element, PropTypes.object]),
  underlayColor: PropTypes.string,
  subtitle: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
  ]),
  subtitleStyle: PropTypes.any,
  subtitleNumberOfLines: PropTypes.number,
  containerStyle: PropTypes.any,
  leftWrapperStyle: PropTypes.any,
  wrapperStyle: PropTypes.any,
  titleStyle: PropTypes.any,
  titleContainerStyle: PropTypes.any,
  titleNumberOfLines: PropTypes.number,
  hideChevron: PropTypes.bool,
  chevronColor: PropTypes.string,
  roundAvatar: PropTypes.bool,
  badge: PropTypes.any,
  switchButton: PropTypes.bool,
  onSwitch: PropTypes.func,
  switchDisabled: PropTypes.bool,
  switchOnTintColor: PropTypes.string,
  switchThumbTintColor: PropTypes.string,
  switchTintColor: PropTypes.string,
  switched: PropTypes.bool,
  textInput: PropTypes.bool,
  textInputAutoCapitalize: PropTypes.bool,
  textInputAutoCorrect: PropTypes.bool,
  textInputAutoFocus: PropTypes.bool,
  textInputEditable: PropTypes.bool,
  textInputKeyboardType: PropTypes.oneOf([
    'default',
    'email-address',
    'numeric',
    'phone-pad',
    'ascii-capable',
    'numbers-and-punctuation',
    'url',
    'number-pad',
    'name-phone-pad',
    'decimal-pad',
    'twitter',
    'web-search',
  ]),
  textInputMaxLength: PropTypes.number,
  textInputMultiline: PropTypes.bool,
  textInputOnChangeText: PropTypes.func,
  textInputOnFocus: PropTypes.func,
  textInputOnBlur: PropTypes.func,
  textInputSelectTextOnFocus: PropTypes.bool,
  textInputReturnKeyType: PropTypes.string,
  textInputValue: PropTypes.string,
  textInputSecure: PropTypes.bool,
  textInputStyle: PropTypes.any,
  textInputContainerStyle: PropTypes.any,
  textInputPlaceholder: PropTypes.string,
  component: PropTypes.any,
  fontFamily: PropTypes.string,
  rightTitle: PropTypes.any,
  rightTitleContainerStyle: ViewPropTypes.style,
  rightTitleStyle: Text.propTypes.style,
  rightTitleNumberOfLines: PropTypes.number,
  subtitleContainerStyle: ViewPropTypes.style,
  label: PropTypes.any,
  onLongPress: PropTypes.func,
  leftIcon: PropTypes.oneOfType([PropTypes.element, PropTypes.object]),
  leftIconOnPress: PropTypes.func,
  leftIconOnLongPress: PropTypes.func,
  leftIconUnderlayColor: PropTypes.string,
  leftIconContainerStyle: ViewPropTypes.style,
  leftIconContainerColor: PropTypes.string,
  avatarStyle: ViewPropTypes.style,
  avatarContainerStyle: ViewPropTypes.style,
  avatarOverlayContainerStyle: ViewPropTypes.style,
  onPressRightIcon: PropTypes.func,
};

const stylesVars = {
  paddingBottom: 18,
  typePadding: 15,
  typeSize: { width: 30, height: 30 },
};

const styles = StyleSheet.create({
  // main container
  container: {
    paddingTop: 29,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
  },
  // container of icon/avatar
  leftWrapper: {
    paddingLeft: stylesVars.typePadding,
    paddingRight: stylesVars.typePadding,
    paddingBottom: stylesVars.paddingBottom,
  },
  // container of title/subtitle + rightcontainer
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    borderBottomColor: colors.border,
    borderBottomWidth: 1,
    paddingBottom: stylesVars.paddingBottom,
    paddingRight: 0,
    marginRight: 30,
  },
  transactionIcon: {
    color: 'red'
  },
  // container for the title + subtitle
  titleSubtitleContainer: {
    justifyContent: 'center',
    flex: 1,
  },
  // this is one case for right container
  rightTitleContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  avatar: {
    width: stylesVars.typeSize.width,
    height: stylesVars.typeSize.height,
  },
  // icon style
  iconStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: colors.green,
    borderRadius: 100,
    width: stylesVars.typeSize.width,
    height: stylesVars.typeSize.height,
  },
  // the actual icon element
  // icon: {
  //   color: colors.white,
  // },
  // the title of the item
  title: {
    fontSize: normalize(12),
    color: '#8D959D',
    ...Platform.select({
      ios: {
        fontWeight: 'normal',
      },
      android: {
        ...fonts.android.bold,
      },
    }),
  },
  // subtitle if any
  subtitle: {
    color: colors.grey0,
    fontSize: normalize(10),
    marginTop: 2,
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

  // this is one case for right container
  chevronContainer: {
    flex: 0.15,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  // this is one case for right container
  switchContainer: {
    flex: 0.15,
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginRight: 5,
  },
  // this is the style for the right title
  rightTitleStyle: {
    marginRight: 5,
    fontSize: normalize(17),
    color: colors.black,
  },
  textInputStyle: {
    height: 20,
    textAlign: 'right',
  },
});

export default ListItem;
