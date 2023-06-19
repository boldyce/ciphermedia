
function about() {
    window.scroll(0, findPosition(document.getElementById("aboutP"))); 
    location.reload(); 
}
function home() {
    window.scroll(0, findPosition(document.getElementById("homeP"))); 
    location.reload(); 
}
function sign() {
    window.scroll(0, findPosition(document.getElementById("signP"))); 
}
function blog() {
    window.alert("It's yet to come! Sign up for the newspaper and we'll update you about it.")
}
function findPosition(elem) {
    var Pos = 0;
    if (elem.offsetParent) {
      do {
        Pos += elem.offsetTop;
      } while ((elem = elem.offsetParent));
      return [Pos];
    }
  }