document.addEventListener('DOMContentLoaded', function () {

    const editBtn = document.querySelector('.edit-btn');
    const deleteBtn = document.querySelector('.delete-btn');

    const editModal = document.getElementById('editModal');
    const deleteModal = document.getElementById('deleteModal');

    const closeEdit = document.querySelector('.close-edit');
    const closeDelete = document.querySelector('.close-delete');

    const editForm = document.getElementById('editForm');

    const confirmDelete = document.getElementById('confirmDelete');
    const cancelDelete = document.getElementById('cancelDelete');

    const profileCard = document.querySelector('.profile-card');

    const nameField = document.querySelector('.profile-info h2');
    const titleField = document.querySelector('.title');
    const deptField = document.querySelector('.department');

    // ===== EDIT BUTTON =====
    if (editBtn) {
        editBtn.addEventListener('click', function () {
            editModal.style.display = 'block';

            document.getElementById('editName').value = nameField.textContent;
            document.getElementById('editTitle').value = titleField.textContent;
            document.getElementById('editDepartment').value = deptField.textContent;
        });
    }

    if (closeEdit) {
        closeEdit.addEventListener('click', function () {
            editModal.style.display = 'none';
        });
    }

    if (editForm) {
        editForm.addEventListener('submit', function (e) {
            e.preventDefault();

            nameField.textContent = document.getElementById('editName').value;
            titleField.textContent = document.getElementById('editTitle').value;
            deptField.textContent = document.getElementById('editDepartment').value;

            editModal.style.display = 'none';
        });
    }

    // ===== DELETE BUTTON =====
    if (deleteBtn) {
        deleteBtn.addEventListener('click', function () {
            deleteModal.style.display = 'block';
        });
    }

    if (closeDelete) {
        closeDelete.addEventListener('click', function () {
            deleteModal.style.display = 'none';
        });
    }

    if (cancelDelete) {
        cancelDelete.addEventListener('click', function () {
            deleteModal.style.display = 'none';
        });
    }

    if (confirmDelete) {
        confirmDelete.addEventListener('click', function () {
            profileCard.style.display = 'none';
            deleteModal.style.display = 'none';
        });
    }

});
