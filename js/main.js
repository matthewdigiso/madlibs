document.addEventListener("DOMContentLoaded", function () {
    function generateStory() {
        const inputs = document.querySelectorAll(".madlib-input");
        const words = Array.from(inputs).map(input => input.value.trim());

        if (words.some(word => word === "")) {
            alert("Please fill in all the fields before generating the story!");
            return;
        }

        const story = `
            This summer, I went on a ${words[0]} and ${words[1]} trip to the ${words[2]}. 
            We packed our ${words[3]} and brought lots of ${words[4]}. 
            My favorite activity was ${words[5]} with the ${words[6]}. 
            Every morning, we enjoyed ${words[7]} and ${words[8]}, 
            followed by collecting ${words[9]}. 
            In the afternoon, we spent time ${words[10]} near the ${words[11]}. 
            I even got sunburned on my ${words[12]}! 
            At night, we explored the ${words[13]} while ${words[14]}. 
            It was a ${words[15]} and ${words[16]} trip, and I can't wait to go again!`;

        const story
