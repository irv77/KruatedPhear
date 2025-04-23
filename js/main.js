const style = document.createElement("style");
style.textContent = `
  ::-webkit-scrollbar {
    width: 0.5vw;
    background: #000;
    border: 0.1vw solid var(--theme);
  }

  ::-webkit-scrollbar-corner {
    background: var(--background-secondary);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--text);
    -webkit-border-radius: 1ex;
  }

  ::-webkit-scrollbar-thumb:hover {
    cursor: grab;
  }

  ::-webkit-scrollbar-thumb:active {
    cursor: grabbing;
  }
`;
document.head.appendChild(style);

let loading = document.getElementById("preloader");
if (loading) { 
	document.body.classList.add("scrolling");
	loading.innerHTML = `
    <div>
      <div class="weblogo"></div>
	  <div class="info" style="align-items: center;">
      	<div class="loadwheel"></div><h4 class="loading">Loading...</h4>
	  </div>
    </div>
	`;
}

window.addEventListener("load", function () {
  if (loading) {
    loading.style.display = "none";
    document.querySelector("body").classList.remove('scrolling');
    console.log("Loaded!");
  }
})

window.addEventListener('DOMContentLoaded', function () {
  var navbar = document.createElement('div');
  navbar.id = 'navbar';
  navbar.innerHTML = `
  <style>
      /* Navbar CSS */
#navbar {
	list-style-type: none;
	position: fixed;
	top: 0;
	width: 100%;
	z-index: 998;
}

#navbar #top-bar {
	background: rgba(0, 0, 0, 0.85) url(/assets/images/overlays/divider.png) no-repeat center;
	border: 0.1vw solid var(--theme);
	border-right: 0;
	padding: 2vh 7.5vh;
}

#navbar #top-bar nav ul {
	display: flex;
	justify-content: center;
	margin: 0;
	padding: 0;
}

#navbar #top-bar nav ul li {
	list-style-type: none;
	margin-left: 1.3%;
	margin-right: 1.3%;
}

#navbar #top-bar nav ul li a {
	color: var(--theme-secondary);
	display: flex;
	font-size: 2vw;
	font-weight: bold;
	text-decoration: none;
	transition: background-color 0.3s ease;
	text-shadow: 0 0 1vw;
}

.theme,
.setting {
	margin-left: 1%;
	margin-right: 1%;
	margin-top: 0.3vw;
	stroke: var(--theme-tertiary);
	width: 3.5vw;
}

path {
	transition: fill 0.3s ease;
}

.svg {
	margin-right: 1vh;
	stroke: var(--theme-secondary);
	vertical-align: top;
	width: 2vw;
}

#navbar #top-bar nav ul li a:hover {
	color: var(--text-secondary);
}

.hvuncen a:hover path,
.theme:hover path,
.setting:hover path {
	stroke: var(--text-secondary);
}

.logo {
	cursor: pointer;
	display: block;
	width: fit-content;
}

.navlogo {
	transition: transform 0.1s;
	width: 40vw;
	filter: var(--filter);
    -webkit-filter: var(--filter);
}

.navlogo:hover {
	transform: scale(1.025);
}

.navloader {
	z-index: 9999;
}

.hvuncen {
	cursor: pointer;
	height: fit-content;
	margin-top: 1%;
	z-index: 9999;
}

.hvuncen:before,
.navloader:before {
	background: var(--theme-secondary);
	bottom: 0;
	content: "";
	height: 0.25vh;
	left: 50%;
	position: absolute;
	right: 50%;
	transition-duration: 0.3s;
	transition-property: left, right;
	transition-timing-function: ease-out;
	z-index: -1;
}

.hvuncen:active:before,
.hvuncen:focus:before,
.hvuncen:hover:before,
.navloader:active:before,
.navloader:focus:before,
.navloader:hover:before {
	left: 0;
	right: 0;
}

.copy {
	width: 100%;
	text-align: center;
}

.copy p {
	background: rgba(0, 0, 0, 0.55);
	box-shadow: 0 -1vh 2vh 0.5vh rgba(0, 0, 0, 0.55);
	color: var(--theme);
	text-shadow: var(--theme) 0 0 10px;
	font-family: "CopyR";
	font-size: 1.3vw;
	margin: 0;
	padding: 0.5vh 0 1vh;
	position: absolute;
	width: 100%;
	z-index: 2;
}

/* Mobile Navbar CSS */

#mobile-options {
	align-items: center;
	display: none;
	justify-content: center;
}

#mobile-options .navlogo {
	width: 75vw;
}

#hamburger-icon {
	cursor: pointer;
	position: absolute;
	right: 3vw;
}

#hamburger-icon div {
	background-color: var(--text);
	height: 0.5vw;
	margin: 0.75vw 0;
	transition: 0.4s;
	width: 5vw;
}

.open .bar1 {
	transform: rotate(-45deg) translate(-1vw, 1vw);
	webkit-transform: rotate(-45deg) translate(-1vw, 1vw);
}

.open .bar2 {
	opacity: 0;
}

.open .bar3 {
	transform: rotate(45deg) translate(-0.75vw, -0.75vw);
	webkit-transform: rotate(45deg) translate(-0.75vw, -0.75vw);
}

.open.mobile-menu {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

.mobile-menu .hvuncen {
	height: 5vh;
	margin-bottom: 7vh;
}

.mobile-menu .hvuncen:before {
	margin: 0;
}

.mobile-menu {
	background: var(--background-secondary) url(/assets/images/overlays/overlay-small.png) no-repeat;
	background-size: cover;
	display: none;
	height: 90vh;
	left: 0;
	position: absolute;
	top: 0;
	width: 100%;
	padding: 10vh 0 0;
	z-index: -1;
}

.mobile-menu li a {
	color: var(--theme-secondary);
	font-size: 6vh;
	font-weight: bold;
	text-decoration: none;
	transition: background-color 0.3s ease;
	text-shadow: 0 0 1vw;
}

.mobile-menu li a:hover {
	color: var(--text-secondary);
}

.mobile-menu li {
	list-style-type: none;
	margin-bottom: 3vw;
}

.mobile-menu .svg {
	width: 6.5vh;
}

/* Scaling CSS */

@media only screen and (max-width: 900px) {
	div nav {
		display: none;
	}

	#navbar #top-bar {
		border-right: 0.1vw solid var(--theme);
	}

	#mobile-options {
		display: flex;
	}

	.copy p {
		font-size: 2.5vw;
		padding-bottom: 1.5vh;
	}
}

@media only screen and (max-height: 550px) {
	div nav {
		display: none;
	}

	#navbar #top-bar {
		border-right: 0.1vw solid var(--theme);
	}

	#mobile-options {
		display: flex;
	}

	.copy p {
		font-size: 2.5vw;
		padding-bottom: 1.5vh;
	}
}

/* Misc CSS */

.scrolling {
	height: 100%;
	overflow: hidden;
}
    </style>
    <div id="top-bar">
    <nav>
      <ul>
        <li class="navloader"><a href="/pages/themes.html">
          <svg xmlns="http://www.w3.org/2000/svg" class="theme" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M3 21v-4a4 4 0 1 1 4 4h-4"></path><path d="M21 3a16 16 0 0 0 -12.8 10.2"></path><path d="M21 3a16 16 0 0 1 -10.2 12.8"></path><path d="M10.6 9a9 9 0 0 1 4.4 4.4"></path></svg>
        </a></li>
        <li class="hvuncen"><a href="/index.html">
        <svg xmlns="http://www.w3.org/2000/svg" class="svg" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M5 12l-2 0l9 -9l9 9l-2 0"></path><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"></path><path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6"></path>
        </svg><span> Home</span></a></li>
        <li class="hvuncen"><a href="/pages/about.html">
        <svg xmlns="http://www.w3.org/2000/svg" class="svg" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path><path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
        </svg><span>About</span></a></li>
        <li><a onclick="location.href=&#39;https://discord.gg/xuu8TnSY4b&#39;" draggable="false" class="logo">
          <img src="/assets/images/logos/navbar-logo.png" class="navlogo">
          </a></li>
        <li class="hvuncen"><a href="/pages/games.html">
        <svg xmlns="http://www.w3.org/2000/svg" class="svg" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M2 6m0 2a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-16a2 2 0 0 1 -2 -2z"></path><path d="M6 12h4m-2 -2v4"></path><path d="M15 11l0 .01"></path><path d="M18 13l0 .01"></path>
        </svg><span> Games</span></a></li>
        <li class="hvuncen"><a href="/pages/extras.html"><svg xmlns="http://www.w3.org/2000/svg" class="svg" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M20 4v8"></path><path d="M16 4.5v7"></path><path d="M12 5v16"></path><path d="M8 5.5v5"></path><path d="M4 6v4"></path><path d="M20 8h-16"></path>
        </svg><span> Extras</span></a></li>
        <li class="navloader"><a href="/pages/settings.html">
        <svg xmlns="http://www.w3.org/2000/svg" class="setting" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <path d="M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path><path d="M6 4v4"></path><path d="M6 12v8"></path><path d="M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path><path d="M12 4v10"></path><path d="M12 18v2"></path><path d="M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path><path d="M18 4v1"></path><path d="M18 9v11"></path>
        </svg>
      </a></li>
      </ul>
    </nav>
    <div id="mobile-options">
    <img src="/assets/images/logos/navbar-logo.png" class="navlogo">
    <div id="hamburger-icon" onclick="toggleMobileMenu(this)">
      <div class="bar1"></div>
      <div class="bar2"></div>
      <div class="bar3"></div>
    </div>
    <ul class="mobile-menu">
        <li class="hvuncen"><a href="/index.html">
        <svg xmlns="http://www.w3.org/2000/svg" class="svg" viewBox="0 0 24 24" stroke="#f2cf09" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M5 12l-2 0l9 -9l9 9l-2 0"></path><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"></path><path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6"></path>
        </svg><span> Home</span></a></li>
        <li class="hvuncen"><a href="/pages/about.html">
        <svg xmlns="http://www.w3.org/2000/svg" class="svg" viewBox="0 0 24 24" stroke="#f2cf09" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path><path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
        </svg><span> About</span></a></li>
        <li class="hvuncen"><a href="/pages/games.html">
        <svg xmlns="http://www.w3.org/2000/svg" class="svg" viewBox="0 0 24 24" stroke="#f2cf09" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M2 6m0 2a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-16a2 2 0 0 1 -2 -2z"></path><path d="M6 12h4m-2 -2v4"></path><path d="M15 11l0 .01"></path><path d="M18 13l0 .01"></path>
        </svg><span> Games</span></a></li>
        <li class="hvuncen"><a href="/pages/themes.html">
        <svg xmlns="http://www.w3.org/2000/svg" class="svg" viewBox="0 0 24 24" stroke="#f2cf09" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <path d="M3 21v-4a4 4 0 1 1 4 4h-4"></path><path d="M21 3a16 16 0 0 0 -12.8 10.2"></path><path d="M21 3a16 16 0 0 1 -10.2 12.8"></path><path d="M10.6 9a9 9 0 0 1 4.4 4.4"></path></svg><span> Themes</span>
      </a></li>
        <li class="hvuncen"><a href="/pages/extras.html">
        <svg xmlns="http://www.w3.org/2000/svg" class="svg" viewBox="0 0 24 24" stroke="#f2cf09" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M20 4v8"></path><path d="M16 4.5v7"></path><path d="M12 5v16"></path><path d="M8 5.5v5"></path><path d="M4 6v4"></path><path d="M20 8h-16"></path>
        </svg><span> Extras</span></a></li>
        <li class="hvuncen"><a href="/pages/settings.html">
        <svg xmlns="http://www.w3.org/2000/svg" class="svg" viewBox="0 0 24 24" stroke="#f2cf09" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <path d="M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path><path d="M6 4v4"></path><path d="M6 12v8"></path><path d="M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path><path d="M12 4v10"></path><path d="M12 18v2"></path><path d="M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path><path d="M18 4v1"></path><path d="M18 9v11"></path>
        </svg><span> Settings</span>
      </a></li>
      </ul>
    </div>
    </div>
  `;

  document.body.insertBefore(navbar, document.body.firstChild);

  var navigationLinks = navbar.getElementsByTagName('a');

  for (var i = 0; i < navigationLinks.length; i++) {
    navigationLinks[i].addEventListener('click', function (event) {
      var target = event.target.getAttribute('href');
      console.log('Navigating to:', target);
      // Add your navigation logic here
    });
  }

  document.body.style.marginTop = "8vh";
});

// Create a new <p> element
var copyrightParagraph = document.createElement("p");
var copyrightContainer = document.querySelector(".copy");

copyrightParagraph.textContent = "© Vulen Corp 2025. By using this site/service, you agree to the use of cookies";
copyrightContainer.appendChild(copyrightParagraph);

// FAQ Dropdowns
const questions = document.querySelectorAll('.question')

questions.forEach(function (question) {
  question.addEventListener('click', function () {
    question.classList.toggle('open')
  })
})

// Mobile Options
function toggleMobileMenu(icon) {
  let menu = document.querySelector(".mobile-menu")
  icon.classList.toggle('open');
  menu.classList.toggle('open');
  document.querySelector("body").classList.toggle('scrolling');
}

// Share Key
const pressedKeys = {};
document.addEventListener('keydown', event => {
  pressedKeys[event.key] = true;

  if (pressedKeys['-'] && pressedKeys['=']) {
    try {
      navigator.share({ title: "", url: "" });
      console.log("Succesfully Shared");
    } catch (err) {
      console.error("Share failed:", err.message);
    }
    delete pressedKeys[event.key];
  }
});

document.addEventListener('keyup', (event) => {
  delete pressedKeys[event.key];
});