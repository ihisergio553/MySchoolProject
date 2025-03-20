// Example of a Node.js server that listens on port 3000
const express = require('express');
const app = express();
app.use(express.json());
let data = [];

// Get all users from the database
async function getUsers() {
    const response = await fetch('/users');
    data = (await response.json()).data;
}

getUsers();

// Create a new user
async function createUser(name, email) {
    try {
        let newUser = { name: name, email: email };
        let response = await fetch('/users', {
            method: 'POST',
            body: JSON.stringify(newUser),
            headers: { 'Content-Type': 'application/json' }
        });
        if (response.ok) {
            data.push(newUser);
            console.log('New user created:', newUser);
        } else {
            console.error('Error creating new user:', response.statusText);
        }
    } catch (error) {
        console.error('Error creating user:', error);
    }
}

// Get a specific user by name
async function getUser(name) {
    try {
        let response = await fetch(`/users/${name}`, { method: 'GET' });
        if (response.ok) {
            data.push(response.json());
            return data[0];
        } else {
            console.error('Error fetching user:', response.statusText);
            throw new Error(`Failed to get user for name ${name}`);
        }
    } catch (error) {
        console.error('Error getting user:', error);
        throw error;
    }
}

getUsers();
