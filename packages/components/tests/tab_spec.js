const tab = require('../src/js/modules/tab');

describe('Tabのテスト', function() {
  it('toggleDropDownのテスト', function() {
    document.body.innerHTML = __html__['tests/html/tab/tab_test.html'];
    tab.call(this, document.body);

    const tabs = document.querySelectorAll('.tab');
    const tabBtn = tabs[0].querySelector('.tab-nav__btn');
    expect(tabBtn.classList.contains('tab-nav__btn--expanded')).toBe(false);
    
    tabBtn.click();
    expect(tabBtn.classList.contains('tab-nav__btn--expanded')).toBe(true);

    tabBtn.click();
    expect(tabBtn.classList.contains('tab-nav__btn--expanded')).toBe(false);
  });

  it('setValue、closeDropDownのテスト', function() {
    document.body.innerHTML = __html__['tests/html/tab/tab_test.html'];
    tab.call(this, document.body);

    const tabs = document.querySelectorAll('.tab');
    const tabBtn = tabs[0].querySelector('.tab-nav__btn');
    expect(tabBtn.classList.contains('tab-nav__btn--expanded')).toBe(false);
    
    tabBtn.click();
    expect(tabBtn.classList.contains('tab-nav__btn--expanded')).toBe(true);
    
    const nav = Array.from(tabs[0].querySelectorAll('.tab-nav__item-link'))[1];
    expect(nav.parentNode.classList.contains('tab-nav__item--selected')).toBe(false);
    
    nav.click();
    expect(nav.parentNode.classList.contains('tab-nav__item--selected')).toBe(true);
    expect(tabBtn.classList.contains('tab-nav__btn--expanded')).toBe(false);
  });

  it('タブボタン以外をクリック時にtab-nav__btn--expandedクラスが削除される', function() {
    document.body.innerHTML = __html__['tests/html/tab/tab_test.html'];
    tab.call(this, document.body);

    const tabs = document.querySelectorAll('.tab');
    const tabBtn = tabs[0].querySelector('.tab-nav__btn');
    expect(tabBtn.classList.contains('tab-nav__btn--expanded')).toBe(false);
    
    tabBtn.click();
    expect(tabBtn.classList.contains('tab-nav__btn--expanded')).toBe(true);

    document.body.click();
    expect(tabBtn.classList.contains('tab-nav__btn--expanded')).toBe(false);
  });

  it('tabクラスがない場合、適用されないこと', function() {
    document.body.innerHTML = __html__['tests/html/tab/tab_none_test.html'];
    tab.call(this, document.body);

    const tabBtn = document.getElementsByClassName('tab-nav__btn')[0];
    expect(tabBtn.classList.contains('tab-nav__btn--expanded')).toBe(false);

    tabBtn.click();
    expect(tabBtn.classList.contains('tab-nav__btn--expanded')).toBe(false);
  });
});
