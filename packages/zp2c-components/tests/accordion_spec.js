const accordion = require('../src/js/modules/accordion');

describe('Accordionのテスト', function() {
  it('クリック時にaria-expandedの値が切り替わる', function() {
    document.body.innerHTML = __html__['tests/html/accordion/accordion_test.html'];
    accordion.call(this, document.body);
    
    const accordionBtn = document.getElementsByClassName('accordion__item-btn')[0];
    expect(accordionBtn.getAttribute('aria-expanded')).toBe('false');
    
    accordionBtn.click();
    expect(accordionBtn.getAttribute('aria-expanded')).toBe('true');
    
    const subAccordionBtn = document.getElementsByClassName('sub-accordion__item-btn')[0];
    expect(subAccordionBtn.getAttribute('aria-expanded')).toBe('true');
    
    subAccordionBtn.click();
    expect(subAccordionBtn.getAttribute('aria-expanded')).toBe('false');
  });

  it('accordionクラスがない場合は適用されない', function() {
    document.body.innerHTML = __html__['tests/html/accordion/accordion_none_test.html'];
    accordion.call(this, document.body);
    
    const accordionBtn = document.getElementsByClassName('accordion__item-btn')[0];
    expect(accordionBtn.getAttribute('aria-expanded')).toBe('false');
    
    accordionBtn.click();
    expect(accordionBtn.getAttribute('aria-expanded')).toBe('false');
  });
});