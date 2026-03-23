// ===== Select Elements =====
const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');
const addBtn = document.querySelector('.todo__button');

// ===== Add Task =====
const addTask = () => {
    const value = inputBox.value.trim();

    if (!value) {
        alert("You must write something!");
        return;
    }

    const li = createTaskElement(value);
    listContainer.appendChild(li);

    inputBox.value = "";
    inputBox.focus(); // UX improvement

    saveData();
};

// ===== Create Task Element =====
const createTaskElement = (text) => {
    const li = document.createElement('li');
    li.classList.add('todo__item');

    // Text
    const textSpan = document.createElement('span');
    textSpan.classList.add('todo__text');
    textSpan.textContent = text;

    // Delete button
    const deleteBtn = document.createElement('span');
    deleteBtn.classList.add('todo__delete');
    deleteBtn.textContent = '\u00d7';

    li.appendChild(textSpan);
    li.appendChild(deleteBtn);

    return li;
};

// ===== Event Delegation =====
listContainer.addEventListener('click', (event) => {
    const item = event.target.closest('.todo__item');
    const deleteBtn = event.target.closest('.todo__delete');

    if (deleteBtn) {
        deleteBtn.parentElement.remove();
        saveData();
        return;
    }

    if (item) {
        item.classList.toggle('todo__item--checked');
        saveData();
    }
});

// ===== Save Data =====
const saveData = () => {
    const tasks = [];

    document.querySelectorAll('.todo__item').forEach((item) => {
        tasks.push({
            text: item.querySelector('.todo__text').textContent,
            completed: item.classList.contains('todo__item--checked'),
        });
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
};

// ===== Load Data =====
const loadTasks = () => {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    tasks.forEach((task) => {
        const li = createTaskElement(task.text);

        if (task.completed) {
            li.classList.add('todo__item--checked');
        }

        listContainer.appendChild(li);
    });
};

// ===== Init =====
addBtn.addEventListener('click', addTask);
loadTasks();