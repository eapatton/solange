const API_BASE = "/api/v1";
const moodPosts = document.getElementById("moodInfo");
const moodId = window.location.pathname.split("/")[2];
const addButton = document.getElementById("addBtn");

// select the mood
function getMoodPosts() {
  fetch(`${API_BASE}/moods/${moodId}`)
    .then((stream) => stream.json())
    .then((res) => render(res))
    .catch((err) => console.log(err));
}

getMoodPosts();

function render(moodsObject) {
  const postsTemplates = moodsObject.posts.map(getPostsTemplate).join("");
  moodPosts.innerHTML = postsTemplates;
}

function getPostsTemplate(post) {
  return `
        <div class="col-md-4 mb-4 p-4">
        <div id="${post._id}" class="card  shadow-lg p-3 mb-5 rounded">
          <img src="${post.image}" class="card-img-top" alt="${post.title}" />
          <div class="card-body">
            <h5 class="card-title">
              ${post.title}
            </h5>
            <p class="card-text">${post.content}</p>
            <p class="card-text">${post.link}</p>
            <a href="/moods/${moodId}/posts/${post._id}" class="btn btn-sm btn-dark float-right">Edit</a>
            <button onclick="deletePost(event)" id="deleteBtn" class="btn btn-sm btn-outline-light delete-post float-right mr-2" type="button">Delete</button>
          </div>
        </div>
      </div>
        `;
}

function deletePost(event) {
  const postId = event.target.parentNode.parentNode.id;
  console.log("Deleting Post ID = ", postId);

  fetch(`${API_BASE}/moods/${moodId}/posts/${postId}`, {
    method: "DELETE",
  })
    .then((stream) => stream.json())
    .then((res) => {
      console.log(res);
      // Rerender with updated mood page
      console.log("setting the mood");
      render(res);
    })
    .catch((err) => console.log(err));
}

addButton.addEventListener(
  "click",

  (event) => {
    console.log("clicked");
    window.location = `/moods/${moodId}/add`;
  }
);

// switch between modal
$(document).on("click", "#switchToLogin", function () {
  $("#signUpModal").modal("hide");
  $("#loginModal").modal("show");
});

$(document).on("click", "#switchToSignUp", function () {
  $("#loginModal").modal("hide");
  $("#signUpModal").modal("show");
});

$(document).on("click", "#switchToLogin", function () {
  $("#signUpModal").modal("hide");
  $("#loginModal").modal("show");
});
