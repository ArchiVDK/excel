import {defaultStyle, defaultTitle} from '../constance';
import {clone} from '../core/utils';

const defaultState = {
  title: defaultTitle,
  rowState: {},
  colState: {},
  dataState: {},
  stylesState: {},
  currentText: '',
  currentStyles: defaultStyle,
  date: new Date().toJSON(),
};
const normalize = (state) => {
  return {...state, currentStyles: defaultStyle, currentText: ''};
};

export function normalizeState(state) {
  return state ? normalize(state) : clone(defaultState);
}
