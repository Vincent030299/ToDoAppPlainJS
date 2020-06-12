let todos = JSON.parse(getCookie("todo"));
let table = document.querySelector('.table').querySelector('tbody');

for (i = 0; i < todos.length; i++){
    let newRow = table.insertRow(table.rows.length)
    newRow.innerHTML = "<td>"+ todos[i].name +"</td><td>"+ todos[i].tag +"</td><td><a href=" + "todoedit.html?name="+ todos[i].name + ">Edit</a></td>";
}