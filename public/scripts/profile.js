console.log("Profile Show JS...");

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
