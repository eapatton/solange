console.log("Login JS...");
const btnLogin = document.getElementById("loginbutton");

// Submit Event Listener
btnLogin.addEventListener("click", handleLoginSubmit);

// Handle Submit
function handleLoginSubmit(event) {
  event.preventDefault();
  const username = document.getElementById("userNameInputS").value;
  const password = document.getElementById("passwordInputS").value;

  const userData = {
    username,
    password,
  };

  console.log("Submitting User Data ---->", userData);

  fetch("/api/v1/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      credentials: "include",
    },
    body: JSON.stringify(userData),
  })
    .then((stream) => stream.json())
    .then((res) => {
      if (res.status === 200) {
        window.location = "/profile";
      } else {
        console.log(res);
      }
    })
    .catch((err) => console.log(err));
}
