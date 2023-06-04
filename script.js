let btn = document.getElementById("trial-btn");

btn.addEventListener("click", btnHandler);





function btnHandler() {
  console.log("clicked");
  let firstname = document.getElementById("name-first").value;
  let lastname = document.getElementById("name-last").value;
  let email = document.getElementById("email").value;
  let pw = document.getElementById("password").value;

  if (firstname == "") {
    console.log("All fields must be filled out");
  }
  if (lastname == "") {
    console.log("Last Name must be filled out");
  }
  if (email == "") {
    console.log("invalid email");
  }
  if (pw == "") {
    console.log("Please create a password");
  } else {
    console.log("form has been completed");
  }
}
