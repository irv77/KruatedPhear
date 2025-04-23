gameSelected("new");

function gameSelected(gameType) {
  const gameOptions = document.querySelector(".sidebar").children;
  const gameChosen = document.querySelector("." + gameType);
  for (var i = 0; i < gameOptions.length; i++) { gameOptions[i].classList.remove("selected"); }
  gameChosen.classList.add("selected");

  if(document.querySelector(".games-container")) {document.querySelector(".games-container").remove();}
  renameWindow(gameType);
  if (gameType === "new") {createNewGames();}
  else {createGames(gameType);}
}

function renameWindow(gameType) {
    let windowName = gameType[0].toUpperCase() + gameType.slice(1);
    if (gameType === "apps") {document.title = windowName + " | Kruated Phear";}
    else if (gameType === "misc") {document.title = "HTML Games | Kruated Phear";}
    else if (gameType === "launchers") {document.title = "Game " + windowName + " | Kruated Phear";}
    else if (gameType === "series") {document.title = "Game " + windowName + " | Kruated Phear";}
    else {document.title = windowName + " Games" + " | Kruated Phear";}

    let gamesTitle = document.querySelector(".category-title");
    if (gameType === "apps") {gamesTitle.innerHTML = windowName;}
    else if (gameType === "html") {gamesTitle.innerHTML = "HTML Games";}
    else if (gameType === "launchers") {gamesTitle.innerHTML = "Game " + windowName;}
    else if (gameType === "series") {gamesTitle.innerHTML = "Game " + windowName;}
    else {gamesTitle.innerHTML = windowName + " Games";}
}

function createGames(gameType) {
    const container = document.querySelector(".flex-container");
    if (gameType === "all") {gameType = "";}
    fetch("/assets/json/links_all.json")
        .then((response) => response.json())
        .then((data) => sortGames(data));

    function sortGames(data) {
        let tileCount = 0;
        for (const gamesList of data.links) {
            const section = document.createElement("section");
            section.className = "games-container";
            for (const game of gamesList.games) {
                if (game[3].toUpperCase().indexOf(gameType.toUpperCase()) > -1) {
                    const link = document.createElement("a");
                    link.href = game[2];
                    link.className = "game-link";

                    const gameTile = document.createElement("div");
                    gameTile.className = "game-tile";

                    const icon = document.createElement("img");
                    icon.className = "game-icon";
                    icon.src = game[1];
                    icon.onerror = function() {this.src='/assets/images/error.png'}
                    icon.loading = "lazy";

                    const title = document.createElement("h1");
                    title.className = "game-title";
                    title.innerHTML = game[0];

                    const gameTag = document.createElement("div");
                    gameTag.className = game[3];

                    gameTile.appendChild(icon);
                    gameTile.appendChild(title);
                    gameTile.appendChild(gameTag);

                    link.appendChild(gameTile);
                    section.appendChild(link);
                    tileCount++;
                }
            }
            container.appendChild(section);
        }
        console.log("Generated " + tileCount + " " + gameType + " games.");
        startSearch();
    }
};

function createNewGames() {
    const container = document.querySelector(".flex-container");
    fetch("/assets/json/links_new.json")
        .then((response) => response.json())
        .then((data) => sortGames(data));

    function sortGames(data) {
        let tileCount = 0;
        for (const gamesList of data.links) {
            const section = document.createElement("section");
            section.className = "games-container";
            for (const game of gamesList.games) {
                const link = document.createElement("a");
                link.href = game[2];
                link.className = "game-link";

                const gameTile = document.createElement("div");
                gameTile.className = "game-tile";

                const icon = document.createElement("img");
                icon.className = "game-icon";
                icon.src = game[1];
                icon.onerror = function() {this.src='/assets/images/error.png'}
                icon.loading = "lazy";

                const title = document.createElement("h1");
                title.className = "game-title";
                title.innerHTML = game[0];

                const gameTag = document.createElement("div");
                gameTag.className = game[3];

                gameTile.appendChild(icon);
                gameTile.appendChild(title);
                gameTile.appendChild(gameTag);

                link.appendChild(gameTile);
                section.appendChild(link);
                tileCount++;
            }
            container.appendChild(section);
        }
        console.log("Generated " + tileCount + " new game tiles.");
        startSearch();
    }
};

function openRandomIframe() {
  const gameLinks = document.querySelectorAll('.game-link');
  const randomIndex = Math.floor(Math.random() * gameLinks.length);
  const randomLink = gameLinks[randomIndex];
  
  const url = randomLink.href;
  if (url.startsWith("http://") || url.startsWith("https://")) {
    // Check if there is an existing iframe and remove it along with the overlay
    window.open(url, '_self');
  } else {
    // The URL is not valid, so display an error message
    alert("Invalid URL: " + url);
  }
}

let createSearch = document.createElement('div');
let contentDiv = document.querySelector('.content');
createSearch.classList.add('searchbar');
createSearch.innerHTML = `
<div style="text-align: center;">
      <a onclick="startSearch()" style="position: relative; left: 4.5vw;"><svg xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
          class="search">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
          <path d="M21 21l-6 -6" />
        </svg></a>
      <input type="text" style="text-align: center;" id="mySearch" onload="startSearch()" onkeyup="startSearch()"
        placeholder="Search for games..." title="Search">
      <a onclick="openRandomIframe()" style="position: relative; left: -4.5vw;"><svg xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
          class="random">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M3 3m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
          <circle cx="8.5" cy="8.5" r=".5" fill="currentColor" />
          <circle cx="15.5" cy="8.5" r=".5" fill="currentColor" />
          <circle cx="15.5" cy="15.5" r=".5" fill="currentColor" />
          <circle cx="8.5" cy="15.5" r=".5" fill="currentColor" />
          <circle cx="12" cy="12" r=".5" fill="currentColor" />
        </svg></a></a>
    </div>
`;
document.body.insertBefore(createSearch, contentDiv);

if (document.querySelector('.searchbar')) {
window.addEventListener("scroll", function () {
  var searchbar = document.querySelector(".searchbar");
  searchbar.classList.toggle("scrolled", window.scrollY > 0);
});
};

const startSearch = () => {
  const input = document.getElementById("mySearch");
  const filter = input.value.toUpperCase();
  const ul = document.getElementById("search");
  const li = ul.getElementsByTagName("a");

  for (let i = 0; i < li.length; i++) {
    const a = li[i].getElementsByTagName("h1")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
};

function sortGames(sort) {
  const filter = sort.toUpperCase();
  const ul = document.getElementById("search");
  const lia = ul.getElementsByTagName("a");
  const li = ul.getElementsByClassName("game-tile");

  const title = document.querySelector(".category-title");
  if (filter === "APPS") { title.innerHTML = sort; } 
  else if (filter === "LAUNCHERS") { title.innerHTML = "Game " + sort; } 
  else { title.innerHTML = sort + " Games"; }

  for (let i = 0; i < li.length; i++) {
    const a = li[i].lastChild.className;
    lia[i].style.display = "";
    if (filter === "ALL") {
    } else {
      if (a.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        lia[i].style.display = "none";
      }
    }
  }
  console.log(sort + " Games Selected!")
}