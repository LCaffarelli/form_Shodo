const title = document.getElementById("title");
const body = document.getElementById("body");
const button = document.getElementById("saveButton");

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify({
    title: title.value,
    body: body.value,
    userId: 1,
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

button.addEventListener("click", checking);

function checking() {
  checkSize();
  checkBlank();
}
function checkSize() {
  if (title.value.trim().length < 3) {
    alert("Votre titre doit faire plus de 2 caractères");
  }
  if (title.value.trim().length > 50) {
    alert("Votre titre doit faire moins de 50 caractères");
  }
  if (body.value.trim().length < 1) {
    alert("Votre commentaire doit faire plus de 1 caractère");
  }
  if (body.value.trim().length > 250) {
    alert("Votre commentaire doit faire moins de 250 caractères");
  }
}
function checkBlank() {
  if (title.value.trim() === "" || body.value.trim() === "") {
    alert("veuillez remplir tous les champs");
  } else {
    alert(`Titre : ${title.value}\nCommentaire:${body.value}`);
  }
}
