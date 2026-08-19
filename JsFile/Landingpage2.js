let Login = document.getElementById("Login");
Login.addEventListener('click', ()=>{
    window.location.href="Login.html"
});

let Signup = document.getElementById("Signup");
Signup.addEventListener('click', ()=>{
    window.location.href="Signup.html"
});



let FooterLogin = document.getElementById("Loginn");
FooterLogin.addEventListener('click', ()=>{
    window.location.href="Login.html"
});

let FooterSignup = document.getElementById("Signupp");
FooterSignup.addEventListener('click', ()=>{
    window.location.href="Signup.html"
});


let sign = document.getElementById("TextSignup");
sign.addEventListener('click', ()=>{
    window.location.href="Signup.html"
});

let already = document.getElementById("already");
already.addEventListener('click', ()=>{
    window.location.href="Login.html"
    
});

//ye uper wala about or services hai

let Idabout = document.getElementById("about");   // button ka id h ye
let about = document.getElementById("justabout"); // jis section mei jana h wo id h

Idabout.addEventListener('click', () => {
    about.scrollIntoView({ 
        behavior: "smooth",  // smooth scrolling
        block: "start"       // section top se start hota h
    });
});


let service = document.getElementById("Services"); 
let section = document.getElementById("section"); 

service.addEventListener('click', () => {
    section.scrollIntoView({ 
        behavior: "smooth",  
        block: "start"       
    });
});

// footer wala about or services button

let ab = document.getElementById("ab"); 
let ab2 = document.getElementById("justabout"); 

ab.addEventListener('click', () => {
    ab2.scrollIntoView({ 
        behavior: "smooth", 
        block: "start"       
    });
});


let se = document.getElementById("se"); 
let se2 = document.getElementById("section"); 

service.addEventListener('click', () => {
    section.scrollIntoView({ 
        behavior: "smooth",  
        block: "start"       
    });
});


let themeBtn = document.getElementById("Theme");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");

  document.body.classList.contains("dark-theme");
    
});


let t = document.getElementById("T");

t.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");

  document.body.classList.contains("dark-theme");
    
});

// slider part

const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const dots = document.querySelectorAll(".dot");

let currentIndex = 0;

// Function to show a slide
function showSlide(index) {
  if (index < 0) {
    currentIndex = slides.length - 1;
  } else if (index >= slides.length) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }

  // Hide all slides
  slides.forEach(slide => slide.style.display = "none");

  // Remove active from all dots
  dots.forEach(dot => dot.classList.remove("active"));

  // Show current slide and activate dot
  slides[currentIndex].style.display = "block";
  dots[currentIndex].classList.add("active");
}

// Next button
nextBtn.addEventListener("click", () => {
  showSlide(currentIndex + 1);
});

// Prev button
prevBtn.addEventListener("click", () => {
  showSlide(currentIndex - 1);
});

// Dot navigation
dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    showSlide(i);
  });
});


showSlide(currentIndex);

