const tasksBox = document.querySelector(".tasks");
const input = document.querySelector(".inp");
const text = document.querySelector(".task__content");
const btnAdd = document.querySelector(".add");

//adding element
function addNewElement() {
  tasksBox.style.padding = "10px 0";
  const tempInp = document.createElement("li");
  tempInp.classList.add("task");
  tempInp.innerHTML = `<p class="task__content">${input.value}</p>
        <button onclick="this.parentElement.remove()" class="remove">
            <svg class="remove-sv" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="19" height="19" rx="9.5" stroke="#C4C4C4"/>
                <path d="M6 6L14 14" stroke="#C4C4C4"/>
                <path d="M6 14L14 6" stroke="#C4C4C4"/>
            </svg>
        </button>`;
  input.value = "";
  tasksBox.insertBefore(tempInp, tasksBox.lastElementChild);
  input.style.display = "none";
}

input.addEventListener("keyup", (event) => {
  if (event.key == "Enter") {
    addNewElement();
  }
});

btnAdd.addEventListener("click", () => {
  if (getComputedStyle(input).display != "none") {
    addNewElement();
  } else {
    input.style.display = "block";
  }
});

// removing element

function removeElement(){

}

