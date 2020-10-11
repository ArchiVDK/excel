import DOMListener from '@core/DomListener';

export default class ExcelComponent extends DOMListener {
  constructor($root, options = {}) {
    super($root, options.listeners);
    this.name = options.listeners || '';
    this.emitter = options.emitter;
    this.unsubscribers = [];
    this.prepare();
  }

  prepare() {}

  // Возвращет шаблон компонетан
  toHTML() {
    return '';
  }

  $emit(event, ...args) {
    this.emitter.emit(event, ...args);
  }

  $on(event, fn) {
    const unsub = this.emitter.subscribe(event, fn);
    this.unsubscribers.push(unsub);
  }

  init() {
    this.initDomListener();
  }

  destroy() {
    this.removeDomListener();
    this.unsubscribers.forEach((unsub) => unsub());
  }
}
