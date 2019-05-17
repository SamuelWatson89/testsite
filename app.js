$('.carousel').carousel({
    interval: 3500
});
buttonClick();

function showHideNewLetter() {
    const nameInput = document.getElementById('nameInputForm');
    const newsLetter = document.getElementById('signUpForm');
    nameInput.classList.add('d-none');
    newsLetter.classList.remove('d-none');
}

function buttonClick() {
    input = document.getElementById('usersName');
    input.addEventListener("keydown", function (event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            document.getElementById("submitName").click();
        }
    });
}

function applyUsersName() {
    const name = document.getElementById('usersName').value;
    if (name == "") {
        document.getElementById('noName').classList.remove('d-none');
    } else if (!isNaN(name)) {
        document.getElementById('numberInput').classList.remove('d-none');
    } else {
        document.getElementById('usersNameInput').innerHTML = name;
        showHideNewLetter();
    }
}