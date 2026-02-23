document.addEventListener('DOMContentLoaded', function () {

    const editBtn = document.querySelector('.edit-btn');
    const deleteBtn = document.querySelector('.delete-btn');

    if (editBtn) {
        editBtn.addEventListener('click', function () {
            openEditModal();
        });
    }

    if (deleteBtn) {
        deleteBtn.addEventListener('click', function () {
            handleDelete();
        });
    }

});

// ===== EDIT FUNCTION =====
function openEditModal() {
    alert("Edit Director Profile - You can implement form here.");
}

// ===== DELETE FUNCTION =====
function handleDelete() {
    const confirmDelete = confirm("Are you sure you want to delete this profile?");

    if (confirmDelete) {
        alert("Director profile deleted (demo only).");
        // Later: Call backend API here
    }
}
