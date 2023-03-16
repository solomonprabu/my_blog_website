function copytxtFunc() {
  const copyText = "solomonprabu002@gmail.com";
  navigator.clipboard.writeText(copyText);
  alert("Mail ID copied to clipboard");
}

function readMore() {
  var dots = document.getElementById("dots_1");
  var more = document.getElementById("more_1");
  var readMore_btn = document.getElementById("readmore_1");

  if (dots.style.display === "none") {
    dots.style.display === "inline";
    readMore_btn.innerHTML = "Read more";
    more.style.display = "none";
  } else {
    dots.style.display === "none";
    readMore_btn.innerHTML = "Read less";
    more.style.display = "inline";
  }
}
