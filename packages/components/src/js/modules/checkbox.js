//
// Checkbox
//

class Checkbox {
  constructor(domNode) {
    this.checkbox = domNode;
    this.checkbox.addEventListener('click', this.toggle.bind(this));
  }

  get checked() {
    return this.checkbox.getAttribute('aria-checked') === 'true';
    return this.checkbox.parentNode.getAttribute('data-checkbox-state') === 'checked';
  }

  set checked(isChecked) {
    const value = isChecked ? 'true' : 'false';
    this.checkbox.setAttribute('aria-checked', value);
    const state = isChecked ? 'checked' : 'empty';
    this.checkbox.parentNode.setAttribute('data-checkbox-state', state);
  }

  toggle() {
    return this.checked = !this.checked;
  }
}

module.exports = function() {
  const checkbox = document.querySelectorAll('.checkbox');
  if (checkbox) {
    document.querySelectorAll('.checkbox__item-input').forEach(item => new Checkbox(item));
  }
}
