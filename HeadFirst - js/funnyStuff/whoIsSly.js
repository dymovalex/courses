window.onload = function (){
    var image = document.getElementById("whois");
    image.onclick = whoIs;
}

function whoIs(eventObj){
    var image = eventObj.target;
    var choice = Math.floor(Math.random()*2);
    if (choice) {
        image.src = "fox.jpg";
    } else {
        image.src = "bear.jpg";
    }
    setTimeout(reset, 2000);
}

function reset(){
    var rs = document.getElementById("whois");
    rs.setAttribute("src", "whois.jpg");
}