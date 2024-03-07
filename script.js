document.addEventListener('DOMContentLoaded', function () {
    const heartsContainer = document.getElementById('hearts-container');
    const envelope = document.getElementById('envelope');
    const letter = document.querySelector('.letter');
    const numHearts = 10;

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

    function animateHeart() {
        TweenMax.from($(".heart"), 1, {
            scaleX: 1.2,
            scaleY: 1.2,
            transformOrigin: "50% 50%",
            ease: Elastic.easeOut.config(1, 0.3)
        });
        TweenMax.to($(".heart"), 1, {
            scaleX: 1,
            scaleY: 1,
            ease: Elastic.easeOut.config(1, 0.3),
            onComplete: function () {
                setTimeout(animateHeart, 200);
            }
        });
    }

    new Vivus('message', { type: "oneByOne", duration: 1200 }, function () {
        TweenMax.to($("path"), 5, { fillOpacity: 1, onComplete: function () {
            animateHeart();
        } });
    });

    $(function () {
        TweenMax.to("body", 20, { backgroundPositionY: -100, repeat: -1, ease: Power0.easeNone });
    });
});
