// Event listener for panic address change
const panicID = document.getElementById('panic-address');

if (panicID) {
panicID.addEventListener('change', () => {
  localStorage.setItem('panicAddress', panicID.value);
});
}

// Set saved panic address if available
const savedPanicAddress = localStorage.getItem('panicAddress');
if (savedPanicAddress) {
  panicID.value = savedPanicAddress;
}

// About Blank
if (document.getElementById("url-target")) {
const urlInput = document.getElementById("url-target");
      const urlObject = new URL(window.location.href);

      document.getElementById("create").onclick = function () {
        let url = urlInput.value;

        if (
          url.substring(0, 8) !== "https://" &&
          url.substring(0, 7) !== "http://"
        ) {
          url = "https://" + url.split("https://").pop();
        } else if (url.substring(0, 7) === "http://") {
          url = "https://" + url.split("http://").pop();
        }

        const newWindow = window.open();
        newWindow.document.body.style.margin = "0";
        newWindow.document.body.style.height = "100vh";

        const iframe = newWindow.document.createElement("iframe");
        iframe.style.border = "none";
        iframe.style.width = "100%";
        iframe.style.height = "100%";
        iframe.style.margin = "0";
        iframe.referrerpolicy = "no-referrer";
        iframe.allow = "fullscreen";
        iframe.src = url;

        newWindow.document.body.appendChild(iframe);
      };
}

// Cloak Preset Icons
const container = document.getElementById("buttons-container");

if (container) {
fetch("/assets/json/cloak.json").then((response)=>response.json()).then((data)=>{
  data.forEach((link)=>{
      const img = document.createElement("img");
      img.className = "presets";
      const faviconUrl = `https://www.google.com/s2/favicons?sz=64&domain=${link.favicon}`;
      img.src = link.favicon;
      img.onerror = ()=>{
          img.src = faviconUrl;
      }
      ;
      img.addEventListener("click", function() {
          setTitle(link.title);
          setFavicon(link.favicon);
      });
      container.appendChild(img);
  }
  );
  const img = document.createElement("img");
      img.className = "presets";
      const faviconUrl = `https://i.pinimg.com/originals/9f/da/9c/9fda9cea1b37762c0a8c9a29b605fc68.png`;
      img.src = faviconUrl;
      ;
      img.addEventListener("click", function() {
          resetTab()
      });
      container.appendChild(img);
}
);
}

// Theme Settings
const themeButtons = document.querySelectorAll(".theme-button");

themeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const theme = button.dataset.theme;
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem(themeKey, theme);
  });
});