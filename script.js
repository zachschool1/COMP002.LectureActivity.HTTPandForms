let form = document.getElementById("form");


form.addEventListener('submit', function (event) {
    event.preventDefault();


    let text = form.textContent;
    console.log(text);

});