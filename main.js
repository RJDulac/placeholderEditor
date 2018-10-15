var txtColor = "000"
var bgColor ="fff"
var imageText = "Image1";
var imageSize = "350x150";




function imgUpdate() {
    //update selection size, color, and text
    console.dir(event.target)
    if (event.target.type === "select-one") {
        imageSize = event.target.value;
    } else if (event.target.name === "bgColor") {
        var nColor = event.target.value;
        //remove hash
        bgColor = nColor.replace("#", "");
    } else if (event.target.name === "txtColor") {
        var nColor = event.target.value;
        //remove hash
        txtColor = nColor.replace("#", "");
    } else if (event.target.type === "text") {
        imageText = event.target.value;
    }
    var imgSrc = "http://via.placeholder.com/" + imageSize + "/" + bgColor + "/" + txtColor + "?text=" + imageText;
    //not the best way but felt like doing it without id
    event.target.parentElement.lastElementChild.src = imgSrc;
    //update string output
    message(imgSrc);
}

//function for updating innerHTML
function message(m) {
    document.getElementById("output").innerHTML = m;
}
