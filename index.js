// Since it didnt required security and the application is made with plain js its stored in an array with objects
const loginDetails = [
    {
        user: "vincent",
        pass: "randompassword"
    }
];

let getCookie = (name) => {
    var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return v ? v[2] : null;
}

let setCookie = (name, value, days) => {
    var d = new Date;
    d.setTime(d.getTime() + 24*60*60*1000*days);
    document.cookie = name + "=" + value + ";path=/;expires=" + d.toGMTString();
}

const passwordInput = document.querySelector("#password");
const usernameInput = document.querySelector("#username");

let check = () => {
    if (passwordInput.value == loginDetails[0].pass && usernameInput.value == loginDetails[0].user) {
        setCookie("username", usernameInput.value,1);
        location.href = "createTodo.html";
    } else{
        console.log('no match');
    }
}

let loginButton = document.querySelector("#login").addEventListener('click', check);