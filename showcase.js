export function runShowcase() {
    createElements();
}

function createElements() {
    createPrompt();
    // createPuzzle();
}

function createPrompt() {
    const containerElement = document.createElement('div');
    const labelElement = document.createElement('label');
    const inputDivElement = document.createElement('div');
    const inputElement = document.createElement('input');
    const buttonElement = document.createElement('button');

    containerElement.id = 'container';
    containerElement.className = 'container';
    containerElement.style.backgroundColor = 'rgb(255, 229, 229)';
    containerElement.style.display = 'flex';
    containerElement.style.flexDirection = 'column';
    containerElement.style.gap = '15px';
    setTimeout(() => {
        containerElement.style.transition = 'opacity 2000ms';
        containerElement.style.opacity = 1;
    }, 300);

    inputDivElement.style.width = '100%';
    inputDivElement.style.display = 'flex';
    inputDivElement.style.gap = '60px';

    labelElement.innerText = "Ok, I do actually need to know if you are the right person...";

    inputElement.type = 'text';
    inputElement.placeholder = 'Who are you?';
    inputElement.style.padding = '5px';
    inputElement.style.width = '50%';
    inputElement.id = 'nameInput';

    buttonElement.addEventListener('click', () => checkInputName());
    buttonElement.className = 'btn';
    buttonElement.innerText = 'Submit';
    buttonElement.style.backgroundColor = 'green';
    
    inputDivElement.appendChild(inputElement);
    inputDivElement.appendChild(buttonElement);
    containerElement.appendChild(labelElement);
    containerElement.appendChild(inputDivElement);
    document.body.appendChild(containerElement);
}

function checkInputName() {
    const enteredName = document.getElementById('nameInput').value;
    if (enteredName.toLowerCase() === 'audrey') {
        document.body.style.backgroundColor = 'red';
        const labelElement = document.querySelector("body div label");
        labelElement.innerText = "My girl is here!!!";
        labelElement.style.textAlign = 'center';
        
        // const containerElement = document.querySelector("body div");
        document.querySelector("body div div").remove();
    } else {
        const labelElement = document.querySelector("body div label");
        const inputElement = document.querySelector("body div div input");
        labelElement.innerText = "Hmm... You don't seem to be the right person for this.";
        inputElement.placeholder = "Try again maybe?";
        inputElement.value = "";
    }
}

function createPuzzle() {
    // const leftSemiCircle = document.createElement('div');
    // const rightSemiCircle = document.createElement('div');
    // const square = document.createElement('div');

    // leftSemiCircle.draggable = true;
    // rightSemiCircle.draggable = true;
    // square.draggable = true;

    // leftSemiCircle.style.cursor = 'move';
    // rightSemiCircle.style.cursor = 'move';
    // square.style.cursor = 'move';

    // document.body.appendChild(leftSemiCircle);
}

// draw both semi circles, and the square and then make them travel accross the screen
// maybe have her drag the hearts together.
// figure out click and drag with JS.

// drag and drop into the grid would allow the heart drag and drop idea
