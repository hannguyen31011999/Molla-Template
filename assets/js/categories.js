window.addEventListener("resize", function (event) {
    changeElement();
});

window.onbeforeunload = changeElement();

function changeElement() {
    var body = document.getElementsByTagName('body')[0];
    var image = document.getElementsByClassName('categories__top--image');
    var item = document.getElementsByClassName('categories__top--item');
    var direction = document.getElementById('direction-item');
    var imageBot = document.getElementsByClassName('bot-image');
    if (body.clientWidth < 764) {
        image[0].lastElementChild.style.height = "304px";
        image[1].lastElementChild.style.height = "304px";
        image[2].lastElementChild.style.height = "196px";
        image[3].lastElementChild.style.height = "196px";
        item[1].style.marginBottom = "15px";
        item[2].style.marginBottom = "15px";
        direction.style.flexDirection = "column-reverse";
        imageBot[1].style.height = "268px";
        imageBot[1].style.marginTop = "15px";
    } else if (body.clientWidth >= 764 && body.clientWidth < 997) {
        image[0].lastElementChild.style.height = "";
        image[1].lastElementChild.style.height = "";
        image[2].lastElementChild.style.height = "";
        image[2].lastElementChild.style.width = "";
        image[3].lastElementChild.style.height = "";
        image[3].lastElementChild.style.width = "";
        item[1].style.marginBottom = "";
        item[2].style.marginBottom = "";
        direction.style.flexDirection = "";
        imageBot[0].style.height = "268px";
        imageBot[1].style.height = "268px";
        imageBot[1].style.marginTop = "";
    } else {
        image[0].lastElementChild.style.height = "";
        image[1].lastElementChild.style.height = "";
        image[2].lastElementChild.style.height = "";
        image[2].lastElementChild.style.width = "";
        image[3].lastElementChild.style.height = "";
        image[3].lastElementChild.style.width = "";
        item[1].style.marginBottom = "";
        item[2].style.marginBottom = "";
        direction.style.flexDirection = "";
        imageBot[0].style.height = "";
        imageBot[1].style.height = "";
        imageBot[1].style.marginTop = "";
    }
}