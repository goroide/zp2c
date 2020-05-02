const checkbox = require('../src/js/modules/checkbox');

describe('Checkboxのテスト', function() {
  it('クリック時に状態が切り替わる', function() {
    document.body.innerHTML = __html__['tests/html/checkbox/checkbox_test.html'];
    checkbox.call(this, document.body);

    const checkboxInput = document.getElementsByClassName('checkbox__item-input')[0];
    expect(checkboxInput.getAttribute('aria-checked')).toBe('false');
    expect(checkboxInput.parentNode.getAttribute('data-checkbox-state')).toBe('empty');
    
    checkboxInput.click();
    expect(checkboxInput.getAttribute('aria-checked')).toBe('true');
    expect(checkboxInput.parentNode.getAttribute('data-checkbox-state')).toBe('checked');
    
    checkboxInput.click();
    expect(checkboxInput.getAttribute('aria-checked')).toBe('false');
    expect(checkboxInput.parentNode.getAttribute('data-checkbox-state')).toBe('empty');
  });

  it('checkboxクラスがない場合は適用されない', function() {
    document.body.innerHTML = __html__['tests/html/checkbox/checkbox_none_test.html'];
    checkbox.call(this, document.body);

    const checkboxInput = document.getElementsByClassName('checkbox__item-input')[0];
    expect(checkboxInput.getAttribute('aria-checked')).toBe('false');
    expect(checkboxInput.parentNode.getAttribute('data-checkbox-state')).toBe('empty');
    
    checkboxInput.click();
    expect(checkboxInput.getAttribute('aria-checked')).toBe('false');
    expect(checkboxInput.parentNode.getAttribute('data-checkbox-state')).toBe('empty');
  });
});