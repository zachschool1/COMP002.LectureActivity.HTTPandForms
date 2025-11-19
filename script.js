let form = document.getElementById("form");


form.addEventListener('submit', function (event) {
    event.preventDefault();


    // let input = document.getElementById("text");
    // let inputText = input.value;

    let color = document.getElementById("colorpicker");
    let colorValue = color.value;
    console.log(colorValue);


    localStorage.setItem("localColorValue", colorValue);
});


document.addEventListener('DOMContentLoaded', (event) => {
    let localColor = localStorage.getItem("localColorValue");

    if (localColor) {
        let savedColor = document.getElementById("colorpicker");
        savedColor.value = localColor;
        console.log("saved color " + localColor);
    }
})