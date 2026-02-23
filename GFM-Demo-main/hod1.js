document.addEventListener("DOMContentLoaded", function () {

    // ================= DELETE HOD =================
    const deleteButtons = document.querySelectorAll(".delete-hod-btn");

    deleteButtons.forEach(button => {
        button.addEventListener("click", function (e) {
            e.preventDefault();
            e.stopPropagation(); // Prevent card redirect

            const confirmDelete = confirm("Are you sure you want to delete this HOD?");

            if (confirmDelete) {
                const card = button.closest(".faculty-card-link");
                if (card) {
                    card.remove();
                }
            }
        });
    });


    // ================= EDIT HOD =================
    const editButtons = document.querySelectorAll(".edit-hod-btn");

    editButtons.forEach(button => {
        button.addEventListener("click", function (e) {
            e.preventDefault();
            e.stopPropagation(); // Prevent redirect

            const card = button.closest(".faculty-card");
            const nameElement = card.querySelector(".hod-name");
            const deptElement = card.querySelector(".hod-dept");

            const newName = prompt("Edit HOD Name:", nameElement.textContent);
            const newDept = prompt("Edit Department:", deptElement.textContent);

            if (newName !== null && newName.trim() !== "") {
                nameElement.textContent = newName;
            }

            if (newDept !== null && newDept.trim() !== "") {
                deptElement.textContent = newDept;
            }
        });
    });

});
