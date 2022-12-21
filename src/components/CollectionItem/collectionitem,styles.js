import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'collection-item': {
    'width': [{ 'unit': '%H', 'value': 0.22 }],
    'display': 'flex',
    'flexDirection': 'column',
    'height': [{ 'unit': 'px', 'value': 350 }],
    'alignItems': 'center'
  },
  'image': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 0.95 }],
    'backgroundSize': 'cover',
    'backgroundPosition': 'center',
    'marginBottom': [{ 'unit': 'px', 'value': 5 }]
  },
  'collection-footer': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 0.05 }],
    'display': 'flex',
    'justifyContent': 'space-between',
    'fontSize': [{ 'unit': 'px', 'value': 18 }]
  },
  'collection-footer name': {
    'marginBottom': [{ 'unit': 'px', 'value': 15 }]
  }
});
