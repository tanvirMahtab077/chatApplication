const form = document.querySelector("#add-user-form");
const modal = document.querySelector("#add-user-modal");

form.onsubmit = function (event) {
  event.preventDefault();
  const formData = new FormData(form);

  fetch("/users/create", {
    method: "POST",
    body: formData,
  })
    .then((response) => {
      let result = response.json();
      console.log(result.errors);
    })
    .catch((err) => {
      console.error(err);
    });

  // if (result.error) {
  //   console.log(result.error);
  // }
};

function closeModal() {
  return (modal.style.display = "none");
}
function openModal() {
  return (modal.style.display = "block");
}
