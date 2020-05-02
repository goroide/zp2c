const modal = require('../src/js/modules/modal');

describe('Modalのテスト', function() {
  it('モーダルを開くボタンをクリック時、モーダルが開くこと', function() {
    document.body.innerHTML = __html__['tests/html/modal/modal_test.html'];
    modal.call(this, document.body);

    const modalBtn = document.querySelectorAll('[data-modal-target]')[0];
    const id = modalBtn.getAttribute('data-modal-target');
    expect(document.getElementById(id).classList.contains('modal--visible')).toBe(false);
    
    modalBtn.click();
    expect(document.getElementById(id).classList.contains('modal--visible')).toBe(true);
  });

  it('モーダルウィンドウをクリック時、モーダルが閉じること', function() {
    document.body.innerHTML = __html__['tests/html/modal/modal_test.html'];
    modal.call(this, document.body);

    document.querySelectorAll('[data-modal-target]')[0].click();

    const modalWindow = document.querySelectorAll('.modal')[0];
    expect(modalWindow.classList.contains('modal--visible')).toBe(true);
    
    modalWindow.click();
    expect(modalWindow.classList.contains('modal--visible')).toBe(false);
  });

  it('モーダルウィンドウの閉じるボタンクリック時、モーダルが閉じること', function() {
    document.body.innerHTML = __html__['tests/html/modal/modal_test.html'];
    modal.call(this, document.body);

    document.querySelectorAll('[data-modal-target]')[0].click();

    const modalWindow = document.querySelectorAll('.modal')[0];
    expect(modalWindow.classList.contains('modal--visible')).toBe(true);
    
    const modalCloseBtn = document.querySelectorAll('.modal__footer')[0].children[0];
    modalCloseBtn.click();
    expect(modalWindow.classList.contains('modal--visible')).toBe(false);
  });

  it('modalクラスがない場合、適用されないこと', function() {
    document.body.innerHTML = __html__['tests/html/modal/modal_none_test.html'];
    modal.call(this, document.body);

    const modalBtn = document.querySelectorAll('[data-modal-target]')[0];
    const id = modalBtn.getAttribute('data-modal-target');
    expect(document.getElementById(id).classList.contains('modal--visible')).toBe(false);
    
    modalBtn.click();
    expect(document.getElementById(id).classList.contains('modal--visible')).toBe(false);
  });
});