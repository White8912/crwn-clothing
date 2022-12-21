import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'header': {
    'height': [{ 'unit': 'px', 'value': 70 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'display': 'flex',
    'alignItems': 'center',
    'justifyContent': 'space-between',
    'marginBottom': [{ 'unit': 'px', 'value': 25 }]
  },
  'header logo-container': {
    'height': [{ 'unit': '%V', 'value': 1 }],
    'width': [{ 'unit': 'px', 'value': 70 }],
    'padding': [{ 'unit': 'px', 'value': 25 }, { 'unit': 'px', 'value': 25 }, { 'unit': 'px', 'value': 25 }, { 'unit': 'px', 'value': 25 }],
    'display': 'flex',
    'alignItems': 'center',
    'justifyContent': 'center'
  },
  'header options': {
    'width': [{ 'unit': '%H', 'value': 0.5 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'display': 'flex',
    'alignItems': 'center',
    'justifyContent': 'flex-end'
  },
  'header options option': {
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 15 }]
  }
});
