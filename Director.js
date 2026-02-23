document.addEventListener('DOMContentLoaded', function () {

    // ================= LOAD SAVED DATA =================
    loadDepartments();
    loadNotices();

    const profileCard = document.querySelector('.profile-card');
    const nameField = document.querySelector('.profile-info h2');
    const titleField = document.querySelector('.title');
    const deptField = document.querySelector('.department');

    const editModal = document.getElementById('editModal');
    const deleteModal = document.getElementById('deleteModal');

    const editForm = document.getElementById('editForm');

    // ===== LOAD SAVED PROFILE =====
    const savedData = JSON.parse(localStorage.getItem('directorData'));
    if (savedData) {
        nameField.textContent = savedData.name;
        titleField.textContent = savedData.title;
        deptField.textContent = savedData.department;
    }

    if (localStorage.getItem('directorDeleted') === 'true') {
        profileCard.style.display = 'none';
    }

    // ================= GLOBAL CLICK HANDLER =================
    document.addEventListener('click', function (e) {

        document.addEventListener('DOMContentLoaded', function () {

    // ================= SELECTORS =================
    const profileCard = document.querySelector('.profile-card');
    const nameField = document.querySelector('.profile-info h2');
    const titleField = document.querySelector('.profile-info .title');
    const deptField = document.querySelector('.profile-info .department');

    const editModal = document.getElementById('editModal');
    const deleteModal = document.getElementById('deleteModal');
    const editForm = document.getElementById('editForm');

    // ================= LOAD SAVED DATA =================
    const savedData = JSON.parse(localStorage.getItem('directorData'));
    const isDeleted = localStorage.getItem('directorDeleted');

    if (savedData) {
        nameField.textContent = savedData.name;
        titleField.textContent = savedData.title;
        deptField.textContent = savedData.department;
    }

    if (isDeleted === 'true') {
        profileCard.style.display = 'none';
    }

    // ================= GLOBAL CLICK HANDLER =================
    document.addEventListener('click', function (e) {

        // ===== OPEN EDIT =====
        if (e.target.classList.contains('edit-btn')) {
            editModal.style.display = 'flex';

            document.getElementById('editName').value = nameField.textContent;
            document.getElementById('editTitle').value = titleField.textContent;
            document.getElementById('editDepartment').value = deptField.textContent;
        }

        // ===== CLOSE EDIT =====
        if (e.target.classList.contains('close-edit')) {
            editModal.style.display = 'none';
        }

        // ===== OPEN DELETE =====
        if (e.target.classList.contains('delete-btn')) {
            deleteModal.style.display = 'flex';
        }

        // ===== CLOSE DELETE =====
        if (e.target.classList.contains('close-delete') ||
            e.target.classList.contains('cancel-btn')) {

            deleteModal.style.display = 'none';
        }

        // ===== CONFIRM DELETE =====
        if (e.target.id === 'confirmDelete') {
            profileCard.style.display = 'none';
            localStorage.setItem('directorDeleted', 'true');
            deleteModal.style.display = 'none';
        }

    });

    // ================= SAVE EDIT =================
    if (editForm) {
        editForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const updatedData = {
                name: document.getElementById('editName').value,
                title: document.getElementById('editTitle').value,
                department: document.getElementById('editDepartment').value
            };

            localStorage.setItem('directorData', JSON.stringify(updatedData));

            nameField.textContent = updatedData.name;
            titleField.textContent = updatedData.title;
            deptField.textContent = updatedData.department;

            editModal.style.display = 'none';
        });
    }

});


// ================= QUICK ACCESS PANEL SWITCH =================
function openPanel(panelId) {

    const panels = document.querySelectorAll('.dynamic-panel');

    panels.forEach(panel => {
        panel.style.display = 'none';
    });

    const selectedPanel = document.getElementById(panelId);
    if (selectedPanel) {
        selectedPanel.style.display = 'block';
    }
}


// ================= DEPARTMENTS =================
function addDepartment() {

    const deptInput = document.getElementById('newDept');
    if (!deptInput) return;

    const deptName = deptInput.value.trim();
    if (!deptName) return;

    let departments = JSON.parse(localStorage.getItem('departments')) || [];
    departments.push(deptName);

    localStorage.setItem('departments', JSON.stringify(departments));

    deptInput.value = '';
    loadDepartments();
}

function loadDepartments() {

    const deptList = document.getElementById('deptList');
    if (!deptList) return;

    deptList.innerHTML = '';

    let departments = JSON.parse(localStorage.getItem('departments')) || [];

    departments.forEach(dept => {
        const li = document.createElement('li');
        li.textContent = dept;
        deptList.appendChild(li);
    });
}

document.addEventListener('DOMContentLoaded', loadDepartments);


// ================= NOTICE SYSTEM =================
function publishNotice() {

    const noticeInput = document.getElementById('noticeText');
    if (!noticeInput) return;

    const noticeText = noticeInput.value.trim();
    if (!noticeText) return;

    let notices = JSON.parse(localStorage.getItem('notices')) || [];
    notices.push(noticeText);

    localStorage.setItem('notices', JSON.stringify(notices));

    noticeInput.value = '';
    loadNotices();
}

function loadNotices() {

    const noticeList = document.getElementById('noticeList');
    if (!noticeList) return;

    noticeList.innerHTML = '';

    let notices = JSON.parse(localStorage.getItem('notices')) || [];

    notices.forEach(n => {
        const li = document.createElement('li');
        li.textContent = n;
        noticeList.appendChild(li);
    });
}

document.addEventListener('DOMContentLoaded', loadNotices);


// ================= DARK MODE =================
document.addEventListener('DOMContentLoaded', function () {

    const toggle = document.getElementById('darkModeToggle');

    if (!toggle) return;

    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
        toggle.checked = true;
    }

    toggle.addEventListener('change', function () {

        if (this.checked) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('darkMode', 'enabled');
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('darkMode', 'disabled');
        }

    });

});

});
