function message() {
  alert("This is a pseudo login form.");
}

const eyeImg_l = document.querySelector("#eyeImg-l");
const eyeImg_r = document.querySelector("#eyeImg-r");

function showPWD(icon) {
  let showPass = icon.parentElement.previousElementSibling.children[0];

  if (icon.getAttribute("src") === "eye-solid.svg") {
    showPass.setAttribute("type", "text");
    icon.setAttribute("src", "eye-slash-solid.svg");
  } else {
    showPass.setAttribute("type", "password");
    icon.setAttribute("src", "eye-solid.svg");
  }
}

eyeImg_l.addEventListener("click", () => {
  showPWD(eyeImg_l);
});

eyeImg_r.addEventListener("click", () => {
  showPWD(eyeImg_r);
});

const loginButton = document.getElementById("loginButton");
const registerButton = document.getElementById("registerButton");

loginButton.onclick = function () {
  document.querySelector("#flipper").classList.toggle("flip");
};

registerButton.onclick = function () {
  document.querySelector("#flipper").classList.toggle("flip");
};
