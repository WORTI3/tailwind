import "../styles/main.css";

// Source: https://alligator.io/js/progress-bar-javascript-css-variables/
document.addEventListener("scroll", function () {
  var docElement = document.documentElement,
    body = document.body,
    st = "scrollTop",
    sh = "scrollHeight",
    progress = document.querySelector("#progress"),
    scroll;
  var scrollpos = window.scrollY;
  var header = document.getElementById("header");
  var navcontent = document.getElementById("nav-content");
  /*Refresh scroll % width*/
  scroll =
    ((docElement[st] || body[st]) /
      ((docElement[sh] || body[sh]) - docElement.clientHeight)) *
    100;
  progress.style.setProperty("--scroll", scroll + "%");

  /*Apply classes for slide in bar*/
  scrollpos = window.scrollY;
  const background = "bg-white-smoke";

  if (scrollpos > 10) {
    header.classList.add(background);
    header.classList.add("shadow");
    navcontent.classList.add(background);
    navcontent.classList.remove("bg-transparent");
  } else {
    navcontent.classList.add("bg-transparent");
    header.classList.remove(background);
    header.classList.remove("shadow");
    navcontent.classList.remove(background);
  }
});

document.getElementById("nav-toggle").addEventListener("click", function () {
  document.getElementById("nav-content").classList.toggle("hidden");
  document.getElementById("main-content").classList.toggle("mt-[12%]");
});
