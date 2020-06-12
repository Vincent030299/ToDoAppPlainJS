if (getCookie("username") == loginDetails[0].user) {
    let name = document.querySelector("#name");
    let tag = document.querySelector("#tag");
    let toDos = [];
    let createTagFunction = () => {
        toDos[toDos.length] = {
            name: name.value,
            tag: tag.value
        };
        setCookie('todo', JSON.stringify(toDos));
    }
    let createTag = document.querySelector("#create").addEventListener("click", createTagFunction);
    
} else{
    location.href = "index.html";
}