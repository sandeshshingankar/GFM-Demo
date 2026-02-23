// Student data assigned to each faculty member
const facultyStudentData = {
    'nitin-dhawas': [
        { name: 'Sandesh Shingankar', rollNo: '70', class: 'TE IT-A', contact: '8668916936', email: 'sandeshshingankar8@gmail.com' },
        { name: 'Khushal Shantaram Warule', rollNo: '80', class: 'TE IT-A', contact: '7249256930', email: 'khushalwarule2005@gmail.com' },
        { name: 'Vaishnavi Appasaheb Kadganchi', rollNo: '79', class: 'TE IT-A', contact: '7709411329', email: 'vaishnavikadganchi@gmail.com' },
          ],
    'dheeraj-patil': [
        { name: 'Sandesh Shingankar', rollNo: '70', class: 'TE IT-A', contact: '8668916936', email: 'sandeshshingankar8@gmail.com' },
        { name: 'Khushal Shantaram Warule', rollNo: '80', class: 'TE IT-A', contact: '7249256930', email: 'khushalwarule2005@gmail.com' },
        { name: 'Vaishnavi Appasaheb Kadganchi', rollNo: '79', class: 'TE IT-A', contact: '7709411329', email: 'vaishnavikadganchi@gmail.com' },
           ],
    'nitin-wankhade': [
       { name: 'Sandesh Shingankar', rollNo: '70', class: 'TE IT-A', contact: '8668916936', email: 'sandeshshingankar8@gmail.com' },
        { name: 'Khushal Shantaram Warule', rollNo: '80', class: 'TE IT-A', contact: '7249256930', email: 'khushalwarule2005@gmail.com' },
        { name: 'Vaishnavi Appasaheb Kadganchi', rollNo: '79', class: 'TE IT-A', contact: '7709411329', email: 'vaishnavikadganchi@gmail.com' },
           ],
    'roshni-narkhede': [
        { name: 'Sandesh Shingankar', rollNo: '70', class: 'TE IT-A', contact: '8668916936', email: 'sandeshshingankar8@gmail.com' },
        { name: 'Khushal Shantaram Warule', rollNo: '80', class: 'TE IT-A', contact: '7249256930', email: 'khushalwarule2005@gmail.com' },
        { name: 'Vaishnavi Appasaheb Kadganchi', rollNo: '79', class: 'TE IT-A', contact: '7709411329', email: 'vaishnavikadganchi@gmail.com' },
          ],
    'sonali-dongare': [
       { name: 'Sandesh Shingankar', rollNo: '70', class: 'TE IT-A', contact: '8668916936', email: 'sandeshshingankar8@gmail.com' },
        { name: 'Khushal Shantaram Warule', rollNo: '80', class: 'TE IT-A', contact: '7249256930', email: 'khushalwarule2005@gmail.com' },
        { name: 'Vaishnavi Appasaheb Kadganchi', rollNo: '79', class: 'TE IT-A', contact: '7709411329', email: 'vaishnavikadganchi@gmail.com' },
          ],
     'vivek-nagargoje': [
       { name: 'Sandesh Shingankar', rollNo: '70', class: 'TE IT-A', contact: '8668916936', email: 'sandeshshingankar8@gmail.com' },
        { name: 'Khushal Shantaram Warule', rollNo: '80', class: 'TE IT-A', contact: '7249256930', email: 'khushalwarule2005@gmail.com' },
        { name: 'Vaishnavi Appasaheb Kadganchi', rollNo: '79', class: 'TE IT-A', contact: '7709411329', email: 'vaishnavikadganchi@gmail.com' },
         ],
    'vanita-deshmukh': [
       { name: 'Sandesh Shingankar', rollNo: '70', class: 'TE IT-A', contact: '8668916936', email: 'sandeshshingankar8@gmail.com' },
        { name: 'Khushal Shantaram Warule', rollNo: '80', class: 'TE IT-A', contact: '7249256930', email: 'khushalwarule2005@gmail.com' },
        { name: 'Vaishnavi Appasaheb Kadganchi', rollNo: '79', class: 'TE IT-A', contact: '7709411329', email: 'vaishnavikadganchi@gmail.com' },
           ],
    'hemlata-mane': [
       { name: 'Sandesh Shingankar', rollNo: '70', class: 'TE IT-A', contact: '8668916936', email: 'sandeshshingankar8@gmail.com' },
        { name: 'Khushal Shantaram Warule', rollNo: '80', class: 'TE IT-A', contact: '7249256930', email: 'khushalwarule2005@gmail.com' },
        { name: 'Vaishnavi Appasaheb Kadganchi', rollNo: '79', class: 'TE IT-A', contact: '7709411329', email: 'vaishnavikadganchi@gmail.com' },
            ],
    'bharti-dhote': [
       { name: 'Sandesh Shingankar', rollNo: '70', class: 'TE IT-A', contact: '8668916936', email: 'sandeshshingankar8@gmail.com' },
        { name: 'Khushal Shantaram Warule', rollNo: '80', class: 'TE IT-A', contact: '7249256930', email: 'khushalwarule2005@gmail.com' },
        { name: 'Vaishnavi Appasaheb Kadganchi', rollNo: '79', class: 'TE IT-A', contact: '7709411329', email: 'vaishnavikadganchi@gmail.com' },
            ],
    'ajay-sonawane': [
       { name: 'Sandesh Shingankar', rollNo: '70', class: 'TE IT-A', contact: '8668916936', email: 'sandeshshingankar8@gmail.com' },
        { name: 'Khushal Shantaram Warule', rollNo: '80', class: 'TE IT-A', contact: '7249256930', email: 'khushalwarule2005@gmail.com' },
        { name: 'Vaishnavi Appasaheb Kadganchi', rollNo: '79', class: 'TE IT-A', contact: '7709411329', email: 'vaishnavikadganchi@gmail.com' },
             ],
};

