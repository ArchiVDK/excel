import ExcelComponent from '../../core/ExcelComponent';

export default class Formula extends ExcelComponent {
  static className = 'excel__formula';

  constructor($root) {
    super($root, {name: 'Formula', listeners: ['input', 'click']});
  }

  toHTML() {
    return `<div class="info">fx</div>
    <div class="input" contenteditable="true"></div>`;
  }

  onInput(e) {
    console.log('onInput', e);
  }

  onClick(e) {
    console.log('click', e);
  }
}
