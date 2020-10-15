export default class Page {
  constructor(params) {
    this.params = params;
  }

  getRoot() {
    throw new Error('method should be implemented');
  }

  afterRender() {}

  destroy() {}
}
