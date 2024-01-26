import { runNamePrompt } from './showcase.js';

const containerElement = document.getElementById('container');
const textElement = document.getElementById('main-text');
const optionButtonsElement = document.getElementById('option-buttons');

function startGame() {
    setTimeout(() => {      //this timeout is to wait and then fade in the text container
        containerElement.style.opacity = 1;
    }, 2000);

    showTextNode(0);
}

var buttonPressedOnce = false;
function showTextNode(textNodeIndex) {
    buttonPressedOnce = false;
    if (textNodeIndex === 0) {
        containerElement.style.backgroundColor = 'rgb(38, 38, 38)';
        containerElement.style.boxShadow = 'none';
    }
    else {
        containerElement.style.backgroundColor = 'white';
        containerElement.style.boxShadow = '0 0 10px 2px';
    }

    if (textNodeIndex === 9) {
        containerElement.remove();
        runNamePrompt();
    }
    else {
        const textNode = textNodes.find(textNode => textNode.id === textNodeIndex);
        textElement.innerText = textNode.text;
        while (optionButtonsElement.firstChild) {   //while a child exists
            optionButtonsElement.removeChild(optionButtonsElement.firstChild);
        }

        textNode.options.forEach(option => {
            const button = document.createElement('button');
            button.innerText = option.text;
            button.classList.add('btn');
            button.addEventListener('click', () => selectOption(option));
            optionButtonsElement.appendChild(button);
        })
    }
}

function selectOption(option) {
    if (buttonPressedOnce === false) {  // only process the press if no action is occuring.
        const nextTextNodeId = option.nextText;
        buttonPressedOnce = true;
        if (nextTextNodeId === 1) {
            setTimeout(() => {
                showTextNode(nextTextNodeId);
            }, 600);
        } else if (nextTextNodeId === 9) {
            containerElement.style.opacity = 0;
            setTimeout(() => {
                showTextNode(nextTextNodeId);
            }, 1750);
        } else {
            setTimeout(() => {
                showTextNode(nextTextNodeId);
            }, 250);
        }
    }
}

const textNodes = [
    {
        id: 0,
        text: '',
        options: [
            {
                text: 'Tap this button.',
                nextText: 1
            }
        ]
    },
    {
        id: 1,
        text: 'Hey! Why did you press that!?!?',
        options: [
            {
                text: 'You told me to!',
                nextText: 3
            },
            {
                text: "I didn't press anything!",
                nextText: 2
            }
        ]
    },
    {
        id: 2,
        text: "Oh good! Please do not press it, it's highly experimental.",
        options: [
            {
                text: "Ok, I won't.",
                nextText: 0
            },
            {
                text: 'No promises.',
                nextText: 0
            }
        ]
    },
    {
        id: 3,
        text: "No I didn't! ... Wait, did I leave that label on it?",
        options: [
            {
                text: "Yes.",
                nextText: 5
            },
            {
                text: 'No.',
                nextText: 6
            },
            {
                text: 'Label?',
                nextText: 4
            }
        ]
    },
    {
        id: 4,
        text: "Yea ... the one that says: 'Tap this button.'",
        options: [
            {
                text: "Yep, that was the one.",
                nextText: 5
            },
            {
                text: "I don't remember.",
                nextText: 6
            }
        ]
    },
    {
        id: 5,
        text: "Shoot, I really should have remembered to take it off. This is not good...",
        options: [
            {
                text: "...",
                nextText: 7
            },
            {
                text: "...",
                nextText: 7
            }
        ]
    },
    {
        id: 6,
        text: "Hmmm, well I got an alert that it was pressed...",
        options: [
            {
                text: "...",
                nextText: 7
            },
            {
                text: "...",
                nextText: 7
            }
        ]
    },
    {
        id: 7,
        text: "Welp, there is no stopping what's coming now...",
        options: [
            {
                text: "What do you mean by that?!?!",
                nextText: 8
            },
            {
                text: "Uh-oh.",
                nextText: 8
            }
        ]
    },
    {
        id: 8,
        text: "Don't worry...",
        options: [
            {
                text: "...",
                nextText: 9
            },
            {
                text: "...",
                nextText: 9
            }
        ]
    }

]

startGame();