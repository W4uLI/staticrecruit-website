function startQuiz() {
    var characterName = document.getElementById('character-name-input').value;
    if (characterName.trim() === '') {
        alert('Please enter your character name!');
    } else {
        // Proceed to the quiz or any other action
        alert('Welcome, ' + characterName + '! Let\'s start the quiz!');
        // You can navigate to the first question or perform any other action here
    }
}