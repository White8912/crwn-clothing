import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'group': {
    'position': 'relative',
    'margin': [{ 'unit': 'px', 'value': 45 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 45 }, { 'unit': 'px', 'value': 0 }]
  },
  'group form-input': {
    'background': 'none',
    'backgroundColor': 'white',
    'color': 'grey',
    'fontSize': [{ 'unit': 'px', 'value': 18 }],
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 5 }],
    'display': 'block',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'borderRadius': '0',
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'grey' }],
    'margin': [{ 'unit': 'px', 'value': 25 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 25 }, { 'unit': 'px', 'value': 0 }]
  },
  'group form-input:focus': {
    'outline': 'none'
  },
  'group form-input:focus ~ form-input-label': {
    'top': [{ 'unit': 'px', 'value': -14 }],
    'fontSize': [{ 'unit': 'px', 'value': 12 }],
    'color': 'black'
  },
  'group input[type="password"]': {
    'letterSpacing': [{ 'unit': 'em', 'value': 0.3 }]
  },
  'group form-input-label': {
    'color': 'grey',
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'fontWeight': 'normal',
    'position': 'absolute',
    'pointerEvents': 'none',
    'left': [{ 'unit': 'px', 'value': 5 }],
    'top': [{ 'unit': 'px', 'value': 10 }],
    'transition': '300ms ease all'
  },
  'group form-input-labelshrink': {
    'top': [{ 'unit': 'px', 'value': -14 }],
    'fontSize': [{ 'unit': 'px', 'value': 12 }],
    'color': 'black'
  }
});
