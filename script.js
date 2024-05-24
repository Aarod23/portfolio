document.addEventListener("DOMContentLoaded", function() {
    var text = "Arod";
    var speed = 200;

    var typedText = document.getElementById("typed-text");
    var index = 0;

    function typeWriter() {
        if (index < text.length) {
            typedText.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, speed);
        } else {
            var cursor = document.querySelector('.cursor');
            cursor.style.animation = 'none';
        }
    }

    typeWriter();
});


document.addEventListener("DOMContentLoaded", function() {
    var cards = document.querySelectorAll('.project-card');
    var indicators = document.querySelectorAll('.indicator');
    var index = 0;
    var interval;

    function showCard(index) {
        cards.forEach(function(card, i) {
            card.classList.remove('active', 'next');
            card.style.display = 'none';
            if (i === index) {
                card.classList.add('active');
                card.style.display = 'block';
            } else if (i === (index + 1) % cards.length) {
                card.classList.add('next');
                card.style.display = 'block';
            }
        });
        indicators.forEach(function(indicator, i) {
            if (i === index) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    }

    function nextCard() {
        index = (index + 1) % cards.length;
        showCard(index);
    }

    function startSlideshow() {
        interval = setInterval(nextCard, 4000);
    }

    function stopSlideshow() {
        clearInterval(interval);
    }

    indicators.forEach(function(indicator, i) {
        indicator.addEventListener('click', function() {
            stopSlideshow();
            index = i;
            showCard(index);
            startSlideshow();
        });
    });

    showCard(index);
    startSlideshow();
});

