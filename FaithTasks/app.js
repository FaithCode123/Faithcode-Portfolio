const addTaskBtn = document.getElementById('addTaskBtn');
const modal = document.getElementById('taskModal');
const closeBtn = document.querySelector('.close');
const saveTaskBtn = document.getElementById('saveTaskBtn');

const todoTasks = document.querySelector('#todo .tasks');
const doingTasks = document.querySelector('#doing .tasks');
const doneTasks = document.querySelector('#done .tasks');

let draggedTask = null;
let taskToEdit = null; 

// =======================
// 4. LANCEMENT DE L'APP
// =======================
document.addEventListener('DOMContentLoaded', () => {
    loadTasks();
    initFilter(); // Lance le filtre au démarrage
});

// =======================
// 2. ÉVÉNEMENTS
// =======================

// Ouvrir Modal pour AJOUTER
addTaskBtn.onclick = () => {
    taskToEdit = null;
    document.querySelector('#taskModal h2').innerText = "Nouvelle Tâche";
    saveTaskBtn.innerText = "Enregistrer";
    closeModal();
    modal.style.display = "block";
};

// Fermer Modal
closeBtn.onclick = closeModal;
window.onclick = (e) => { if (e.target == modal) closeModal() }

function closeModal() {
    modal.style.display = "none";
    document.getElementById('taskTitle').value = "";
    document.getElementById('taskDate').value = "";
    document.getElementById('taskPriority').value = "moyenne";
}

// Enregistrer OU Mettre à jour une tâche
saveTaskBtn.addEventListener('click', () => {
    const title = document.getElementById('taskTitle').value;
    const date = document.getElementById('taskDate').value;
    const priority = document.getElementById('taskPriority').value;
        
    if(title.trim() === "") return;
    
    if (taskToEdit) { // Mode MODIFICATION
        taskToEdit.querySelector('p strong').innerText = title;
        taskToEdit.querySelector('small').innerText = `📅 ${date || 'Pas de date'}`;
        taskToEdit.setAttribute('data-priority', priority);
        taskToEdit = null;
    } else { // Mode CREATION
        createTask({title, date, priority}, todoTasks);
    }
        
    saveTasks();
    updateCounts();
    closeModal();
});

// DRAG & DROP
document.addEventListener('dragstart', (e) => {
    if (e.target.classList.contains('task')) {
        draggedTask = e.target;
        setTimeout(() => e.target.classList.add('dragging'), 0);
    }
});

document.addEventListener('dragend', (e) => {
    if (e.target.classList.contains('task')) {
        e.target.classList.remove('dragging');
    }
});

const columns = document.querySelectorAll('.column');
columns.forEach(column => {
    column.addEventListener('dragover', e => {
        e.preventDefault();
        column.classList.add('drag-over');
    });
    column.addEventListener('dragleave', () => {
        column.classList.remove('drag-over');
    });
    column.addEventListener('drop', e => {
        e.preventDefault();
        column.classList.remove('drag-over');
        const tasksContainer = column.querySelector('.tasks');
        if (draggedTask) { 
            tasksContainer.appendChild(draggedTask); 
            saveTasks(); 
            updateCounts();
        }
    });
});

// =======================
// 3. TOUTES LES FONCTIONS
// =======================

function createTask(taskData, targetColumn) {
    const taskElement = document.createElement('div');
    taskElement.classList.add('task');
    taskElement.setAttribute('draggable', 'true');
    taskElement.setAttribute('data-priority', taskData.priority);
    taskElement.innerHTML = `
        <div>
            <p><strong>${taskData.title}</strong></p>
            <small>📅 ${taskData.date || 'Pas de date'}</small>
        </div>
        <button class="btn-danger">X</button>
    `;
    targetColumn.appendChild(taskElement);

    // Événement: Double-clic pour MODIFIER
    taskElement.addEventListener('dblclick', () => {
        taskToEdit = taskElement;
        document.querySelector('#taskModal h2').innerText = "Modifier la Tâche";
        saveTaskBtn.innerText = "Mettre à jour";
        
        document.getElementById('taskTitle').value = taskElement.querySelector('p strong').innerText;
        document.getElementById('taskDate').value = taskElement.querySelector('small').innerText.replace('📅 ', '');
        document.getElementById('taskPriority').value = taskElement.getAttribute('data-priority');
        
        modal.style.display = "block";
    });

    // Événement: Bouton supprimer
    taskElement.querySelector('.btn-danger').addEventListener('click', () => {
        taskElement.remove();
        saveTasks();
        updateCounts();
    });
    updateCounts();
}

