//
// Tab
//

class Tab {
  constructor(domNode) {
    this.tab = domNode;
    this.trigger = domNode.querySelector('.tab-nav__btn');
    this.navs = Array.from(domNode.querySelectorAll('.tab-nav__item-link'));
    this.panels = Array.from(domNode.querySelectorAll('.tab-panel__item'));
    this.selected = {
      text: '',
      val: '',
      index: 0
    };
    this.init();
    this.bindEvents();
  }

  init() {
    const btnText = this.trigger.querySelector('.tab-nav__btn-text');
    btnText.textContent = this.navs[0].textContent;
  }

  bindEvents() {
    this.trigger.addEventListener('click', this.toggleDropdown);

    for (let nav of this.navs) {
      nav.addEventListener('click', () => {
        this.setValue(nav);
        this.closeDropdown();
      });
    }

    // Close menu when clicking outside
    document.addEventListener('click', (event) => {
      if (event.target !== this.tab && !this.tab.contains(event.target)) {
        this.closeDropdown();
      }
    });
  }

  toggleDropdown() {
    this.classList.contains('tab-nav__btn--expanded') ? this.classList.remove('tab-nav__btn--expanded') : this.classList.add('tab-nav__btn--expanded')
  }

  closeDropdown() {
    this.trigger.classList.remove('tab-nav__btn--expanded');
  }

  setValue(nav) {
    for (let nav of this.navs) {
      nav.parentNode.classList.remove('tab-nav__item--selected');
    }
    for (let panel of this.panels) {
      panel.hidden = true;
    }
    const btnText = this.trigger.querySelector('.tab-nav__btn-text');
    this.selected.text = nav.textContent;
    this.selected.index = this.navs.indexOf(nav);
    this.selected.val = nav.parentNode.getAttribute('data-tab-target');
    btnText.textContent = this.selected.text;
    nav.parentNode.classList.add('tab-nav__item--selected');
    this.tab.querySelector(this.selected.val).hidden = false;
  }

}

module.exports = function() {
const selects = Array.from(document.querySelectorAll('.tab'));
  if (selects) {
    for (let select of selects) {
      const tab = new Tab(select);
    }
  }
}
