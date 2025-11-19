let form = document.getElementById("form");


form.addEventListener('submit', function (event) {
    event.preventDefault();


    let input = document.getElementById("text");
    let inputText = input.value;
    console.log(inputText);

});