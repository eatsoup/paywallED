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
setRandomCookie();
