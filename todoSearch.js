const querystring = window.location.search;
const params = new URLSearchParams(querystring);
let tableSearch = document.querySelector('.searchTable').querySelector('tbody');
let newRow = tableSearch.insertRow(tableSearch.rows.length);
let updatedToDos = JSON.parse(getCookie("todo"));
let nameParamSearch = updatedToDos.find((element) => {
    return element.tag == params.get("tag");
});
console.log(nameParamSearch);
if(nameParamSearch != undefined){
    newRow.innerHTML = "<td>"+ nameParamSearch.name +"</td><td>"+ nameParamSearch.tag +"</td><td><a href=" + "todoedit.html?name="+ nameParamSearch.name + ">Edit</a></td>";
} else{
    newRow.innerHTML = "Nothing found";
}
