// =================== Menu ===================
const navMenu = document.querySelector(".navbar");

function hideMenu() {
  navMenu.style.right = "-500px";
}
function showMenu() {
  navMenu.style.right = "0";
}

// =================== Login link ===================
const btnLogin = document.querySelector(".btn-login");

btnLogin.addEventListener("click", () => {
  const loginLink = document.createElement("a");
  loginLink.href = "./login.html";
  loginLink.click();
});
