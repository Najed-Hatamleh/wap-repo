window.onload = function() {
    let button = document.getElementById("button");
    let checkbox = document.getElementById("checkbox");
    let textArea = document.getElementById("text-area");
    let malkovitch = document.getElementById("malkovitch");

    button.onclick = function() {
        setInterval(incrementFontSize, 500, textArea);
    }

    checkbox.onchange = function() {
        textArea.classList.toggle("checked-box")
    }

    malkovitch.onclick = function() {
        Array.from(document.getElementsByTagName("*")).filter((ele) => ele.value != undefined && ele.value.length > 5)
        .map((ele) => ele.value = "malkovitch");
    }
}

function incrementFontSize(element) {
    let currentSize = parseInt(window.getComputedStyle(element).fontSize);
    element.style.fontSize = currentSize + 2 + "pt";
}