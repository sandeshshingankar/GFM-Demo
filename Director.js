document.addEventListener('DOMContentLoaded', function () {

    const editBtn = document.querySelector('.edit-btn');
    const modal = document.getElementById('editModal');
    const closeModal = document.querySelector('.close-modal');
    const editForm = document.getElementById('editForm');

    const nameField = document.querySelector('.profile-info h2');
    const titleField = document.querySelector('.title');
    const deptField = document.querySelector('.department');

    // OPEN MODAL
    editBtn.addEventListener('click', function () {
        modal.style.display = 'block';

        // Fill current data
        document.getElementById('editName').value = nameField.textContent;
        document.getElementById('editTitle').value = titleField.textContent;
        document.getElementById('editDepartment').value = deptField.textContent;
    });

    // CLOSE MODAL
    closeModal.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    // SAVE CHANGES
    editForm.addEventListener('submit', function (e) {
        e.preventDefault();

        nameField.textContent = document.getElementById('editName').value;
        titleField.textContent = document.getElementById('editTitle').value;
        deptField.textContent = document.getElementById('editDepartment').value;

        modal.style.display = 'none';
    });

});
