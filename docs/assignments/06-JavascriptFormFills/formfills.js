let inputText = document.getElementById("input-text");
let button = document.getElementById("my-button");
let recentLine = document.getElementById("recent-line");
let poemDisplay = document.getElementById("poem");

let myPoem = "";

button.onclick = function() {
    let poemLine = inputText.value;

    recentLine.innerHTML = poemLine;

    myPoem+=poemLine + "<br>";

    poemDisplay.innerHTML = myPoem;

    inputText.value = "";
}

inputText.onclick = function() {
    inputText.value = "";
}