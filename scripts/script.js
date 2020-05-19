$(document).ready(function () {
  modal1();
  })
// Get the Modal
let modal = document.querySelector("#myModal");
// Show Modal
function showModal() {
modal.classList.remove("hide");
}
// Hide Modal
function hideModal() {
modal.classList.add("hide");
}
// Hide Modal when backdrop (black transparent area) is clicked
$(window).load(function() {
$('#myModal').modal('show');
});