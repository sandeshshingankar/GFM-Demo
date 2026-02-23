document.addEventListener('DOMContentLoaded', function () {

    const profileCard = document.querySelector('.profile-card');
    const nameField = document.querySelector('.profile-info h2');
    const titleField = document.querySelector('.title');
    const deptField = document.querySelector('.department');

    const editModal = document.getElementById('editModal');
    const deleteModal = document.getElementById('deleteModal');

    const editForm = document.getElementById('editForm');

    // ================= LOAD SAVED DATA =================
    const savedData = JSON.parse(localStorage.getItem('directorData'));

    if (savedData) {
        nameField.textContent = savedData.name;
        titleField.textContent = savedData.title;
        deptField.textContent = savedData.department;
    }

    if (localStorage.getItem('directorDeleted') === 'true') {
        profileCard.style.display = 'none';
    }

    // ================= CLICK EVENTS =================
    document.addEventListener('click', function (e) {

        // OPEN EDIT
        if (e.target.classList.contains('edit-btn')) {
            editModal.style.display = 'block';

            document.getElementById('editName').value = nameField.textContent;
            document.getElementById('editTitle').value = titleField.textContent;
            document.getElementById('editDepartment').value = deptField.textContent;
        }

        // CLOSE EDIT
        if (e.target.classList.contains('close-edit')) {
            editModal.style.display = 'none';
        }

        // OPEN DELETE
        if (e.target.classList.contains('delete-btn')) {
            deleteModal.style.display = 'block';
        }

        // CLOSE DELETE
        if (e.target.classList.contains('close-delete') ||
            e.target.classList.contains('cancel-btn')) {

            deleteModal.style.display = 'none';
        }

        // CONFIRM DELETE
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
