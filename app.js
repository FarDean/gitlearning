const filterInput = document.querySelector("#filterInput");
const names = document.querySelector("#names");

const links = document.querySelectorAll("a");
filterInput.addEventListener("keyup",filterNames);
function filterNames(){
    let value = filterInput.value.toUpperCase();
    links.forEach(a=>{
        if(a.textContent.toUpperCase().indexOf(value) === -1){
            a.parentElement.style.display= "none"
        }else {
            a.parentElement.style.display= ""
        }
    })
}