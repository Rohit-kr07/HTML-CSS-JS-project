const user = JSON.parse(localStorage.getItem("user"));
const loggedInUser = sessionStorage.getItem("loggedInUser");

if (!user || !loggedInUser) {
  window.location.href = "Login.html";
} else {
  const firstName = user.fname || "";
  const lastName = user.lname || "";
  const fullName = `${firstName} ${lastName}`.trim() || "User";
  const logo = (firstName.charAt(0) || "U").toUpperCase();

  document.getElementById("inner-name").textContent = fullName;
  document.getElementById("inner-email").textContent = user.email || "";
  document.querySelector(".user-logo").textContent = logo;
}