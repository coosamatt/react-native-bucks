import React from 'react';
import PropTypes from 'prop-types';

import {
  StyleSheet,
  PanResponder,
  View,
  Platform,
} from 'react-native';
import colors from '../config/colors';

import DefaultMarker from './DefaultMarker';
import { createArray, valueToPosition, positionToValue } from './converters';

const ViewPropTypes = require('react-native').ViewPropTypes || View.propTypes;

export default class MultiSlider extends React.Component {
  static propTypes = {
    values: PropTypes.arrayOf(PropTypes.number),

    onValuesChangeStart: PropTypes.func,
    onValuesChange: PropTypes.func,
    onValuesChangeFinish: PropTypes.func,

    touchDimensions: PropTypes.object,

    customMarker: PropTypes.func,

    min: PropTypes.number,
    max: PropTypes.number,
    step: PropTypes.number,

    optionsArray: PropTypes.array,

    containerStyle: ViewPropTypes.style,
    trackStyle: ViewPropTypes.style,
    markerContainerStyle: ViewPropTypes.style,
    markerStyle: ViewPropTypes.style,
    pressedMarkerStyle: ViewPropTypes.style,
    valuePrefix: PropTypes.string,
    valueSuffix: PropTypes.string,
    enabledOne: PropTypes.bool,
    enabledTwo: PropTypes.bool,
    onToggleOne: PropTypes.func,
    onToggleTwo: PropTypes.func,
    allowOverlap: PropTypes.bool,
    snapped: PropTypes.bool,
    markerOffsetX: PropTypes.number,
    markerOffsetY: PropTypes.number,
  };

  static defaultProps = {
    values: [0],
    onValuesChangeStart: () => {
    },
    onValuesChange: values => {
    },
    onValuesChangeFinish: values => {
    },
    step: 1,
    min: 0,
    max: 10,
    touchDimensions: {
      height: 50,
      width: 50,
      borderRadius: 15,
      slipDisplacement: 200,
    },
    customMarker: DefaultMarker,
    markerOffsetX: 0,
    markerOffsetY: 0,
    sliderLength: 0,
    onToggleOne: undefined,
    onToggleTwo: undefined,
    enabledOne: true,
    enabledTwo: true,
    allowOverlap: false,
    snapped: false,
  };

  constructor(props) {
    super(props);

    this.init = false;

    this.state = {
      pressedOne: true,
      valueOne: this.props.values[0],
      valueTwo: this.props.values[1],
      pastOne: null,
      pastTwo: null,
      positionOne: null,
      positionTwo: null,
      sliderLength: this.props.sliderLength,
      allMeasured: false,
      twoMarkers: this.props.values.length == 2,
    };
  }

  componentWillMount() {
    var customPanResponder = (start, move, end) => {
      return PanResponder.create({
        onStartShouldSetPanResponder: (evt, gestureState) => true,
        onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
        onMoveShouldSetPanResponder: (evt, gestureState) => true,
        onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
        onPanResponderGrant: (evt, gestureState) => start(),
        onPanResponderMove: (evt, gestureState) => move(gestureState),
        onPanResponderTerminationRequest: (evt, gestureState) => true,
        onPanResponderRelease: (evt, gestureState) => end(gestureState),
        onPanResponderTerminate: (evt, gestureState) => end(gestureState),
        onShouldBlockNativeResponder: (evt, gestureState) => true,
      });
    };

    this._panResponderOne = customPanResponder(
      this.startOne,
      this.moveOne,
      this.endOne,
    );
    this._panResponderTwo = customPanResponder(
      this.startTwo,
      this.moveTwo,
      this.endTwo,
    );
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.onePressed || this.state.twoPressed) {
      return;
    }

    let position, nextState = {};
    if (
      nextProps.values[0] !== this.props.values[0]
    ) {
      position = valueToPosition(
        nextProps.values[0],
        this.optionsArray,
        nextProps.sliderLength,
      );
      nextState.valueOne = nextProps.values[0];
      nextState.pastOne = position;
      nextState.positionOne = position;
    }
    if (
      nextProps.values[1] !== this.props.values[1]
    ) {
      position = valueToPosition(
        nextProps.values[1],
        this.optionsArray,
        nextProps.sliderLength,
      );
      nextState.valueTwo = nextProps.values[1];
      nextState.pastTwo = position;
      nextState.positionTwo = position;
    }

