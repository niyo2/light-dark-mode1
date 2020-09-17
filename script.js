const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById("nav");
const toggleIcon = document.getElementById("toggle-icon");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const textBox = document.getElementById("text-box");

// Dark or Light  Images
function imageMode(color) {
  image1.src= `img/undraw_Around_the_world_re_${color}.svg`;
  image2.src= `img/undraw_online_dating_${color}.svg`;
  image3.src= `img/undraw_Raining_re_${color}.svg`;

}

function toggleDarkLightMode(isDark){
  nav.style.backgroundColor = isDark ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)';
  textBox.style.backgroundColor = isDark ? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)';
  toggleIcon.children[0].textContent = isDark ? "Dark Mode" : "Light Mode";
  isDark ? toggleIcon.children[1].classList.replace("fa-sun", "fa-moon") :
    toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");
  isDark ? imageMode("light") : imageMode("dark");

}

/*
// Dark mode Styles
function darkMode() {
  nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
  textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
  toggleIcon.children[0].textContent = "Dark Mode";
  toggleIcon.children[1].classList.replace("fa-sun", "fa-moon");
  imageMode("dark");
  
}

// Light Mode Styles
function lightMode() {
  nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
  textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)';
  toggleIcon.children[0].textContent = "Light Mode";
  toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");
  imageMode("light");
}
*/

// switch Theme Dynamically
function switchTheme (event) {
  if(event.target.checked){
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
      toggleDarkLightMode(true);
  }else{
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
      toggleDarkLightMode(false);
  }
}

// event Listener
toggleSwitch.addEventListener("change", switchTheme);

// Check local Storage For Theme
const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", "currentheme");

  if (currentTheme == "dark"){
    toggleSwitch.checked = true;
    toggleDarkLightMode(true);
  }
}



