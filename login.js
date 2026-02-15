// ================= LOGIN SYSTEM =================

// ---------- DEMO CREDENTIALS ----------
const DEMO_CREDENTIALS = {
    admin: { email: 'admin@nmiet.edu.in', password: 'admin123' },
    faculty: { email: 'faculty@nmiet.edu.in', password: 'faculty123' },
    student: { email: 'student@nmiet.edu.in', password: 'student123' },
    parent: { email: 'parent@nmiet.edu.in', password: 'parent123' },
    principal: { email: 'principal@nmiet.edu.in', password: 'principal123' },

};

// ---------- ROLE → DEFAULT PAGE ----------
const ROLE_PAGES = {
    admin: 'hod.html',
    faculty: 'faculty-dashboard.html',
    student: 'student.html',
    parent: 'parent.html',
    principal: 'principal.html'

};

// ================= INIT =================
document.addEventListener('DOMContentLoaded', function () {
    initializeLoginSystem();
});

function initializeLoginSystem() {
    createLoginModal();          // OLD login window (unchanged)
    attachRoleCardListeners();   // events
    protectDashboard();          // block direct access
}
// ================= INIT =================
document.addEventListener('DOMContentLoaded', function () {
    initializeLoginSystem();

    // ===== DEPARTMENT INTERACTION (FINAL & CLEAN) =====
    const deptSelect = document.getElementById('departmentSelect');
    const roleCards = document.getElementById('roleCards');
    const roleSection = document.getElementById('roleSection');

    if (deptSelect && roleCards) {
        // Initially disable cards
        roleCards.classList.add('disabled');

        deptSelect.addEventListener('change', () => {
            const dept = deptSelect.value;

            if (dept) {
                sessionStorage.setItem('department', dept);

                roleCards.classList.remove('disabled');
                roleCards.classList.add('active');

                deptSelect.classList.add('selected');

                roleSection.scrollIntoView({ behavior: 'smooth' });
            } else {
                roleCards.classList.add('disabled');
            }
        });
    }

    // ===== BLOCK ROLE CLICK WITHOUT DEPARTMENT =====
    const cardLinks = document.querySelectorAll('.card-link');

cardLinks.forEach(card => {
    card.addEventListener('click', (e) => {

        // If Principal card → allow directly
        if (card.getAttribute('href') === 'principal.html') {
            return;
        }

        const dept = sessionStorage.getItem('department');

        if (!dept) {
            e.preventDefault();
            alert('Please select department first');
        }
    });
});

    // ===== CLOSE LOGIN BUTTON =====
    const closeBtn = document.querySelector('.login-close');
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            window.location.href = 'index.html';
        });
    }
});


// ================= ATTACH LISTENERS =================
function attachRoleCardListeners() {

    // ---- ADMIN / STUDENT / PARENT cards ----
    const roles = ['admin', 'faculty', 'student', 'parent', 'principal'];

    roles.forEach(role => {
        const cardLink = document.querySelector(`a[href="${ROLE_PAGES[role]}"]`);
        if (cardLink) {
            cardLink.addEventListener('click', function (e) {
                e.preventDefault();
                openLoginModal(role);
            });
        }
    });

    // ---- FACULTY PHOTO CLICK ----
   // ---------- FACULTY PHOTO LOGIN (ONLY ON faculty.html) ----------
if (window.location.pathname.includes('faculty.html')) {

    const facultyPhotos = document.querySelectorAll('.faculty-login');

    facultyPhotos.forEach(photo => {
        photo.addEventListener('click', function (e) {
            e.preventDefault();

            const parentLink = photo.closest('a');
            if (parentLink) {
                sessionStorage.setItem(
                    'postLoginRedirect',
                    parentLink.getAttribute('href')
                );
            }

            openLoginModal('faculty');
        });
    });
}

}

// ================= LOGIN MODAL (OLD UI – DO NOT CHANGE) =================
function createLoginModal() {
    if (document.getElementById('loginModal')) return;

    const loginHTML = `
        <div id="loginModal" class="login-modal">
            <div class="login-container">
                <button class="login-close" onclick="closeLoginModal()">&times;</button>

                <div class="login-header">
                    <span class="login-icon" id="roleIcon">👨‍💼</span>
                    <h2 id="roleTitle">Login</h2>
                    <p id="roleSubtitle">Enter your credentials</p>
                </div>

                <form class="login-form" onsubmit="handleLoginSubmit(event)">
                    <div class="error-message" id="errorMessage"></div>

                    <div class="form-group">
                        <label>Email</label>
                        <input type="email" id="email" required>
                    </div>

                    <div class="form-group">
                        <label>Password</label>
                        <input type="password" id="password" required>
                    </div>

                    <button type="submit" class="login-btn">Sign In</button>
                    <div class="login-links" style="margin-top:15px; text-align:center;">
    <a href="#" onclick="handleForgotPassword(event)">Forgot Password?</a>
    <br><br>
    <a href="#" onclick="handleCreateAccount(event)">Create New Account</a>
</div>


                    <div class="demo-credentials">
                        <strong>Demo Credentials:</strong><br>
                        <span id="demoEmail"></span><br>
                        <span id="demoPassword"></span>
                    </div>
                </form>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', loginHTML);
}

// ================= OPEN / CLOSE MODAL =================
function openLoginModal(role) {
    const modal = document.getElementById('loginModal');
    modal.dataset.currentRole = role;

    document.getElementById('roleTitle').textContent =
        role.charAt(0).toUpperCase() + role.slice(1) + ' Login';

    document.getElementById('demoEmail').textContent =
        DEMO_CREDENTIALS[role].email;

    document.getElementById('demoPassword').textContent =
        DEMO_CREDENTIALS[role].password;

    document.getElementById('errorMessage').textContent = '';
    modal.classList.add('active');
}


// ================= HANDLE LOGIN =================
function handleLoginSubmit(e) {
    e.preventDefault();

    const role = document.getElementById('loginModal').dataset.currentRole;
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

    if (
        email === DEMO_CREDENTIALS[role].email &&
        password === DEMO_CREDENTIALS[role].password
    ) {
        // save session
        sessionStorage.setItem(
            'userSession',
            JSON.stringify({ role, time: Date.now() })
        );

        // redirect (faculty photo specific OR default)
        const redirectUrl =
            sessionStorage.getItem('postLoginRedirect') ||
            ROLE_PAGES[role];

        sessionStorage.removeItem('postLoginRedirect');
        window.location.href = redirectUrl;

    } else {
        document.getElementById('errorMessage').textContent =
            'Invalid email or password';
    }
}

// ================= PROTECT DASHBOARD =================
function protectDashboard() {
    const path = window.location.pathname;

    if (path.includes('faculty-dashboard.html')) {
        const session = JSON.parse(
            sessionStorage.getItem('userSession') || '{}'
        );

        if (session.role !== 'faculty') {
            window.location.href = 'faculty.html';
        }
    }
}

// ================= LOGOUT (OPTIONAL) =================
function logout() {
    sessionStorage.removeItem('userSession');
    window.location.href = 'index.html';
}
// ================= FORGOT PASSWORD =================
function handleForgotPassword(e) {
    e.preventDefault();
    alert(
        "Forgot Password\n\n" +
        "Please contact the IT Department / Admin.\n" +
        "Password reset feature will be available soon."
    );
}

// ================= CREATE ACCOUNT =================
function handleCreateAccount(e) {
    e.preventDefault();
    alert(
        "Create New Account\n\n" +
        "New account creation is handled by Admin.\n" +
        "Please contact the IT Department for registration."
    );
}




