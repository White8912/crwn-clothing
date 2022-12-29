import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'sign-in': {
    'width': [{ 'unit': 'px', 'value': 380 }],
    'display': 'flex',
    'flexDirection': 'column'
  },
  'sign-in title': {
    'margin': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }]
  },
  'sign-in buttons': {
    'display': 'flex',
    'justifyContent': 'space-between'
  }
});
