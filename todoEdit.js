const querystring = window.location.search;
const params = new URLSearchParams(querystring);
let editName = document.querySelector("#nameEdit");
let editTag = document.querySelector("#tagEdit");

let nameParam = todos.find((element) => {
    return element.name == params.get("name");
});
editName.value = nameParam.name;
editTag.value = nameParam.tag;

document.querySelector("#edit").addEventListener("click", () => {
       let objIndex = todos.findIndex((obj => obj.name == params.get("name")));
       todos[objIndex].name = editName.value;
       todos[objIndex].tag = editTag.value;
       setCookie('todo', JSON.stringify(todos));
       location.href = "todo.html";
});