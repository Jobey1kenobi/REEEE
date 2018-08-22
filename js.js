// Variables
var loginBtn = document.getElementById('loginBtn');
var loginForm = document.getElementById('loginForm');
var login = document.getElementById('login');
var signupBtn = document.getElementById('signUpBtn');
var signUpForm = document.getElementById('signupForm');
var signup = document.getElementById('signUpFormBtn');

// Click Listeners
loginBtn.addEventListener("click", showLoginForm);
signupBtn.addEventListener("click", showSignUpForm);
login.addEventListener("click", loggedIn);
signup.addEventListener("click", signUp);

// Functions
function showLoginForm(){
    if (signUpForm.classList.contains("hidden")) {
        loginForm.classList.toggle("hidden");
    } else {
      alert("The Signup form is already open!");  
    }
}
function showSignUpForm(){
    if (loginForm.classList.contains("hidden")) {
        signUpForm.classList.toggle("hidden");
    } else {
      alert("The Login form is already open!");  
    }
    
}
function loggedIn() {
    alert("Logged In (Not really)");
}
function signUp() {
    alert("Thank you for signing up.");
}