'use strict';

import PropTypes from 'prop-types';
import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import { Text, Circle } from 'react-native-svg';
import { SmoothLine } from 'react-native-pathjs-charts';

const GainLine = props => {
  const {
    data,
    options,
    ...attributes
  } = props;
  let baseOptions = {
    animate: {
      type: 'delayed',
      duration: 200
    },
    axisX: {
      showAxis: true,
      showLines: true,
      showLabels: false,
      showTicks: false,
      zeroAxis: false,
      orient: 'bottom',
      label: {
        fontFamily: 'Arial',
        fontSize: 14,
        fontWeight: true,
        fill: 'transparent'
      }
    },
    axisY: {
      showAxis: true,
      showLines: false,
      showLabels: false,
      showTicks: false,
      zeroAxis: false,
      orient: 'left',
      label: {
        fontFamily: 'Arial',
        fontSize: 14,
        fontWeight: true,
        fill: 'transparent'
      }
    },
    showAreas: true,
    showPoints: true,
    renderPoint: (graphIndex, pointIndex) => [
      <Text
        key="valueLegend"
        fontFamily="Arial"
        fontSize={14}
        fontWeight="normal"
        fill="transparent"
        textAnchor="middle"
        x={0}
        y={20}
      >
        {data[graphIndex][pointIndex].y}
      </Text>,
      <Circle key="light" fill='#FFFFFF' cx={0} cy={0} r={7} fillOpacity={1} />,
      <Circle key="full" fill='#1566DF' cx={0} cy={0} r={5} fillOpacity={1} />,
    ]
  };
  return (
    <SmoothLine data={data} options={{...baseOptions, ...options}} xKey='x' yKey='y' />
  );
};

GainLine.propTypes = {
  options: PropTypes.any,
  data: PropTypes.any,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
  },
});

export default GainLine;