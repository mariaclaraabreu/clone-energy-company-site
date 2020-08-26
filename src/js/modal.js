function showModal(modalId){
  const modal = document.getElementById(modalId);
  modal.classList.add('show');
  modal.addEventListener('click', (e) =>{
    if(e.target.id == modalId || e.target.className == 'closeModal'){
      modal.classList.remove('show');
    }

  })


}


const credits = document.querySelector('.credits');


credits.addEventListener('click', () => {
  showModal('modalCreditss');
})


