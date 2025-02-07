document.getElementById('madLibForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get values from the form
    const adjective = document.getElementById('adjective').value;
    const noun = document.getElementById('noun').value;
    const verb = document.getElementById('verb').value;
    const place = document.getElementById('place').value;

    // Generate the Mad Lib story
    const madLib = `The ${adjective} ${noun} decided to ${verb} at the ${place}.`;

    // Display the result and hide the form
    document.getElementById('madLibResult').textContent = madLib;
    document.getElementById('resultSection').style.display = 'block';
    document.getElementById('madLibForm').style.display = 'none';
});
