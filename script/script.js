const button = document.querySelector('.button')
let resultname = document.querySelector('.resultname');
let avaimg = document.querySelector('.avaimg');
let resultcomment = document.querySelector('.resultcomment');

function formatUser() {
    let clean;
    let small;
    let user;
    let name = document.querySelector('.name').value;
    clean = name.trim(name);
    small = clean.toLowerCase();
    user = small[0].toUpperCase() + small.slice(1);
    resultname.textContent = (user);

    let ava = document.querySelector('.ava').value;
    avaimg.outerHTML = `<img src="${ava}" alt="Аватар">`;

    let checkSpam;
    let message;
    let comment = document.querySelector('.comment').value;
    checkSpam = comment.toLowerCase();
    if (checkSpam.includes("viagra", "xxx")) {
        message = comment.replace(/viagra|xxx/gi, "***");
    }
    else {
        message = comment;
    }
    resultcomment.textContent = (message);
}

button.addEventListener('click', formatUser);

//https://cs13.pikabu.ru/post_img/big/2023/02/13/8/1676295806122712757.png



