let btn = document.getElementById("trial-btn");
btn.addEventListener("click", btnHandler);

function btnHandler() {
  let firstname = document.getElementById("name-first").value;
  let lastname = document.getElementById("name-last").value;
  let email = document.getElementById("email").value;
  let pw = document.getElementById("password").value;
  let char = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

  if (firstname.length < 1) {
    document.getElementById("invalid-first").innerHTML =
      "First Name cannot be empty";
  }
  if (lastname.length < 1) {
    document.getElementById("invalid-last").innerHTML =
      "Last Name cannot be empty";
  }
  if (email.length < 1 || char.test(email) == false) {
    document.getElementById("invalid-email").innerHTML =
      "Looks like this is not an email";
  }

  if (pw.length == 0) {
    document.getElementById("invalid-pw").innerHTML =
      "Password cannot be empty";
  } else if (pw.length < 15) {
    document.getElementById("invalid-pw").innerHTML =
      "Password must be a minimum of 15 characters";
  }
}
