import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'menu-item': {
    'minWidth': [{ 'unit': '%H', 'value': 0.3 }],
    'height': [{ 'unit': 'px', 'value': 240 }],
    'flex': '1 1 auto',
    'display': 'flex',
    'alignItems': 'center',
    'justifyContent': 'center',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'black' }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 7.5 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 7.5 }],
    'overflow': 'hidden'
  },
  'menu-item:hover': {
    'cursor': 'pointer'
  },
  'menu-item:hover background-image': {
    'transform': 'scale(1.1)',
    'transition': 'transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95)'
  },
  'menu-item:hover content': {
    'opacity': '0.9'
  },
  'menu-itemlarge': {
    'height': [{ 'unit': 'px', 'value': 380 }]
  },
  'menu-item:first-child': {
    'marginRight': [{ 'unit': 'px', 'value': 7.5 }]
  },
  'menu-item:last-child': {
    'marginLeft': [{ 'unit': 'px', 'value': 7.5 }]
  },
  'menu-item background-image': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'backgroundPosition': 'center',
    'backgroundSize': 'cover',
    'opacity': '0.1'
  },
  'menu-item content': {
    'height': [{ 'unit': 'px', 'value': 90 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 25 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 25 }],
    'display': 'flex',
    'flexDirection': 'column',
    'alignItems': 'center',
    'justifyContent': 'center',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'black' }],
    'backgroundColor': 'white',
    'opacity': '0.7',
    'position': 'absolute'
  },
  'menu-item content title': {
    'fontWeight': 'bold',
    'marginBottom': [{ 'unit': 'px', 'value': 6 }],
    'fontSize': [{ 'unit': 'px', 'value': 22 }],
    'color': '#4a4a4a'
  },
  'menu-item content subtitle': {
    'fontWeight': 'bold',
    'fontSize': [{ 'unit': 'px', 'value': 16 }]
  }
});
