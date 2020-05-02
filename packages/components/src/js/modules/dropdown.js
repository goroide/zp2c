//
// Dropdown
//

class Dropdown {
  constructor(domNode) {
    this.dropdown = domNode;
    this.trigger = domNode.querySelector('.dropdown__btn');
    this.items = Array.from(domNode.querySelectorAll('.dropdown__item'));
    this.selected = {
      text: '',
      val: '',
      index: -1
    };
    this.bindEvents();
  }

  bindEvents() {
    this.trigger.addEventListener('click', this.toggleDropdown);

    for (let item of this.items) {
      item.addEventListener('click', () => {
        this.setValue(item);
        this.closeDropdown();
      });
    }

    // Close menu when clicking outside
    document.addEventListener('click', (event) => {
      if (event.target !== this.dropdown && !this.dropdown.contains(event.target)) {
        this.closeDropdown();
      }
    });
  }

  toggleDropdown() {
    this.classList.contains('dropdown__btn--expanded') ? this.classList.remove('dropdown__btn--expanded') : this.classList.add('dropdown__btn--expanded')
  }

  closeDropdown() {
    this.trigger.classList.remove('dropdown__btn--expanded');
  }

  setValue(item) {
    for (let item of this.items) {
      item.classList.remove('dropdown__item--selected');
    }
    this.selected.text = item.textContent;
    this.selected.index = this.items.indexOf(item);
    this.selected.val = item.getAttribute('dropdown-value');
    this.trigger.textContent = this.selected.text;
    item.classList.add('dropdown__item--selected');
  }
}

module.exports = function() {
const selects = Array.from(document.querySelectorAll('.dropdown'));
  if (selects) {
    for (let select of selects) {
      const dropdown = new Dropdown(select);
    }
  }
}
