console.log("post add js connected");
const API_BASE = "/api/v1";
const moodId = window.location.pathname.split("/")[2];

function updateForm(mood) {
  const titleInput = document.getElementById("title");
  const contentInput = document.getElementById("content");
  const imageInput = document.getElementById("image");
  const linkInput = document.getElementById("link");
}

document.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("clicked");
  const title = document.getElementById("title");
  const content = document.getElementById("content");
  const image = document.getElementById("image");
  const link = document.getElementById("link");

  const newPost = {
    title: title.value,
    content: content.value,
    image: image.value,
    link: link.value,
  };
  console.log("submit", newPost);

  // REDIRECT TO MOOD PAGE
  fetch(`${API_BASE}/moods/${moodId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPost),
  })
    .then((stream) => stream.json())
    .then((res) => {
      console.log(res);
      window.location = `/moods/${moodId}`;
    })
    .catch((err) => console.log(err));
});
