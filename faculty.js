document.addEventListener("DOMContentLoaded", function () {

    const grid = document.querySelector(".faculty-grid");

    const addBtn = document.querySelector(".add-btn");
    const modal = document.getElementById("addFacultyModal");
    const closeBtn = document.querySelector(".close-add");
    const form = document.getElementById("addFacultyForm");

    const imageInput = document.getElementById("newFacultyImage");
    const preview = document.getElementById("facultyPreview");

    let selectedImage = "";

    // ===== OPEN MODAL =====
    addBtn.addEventListener("click", function (e) {
        e.preventDefault();
        modal.style.display = "flex";
    });

    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    window.addEventListener("click", function (e) {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });

    // ===== IMAGE PREVIEW =====
    imageInput.addEventListener("change", function () {
        const file = this.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                selectedImage = e.target.result;
                preview.src = selectedImage;
                preview.style.display = "block";
            };
            reader.readAsDataURL(file);
        }
    });

    // ===== ADD FACULTY =====
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("newFacultyName").value;
        const role = document.getElementById("newFacultyRole").value;
        const image = selectedImage || "nitin.png";

        const newCard = document.createElement("a");
        newCard.href = "#";
        newCard.className = "faculty-card-link";

        newCard.innerHTML = `
            <div class="faculty-card">
                <div class="faculty-image">
                    <img src="${image}" alt="${name}">
                </div>
                <div class="faculty-info">
                    <h3>${name}</h3>
                    <p>${role}</p>
                    <div class="faculty-actions">
                        <button class="edit-faculty-btn">Edit</button>
                        <button class="delete-faculty-btn">Delete</button>
                    </div>
                </div>
            </div>
        `;

        grid.appendChild(newCard);

        modal.style.display = "none";
        form.reset();
        preview.style.display = "none";
        selectedImage = "";
    });

});