function saveTasks() {
    const tasks = { todo: [], doing: [], done: [] };
    document.querySelectorAll('#todo .task').forEach(t => tasks.todo.push(getTaskData(t)));
    document.querySelectorAll('#doing .task').forEach(t => tasks.doing.push(getTaskData(t)));
    document.querySelectorAll('#done .task').forEach(t => tasks.done.push(getTaskData(t)));
    localStorage.setItem('faithTasks', JSON.stringify(tasks));
}

function getTaskData(taskElement) {
    return {
        title: taskElement.querySelector('p strong').innerText,
        date: taskElement.querySelector('small').innerText.replace('📅 ', ''),
        priority: taskElement.getAttribute('data-priority')
    }
}

function loadTasks() {
    document.querySelectorAll(`.task-list`).forEach(list => list.innerHTML=``);
    const savedTasks = JSON.parse(localStorage.getItem('faithTasks')) || [];
    if (savedTasks) {
        savedTasks.todo.forEach(t => createTask(t, todoTasks));
        savedTasks.doing.forEach(t => createTask(t, doingTasks));
        savedTasks.done.forEach(t => createTask(t, doneTasks));
    }
    updateCounts();
    checkOverdueTasks();
}

function updateCounts() {
    document.querySelector('#todo .count').innerText = todoTasks.children.length;
    document.querySelector('#doing .count').innerText = doingTasks.children.length;
    document.querySelector('#done .count').innerText = doneTasks.children.length;
}

// =======================
// 5. FILTRE PAR PRIORITÉ
// =======================
function initFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn'); // querySelectorAll avec S

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active')); // Enlever sur tous
            btn.classList.add('active'); // Mettre sur 1 seul
            
            const filter = btn.getAttribute('data-filter');
            filterTasks(filter);
        });
    });
}

function filterTasks(priority) {
    const allTasks = document.querySelectorAll('.task');
    allTasks.forEach(task => {
        const taskPriority = task.getAttribute('data-priority');
        const show = priority === 'toutes' || taskPriority === priority;
        task.classList.toggle('hidden', !show); // Cache si différent
    });
}

const themeBtn = document.getElementById('themeBtn');

// 1. Au chargement : Vérifier si l'utilisateur avait choisi le mode sombre
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('faithTheme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeBtn.innerText = "☀️"; // Met le soleil
    }
});

// 2. Au clic : Changer le thème
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode'); // Ajoute/Enlève la classe
    
    let theme = 'light';
    if(document.body.classList.contains('dark-mode')){
        theme = 'dark';
        themeBtn.innerText = "☀️"; // Passe au soleil
    } else {
        themeBtn.innerText = "🌙"; // Passe à la lune
    }
    
    localStorage.setItem('faithTheme', theme); // Sauvegarde le choix
});

const searchInput = document.getElementById('searchInput');
let currentFilter = 'toutes'; // Variable pour se souvenir du filtre actuel

searchInput.addEventListener('keyup', () => {
    const searchTerm = searchInput.value.toLowerCase(); // Met en minuscule
    applyFiltersAndSearch(searchTerm, currentFilter);
});

// On modifie aussi initFilter pour mettre à jour currentFilter
function initFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            currentFilter = btn.dataset.filter; // On met à jour
            const searchTerm = searchInput.value.toLowerCase();
            applyFiltersAndSearch(searchTerm, currentFilter);
        });
    });
}

