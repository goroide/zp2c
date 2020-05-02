//
// Modal
//

module.exports = function() {
  const modal = document.querySelectorAll('.modal');
  if (modal) {
    const btn = document.querySelectorAll('[data-modal-target]');
    for (let i = 0; i < btn.length; i++) {
      btn[i].addEventListener('click', openModal);
    }

    for (let i = 0; i < modal.length; i++) {
      modal[i].addEventListener('click', closeModal);
    }

    function openModal(e) {
      const id = this.getAttribute('data-modal-target');
      document.getElementById(id).classList.toggle('modal--visible');
    }

    function closeModal(e) {
      if (e.target == this || e.target.getAttribute('data-modal-close') == '') {
        this.classList.toggle('modal--visible');
      }
    }
  }
}
