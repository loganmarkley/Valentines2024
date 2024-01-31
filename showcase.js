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
        document.body.style.backgroundColor = 'rgb(161, 224, 237)';

        const containerElement = document.querySelector("body div");
        containerElement.style.transition = 'width 800ms ease-in-out, background-color 1000ms ease-in-out';
        containerElement.style.width = '40%';
        containerElement.style.backgroundColor = 'rgb(226, 71, 103)';
        setTimeout(() => {
            containerElement.style.animation = 'bounceAndRockAnimation 1.2s ease-in-out 4';
        }, 1000);
        
        const labelElement = document.querySelector("body div label");
        labelElement.style.textAlign = 'center';
        labelElement.style.fontWeight = 'bold';
        labelElement.innerText = "My girl is here!";
        
        setTimeout(() => {  //after the rocking ends, send her on to the next phase!
            containerElement.style.transition = 'opacity 1000ms ease-in-out';
            containerElement.style.opacity = '0';
            setTimeout(() => {
                containerElement.remove();
                document.body.style.backgroundColor = "pink";
                phaseNumber1();
            }, 1500);
        }, 3800);
        
    } else {
        const labelElement = document.querySelector("body div label");
        const inputElement = document.querySelector("body div div input");
        labelElement.innerText = "Hmm... You don't seem to be the right person for this.";
        inputElement.placeholder = "Try again maybe?";
        inputElement.value = "";
    }
}

function phaseNumber1() {
    const containerElement = document.createElement("div");
    const topContainerElement = document.createElement("div");
    const middleContainerElement = document.createElement("div");
    const bottomContainerElement = document.createElement("div");

    containerElement.id = "container";
    topContainerElement.id = "top";
    middleContainerElement.id = "middle";
    bottomContainerElement.id = "bottom";

    containerElement.className = "container";
    topContainerElement.className = "container ilyContainer ";
    middleContainerElement.className = "container ilyContainer ";
    bottomContainerElement.className = "container ilyContainer ";

    containerElement.style.display = "flex";
    containerElement.style.flexDirection = "column";
    containerElement.style.alignItems = "center";
    containerElement.style.justifyContent = "space-evenly";
    containerElement.style.height = "90vh";
    containerElement.style.boxShadow = "none";
    containerElement.style.backgroundColor = "transparent";

    topContainerElement.innerText = "I";
    middleContainerElement.innerText = "love";
    bottomContainerElement.innerText = "you <3";

    containerElement.style.opacity = "1";
    setTimeout(() => {
        topContainerElement.style.animation = "slideInFromLeft .6s cubic-bezier(0.68, -0.55, 0.27, 1.55)";
        topContainerElement.style.opacity = "1";
        setTimeout(() => {
            middleContainerElement.style.animation = "slideInFromRight .6s cubic-bezier(0.68, -0.55, 0.27, 1.55)";
            middleContainerElement.style.opacity = "1";
            setTimeout(() => {
                bottomContainerElement.style.animation = "slideInFromLeft .6s cubic-bezier(0.68, -0.55, 0.27, 1.55)";
                bottomContainerElement.style.opacity = "1";
                setTimeout(() => {
                    containerElement.childNodes.forEach((child) => {
                        child.style.transition = "width 500ms ease-in-out, transform 500ms ease-in-out, top 500ms ease-in-out";
                        child.style.width = '100px';
                    });
                    topContainerElement.style.transform = "translateX(-110px)";
                    bottomContainerElement.style.transform = "translateX(110px)";
                    setTimeout(() => {
                        topContainerElement.style.transform = 'translate(-110px, 23vh)';
                        bottomContainerElement.style.transform = 'translate(110px, -23vh)';
                        setTimeout(() => {  // this timeout is for each word box to bounce up and down once
                            containerElement.childNodes.forEach((child) => { child.style.transition = "transform 250ms cubic-bezier(0.68, -0.55, 0.27, 1.55)"; });
                            setTimeout(() => {
                                topContainerElement.style.transform = "translate(-110px, 20vh)";
                                setTimeout(() => {
                                    topContainerElement.style.transform = "translate(-110px, 23vh)";
                                    setTimeout(() => {
                                        middleContainerElement.style.transform = "translateY(-3vh)";
                                        setTimeout(() => {
                                            middleContainerElement.style.transform = "translateY(0)";
                                            setTimeout(() => {
                                                bottomContainerElement.style.transform = "translate(110px, -26vh)";
                                                setTimeout(() => {
                                                    bottomContainerElement.style.transform = "translate(110px, -23vh)";
                                                    setTimeout(() => {      // this timeout is for the combination and explosion effect of the containers
                                                        topContainerElement.style.transition = "transform 1500ms cubic-bezier(0.68, -0.55, 0.27, 1.55)";
                                                        bottomContainerElement.style.transition = "transform 1500ms cubic-bezier(0.68, -0.55, 0.27, 1.55)";
                                                        topContainerElement.style.transform = "translate(-140px, 23vh)";
                                                        bottomContainerElement.style.transform = "translate(140px, -23vh)";
                                                        setTimeout(() => {
                                                            middleContainerElement.style.zIndex = 99;
                                                            topContainerElement.style.transition = "transform 1000ms cubic-bezier(0.68, -0.55, 0.27, 1.55)";
                                                            bottomContainerElement.style.transition = "transform 1000ms cubic-bezier(0.68, -0.55, 0.27, 1.55)";
                                                            topContainerElement.style.transform = "translate(-30px, 23vh)";
                                                            bottomContainerElement.style.transform = "translate(30px, -23vh)";
                                                            setTimeout(() => {
                                                                middleContainerElement.style.animation = 'brightenAndExplode 600ms';
                                                                document.body.style.backgroundColor = "rgb(226, 71, 103)";
                                                                setTimeout(() => {
                                                                    topContainerElement.remove();
                                                                    bottomContainerElement.remove();
                                                                    middleContainerElement.style.color = "rgb(40, 40, 40)";
                                                                    middleContainerElement.style.fontFamily = "Dosis, sans-serif";
                                                                    middleContainerElement.innerText = "I love you Audrey!";
                                                                    middleContainerElement.style.transition = "font-size 1000ms ease-in-out width 1000ms ease-in-out background-color 1000ms ease-in-out";
                                                                    middleContainerElement.style.fontSize = "24px";
                                                                    middleContainerElement.style.width = "350px";
                                                                    middleContainerElement.style.backgroundColor = "rgb(250, 201, 233)";
                                                                    setTimeout(() => {middleContainerElement.style.animation = "enlargeAndGlow 1250ms ease-in-out 2";}, 500);
                                                                    setTimeout(() => {
                                                                        middleContainerElement.style.animation = "fadeOutDown 2000ms cubic-bezier(0.68, -0.55, 0.27, 1.55)"
                                                                        setTimeout(() => {
                                                                            containerElement.remove();
                                                                            document.body.style.transition = "background-color 5000ms";
                                                                            document.body.style.backgroundColor = "rgb(240, 220, 230)";
                                                                            phaseNumber2();
                                                                        }, 1950);
                                                                    }, 3500);
                                                                }, 300);
                                                            }, 400);
                                                        }, 1500);
                                                    }, 500);
                                                }, 250);
                                            }, 250);
                                        }, 250);
                                    }, 250);
                                }, 250);
                            }, 250);
                        }, 500);
                    }, 750);
                }, 1000);
            }, 600);
        }, 600);
    }, 1000);

    containerElement.appendChild(topContainerElement);   
    containerElement.appendChild(middleContainerElement);   
    containerElement.appendChild(bottomContainerElement);
    document.body.appendChild(containerElement);
}

