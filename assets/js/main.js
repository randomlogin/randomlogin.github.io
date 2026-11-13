function showKey() {
  var key =  document.getElementById("pgpKey");
  var button = document.getElementById("showKeyButton");
  if (key.style.display === "none") {
    key.style.display = "inline";
    button.innerHTML = "Hide";
  } else {
    key.style.display = "none";
    button.innerHTML = "Show";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".card").forEach(function (card) {
    card.addEventListener("click", function () {
      card.classList.toggle("active");
    });
  });
});

// Click a figure's image to enlarge it on the same page; click anywhere (or press Esc) to restore.
// Without JavaScript the link simply opens the full-size file.
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("figure a").forEach(function (link) {
    var img = link.querySelector("img");
    if (!img) { return; }
    link.addEventListener("click", function (event) {
      event.preventDefault();
      var overlay = document.createElement("div");
      overlay.className = "lightbox";
      // Styled inline so it works even if the stylesheet is cached or fails to load.
      overlay.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;z-index:1000;display:flex;" +
        "align-items:center;justify-content:center;padding:1rem;background:rgba(0,0,0,.75);cursor:zoom-out;";
      var big = document.createElement("img");
      big.src = link.getAttribute("href");
      big.alt = img.alt;
      big.style.cssText = "height:calc(100vh - 2rem);width:auto;max-width:calc(100vw - 2rem);" +
        "background:#fff;border-radius:6px;";
      overlay.appendChild(big);
      function close() {
        overlay.remove();
        document.body.style.overflow = "";
        document.removeEventListener("keydown", onKey);
      }
      function onKey(e) { if (e.key === "Escape") { close(); } }
      overlay.addEventListener("click", close);
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
      document.body.appendChild(overlay);
    });
  });
});
