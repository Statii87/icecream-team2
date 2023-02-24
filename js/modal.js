const locationModal = document.querySelector(".modal_1");
const openLocationModal = document.querySelector(".open-button_1");
const closeLocationModal = document.querySelector(".close-button");

openLocationModal.addEventListener("click", () => {
  locationModal.showModal();
});

closeLocationModal.addEventListener("click", () => {
  locationModal.close();
});

const franchiseModal = document.querySelector(".modal-2");
const openFranchiseModal = document.querySelector(".second-btn");
const closeFranchiseModal = document.querySelector(".close-modal");

openFranchiseModal.addEventListener("click", () => {
  franchiseModal.showModal();
});

closeFranchiseModal.addEventListener("click", () => {
  franchiseModal.close();
});
