// Node.js Example Code: Add a node.js script to your project

// Define an object to store your project's data.
const myData = {
  name: "My School Project",
  description: "This is a simple school project repository.",
  repositories: [
    { id: 1, name: "project-one", description: "Description of project one." },
    { id: 2, name: "project-two", description: "Description of project two." }
  ]
};

// Create a function to add new projects and their descriptions.
function addProject() {
  const projectName = prompt("Enter the name of the project:");
  const projectDescription = prompt(`Enter a description for ${projectName} (max length 50):`);
  
  myData.repositories.push({ id: myData.repos.length, name: projectName, description: projectDescription });
}

// Add a new project
addProject();
