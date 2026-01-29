const noteForm = document.getElementById('noteForm');
const notesTable = document.getElementById('notesTable');

noteForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const date = document.getElementById('date').value;
    const topic = document.getElementById('topic').value;
    const info = document.getElementById('info').value;
    const status = document.getElementById('status').value;

    addNoteToTable(date, topic, info, status);

    noteForm.reset();
});

function addNoteToTable(date, topic, info, status) {
    const row = document.createElement('tr');

    row.innerHTML = `
        <td>${date}</td>
        <td>${topic}</td>
        <td>${info}</td>
        <td class="${status === 'Сделано' ? 'done' : ''}">${status}</td>
        <td>
            <button onclick="toggleDone(this)">Сделано/Не сделано</button>
            <button onclick="deleteNote(this)">Удалить</button>
        </td>
    `;

    notesTable.appendChild(row);
}

function toggleDone(button) {
    const row = button.parentElement.parentElement;
    const statusCell = row.cells[3];
    if (statusCell.textContent === 'Сделано') {
        statusCell.textContent = 'Не сделано';
        statusCell.classList.remove('done');
    } else {
        statusCell.textContent = 'Сделано';
        statusCell.classList.add('done');
    }
}

function deleteNote(button) {
    const row = button.parentElement.parentElement;
    row.remove();
}