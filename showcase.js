export function runNamePrompt() {
    const containerElement = document.createElement('div');
    const labelElement = document.createElement('label');
    const inputContainerElement = document.createElement('div');
    const inputElement = document.createElement('input');
    const buttonElement = document.createElement('button');

    containerElement.id = 'container';
    containerElement.className = 'container';
    containerElement.style.backgroundColor = 'rgb(228, 205, 211)';
    containerElement.style.display = 'flex';
    containerElement.style.flexDirection = 'column';
    containerElement.style.gap = '15px';
    setTimeout(() => {
        containerElement.style.opacity = 1;
    }, 1000);

    inputContainerElement.style.width = '100%';
    inputContainerElement.style.display = 'flex';
    inputContainerElement.style.justifyContent = 'space-between';
    inputContainerElement.style.gap = '60px';

    labelElement.innerText = "Ok, I do actually need to know if you are the right person first...";

    inputElement.type = 'text';
    inputElement.placeholder = 'Who are you?';
    inputElement.style.padding = '5px';
    inputElement.style.width = '45%';
    inputElement.id = 'nameInput';

    buttonElement.addEventListener('click', () => {
        setTimeout(() => checkInputName(), 600);
    });
    buttonElement.className = 'btn';
    buttonElement.innerText = 'Submit';
    buttonElement.style.backgroundColor = 'green';
    
    inputContainerElement.appendChild(inputElement);
    inputContainerElement.appendChild(buttonElement);
    containerElement.appendChild(labelElement);
    containerElement.appendChild(inputContainerElement);
    document.body.appendChild(containerElement);
}

function checkInputName() {
    const enteredName = document.getElementById('nameInput').value;
    if (enteredName.toLowerCase() === 'audrey' || enteredName.toLowerCase() === 'audrey forthofer') {
        document.querySelector("body div div").remove();    //removes the input box and button
        document.body.style.transition = 'background-color 1500ms';
        document.body.style.backgroundColor = 'rgb(165, 229, 255)';

        const containerElement = document.querySelector("body div");
        containerElement.style.transition = 'width 800ms ease-in-out, background-color 1000ms ease-in-out';
        containerElement.style.width = '40%';
        containerElement.style.backgroundColor = 'rgb(226, 71, 103)';
        setTimeout(() => {
            containerElement.style.animation = 'rockAnimation 1.5s ease-in-out 4';
        }, 1000);
        
        const labelElement = document.querySelector("body div label");
        labelElement.style.textAlign = 'center';
        labelElement.style.fontWeight = 'bold';
        labelElement.innerText = "My girl is here!";
        
        setTimeout(() => {  //after the rocking ends, send her on to the next phase!
            containerElement.style.transition = 'opacity 3000ms ease-in-out';
            containerElement.style.opacity = '0';
            phaseNumber1();
        }, 3000);
        
    } else {
        const labelElement = document.querySelector("body div label");
        const inputElement = document.querySelector("body div div input");
        labelElement.innerText = "Hmm... You don't seem to be the right person for this.";
        inputElement.placeholder = "Try again maybe?";
        inputElement.value = "";
    }
}

function phaseNumber1() {
    console.log("phase1");
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
