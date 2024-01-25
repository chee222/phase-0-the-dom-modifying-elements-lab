// Step 1: Remove existing 'main' node
const mainNode = document.querySelector('main#main');
mainNode.remove();

// Step 2: Create a new 'h1' element
const newHeader = document.createElement('h1');

// Step 3: Set the 'id' attribute of 'newHeader'
newHeader.setAttribute('id', 'victory');

// Step 4: Set the text content of 'newHeader'
const yourName = 'Ada'; // Replace 'Ada' with your actual name
newHeader.textContent = `${yourName} is the champion`;

// Append 'newHeader' to the body or any other desired location
document.body.appendChild(newHeader);