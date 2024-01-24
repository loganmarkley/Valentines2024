const bodyElement = document.body;

export function runShowcase() {
    createElements();
}

function createElements() {      // will draw and place the components of the heart
    createPrompt();
    createPuzzle();
}

function createPrompt() {
    const prompt = document.createElement('div');
    prompt.innerText = "Ok, I do actually need to know if you are the right person.";
    prompt.style.backgroundColor = 'black';
}

function createPuzzle() {
    const leftSemiCircle = document.createElement('div');
    const rightSemiCircle = document.createElement('div');
    const square = document.createElement('div');

    leftSemiCircle.draggable = true;
    rightSemiCircle.draggable = true;
    square.draggable = true;

    leftSemiCircle.style.cursor = 'move';
    rightSemiCircle.style.cursor = 'move';
    square.style.cursor = 'move';

    leftSemiCircle.style.height = '100px';
    leftSemiCircle.style.width = '100px';
    leftSemiCircle.style.backgroundColor = 'white';

    document.body.appendChild(leftSemiCircle);



    // document.body.appendChild();
}

// draw both semi circles, and the square and then make them travel accross the screen
// maybe have her drag the hearts together.
// figure out click and drag with JS.

// button to spawn each piece at a time.
// puzzle like.

// drag and drop into the grid would allow the heart drag and drop idea
