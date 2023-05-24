const title = document.getElementById("title");
const body = document.getElementById("body");
const button = document.getElementById("saveButton");

const comment = fetch("https://jsonplaceholder.typicode.com/posts", {
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

console.log(comment);
button.addEventListener("click", success);

function success() {
  alert(`Title: ${title.value}\nBody:\n"${body.value}"`);
}
