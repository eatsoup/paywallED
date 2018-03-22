function generateNewCookie(){
    var randomNumber = Math.floor(Math.random() * Math.floor(10000000000000));
    var randomString = btoa(randomNumber);
    return randomString;
}
function setRandomCookie(){
    document.cookie = 'temptationTrackingId=' + generateNewCookie() + ';domain=.ed.nl' + ";path=/";
}
setRandomCookie();
