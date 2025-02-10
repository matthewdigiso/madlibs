// JavaScript FILE (main.js)
function generateStory() {
    let inputs = document.querySelectorAll(".madlib-input");
    let story = document.getElementById("story");
    let filledStory = `A vacation is when you take a trip to some ${inputs[0].value} place
    with your ${inputs[1].value} family. Usually, you go to some place
    that is near a/an ${inputs[2].value} or up on a/an ${inputs[3].value}.
    A good vacation place is one where you can ride ${inputs[4].value}
    or play ${inputs[5].value} or go hunting for ${inputs[6].value}.
    I like to spend my time ${inputs[7].value} or ${inputs[8].value}.
    When parents go on vacation, they spend their time eating
    three ${inputs[9].value} a day, and fathers play golf, and mothers
    sit around ${inputs[10].value}.
    Last summer, my little brother fell in a/an ${inputs[11].value}
    and got poison ${inputs[12].value} all over his ${inputs[13].value}.
    My family is going to go to the ${inputs[14].value} and I will practice ${inputs[15].value}.
    Parents need vacations more than kids because parents are always ${inputs[16].value} and ${inputs[17].value}.`;
    
    story.innerHTML = `<p>${filledStory}</p>`;
    story.style.display = "block";
}
