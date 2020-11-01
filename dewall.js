function generateNewCookie(){
    var randomNumber = Math.floor(Math.random() * Math.floor(10000000000000));
    var randomString = btoa(randomNumber);
    return randomString;
}

function getHostName(){
    var hostName = window.location.host.replace('www','')
    return hostName;
}

function setRandomCookie(){
    document.cookie = 'temptationTrackingId=' + generateNewCookie() + ';domain=' + getHostName() + ";path=/";
}

function removeCrap() {
  var allCrap = [];
  allCrap.push(document.getElementsByClassName("ankeiler-simple__paid-label plus-label--inline"));
  allCrap.push(document.getElementsByClassName("plus-label is-small"));
  allCrap.push(document.getElementsByClassName("plus-label"));
  // allCrap.push(document.getElementsByClassName("nav__list-item"));
  for (let crap of allCrap) {
    for (let it of crap) {
      it.style.visibility="hidden";
    };
  };
}
setRandomCookie();
document.onLoad = removeCrap();
