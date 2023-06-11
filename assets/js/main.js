// =================== Menu ===================
const navMenu = document.querySelector(".navbar");
const menu = document.querySelector(".bi-list");

function hideMenu() {
  navMenu.style.right = "-500px";
  menu.style.display = "block";
}
function showMenu() {
  navMenu.style.right = "0";
  menu.style.display = "none";
}

// =================== Login link ===================
const btnLogin = document.querySelector(".btn-login");

btnLogin.addEventListener("click", () => {
  const loginLink = document.createElement("a");
  loginLink.href = "./login.html";
  loginLink.click();
});
