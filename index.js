function copytxtFunc() {
  const copyText = "solomonprabu002@gmail.com";
  navigator.clipboard.writeText(copyText);
  alert("Mail ID copied to clipboard");
}

function readMore_1() {
  var dots = document.getElementById("dots_1");
  var more = document.getElementById("more_1");
  var readMore_btn = document.getElementById("readmore_1");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    readMore_btn.innerHTML = "Read more";
    more.style.display = "none";
  } else {
    dots.style.display = "none";
    readMore_btn.innerHTML = "Read less";
    more.style.display = "inline";
  }
}

function readMore_2() {
  var dots = document.getElementById("dots_2");
  var more = document.getElementById("more_2");
  var readMore_btn = document.getElementById("readmore_2");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    readMore_btn.innerHTML = "Read more";
    more.style.display = "none";
  } else {
    dots.style.display = "none";
    readMore_btn.innerHTML = "Read less";
    more.style.display = "none";
  }
}
