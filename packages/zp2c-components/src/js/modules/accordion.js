//
// Accordion
//

class Accordion {
  constructor(domNode) {
    this.accordion = domNode;
    this.accordion.addEventListener('click', this.toggle.bind(this));
  }

  get expaned() {
    const btnClass = this.accordion.parentNode.classList[0];
    const expandedClass = btnClass + '--expanded';
    return this.accordion.getAttribute('aria-expanded') === 'true';
    return this.accordion.parentNode.classList.add(expandedClass);
  }

  set expaned(isExpaned) {
    const btnClass = this.accordion.parentNode.classList[0];
    const expandedClass = btnClass + '--expanded';
    const value = isExpaned ? 'true' : 'false';
    this.accordion.setAttribute('aria-expanded', value);
    this.accordion.parentNode.classList.toggle(expandedClass);
  }

  toggle() {
    return this.expaned = !this.expaned;
  }
}

module.exports = function() {
  const accordion = document.querySelectorAll('.accordion');
  if (accordion) {
    document.querySelectorAll('.accordion__item-btn').forEach(item => new Accordion(item));
    document.querySelectorAll('.sub-accordion__item-btn').forEach(item => new Accordion(item));
  }
}
