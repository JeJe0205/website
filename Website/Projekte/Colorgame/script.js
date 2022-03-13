var heading;
heading = document.getElementById('colourValue');
heading.innerHTML = 'Hello User!';
var buttons = document.getElementsByClassName('colourButton');
function setButtonColour(button, red, green, blue){
    button.setAttribute('style',
                        'background-color: rgb('+ red +','+ green +','+ blue +');'
                       );
}


var answerButton = Math.round(Math.random() * (buttons.length - 1));
var answerMessage = document.getElementById('answer');

function makeColourValue(){
    return Math.round(Math.random()*255);
}
for (var i = 0; i < buttons.length; i++) {

    var red = makeColourValue();
    var green = makeColourValue();
    var blue = makeColourValue();
  
    setButtonColour(buttons[i], red, green, blue);
    if (i === answerButton) {
        heading.innerHTML = `(${red}, ${green}, ${blue})`;
      }
    buttons[i].addEventListener('click', function(){
    if (this === buttons[answerButton]) {
        answerMessage.innerHTML = "Correct! :) Refresh to play again!!";
        answerMessage.classList.add("correct");
    } else {
        answerMessage.innerHTML = "Wrong answer! Guess again!";
        answerMessage.classList.remove("correct");
        


    }
});


  }
  
