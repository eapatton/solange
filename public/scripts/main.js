const API_BASE = "/api/v1";
//const moods = document.getElementById("moods");
// const profileId = window.location.pathname.split('/')[2];
//   // log in and go to profile page
const loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", handleLoginSubmit);

function handleLoginSubmit(event) {
  event.preventDefault();
  const username = document.getElementById("usernameLogin").value;
  const password = document.getElementById("passwordLogin").value;

  const userData = {
    username,
    password,
  };

  console.log(userData);

  fetch(`${API_BASE}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      credentials: "include", // This must be included in all API requests until user logs out
    },
    body: JSON.stringify(userData),
  })
    .then((stream) => stream.json())
    .then((res) => {
      console.log(res);
      if (res.status === 200) {
        window.location = "/profile";
      } else {
        console.log(res);
      }
    })
    .catch((err) => console.log(err));
}
////////////////////////////////////////

// sign up and go to profile
const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const userDataS = {
    username,
    password,
  };

  console.log(JSON.stringify(userDataS));

  fetch("/api/v1/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userDataS),
  })
    .then((stream) => stream.json())
    .then((res) => {
      if (res.status === 201) {
        window.location = "/profile";
      } else {
        console.log(res);
      }
    })
    .catch((err) => console.log(err));
});

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
