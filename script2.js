const users = [];
const properties = [
    { id: 1, title: "Luxury Villa", location: "Marbella, Spain", price: "$1,500,000", image: "https://plus.unsplash.com/premium_photo-1682377521753-58d1fd9fa5ce?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bHV4dXJ5JTIwdmlsbGF8ZW58MHx8MHx8fDA%3D" },
    { id: 2, title: "Beachfront Apartment", location: "Ibiza, Spain", price: "$750,000", image: "https://media.inmobalia.com/imgV1/B95mbh8olwFQm~uCUaVOI2kQT0hb0a8sZ9turUNfnwtvuccYCzs0YVPfPbfkc2VnnN1JFDpiVdhTScitlOwWllJM8ts33LbfoPVknMo6JEsVOxDUhZh9xNUG6HGD1FOHryLZ9QIDn74PD5vA68MQwM8Uqt9CvPGoUSaKh~T8uRCTR~TfG3ApBTfiZgLkCQlq25fKSlapENGU7omngQ8mTvBBxjDQwxfqx1Jy11ql2KiA91CfI77PUaAv1PaVx0AtAfLuuJM_B~G1TUbUkJk~Rornkn2P8nkqQ~pBM2ipw_lJNz_dDF9DYaBRVrgTPyRVe9gLZLkn~O6o8NLnBqJdoeLdXhgsNNEvTmwQM97H2ViOBi~b0U9QYFA6fg48T7S8L3ZTlQ--.jpg" },
    { id: 3, title: "Modern Condo", location: "Barcelona, Spain", price: "$350,000", image: "https://i.pinimg.com/originals/e8/e4/34/e8e43414b10874a6a7050c0e56849bd9.jpg" }
];

// Show the intro message initially
window.onload = function () {
    setTimeout(() => {
        document.getElementById('intro').style.display = 'none';
        document.getElementById('app').classList.remove('hidden');
    }, 3000);
}

// Show Login Form
function showLogin() {
    document.getElementById('login-form').classList.remove('hidden');
    document.getElementById('register-form').classList.add('hidden');
}

// Show Register Form
function showRegister() {
    document.getElementById('register-form').classList.remove('hidden');
    document.getElementById('login-form').classList.add('hidden');
}

// Register User
function register() {
    const username = document.getElementById('register-username').value.trim();
    const password = document.getElementById('register-password').value.trim();

    if (username && password) {
        users.push({ username, password });
        document.getElementById('register-message').textContent = 'Registration successful! Please log in.';
        document.getElementById('register-message').style.color = 'green';
        showLogin();
    } else {
        document.getElementById('register-message').textContent = 'Please fill in all fields.';
        document.getElementById('register-message').style.color = 'red';
    }
}

// Login User
function login() {
    const username = document.getElementById('login-username').value.trim();
    const password = document.getElementById('login-password').value.trim();

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        document.getElementById('login-message').textContent = 'Login successful!';
        document.getElementById('login-message').style.color = 'green';

        // Show property listings after successful login
        document.getElementById('property-listings').classList.remove('hidden');
        displayProperties();
        document.getElementById('auth-section').classList.add('hidden');
    } else {
        document.getElementById('login-message').textContent = 'Invalid credentials. Please try again.';
        document.getElementById('login-message').style.color = 'red';
    }
}

// Display Properties
function displayProperties() {
    const propertyContainer = document.getElementById('properties');
    propertyContainer.innerHTML = '';

    properties.forEach(property => {
        const propertyCard = document.createElement('div');
        propertyCard.classList.add('property-card');
        propertyCard.innerHTML = `
            <img src="${property.image}" alt="${property.title}">
            <h3>${property.title}</h3>
            <p>${property.location}</p>
            <p>${property.price}</p>
        `;
        propertyContainer.appendChild(propertyCard);
    });
}

// Logout
function logout() {
    document.getElementById('auth-section').classList.remove('hidden');
    document.getElementById('property-listings').classList.add('hidden');
    document.getElementById('dashboard').classList.add('hidden');
}
