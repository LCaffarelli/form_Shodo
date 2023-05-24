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
  let error = checkSize();
  error += checkBlank();
  if (error) {
    alert(error);
  }
}
function checkSize() {
  let error = "";
  if (title.value.trim().length < 3) {
    error += "Votre titre doit faire plus de 2 caractères\n";
  }
  if (title.value.trim().length > 50) {
    error += "Votre titre doit faire moins de 50 caractères\n";
  }
  if (body.value.trim().length < 1) {
    error += "Votre commentaire doit faire plus de 1 caractère\n";
  }
  if (body.value.trim().length > 250) {
    error += "Votre commentaire doit faire moins de 250 caractères\n";
  }
  return error;
}
function checkBlank() {
  let error = "";
  if (!title.value || !body.value) {
    error += "veuillez remplir tous les champs";
  } else {
    error += `Titre : ${title.value}\nCommentaire:${body.value}`;
  }
  return error;
}
