const loginScreen = document.getElementById("login-screen");
const archive = document.getElementById("archive");
const input = document.getElementById("password-input");
const button = document.getElementById("access-btn");
const errorMessage = document.getElementById("error-message");

button.addEventListener("click", function () {

  const passwordValue = input.value.trim();
  const secret = atob("UFJPSkVDVDo6Q1JJTVNPTg==");
  if (passwordValue === secret) {

  errorMessage.classList.remove("error");
  errorMessage.classList.add("success");
  errorMessage.textContent = "ACCESS GRANTED";
  errorMessage.style.opacity = "1";

  input.classList.add("glow-success");

  input.value = "";
  button.disabled = true;

  setTimeout(function () {
    input.classList.remove("glow-success");
    loginScreen.style.display = "none";
    archive.style.display = "block";
  }, 1200);
  }

  else {
    errorMessage.textContent = "ACCESS DENIED";
    errorMessage.classList.remove("success");
    errorMessage.classList.add("error");
    errorMessage.style.opacity = "1";

    input.classList.add("shake");

    setTimeout(function () {
      input.classList.remove("shake");
    }, 300);
  }

});

input.addEventListener("input", function () {
  errorMessage.style.opacity = "0";
  errorMessage.textContent = "";
});

// =============================
// INTERNAL PERSONNEL WINDOW
// =============================

const personnelFolder = document.querySelector(".folder:not(.locked)");
const personnelWindow = document.getElementById("personnel-window");
const closeWindowBtn = document.getElementById("close-window");

if (personnelFolder && personnelWindow && closeWindowBtn) {
  personnelFolder.addEventListener("click", function () {
    personnelWindow.classList.remove("hidden");
  });

  closeWindowBtn.addEventListener("click", function () {
    personnelWindow.classList.add("hidden");
  });
}