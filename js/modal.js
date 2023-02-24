// modal window pentru "Franchise "
// (() => {
//   const refs = {
//     openModalBtn: document.querySelector("[data-modal-open]"),
//     closeModalBtn: document.querySelector("[data-modal-close]"),
//     modal: document.querySelector("[data-modal]"),
//   };

//   refs.openModalBtn.addEventListener("click", toggleModal);
//   refs.closeModalBtn.addEventListener("click", toggleModal);

//   function toggleModal() {
//     refs.modal.classList.toggle("is-hidden");
//   }
// })();

// modal window pentru "Our location "
const locationModal = document.querySelector(".modal_1");
const openLocationModal = document.querySelector(".open-button_1");
const closeLocationModal = document.querySelector(".close-button");

openLocationModal.addEventListener("click", () => {
  console.log("uyvuy");
  locationModal.showModal();
});

closeLocationModal.addEventListener("click", () => {
  locationModal.close();
});

const franchiseModal = document.querySelector(".modal-2");
const openFranchiseModal = document.querySelector(".second-btn");
const closeFranchiseModal = document.querySelector(".close-modal");

openFranchiseModal.addEventListener("click", () => {
  console.log("uyvuy");
  console.log(franchiseModal);

  franchiseModal.showModal();
});

closeFranchiseModal.addEventListener("click", () => {
  franchiseModal.close();
});
