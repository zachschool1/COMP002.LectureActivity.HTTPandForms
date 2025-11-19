let form = document.getElementById("form");


form.addEventListener('submit', function (event) {
    event.preventDefault();


    // let input = document.getElementById("text");
    // let inputText = input.value;

    let color = document.getElementById("colorpicker");
    let colorValue = color.value;
    console.log(colorValue);

});