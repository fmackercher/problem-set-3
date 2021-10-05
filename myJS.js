/*
* Excercise 1
*
*/

let clickDiv = document.getElementById('color-block');
clickDiv.addEventListener('click', changeColor);

/*
* Then write a function that changes the text and the color inside the div
*
*/

function changeColor() {
    //Write a condition determine what color it should be changed to

    console.log(clickDiv.style.backgroundColor);
    if (clickDiv.style.backgroundColor !== 'rgb(160, 32, 240)') {
        //change the background color using JS
        clickDiv.style.backgroundColor = 'rgb(160, 32, 240)';

        //Change the text of the color using the span id color-name
        document.getElementById('color-name').innerHTML = '# A020F0';
    }
    else {
        //change the background color using JS
        clickDiv.style.backgroundColor = 'rgb(240, 128, 128)';
    //Change the text of the color using the span id color-name
    document.getElementById('color-name').innerHTML = '# F08080';

    }
}

/*
* For excercise 2, you need to write an event handler for the button id "convertbtn"
* on mouse click. For best practice use addEventListener.
*
*/

document.getElementById('convertbtn').addEventListener('click', convertTemp);

/*
* Then write a function that calculates Fahrenheit to Celsius and display it on the webpage
*
*/

function convertTemp() {
    //Calculate the temperature here
    var fTemp = document.getElementById('f-input');
    var f2c = (document.getElementById('f-input').value - 32) * 5 / 9;
    document.getElementById('c-output').innerHTML = Math.round(f2c);
}

document.getElementById('convertbtn').addEventListener('click', convertTemp()); //Send the calculated temperature to HTML




