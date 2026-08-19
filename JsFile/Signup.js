let form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let fname = document.getElementById("fname").value;
  let lname = document.getElementById("lname").value;
  let email = document.getElementById("email").value;
  let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.com$/;

  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address");
    return;
  }

  let password = document.getElementById("password").value;
  let cpassword = document.getElementById("cpassword").value;

  let pattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

  if (!pattern.test(password)) {
    alert(
      "Password must be at least 8 characters long, include one uppercase letter, one number, and one special character."
    );
    return;
  }

  if (password !== cpassword) {
    alert("Passwords do not match");
    return;
  }

  let user = {
    fname: fname,
    lname: lname,
    email: email,
    password: password,
    cpassword: cpassword,
  };

  localStorage.setItem("user", JSON.stringify(user));
  console.log(user);
  alert("Account is successfully created✅");

  window.location.href = "Login.html";
});

function togglePass() {
  let passwordInput = document.getElementById("password");
  let toggleIcon = document.querySelector(".toggle-password");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    toggleIcon.textContent = "👁️";
  }
}
