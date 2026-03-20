// --- Fixed Password Visibility Logic ---
function togglePass(inputId, btnId) {
    const input = document.getElementById(inputId);
    const btn = document.getElementById(btnId);
    
    if (btn && input) {
        btn.addEventListener('click', function() {
            // Check current type and flip it
            if (input.type === 'password') {
                input.type = 'text';
                btn.innerText = '🙈'; // Eye closed icon
            } else {
                input.type = 'password';
                btn.innerText = '👁️'; // Eye open icon
            }
        });
    }
}

// Re-initialize for both pages correctly
togglePass('userPassword', 'toggleRegPassword');
togglePass('loginPassword', 'toggleLoginPassword');

/* Keep your Registration and Login Submit Logic below this line... */

// --- Real-time Rule Check ---
const regPass = document.getElementById('userPassword');
if (regPass) {
    regPass.oninput = () => {
        const val = regPass.value;
        
        // Update helper function
        const updateRule = (id, condition, text) => {
            const el = document.getElementById(id);
            if (condition) {
                el.classList.add('valid');
                el.classList.remove('invalid');
                el.innerText = `✅ ${text}`;
            } else {
                el.classList.add('invalid');
                el.classList.remove('valid');
                el.innerText = `❌ ${text}`;
            }
        };

        updateRule('hint-cap', /^[A-Z]/.test(val), "Capital");
        updateRule('hint-num', /[0-9]/.test(val), "Number");
        updateRule('hint-spec', /[!@#$%^&*]/.test(val), "Special");
    };
}

// --- Registration ---
const regForm = document.getElementById('registrationForm');
if (regForm) {
    regForm.onsubmit = (e) => {
        e.preventDefault();
        const user = {
            name: document.getElementById('userName').value,
            email: document.getElementById('userEmail').value,
            password: regPass.value
        };
        localStorage.setItem('userAccount', JSON.stringify(user));
        alert("Registration Successful!");
        window.location.href = "login.html";
    };
}

// --- Login ---
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.onsubmit = (e) => {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const pass = document.getElementById('loginPassword').value;
        const saved = JSON.parse(localStorage.getItem('userAccount'));

        if (saved && saved.email === email && saved.password === pass) {
            window.location.href = "dashboard.html";
        } else {
            document.getElementById('login-error').innerText = "Incorrect email or password.";
        }
    };
}