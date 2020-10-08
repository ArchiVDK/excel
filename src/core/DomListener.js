import {capitalize} from './utils';

export default class DomListener {
  constructor($root, listeners = []) {
    this.$root = $root;
    this.listeners = listeners;
  }

  initDomListener() {
    this.listeners.forEach((listener) => {
      const method = capitalize(listener);
      this[method] = this[method].bind(this);
      this.$root.on(listener, this[method].bind(this));
    });
  }

  removeDomListener() {
    this.listeners.forEach((listener) => {
      const method = capitalize(listener);

      this.$root.off(listener, this[method]);
    });
  }
}
