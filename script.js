const username = document.getElementById("username");
const usernameLabel = document.getElementById("usernameLabel");
username.addEventListener("input", () => {
  console.log(username.value);
  if (username.value) {
    if (usernameLabel.classList.contains("has-value")) return;
    else usernameLabel.classList.add("has-value");
  } else {
    usernameLabel.classList.remove("has-value");
  }
});
const password = document.getElementById("password");
const passwordLabel = document.getElementById("passwordLabel");
password.addEventListener("input", () => {
  console.log(password.value);
  if (password.value) {
    if (passwordLabel.classList.contains("has-value")) return;
    else passwordLabel.classList.add("has-value");
  } else {
    passwordLabel.classList.remove("has-value");
  }
});
