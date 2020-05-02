//
// Search
//

class Search {
  constructor(domNode) {
    this.search = domNode;
    this.search.addEventListener('keyup', this.clearButton.bind(this));
    this.search.addEventListener('change', this.clearButton.bind(this));
    this.search.nextElementSibling.nextElementSibling.addEventListener('click', this.clear.bind(this));
  }

  clearButton() {
    if (this.search.value.length < 1) {
      this.search.nextElementSibling.nextElementSibling.classList.add('search__clear--hidden');
    } else {
      this.search.nextElementSibling.nextElementSibling.classList.remove('search__clear--hidden');
    }
  }

  clear() {
    this.search.value = '';
    this.search.nextElementSibling.nextElementSibling.classList.add('search__clear--hidden');
  }
}

module.exports = function() {
  const search = document.querySelectorAll('.search');
  if (search) {
    document.querySelectorAll('.search__input').forEach(item => new Search(item));
  }
}
