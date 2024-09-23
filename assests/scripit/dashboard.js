// Submit user data to the backend
async function submitUserData() {
    const userId = document.getElementById('userId').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const enrollmentDate = document.getElementById('enrollmentDate').value;
    const role = document.getElementById('role').value;

    const userData = { userId, name, email, enrollmentDate, role };

    try {
        const response = await fetch('http://localhost:5000/submitUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        const result = await response.json();
        alert(result.message);
        if (response.ok) {
            loadUsers();
        }
    } catch (error) {
        console.error("Error:", error);
    }
}

// Load user data from backend and display it in the dashboard
async function loadUsers() {
    try {
        const response = await fetch('http://localhost:5000/getUsers');
        const users = await response.json();

        const tableBody = document.getElementById('userInfoTableBody');
        tableBody.innerHTML = ''; // Clear the table body

        users.forEach(user => {
            const row = `
                <tr>
                    <td>${user.userId}</td>
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                    <td>${new Date(user.enrollmentDate).toLocaleDateString()}</td>
                    <td>Last login</td> <!-- Add logic for last login later -->
                    <td>${user.role}</td>
                </tr>
            `;
            tableBody.innerHTML += row;
        });
    } catch (error) {
        console.error("Error fetching users:", error);
    }
}

// Event listener for submit button (assuming there's a button to trigger the function)
document.getElementById('submitButton').addEventListener('click', submitUserData);

// Load users when the page loads
window.onload = loadUsers;
