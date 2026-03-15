// --- Password Visibility ---
function togglePass(inputId, btnId) {
    const input = document.getElementById(inputId);
    const btn = document.getElementById(btnId);
    if (btn && input) {
        btn.onclick = () => {
            const type = input.type === 'password' ? 'text' : 'password';
            input.type = type;
            btn.innerText = type === 'password' ? '👁️' : '🙈';
        };
    }
}
togglePass('userPassword', 'toggleRegPassword');
togglePass('loginPassword', 'toggleLoginPassword');

// --- Real-time Rule Check ---
const regPass = document.getElementById('userPassword');
if (regPass) {
    regPass.oninput = () => {
        const val = regPass.value;
        document.getElementById('hint-cap').className = /^[A-Z]/.test(val) ? 'valid' : 'invalid';
        document.getElementById('hint-cap').innerText = /^[A-Z]/.test(val) ? '✅ Capital' : '❌ Capital';
        
        document.getElementById('hint-num').className = /[0-9]/.test(val) ? 'valid' : 'invalid';
        document.getElementById('hint-num').innerText = /[0-9]/.test(val) ? '✅ Number' : '❌ Number';

        document.getElementById('hint-spec').className = /[!@#$%^&*]/.test(val) ? 'valid' : 'invalid';
        document.getElementById('hint-spec').innerText = /[!@#$%^&*]/.test(val) ? '✅ Special' : '❌ Special';
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