document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const errorMessage = document.getElementById('errorMessage');

    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        try {
            errorMessage.textContent = '';
            
            const response = await fetch('http://localhost:8080/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: `username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`,
                credentials: 'include'
            });
    
            if (response.ok || response.redirected) {
                window.location.href = 'index.html?login=success';
            } else {
                const error = await response.text();
                errorMessage.textContent = error || 'Identifiants incorrects';
            }
        } catch (error) {
            console.error('Login error:', error);
            errorMessage.textContent = 'Erreur de connexion au serveur';
        }
    });
});