// Faculty profile data
const facultyProfiles = {
    'nitin-dhawas': {
        name: 'Dr. Nitin Dhawas',
        designation: 'Professor',
        expertise: 'Wireless Communication, Mobile Computing, Cloud Computing',
        qualification: 'PhD (Electronics & Communication Engineering), ME (Information Technology)',
        experience: '27 Year Teaching',
        publications: 'International Journal : 55 International Conference: 14Copyright & Patent: 15',
        image: 'https://www.nmiet.edu.in/wp-content/uploads/2025/04/dr-nitin-dhawas.png'
    },
    'dheeraj-patil': {
        name: 'Prof. Dheeraj Patil',
        designation: 'Assistant Professor & Academic Coordinator',
        expertise: ' Computer Networking, Computer Security',
        qualification: 'M.E(Comp Engg) ,B.E(Comp Engg) )',
        experience: '17 Year Teaching',
        publications: 'International Journal : 08 International Conference: 04 Copyright & Patent: 02',  
        image: 'https://www.nmiet.edu.in/wp-content/uploads/2025/04/mr-diraj-patil.png'
    },
    'nitin-wankhade': {
        name: 'Prof. Nitin Wankhade',
        designation: 'Assistant Professor',
        expertise: 'Machine Learning, Generative AI',
        qualification: 'PhD(Pursuing), ME (Information Technology)',
        experience: '18 Years Teaching',
        publications: 'International Journal - 02 International Conference -06 Copyright & Patent: 02',
        image: 'https://www.nmiet.edu.in/wp-content/uploads/2025/04/dr-nitin-wankhande.png'
    },
    'roshni-narkhede': {
        name: 'Prof. Roshni Narkhede',
        designation: 'Assistant Professor',
        expertise: 'Software Testing, Information Security',
        qualification: 'ME (Computer Engineering)',
        experience: '9.2 Years Teaching',
        image: 'https://www.nmiet.edu.in/wp-content/uploads/2025/04/mrs-roshini.png'
    },
    'sonali-dongare': {
        name: 'Prof. Sonali Dongare',
        designation: 'Assistant Professor',
        expertise: 'Programming, Data Structure, Machine Learning, Web Application Development',
        qualification: 'M.E(Comp Engg),B.E(Comp Engg)',
        experience: '19.2 Years Teaching',
        publications: 'International Journal : 10 International Conference: 04 Copyright & Patent: 5 Copyright and 1 Patent',
        image: 'https://www.nmiet.edu.in/wp-content/uploads/2025/04/mrs-sonali-dongre.png'
    },
    'vivek-nagargoje': {
        name: 'Prof. Vivek Nagargoje',
        designation: 'Assistant Professor',
        expertise: 'Cloud computing',
        qualification: 'PhD(Pursuing), ME (Information Technology)',
        experience: '17 Years Teaching',
        publications: 'International Journal - 04 International Conference -01 Copyright & Patent: 01(Copyright) & 02(Patent)',
        image: 'https://www.nmiet.edu.in/wp-content/uploads/2025/04/mr-niraj.png'
    },
    'vanita-deshmukh': {
        name: 'Prof. Vanita Deshmukh',
        designation: 'Assistant Professor',
        expertise: 'Data communication.',
        qualification: 'M.E.(E&C)',
        experience: '3.5 Years',
        image: 'https://www.nmiet.edu.in/wp-content/uploads/2025/11/prof-sunita-deskmukha.png'
    },
    'hemlata-mane': {
        name: 'Prof. Hemlata Mane',
        designation: 'Assistant Professor',
        expertise: 'Software Testing, Information Security Expertise: Programming, Data Structure, Machine Learning, Web Application Development ',
        qualification: 'ME (Computer Engineering). BE (IT)',
        experience: '5.3 Years Teaching',
        publications: 'International Journal : 10 International Conference: 04 Copyright & Patent: 5 Copyright and 1 Patent',
        image: 'https://www.nmiet.edu.in/wp-content/uploads/2025/04/hemlata-mane.png'
    },
    'bharti-dhote': {
        name: 'Prof. Bharti Dhote',
        designation: 'Assistant Professor',
        expertise: 'Data Structure, Theory of Computation',
        qualification: 'PhD (Pursuing), ME (Computer Engineering), B.E. (Computer Engineering)',
        experience: '19 Years Teaching',
        publications: 'International journal: 04 International conference:01 Copyright & Patent: 01',
        image: 'https://www.nmiet.edu.in/wp-content/uploads/2025/04/mrs-bharti.png'
    },
    'ajay-sonawane': {
        name: 'Prof. Ajay Sonawane',
        designation: 'Assistant Professor',
        expertise: 'Machine Learning, AIML, Deep Learning, Data Science',
        qualification: 'PhD (pursuing), MTech.(Computer Science and Engineering)',
        experience: '7 Years Teaching',
        publications: 'International Journal: 08 International Conference: 04 Copyright & Patent: 01(Copyright) & 01(Patent)',
        image: 'https://www.nmiet.edu.in/wp-content/uploads/2025/11/prof-ajay-tukaram-sonawane.png'
    }
};

