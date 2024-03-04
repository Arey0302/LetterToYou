document.addEventListener('DOMContentLoaded', function () {
    const heartsContainer = document.getElementById('hearts-container');
    const numHearts = 30;

    setInterval(createHearts, 2000);

    function createHearts() {
        for (let i = 0; i < numHearts; i++) {
            createHeart();
        }
    }

    function createHeart() {
        const heart = document.createElement('div');
        heart.className = 'heart';
        setRandomPosition(heart);
        heartsContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 2000);
    }

    function setRandomPosition(element) {
        const containerWidth = heartsContainer.clientWidth;
        const containerHeight = heartsContainer.clientHeight;
        const elementWidth = element.clientWidth;
        const elementHeight = element.clientHeight;

        const randomLeft = Math.random() * (containerWidth - elementWidth);
        const randomTop = Math.random() * (containerHeight - elementHeight);

        element.style.left = randomLeft + 'px';
        element.style.top = randomTop + 'px';
    }
    // Open envelope on click
    envelope.addEventListener('click', function () {
        envelope.classList.add('open');
        letter.style.display = 'block';
    });
});