// NOUVELLE FONCTION QUI FAIT LES 2
function applyFiltersAndSearch(searchTerm, priority) {
    document.querySelectorAll('.task').forEach(task => {
        const taskPriority = task.dataset.priority;
        const taskTitle = task.querySelector('p strong').innerText.toLowerCase();
        
        const matchPriority = priority === 'toutes' || taskPriority === priority;
        const matchSearch = taskTitle.includes(searchTerm); // Vérifie si le titre contient le texte
        
        const show = matchPriority && matchSearch; // Les 2 conditions doivent être vraies
        task.classList.toggle('hidden', !show);
    });
}

// On supprime l'ancienne fonction filterTasks
// function filterTasks() { ... }  SUPPRIME LA


// =======================
// 7. ALERTE TÂCHE EN RETARD
// =======================
function checkOverdueTasks() {
    const today = new Date().toISOString().split('T')[0]; // Format: 2026-09-03
    const allTasks = document.querySelectorAll('.task');

    allTasks.forEach(task => {
        const taskDate = task.querySelector('small').innerText.replace('📅 ', '');
        const isDone = task.closest('.column').id === 'done'; // Vérifie si dans colonne "done"

        // 1. Enlever l'ancien badge s'il existe
        const oldBadge = task.querySelector('.overdue-badge');
        if(oldBadge) oldBadge.remove();

        // 2. Vérifier si en retard
        if (taskDate && taskDate!== 'Pas de date' && taskDate < today &&!isDone) {
            task.classList.add('overdue'); // Ajoute le style rouge

            // Ajoute le badge ⚠️
            const titleElement = task.querySelector('p strong');
            const badge = document.createElement('span');
            badge.classList.add('overdue-badge');
            badge.innerText = ' ⚠️ En retard';
            titleElement.appendChild(badge);

        } else {
            task.classList.remove('overdue'); // Enlève le rouge si ce n'est plus en retard
        }
    });
}

// On lance la vérification au démarrage + après chaque action
document.addEventListener('DOMContentLoaded', () => {
    checkOverdueTasks(); // NOUVEAU
});

// Ajoute checkOverdueTasks() à la fin de : saveTasks(), createTask(), et dans l'event drop
// Exemple dans saveTaskBtn:
saveTaskBtn.addEventListener('click', () => {
    //... tout ton code
    saveTasks();
    updateCounts();
    checkOverdueTasks(); // AJOUTE ÇA
    closeModal();
});

// =======================
// 8. EXPORTER ET IMPORTER
// =======================
const exportBtn = document.getElementById('exportBtn');
const importBtn = document.getElementById('importBtn');
const importFile = document.getElementById('importFile');

// 1. EXPORTER : Télécharger le localStorage en.json
exportBtn.addEventListener('click', () => {
    const tasks = localStorage.getItem('faithTasks'); // Récupère les tâches
    const theme = localStorage.getItem('faithTheme'); // Récupère le thème

    const dataToExport = { tasks: JSON.parse(tasks), theme: theme }; // On met tout dans 1 objet

    const blob = new Blob([JSON.stringify(dataToExport, null, 2)], { type: 'application/json' }); // Crée le fichier
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a'); // Crée un lien temporaire
    a.href = url;
    a.download = `FaithTasks-Sauvegarde-${new Date().toISOString().split('T')[0]}.json`; // Nom du fichier
    a.click(); // Clique dessus automatiquement
    URL.revokeObjectURL(url);
});

// 2. IMPORTER : Charger un fichier.json
importBtn.addEventListener('click', () => {
    importFile.click(); // Ouvre la fenêtre pour choisir un fichier
});

importFile.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
        const data = JSON.parse(event.target.result); // Lit le fichier

        localStorage.setItem('faithTasks', JSON.stringify(data.tasks)); // Remet les tâches
        localStorage.setItem('faithTheme', data.theme); // Remet le thème

        location.reload(); // Recharge la page pour tout afficher
    };
    reader.readAsText(file);
});
