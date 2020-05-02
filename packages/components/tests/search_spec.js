const search = require('../src/js/modules/search');

describe('Searchのテスト', function() {
  it('keyupイベントのテスト', function() {
    document.body.innerHTML = __html__['tests/html/search/search_test.html'];
    search.call(this, document.body);

    const searchInput = document.getElementsByClassName('search__input')[0];

    // changeイベント
    searchInput.value = 'aaaa';
    searchInput.dispatchEvent(new Event("change"));

    searchInput.value = '';
    searchInput.dispatchEvent(new Event("change"));

    expect(searchInput.nextElementSibling.nextElementSibling.classList.contains('search__clear--hidden')).toBe(true);
  });

  it('changeイベントのテスト', function() {
    document.body.innerHTML = __html__['tests/html/search/search_test.html'];
    search.call(this, document.body);

    const searchInput = document.getElementsByClassName('search__input')[0];

    // changeイベント
    searchInput.value = 'aaaa';
    searchInput.dispatchEvent(new Event("change"));

    searchInput.value = '';
    searchInput.dispatchEvent(new Event("change"));

    expect(searchInput.nextElementSibling.nextElementSibling.classList.contains('search__clear--hidden')).toBe(true);
  });

  it('clickイベントのテスト', function() {
    document.body.innerHTML = __html__['tests/html/search/search_test.html'];
    search.call(this, document.body);

    const searchInput = document.getElementsByClassName('search__input')[0];
    searchInput.value = 'click test';

    const closeButton = searchInput.nextElementSibling.nextElementSibling;

    closeButton.click();
    expect(searchInput.value).toBe('');
    expect(closeButton.classList.contains('search__clear--hidden')).toBe(true);
  });

  it('serchクラスがない場合、適用されない', function() {
    document.body.innerHTML = __html__['tests/html/search/search_none_test.html'];
    search.call(this, document.body);

    const searchInput = document.getElementsByClassName('search__input')[0];
    searchInput.value = 'click test';

    const closeButton = searchInput.nextElementSibling.nextElementSibling;
    closeButton.click();
    expect(searchInput.value).toBe('click test');
  });
});