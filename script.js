const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

const addTask = () => {
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        const li = document.createElement('li');
        li.textContent = inputBox.value;
        listContainer.appendChild(li);
        const span = document.createElement('span');
        span.textContent = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
};


listContainer.addEventListener('click', (event) => {
    if (event.target.matches('li')) {
        event.target.classList.toggle("checked");
        saveData();
    } else if (event.target.matches('span')) {
        event.target.parentElement.remove();
        saveData();
    }
}, false);


const saveData = () => {
    localStorage.setItem("data", listContainer.innerHTML);
};

const showTask = () => {
    listContainer.innerHTML = localStorage.getItem("data");
};

showTask();