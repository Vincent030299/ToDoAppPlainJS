const querystring = window.location.search;
const params = new URLSearchParams(querystring);
let editName = document.querySelector("#nameEdit");
let editTag = document.querySelector("#tagEdit");

// find the element thats in the array with the parameter that has been given
let nameParam = todos.find((element) => {
    return element.name == params.get("name");
});
editName.value = nameParam.name;
editTag.value = nameParam.tag;
 // edit the specific cookie
document.querySelector("#edit").addEventListener("click", () => {
       let objIndex = todos.findIndex((obj => obj.name == params.get("name")));
       todos[objIndex].name = editName.value;
       todos[objIndex].tag = editTag.value;
       setCookie('todo', JSON.stringify(todos));
       location.href = "todo.html";
});