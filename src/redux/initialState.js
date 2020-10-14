import {storage} from '../core/utils';
import {defaultStyle, defaultTitle} from '../constance';

const defaultState = {
  title: defaultTitle,
  rowState: {},
  colState: {},
  dataState: {},
  stylesState: {},
  currentText: '',
  currentStyles: defaultStyle,
};
const normalize = (state) => {
  return {...state, currentStyles: defaultStyle, currentText: ''};
};
export const initialState = storage('excel-state')
  ? normalize(storage('excel-state'))
  : defaultState;
