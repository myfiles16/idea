let flashcards = document.querySelectorAll('.flashcard');
let currentCardIndex = flashcards.length - 1;
let movements = []; // Array to track movements

document.getElementById('left-button').addEventListener('click', () => {
    if (currentCardIndex >= 0) {
        let currentCard = flashcards[currentCardIndex];
        // Apply 2D tumbling effect moving left with rotation around Z-axis
        currentCard.style.transform = 'translateX(-400px) rotate(-60deg)';
        currentCard.style.opacity = '0';

        // Log movement to left
        movements.push({
            flashcard: currentCard.innerText,
            direction: 'left'
        });

        currentCardIndex--;
    }
});

document.getElementById('right-button').addEventListener('click', () => {
    if (currentCardIndex >= 0) {
        let currentCard = flashcards[currentCardIndex];
        // Apply 2D tumbling effect moving right with rotation around Z-axis
        currentCard.style.transform = 'translateX(400px) rotate(60deg)';
        currentCard.style.opacity = '0';

        // Log movement to right
        movements.push({
            flashcard: currentCard.innerText,
            direction: 'right'
        });

        currentCardIndex--;
    }
});

// Add button to download movements as a file
let downloadButton = document.createElement('button');
downloadButton.innerText = 'Download Movements';
downloadButton.style.marginTop = '20px';
document.body.appendChild(downloadButton);

// Download movements data as a text file
downloadButton.addEventListener('click', () => {
    const data = JSON.stringify(movements, null, 2); // Convert movements array to a JSON string
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'movements.json'; // Download as movements.json
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});
