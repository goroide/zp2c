const dropdown = require('../src/js/modules/dropdown');

describe('Dropdownのテスト', function() {
  it('ドロップダウンの開閉のaria-expandedクラスが切り替わる', function() {
    document.body.innerHTML = __html__['tests/html/dropdown/dropdown_test.html'];
    dropdown.call(this, document.body);

    const dropdownBtn = document.querySelectorAll('.dropdown__btn')[0];
    expect(dropdownBtn.classList.contains('dropdown__btn--expanded')).toBe(false);
    
    dropdownBtn.click();
    expect(dropdownBtn.classList.contains('dropdown__btn--expanded')).toBe(true);
    
    dropdownBtn.click();
    expect(dropdownBtn.classList.contains('dropdown__btn--expanded')).toBe(false);
  });
  
  it('選択されたドロップダウンアイテムにselectedが付与される', function() {
    document.body.innerHTML = __html__['tests/html/dropdown/dropdown_test.html'];
    dropdown.call(this, document.body);
    
    const dropdownItems = Array.from(document.querySelectorAll('.dropdown__item'));
    expect(dropdownItems[1].classList.contains('dropdown__item--selected')).toBe(false);
    
    dropdownItems[1].click();
    expect(dropdownItems[1].classList.contains('dropdown__item--selected')).toBe(true);
  });

  it('dropdownクラスがない場合は適用されない', function() {
    document.body.innerHTML = __html__['tests/html/dropdown/dropdown_none_test.html'];
    dropdown.call(this, document.body);

    const dropdownBtn = document.querySelectorAll('.dropdown__btn')[0];
    expect(dropdownBtn.classList.contains('dropdown__btn--expanded')).toBe(false);
    
    dropdownBtn.click();
    expect(dropdownBtn.classList.contains('dropdown__btn--expanded')).toBe(false);
  });
});