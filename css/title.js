if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", function() {
        loaded();
    });
} else if (document.attachEvent) {
    document.attachEvent("onreadystatechange", function() {
        loaded();
    });
}
function loaded() {
    setInterval(loop, 500);
}
var x = 0;
var titleText = [ "You", "You are", "You are important", "You are", "You", "</3", "<3", "</3", "<3", "</3", "<3", "</3", "<3", "</3" ];

function loop() {
    document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];
}
