let Signup = document.getElementById("Signup");
Signup.addEventListener("click", () => {
  window.location.href = "Signup.html";
});

let form = document.querySelector("form");

function togglePass() {
  let passwordInput = document.getElementById("password");
  let toggleIcon = document.querySelector(".toggle-password");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    toggleIcon.textContent = "👁️";
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let email = document.getElementById("email").value;
  let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.com$/;

  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address");
    return;
  }

  let pass = document.getElementById("password").value;

  let pattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
  if (!pattern.test(pass)) {
    alert(
      "Password must be at least 8 characters, include one uppercase letter, one number, and one special character."
    );
    return;
  }

  let savedUser = JSON.parse(localStorage.getItem("user"));

  if (savedUser && savedUser.email === email && savedUser.password === pass) {
    alert("Login Successful ✅");
    window.location.href = "Overview.html";
  } else {
    alert("Email or Password is Wrong ❌");
  }
});
