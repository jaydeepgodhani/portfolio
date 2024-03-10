const storageKey = "theme-preference";
const displayTime = document.querySelector("#time-header");
const weekday = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];

showTime();

const currentTheme = localStorage.getItem(storageKey) || "light";
var theme = currentTheme;

onClick = () => { theme = "light" === theme ? "dark" : "light", setPreference() }
setPreference = () => { localStorage.setItem(storageKey, theme), reflectPreference() };
reflectPreference = () => { document.body.setAttribute("data-theme", theme)};

window.onload = () => { reflectPreference(), document.getElementById("theme-toggle").addEventListener("click", onClick) }

function showTime() {
  let time = new Date();
  displayTime.innerText = weekday[time.getDay()] + ", " + time.getHours() + ":" + time.getMinutes() + " IST, Bengaluru";
  setTimeout(showTime, 10000);
}

document.body.onmousemove = function (e) {
  document.documentElement.style.setProperty('--x', e.clientX + 'px');
  document.documentElement.style.setProperty('--y', e.clientY + 'px');
}

const allLinks = document.getElementsByTagName("a");

for (var i = 0; i < allLinks.length; ++i) {
  allLinks[i].addEventListener("mouseover", () => {
    document.getElementById("invertedcursor").style.transform = "scale(2)";
});
  allLinks[i].addEventListener("mouseout", () => {
    document.getElementById("invertedcursor").style.transform = "scale(1)";
  });
}