let currentFacultyName = '';
let allStudents = [];

// Initialize dashboard
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    currentFacultyName = urlParams.get('faculty') || 'nitin-dhawas';


    loadFacultyProfile();
    loadStudents();
    setupSearch();
});

// Load faculty profile
function loadFacultyProfile() {
    const profileContainer = document.getElementById('faculty-profile');
    const profile = facultyProfiles[currentFacultyName];

    if (!profile) {
        profileContainer.innerHTML = '<p>Faculty profile not found.</p>';
        return;
    }

    profileContainer.innerHTML = `
        <img src="${profile.image}" alt="${profile.name}" class="faculty-profile-image">

        <div class="faculty-profile-info">
            <h2>${profile.name}</h2>
            <p class="designation">${profile.designation}</p>

            <div class="faculty-detail-item">
                <strong>Qualification:</strong>
                ${profile.qualification}
            </div>

            <div class="faculty-detail-item">
                <strong>Experience:</strong>
                ${profile.experience}
            </div>

            <div class="faculty-detail-item">
                <strong>Expertise:</strong>
                ${profile.expertise}
            </div>

            ${
                profile.publications
                ? `<div class="faculty-detail-item">
                        <strong>Publications:</strong>
                        ${profile.publications}
                   </div>`
                : ''
            }

            <div class="faculty-actions">
                <button class="action-btn btn-edit">✎ Edit Profile</button>
                <button class="action-btn btn-message">💬 Send Message</button>
            </div>
        </div>
    `;
}


// Load students
function loadStudents() {
    const students = facultyStudentData[currentFacultyName] || [];
    allStudents = students;
    renderStudents(students);
}

// Render students in table
function renderStudents(students) {
    const tbody = document.getElementById('students-tbody');
    const noResults = document.getElementById('no-results');

    if (students.length === 0) {
        tbody.innerHTML = '';
        noResults.style.display = 'block';
        return;
    }

    noResults.style.display = 'none';

    tbody.innerHTML = students.map(student => `
        <tr>
            <td><strong>${student.name}</strong></td>
            <td>${student.rollNo}</td>
            <td>${student.class}</td>
            <td>${student.contact}</td>
            <td>${student.email}</td>
            <td>
                <div class="table-actions">
                    <button class="table-action-btn btn-view"
 onclick="viewStudent('${student.name}','${student.rollNo}','${student.email}')">
 👁 View
</button>
                    <button class="table-action-btn btn-edit-student" aria-label="Edit student information">✎ Edit</button>
                    <button class="table-action-btn btn-attendance" aria-label="View attendance">📋 Attendance</button>
                    <button class="table-action-btn btn-academic" aria-label="View academic details">📊 Academics</button>
                </div>
            </td>
        </tr>
    `).join('');

    // Add event listeners to action buttons
    document.querySelectorAll('.table-action-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const action = this.textContent.toLowerCase();
            alert(`Action: ${action}`);
        });

        btn.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
}

