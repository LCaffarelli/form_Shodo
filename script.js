const title = document.getElementById("title");
const body = document.getElementById("body");
const urlJsonPlaceholder = "https://jsonplaceholder.typicode.com/posts";

fetch(urlJsonPlaceholder, {
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

function handleForm(e) {
  alert(`Titre : ${title.value}\nCommentaire : ${body.value}`);
}
