console.log("Register JS...");
const btn = document.querySelector(".btnSubmit");

// Submit Event Listener
btn.addEventListener("click", handleSignupSubmit);

// Handle Submit
function handleSignupSubmit(event) {
  event.preventDefault();

  const username = document.getElementById("uname").value;
  const password = document.getElementById("password").value;

  const userData = {
    username,
    password,
  };
  console.log(userData);

  // SUBMIT DATA TO SERVER
  console.log("Submitting User Data ---->", userData);

  fetch("/api/v1/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  })
    .then((stream) => stream.json())
    .then((res) => {
      if (res.status === 201) {
        console.log(res);
        window.location = "/";
      } else {
        console.log(res);
      }
    })
    .catch((err) => console.log(err));
}
