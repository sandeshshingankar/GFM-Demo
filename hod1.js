document.addEventListener("DOMContentLoaded", function () {

    const grid = document.querySelector(".faculty-grid");

    // ================= ADD HOD MODAL =================
    const addBtn = document.querySelector(".add-btn");
    const addModal = document.getElementById("addHodModal");
    const closeAdd = document.querySelector(".close-add");
    const addForm = document.getElementById("addHodForm");

    // Open Modal
    addBtn.addEventListener("click", function (e) {
        e.preventDefault();
        addModal.style.display = "flex";
    });

    // Close Modal
    closeAdd.addEventListener("click", function () {
        addModal.style.display = "none";
    });

    // Close when clicking outside modal
    window.addEventListener("click", function (e) {
        if (e.target === addModal) {
            addModal.style.display = "none";
        }
    });

    // ================= ADD NEW HOD =================
    addForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("newHodName").value;
        const dept = document.getElementById("newHodDept").value;
        const image = document.getElementById("newHodImage").value || "principal.jpg";

        const newCard = document.createElement("a");
        newCard.href = "hod.html";
        newCard.className = "faculty-card-link";

        newCard.innerHTML = `
            <div class="faculty-card">
                <div class="faculty-image">
                    <img src="${image}" alt="${name}">
                </div>
                <div class="faculty-info">
                    <h3 class="hod-name">${name}</h3>
                    <p class="hod-dept">${dept}</p>
                    <div class="hod-actions">
                        <button class="edit-hod-btn">Edit</button>
                        <button class="delete-hod-btn">Delete</button>
                    </div>
                </div>
            </div>
        `;

        grid.appendChild(newCard);
        addModal.style.display = "none";
        addForm.reset();
    });

    // ================= EDIT & DELETE (EVENT DELEGATION) =================
    grid.addEventListener("click", function (e) {

        // DELETE
        if (e.target.classList.contains("delete-hod-btn")) {
            e.preventDefault();
            e.stopPropagation();

            const confirmDelete = confirm("Are you sure you want to delete this HOD?");
            if (confirmDelete) {
                const card = e.target.closest(".faculty-card-link");
                if (card) {
                    card.remove();
                }
            }
        }

        // EDIT
        if (e.target.classList.contains("edit-hod-btn")) {
            e.preventDefault();
            e.stopPropagation();

            const card = e.target.closest(".faculty-card");
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
        }

    });

});
