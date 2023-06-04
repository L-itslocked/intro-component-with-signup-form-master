let btn = document.getElementById("trial-btn");

btn.addEventListener("click", btnHandler);

function btnHandler() {
  let firstname = document.getElementById("name-first").value;
  let lastname = document.getElementById("name-last").value;
  let email = document.getElementById("email").value;
  let pw = document.getElementById("password").value;

  if (firstname.length < 1) {
    document.getElementById("invalid-first").innerHTML =
      "First Name cannot be empty";
  }
  if (lastname.length < 1) {
    document.getElementById("invalid-last").innerHTML =
      "Last Name cannot be empty";
  }
  if (email.length < 1) {
    document.getElementById("invalid-email").innerHTML =
      "Looks like this is not an email";
  }
  if (pw.length <= 1) {
    document.getElementById("invalid-pw").innerHTML =
      "Password cannot be empty";
  }
}
