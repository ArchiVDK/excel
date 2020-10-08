import DOMListener from '@core/DomListener';

export default class ExcelComponent extends DOMListener {
  constructor($root, options = {}) {
    super($root, options.listeners);
  }
  // Возвращет шаблон компонетан
  toHTML() {
    return '';
  }

  init() {
    this.initDomListener();
  }

  destroy() {
    this.removeDomListener();
  }
}
