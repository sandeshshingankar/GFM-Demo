document.addEventListener('DOMContentLoaded', function () {

    const editBtn = document.querySelector('.edit-btn');
    const deleteBtn = document.querySelector('.delete-btn');

    const editModal = document.getElementById('editModal');
    const deleteModal = document.getElementById('deleteModal');

    const closeModal = document.querySelector('.close-modal');
    const closeDelete = document.querySelector('.close-delete');

    const confirmDelete = document.getElementById('confirmDelete');
    const cancelDelete = document.getElementById('cancelDelete');

    const editForm = document.getElementById('editForm');

    const profileCard = document.querySelector('.profile-card');

    const nameField = document.querySelector('.profile-info h2');
    const titleField = document.querySelector('.title');
    const deptField = document.querySelector('.department');

    // ===== OPEN EDIT =====
    editBtn.addEventListener('click', function () {
        editModal.style.display = 'block';

        document.getElementById('editName').value = nameField.textContent;
        document.getElementById('editTitle').value = titleField.textContent;
        document.getElementById('editDepartment').value = deptField.textContent;
    });

    // ===== CLOSE EDIT =====
    closeModal.addEventListener('click', function () {
        editModal.style.display = 'none';
    });

    // ===== SAVE EDIT =====
    editForm.addEventListener('submit', function (e) {
        e.preventDefault();

        nameField.textContent = document.getElementById('editName').value;
        titleField.textContent = document.getElementById('editTitle').value;
        deptField.textContent = document.getElementById('editDepartment').value;

        editModal.style.display = 'none';
    });

    // ===== OPEN DELETE =====
    deleteBtn.addEventListener('click', function () {
        deleteModal.style.display = 'block';
    });

    // ===== CANCEL DELETE =====
    cancelDelete.addEventListener('click', function () {
        deleteModal.style.display = 'none';
    });

    closeDelete.addEventListener('click', function () {
        deleteModal.style.display = 'none';
    });

    // ===== CONFIRM DELETE =====
    confirmDelete.addEventListener('click', function () {
        profileCard.style.display = 'none';
        deleteModal.style.display = 'none';
    });

});
