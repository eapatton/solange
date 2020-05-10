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
  //same origin policy
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

fetch("/api/v1/verify", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    credentials: "include",
  },
})
  .then((stream) => stream.json())
  .then((res) => getSession(res))
  .catch((err) => console.log(err));

function getSession(session) {
  if (session.status === 200) {
    console.log(session.currentUser);
    console.log(session.currentUser.username);
    console.log(session.currentUser._id);
    $("#login").empty();
    $("#login").html(
      `Hi ${session.currentUser.username} &nbsp <button id="logoutbutton" class="btn btn-light btn-light" type="submit">Logout</button>`
    );
  } else {
    currentUser = null;
  }
  updateMenu();
  // const btn = document.getElementById("logoutBtn");
  // btn.addEventListener("click", handleLogoutSubmit);
}

function handleLogoutSubmit(event) {
  event.preventDefault();
  fetch("/api/v1/logout", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      credentials: "include",
    },
  })
    .then((stream) => stream.json())
    .then((res) => {
      if (res.status === 200) {
        window.location = "/";
      } else {
        console.log(res);
      }
    })
    .catch((err) => console.log(err));
}

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
