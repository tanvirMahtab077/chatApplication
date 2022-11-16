const form = document.querySelector("#add-user-form");
const modal = document.querySelector("#add-user-modal");

form.onsubmit = async function (event) {
  event.preventDefault();

  const formData = new FormData(form);
  let response = await fetch("/users/create", {
    method: "POST",
    body: formData
  });

  let result = await response.json();

  if (result.error) {
    console.log(result.error);
  }
};

function closeModal() {
  return (modal.style.display = "none");
}
function openModal() {
  return (modal.style.display = "block");
}
