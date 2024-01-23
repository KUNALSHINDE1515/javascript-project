const item = document.querySelector('#item');
const toDoBox = document.querySelector('#to-do-box');

item.addEventListener("keyup", function(event) {
    if(event.key == "Enter");
    addToDO(this.value);
    this.value = ""
})

const addToDO = (item) => {
    const listItem = document.createElement("li");
    listItem.innerHTML =`<li>
    ${item}
    <i class="fas fa-times"></i>`;

    toDoBox.appendChild(listItem)
}