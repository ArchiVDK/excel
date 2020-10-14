import DOMListener from '@core/DomListener';

export default class ExcelComponent extends DOMListener {
  constructor($root, options = {}) {
    super($root, options.listeners);
    this.name = options.listeners || '';
    this.emitter = options.emitter;
    this.store = options.store;
    this.subscribe = options.subscribe || [];
    this.unsubscribers = [];
    this.prepare();
  }

  prepare() {}

  // Возвращет шаблон компонента
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

  $dispatch(action) {
    this.store.dispatch(action);
  }

  init() {
    this.initDomListener();
  }

  isWatching(key) {
    return this.subscribe.includes(key);
  }

  storeChanged() {}

  destroy() {
    this.removeDomListener();
    this.unsubscribers.forEach((unsub) => unsub());
  }
}