// Setup search functionality
function setupSearch() {
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.querySelector('.search-btn');

    const performSearch = () => {
        const query = searchInput.value.toLowerCase();
        const filtered = allStudents.filter(student => 
            student.name.toLowerCase().includes(query) ||
            student.rollNo.includes(query) ||
            student.email.toLowerCase().includes(query)
        );
        renderStudents(filtered);
    };

    searchInput.addEventListener('input', performSearch);
    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
} 
function viewStudent(name, roll, email) {
    window.location.href =
      "student.html?name=" + encodeURIComponent(name) +
      "&roll=" + roll +
      "&email=" + encodeURIComponent(email);
}

// EDIT PROFILE BUTTON CLICK
document.querySelector(".btn-edit").addEventListener("click", function () {
  document.getElementById("editProfileModal").style.display = "block";
});

// SAVE PROFILE FUNCTION
function saveProfile() {
  const name = document.getElementById("editName").value;
  const dept = document.getElementById("editDept").value;

  document.getElementById("facultyName").innerText = name;
  document.getElementById("facultyDept").innerText = dept;

  alert("Profile updated successfully");
  document.getElementById("editProfileModal").style.display = "none";
}
// OPEN MESSAGE BOX
document.querySelector(".btn-message").addEventListener("click", function () {
  document.getElementById("messageBox").style.display = "block";
});

// SEND MESSAGE FUNCTION
function sendMessage() {
  const to = document.getElementById("messageTo").value;
  const msg = document.getElementById("messageText").value;

  if (msg === "") {
    alert("Please type a message");
    return;
  }

  alert("Message sent to " + to);
  document.getElementById("messageText").value = "";
}
let selectedStudentIndex = null;

// OPEN EDIT MODAL
document.addEventListener("click", function (e) {
    if (e.target.classList.contains("btn-edit-student")) {
        selectedStudentIndex = [...document.querySelectorAll(".btn-edit-student")]
            .indexOf(e.target);

        const student = allStudents[selectedStudentIndex];

        document.getElementById("editStudentName").value = student.name;
        document.getElementById("editStudentRoll").value = student.rollNo;
        document.getElementById("editStudentEmail").value = student.email;

        document.getElementById("editStudentModal").style.display = "block";
    }
});

// SAVE CHANGES
function saveStudentEdit() {
    allStudents[selectedStudentIndex].name =
        document.getElementById("editStudentName").value;

    allStudents[selectedStudentIndex].rollNo =
        document.getElementById("editStudentRoll").value;

    allStudents[selectedStudentIndex].email =
        document.getElementById("editStudentEmail").value;

    renderStudents(allStudents);
    closeEditModal();
}

// CLOSE MODAL
function closeEditModal() {
    document.getElementById("editStudentModal").style.display = "none";
}
// ================= ANNOUNCEMENT =================

function openAnnouncementBox() {
    document.getElementById("announcementBox").style.display = "block";
}

function closeAnnouncementBox() {
    document.getElementById("announcementBox").style.display = "none";
}

function sendAnnouncement() {
    const text = document.getElementById("announcementText").value;

    if (text.trim() === "") {
        alert("Please write an announcement");
        return;
    }

    document.getElementById("announcementOutput").textContent =
        "Announcement Sent: " + text;

    document.getElementById("announcementText").value = "";
}
const students = [
  {
    name: "Amit Patil",
    roll: "70",
    classDiv: "TE-IT",
    contact: "9876543210",
    email: "amit@nmiet.edu.in"
  },
  {
    name: "Sneha Deshmukh",
    roll: "71",
    classDiv: "TE-IT",
    contact: "9876543211",
    email: "sneha@nmiet.edu.in"
  }
];
function loadStudents() {
  const tbody = document.getElementById("students-tbody");
  tbody.innerHTML = "";

  students.forEach((s) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${s.name}</td>
      <td>${s.roll}</td>
      <td>${s.classDiv}</td>
      <td>${s.contact}</td>
      <td>${s.email}</td>
      <td>
        <a href="student.html?name=${s.name}&roll=${s.roll}&email=${s.email}"
           class="action-btn btn-view">View</a>
      </td>
    `;

    tbody.appendChild(row);
  });
}
document.addEventListener("DOMContentLoaded", loadStudents);
