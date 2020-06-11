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
