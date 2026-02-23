document.addEventListener('DOMContentLoaded', function () {
    loadDepartments();
    loadNotices();
});

function openPanel(panelId) {

    const panels = document.querySelectorAll('.dynamic-panel');

    panels.forEach(panel => {
        panel.style.display = 'none';
    });

    document.getElementById(panelId).style.display = 'block';
}


// ================= DEPARTMENTS =================

function addDepartment() {

    const deptInput = document.getElementById('newDept');
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
    deptList.innerHTML = '';

    let departments = JSON.parse(localStorage.getItem('departments')) || [];

    departments.forEach(dept => {
        const li = document.createElement('li');
        li.textContent = dept;
        deptList.appendChild(li);
    });
}


// ================= NOTICES =================

function publishNotice() {

    const noticeText = document.getElementById('noticeText').value.trim();
    if (!noticeText) return;

    let notices = JSON.parse(localStorage.getItem('notices')) || [];
    notices.push(noticeText);

    localStorage.setItem('notices', JSON.stringify(notices));

    document.getElementById('noticeText').value = '';
    loadNotices();
}

function loadNotices() {

    const noticeList = document.getElementById('noticeList');
    noticeList.innerHTML = '';

    let notices = JSON.parse(localStorage.getItem('notices')) || [];

    notices.forEach(n => {
        const li = document.createElement('li');
        li.textContent = n;
        noticeList.appendChild(li);
    });
}