    if (nextState != {}) {
      this.setState(nextState);
    }
  }


  startOne = () => {
    if (this.props.enabledOne) {
      this.props.onValuesChangeStart();

      this.setState({
        onePressed: !this.state.onePressed,
      });
    }
  };

  startTwo = () => {
    if (this.props.enabledTwo) {
      this.props.onValuesChangeStart();
      this.setState({
        twoPressed: !this.state.twoPressed,
      });
    }
  };

  moveOne = gestureState => {
    if (!this.props.enabledOne) {
      return;
    }

    let pastOne = (this.state.pastOne !== null) ? this.state.pastOne: this.pastOne;
    let positionTwo = (this.state.positionTwo !== null) ? this.state.positionTwo : this.positionTwo;

    var unconfined = gestureState.dx + pastOne;
    var bottom = 0;
    var trueTop = positionTwo - (this.props.allowOverlap ? 0 : this.stepLength);
    var top = trueTop === 0 ? 0 : trueTop || this.state.sliderLength;
    var confined = unconfined < bottom
      ? bottom
      : unconfined > top ? top : unconfined;
    var slipDisplacement = this.props.touchDimensions.slipDisplacement;

    if (Math.abs(gestureState.dy) < slipDisplacement || !slipDisplacement) {
      var value = positionToValue(
        confined,
        this.optionsArray,
        this.state.sliderLength,
      );

      var snapped = valueToPosition(
        value,
        this.optionsArray,
        this.state.sliderLength,
      );

      this.setState({
        positionOne: this.props.snapped ? snapped : confined,
      });

      if (value !== this.state.valueOne) {
        this.setState(
          {
            valueOne: value,
          },
          () => {
            var change = [this.state.valueOne];
            if (this.state.valueTwo) {
              change.push(this.state.valueTwo);
            }
            this.props.onValuesChange(change);
          },
        );
      }
    }
  };

  moveTwo = gestureState => {
    if (!this.props.enabledTwo) {
      return;
    }

    let positionOne = (this.state.positionOne !== null) ? this.state.positionOne : this.positionOne;
    let pastTwo = (this.state.pastTwo !== null) ? this.state.pastTwo : this.pastTwo;

    var unconfined = gestureState.dx + pastTwo;
    var bottom = positionOne + (this.props.allowOverlap ? 0 : this.stepLength);
    var top = this.state.sliderLength;
    var confined = unconfined < bottom
      ? bottom
      : unconfined > top ? top : unconfined;
    var slipDisplacement = this.props.touchDimensions.slipDisplacement;

    if (Math.abs(gestureState.dy) < slipDisplacement || !slipDisplacement) {
      var value = positionToValue(
        confined,
        this.optionsArray,
        this.state.sliderLength,
      );
      var snapped = valueToPosition(
        value,
        this.optionsArray,
        this.state.sliderLength,
      );

      this.setState({
        positionTwo: this.props.snapped ? snapped : confined,
      });

      if (value !== this.state.valueTwo) {
        this.setState(
          {
            valueTwo: value,
          },
          () => {
            this.props.onValuesChange([this.state.valueOne, this.state.valueTwo]);
          },
        );
      }
    }
  };

  endOne = gestureState => {
    if (gestureState.moveX === 0 && this.props.onToggleOne) {
      this.props.onToggleOne();
      return;
    }

    this.setState(
      {
        pastOne: this.state.positionOne,
        onePressed: !this.state.onePressed,
      },
      () => {
        var change = [this.state.valueOne];
        if (this.state.valueTwo) {
          change.push(this.state.valueTwo);
        }
        this.props.onValuesChangeFinish(change);
      },
    );
  };

  endTwo = gestureState => {
    if (gestureState.moveX === 0 && this.props.onToggleTwo) {
      this.props.onToggleTwo();
      return;
    }

    this.setState(
      {
        twoPressed: !this.state.twoPressed,
        pastTwo: this.state.positionTwo,
      },
      () => {
        this.props.onValuesChangeFinish([
          this.state.valueOne,
          this.state.valueTwo,
        ]);
      },
    );
  };

  measureContainer(x)
  {
    var {width, height} = x.nativeEvent.layout;
    var size = {width: width, height: height};

    if (size.width)
    {
      this.setState({
        sliderLength: size.width,
        allMeasured: true,
      });
    }
  }

  updatePositions()
  {
    if (this.state.allMeasured)
    {
      this.optionsArray = this.props.optionsArray ||
        createArray(this.props.min, this.props.max, this.props.step);
      this.stepLength = this.state.sliderLength / this.optionsArray.length;

      let initialValues = this.props.values.map(value =>
        valueToPosition(value, this.optionsArray, this.state.sliderLength));

      this.pastOne = initialValues[0];
      this.pastTwo = initialValues[1];
      this.positionOne = initialValues[0];
      this.positionTwo = initialValues[1];
      this.init = true;

      return {
        pastOne: initialValues[0],
        pastTwo: initialValues[1],
        positionOne: initialValues[0],
        positionTwo: initialValues[1],
      };
    }

    return {
      pastOne: null,
      pastTwo: null,
      positionOne: null,
      positionTwo: null,
    };
  }

  getMainStyle()
  {
    if (!this.init)
      this.updatePositions();

    let positionOne = (this.state.positionOne !== null) ? this.state.positionOne : this.positionOne;
    let positionTwo = (this.state.positionTwo !== null) ? this.state.positionTwo : this.positionTwo;

    if (positionOne !== null && positionTwo !== null) {
      const trackOneLength = positionOne;
      let trackOneStyle = {width: trackOneLength};

      const trackThreeLength = this.state.sliderLength - positionTwo;
      let trackThreeStyle = {width: trackThreeLength};

      const trackTwoLength = this.state.sliderLength - trackOneLength - trackThreeLength;
      let trackTwoStyle = [styles.selectedTrack, {width: trackTwoLength}];

      const markerContainerOne = { top: this.props.markerOffsetY - 24, left : trackOneLength + this.props.markerOffsetX - 15 };
      const markerContainerTwo = { top: this.props.markerOffsetY - 24, right: trackThreeLength + this.props.markerOffsetX - 33 };

      return {
        trackOneStyle: trackOneStyle,
        trackTwoStyle: trackTwoStyle,
        trackThreeStyle: trackThreeStyle,
        markerContainerOne: markerContainerOne,
        markerContainerTwo: markerContainerTwo,
      }
    }

    return {
      trackOneStyle: null,
      trackTwoStyle: null,
      trackThreeStyle: null,
      markerContainerOne: null,
      markerContainerTwo: null,
    }
  }

  render()
  {
    const Marker = this.props.customMarker;
    const {
      borderRadius,
    } = this.props.touchDimensions;

    const touchStyle = {
      borderRadius: borderRadius || 0,
    };

    let mainStyle = this.getMainStyle();

    return (
      <View onLayout={this.measureContainer.bind(this)} style={[styles.container, this.props.containerStyle]}>
        <View style={[styles.fullTrack, { width: this.state.sliderLength }]}>
          <View
            style={[
              styles.track,
              this.props.trackStyle,
              mainStyle.trackOneStyle,
            ]}
          />
          <View
            style={[
              styles.track,
              this.props.trackStyle,
              mainStyle.trackTwoStyle,
            ]}
          />
          <View
            style={[
              styles.track,
              this.props.trackStyle,
              mainStyle.trackThreeStyle,
            ]}
          />
          <View
            style={[
              styles.markerContainer,
              mainStyle.markerContainerOne,
              this.props.markerContainerStyle,
              this.state.positionOne > this.state.sliderLength / 2 && styles.topMarkerContainer,
            ]}
          >
            <View
              style={[styles.touch, touchStyle]}
              ref={component => this._markerOne = component}
              {...this._panResponderOne.panHandlers}
            >
              <Marker
                enabled={this.props.enabledOne}
                pressed={this.state.onePressed}
                markerStyle={[styles.marker, this.props.markerStyle]}
                pressedMarkerStyle={this.props.pressedMarkerStyle}
                currentValue={this.state.valueOne}
                valuePrefix={this.props.valuePrefix}
                valueSuffix={this.props.valueSuffix}
              />
            </View>
          </View>
          {this.state.positionOne !== this.state.sliderLength &&
          <View style={[styles.markerContainer, mainStyle.markerContainerTwo, this.props.markerContainerStyle]}>
            <View
              style={[styles.touch, touchStyle]}
              ref={component => this._markerTwo = component}
              {...this._panResponderTwo.panHandlers}
            >
              <Marker
                pressed={this.state.twoPressed}
                markerStyle={this.props.markerStyle}
                pressedMarkerStyle={this.props.pressedMarkerStyle}
                currentValue={this.state.valueTwo}
                enabled={this.props.enabledTwo}
                valuePrefix={this.props.valuePrefix}
                valueSuffix={this.props.valueSuffix}
              />
            </View>
          </View>}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    justifyContent: 'center',
    flexGrow: 1
  },
  fullTrack: {
    flexDirection: 'row',
  },
  track: {
    ...Platform.select({
      ios: {
        height: 4,
        borderRadius: 2,
        backgroundColor: colors.sliderRight,
      },
      android: {
        height: 4,
        borderRadius: 2,
        backgroundColor: colors.sliderRight,
      },
    }),
  },
  selectedTrack: {
    ...Platform.select({
      ios: {
        backgroundColor: colors.sliderLeft,
      },
      android: {
        backgroundColor: colors.sliderLeft,
      },
    }),
  },
  markerContainer: {
    position: 'absolute',
    width: 48,
    height: 48,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    shadowOpacity: 1,
    shadowRadius: 1,
    shadowColor: 'rgba(0,0,0,0.06)',
    shadowOffset: {width: 0, height: -1}
  },
  topMarkerContainer: {
    zIndex: 1,
  },
  touch: {
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
});