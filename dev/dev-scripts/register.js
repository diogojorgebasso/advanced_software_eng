
const form = document.getElementById('registrationForm');
const message = document.getElementById('message');
const homeButton = document.getElementById('homeButton');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const user = {
        username: document.getElementById('username').value,
        password: document.getElementById('password').value
    };

    try {
        const response = await fetch('http://localhost:8080/api/auth/registration', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        });

        if (response.ok) {
            message.textContent = "Registration successful!";
            message.style.color = 'green';
            form.reset();
            homeButton.style.display = 'inline-block';
        

        // login request right after registration, more seamless UX
            const loginResponse = await fetch('http://localhost:8080/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: `username=${encodeURIComponent(user.username)}&password=${encodeURIComponent(user.password)}`,
                credentials: 'include' //without that, the application doesnt remember that we're logged in
            });

            if (loginResponse.ok) {
                message.textContent = "Registered and logged in successfully!";
                homeButton.style.display = 'inline-block';
            } else {
                message.textContent = "Registration ok, but auto-login failed.";
                message.style.color = 'orange';
                homeButton.style.display = 'inline-block';
            }
        } 

        
        
        
        else {
            const errorText = await response.text();
            message.textContent = `Registration failed: ${errorText}`;
            message.style.color = 'red';
        }
    } catch (error) {
        message.textContent = `An error occurred: ${error}`;
        message.style.color = 'red';
    }
});