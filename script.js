const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    }
    else {
        let li = document.createElement("li");
        li.textContent = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.textContent = "\u00d7";
        li.appendChild(span);
    }

    inputBox.value = "";
}


listContainer.addEventListener('click', (e) => {
    if (e.target.matches("li")) {
        e.target.classList.toggle("checked");
    }
    else if (e.target.matches("span")) {
        e.target.parentElement.remove();
    }
}, false);