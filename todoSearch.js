const querystring = window.location.search;
// it makes the params reachable with js
const params = new URLSearchParams(querystring);
let tableSearch = document.querySelector('.searchTable').querySelector('tbody');
let newRow = tableSearch.insertRow(tableSearch.rows.length);

// Get the cookie and parse it from json to an js array
let updatedToDos = JSON.parse(getCookie("todo"));
let nameParamSearch = updatedToDos.find((element) => {
    return element.tag == params.get("tag");
});

// Display the found todo
if(nameParamSearch != undefined){
    newRow.innerHTML = "<td>"+ nameParamSearch.name +"</td><td>"+ nameParamSearch.tag +"</td><td><a href=" + "todoedit.html?name="+ nameParamSearch.name + ">Edit</a></td>";
} else{
    newRow.innerHTML = "Nothing found";
}
