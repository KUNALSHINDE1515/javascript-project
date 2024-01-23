const item = document.querySelector('#item');
const toDoBox = document.querySelector('#to-do-box');

item.addEventListener("keyup", function(event) {
    if (event.key == "Enter") {
        addToDO(this.value);
        this.value = ""
    }
}, false)
    

const addToDO = (item) => {
    const listItem = document.createElement("li");
    listItem.innerHTML =`<li>
    ${item}
    <i class="fas fa-times"></i>`;

    listItem.addEventListener('click', function(){
        this.classList.toggle("done")
    },false)

    listItem.querySelector("i").addEventListener('click', function(){
        listItem.remove()
    },false)
    toDoBox.appendChild(listItem)
}