const urlJsonPlaceholder = "https://jsonplaceholder.typicode.com/posts";

function handleForm(event) {
  const title = document.getElementById("title");
  const body = document.getElementById("body");

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
    .then((response) => {
      console.log(response);
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      } else {
        return response.json();
      }
    })
    .then((json) => alert(`Titre : ${json.title}\nCommentaire : ${json.body}`))
    .catch((err) => alert("Error"));

  event.preventDefault();
}
