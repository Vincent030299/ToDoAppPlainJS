if (getCookie("username") == loginDetails[0].user) {
    let name = document.querySelector("#name");
    let tag = document.querySelector("#tag");
    // create a new cookie
    let createTagFunction = () => {
        let toDos = JSON.parse(getCookie("todo"));
        if (toDos == undefined) {
            toDos = [];
        }
        toDos[toDos.length] = {
            name: name.value,
            tag: tag.value
        };
        setCookie('todo', JSON.stringify(toDos));
        location.href = "todo.html";
    }
    let createTag = document.querySelector("#create").addEventListener("click", createTagFunction);
    
} else{
    location.href = "index.html";
}