function phaseNumber2() {
    function petalsShow() {
        setTimeout(() => { document.body.style.animation = "twoBackgroundColors 5000ms ease-in-out infinite"; }, 6000 );    // set the background to start swapping colors 1s after the initial change
        
        const petalsContainerElement = document.createElement("div");

        function createPetal (number) {
            const petalElement = document.createElement("div");
            petalElement.className = "rosePetal";
            petalElement.id = number;
            petalElement.style.left = number * 5 + "vw";
            petalsContainerElement.appendChild(petalElement);
        }

        for (let i = -5; i < 25; i++) {  //create 30 petals
            createPetal(i);
        }
        document.body.appendChild(petalsContainerElement);

        petalsContainerElement.childNodes.forEach((child, index) => {
            let randomTimeoutTime = Math.random() * (12500 - 0 + 1) + 0;    //random time at which the petal starts falling (btwn 0 and 12500)
            let randomAnimationTime = Math.random() * (12500 - 7500 + 1) + 7500;    //random animation time between 7500 and 12500 ms
            let randomOpacity = Math.random() * (75 - 55 + 1) + 55;    //random opacity between 55 and 75

            child.style.opacity = randomOpacity + "%";
            if (index % 2 === 0) {
                setTimeout(() => { child.style.animation = "petalFallingDown1 " + randomAnimationTime + "ms ease-in-out infinite"; }, randomTimeoutTime);
            } else {
                setTimeout(() => { child.style.animation = "petalFallingDown2 " + randomAnimationTime + "ms ease-in-out infinite"; }, randomTimeoutTime);
            }
        });
    }

    function willYouBeMyValentine() {
        const valentinesCardElement = document.createElement("div");
        valentinesCardElement.className = "valentinesCard";

        const textElement = document.createElement("div");
        const textElement1 = document.createElement("div");
        const textElement2 = document.createElement("div");
        const textElement3 = document.createElement("div");

        textElement.className = "cardWords";
        textElement1.className = "cardWords";
        textElement2.className = "cardWords";
        textElement3.className = "cardWords";

        textElement.innerText = "Audrey,";
        textElement1.innerText = "Will You Be My";
        textElement2.innerText = "Valentine?";
        textElement3.innerText = "- Logan 💘";

        textElement.style = "font-size: 46px; top: 3%; left: 25%";
        textElement1.style = "font-size: 20px; top: 51%; left: 5%";
        textElement2.style.fontSize = "28px";
        textElement2.style.top = "66%";
        textElement2.style.left = "18%";
        textElement3.style = "top: 87%; left: 49%";

        setTimeout(() => {
            valentinesCardElement.style.transform = "scale(1)";
            setTimeout(() => {
                valentinesCardElement.style.animation = "enlargeThenReturn 3000ms ease-in-out infinite";
                textElement2.style.animation = "glowRedAndEnlarge 3000ms ease-in-out infinite";
            }, 1750);
        }, 10000);

        valentinesCardElement.appendChild(textElement);
        valentinesCardElement.appendChild(textElement1);
        valentinesCardElement.appendChild(textElement2);
        valentinesCardElement.appendChild(textElement3);
        document.body.appendChild(valentinesCardElement);
    }

    petalsShow();
    willYouBeMyValentine();
}