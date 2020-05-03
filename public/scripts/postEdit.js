console.log("connected posts JS");
console.log("sanity check");
const API_BASE = "/api/v1";
const posts = document.getElementById("posts");
const postForm = document.getElementById("editPost");
const postId = window.location.pathname.split("/")[4];
const moodId = window.location.pathname.split("/")[2];
const saveButton = document.getElementById("save");
// get one post
fetch(`${API_BASE}/moods/${moodId}`)
  .then((stream) => stream.json())
  .then((res) => updateForm(res))
  .catch((err) => console.log(err));

// update form values
function updateForm(mood) {
  const titleInput = document.getElementById("title");
  const contentInput = document.getElementById("content");
  const imageInput = document.getElementById("image");
  const linkInput = document.getElementById("link");

  for (let i = 0; i < mood.posts.length; i++) {
    if (postId === mood.posts[i]._id) {
      console.log("mood = ", mood);

      titleInput.value = mood.posts[i].title;
      contentInput.value = mood.posts[i].content;
      imageInput.value = mood.posts[i].image;
      linkInput.value = mood.posts[i].link;
    }
  }
}
// Listen/Handle New Post Submit
postForm.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("post form clicked");
  const title = document.getElementById("title");
  const content = document.getElementById("content");
  const image = document.getElementById("image");
  const link = document.getElementById("link");

  const updatedPost = {
    title: title.value,
    content: content.value,
    image: image.value,
    link: link.value,
  };
  console.log("submit", updatedPost);

  // REDIRECT TO MOOD PAGE
  fetch(`${API_BASE}/moods/${moodId}/posts/${postId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedPost),
  })
    .then((stream) => stream.json())
    .then((res) => {
      console.log(res);
      window.location = `/moods/${moodId}`;
    })
    .catch((err) => console.log(err));
});
