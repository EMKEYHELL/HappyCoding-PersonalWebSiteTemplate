document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('background-audio');
    const volumeSlider = document.getElementById('volume-slider');

    audio.play();
    audio.volume = 0.2; // Imposta il volume a un livello medio-basso

    volumeSlider.addEventListener('input', function() {
        audio.volume = volumeSlider.value;
    });

    const scrollTopButton = document.getElementById('scroll-top');
    window.onscroll = function() {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            scrollTopButton.style.display = 'block';
        } else {
            scrollTopButton.style.display = 'none';
        }
    };

    scrollTopButton.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Modal logic
    const modal = document.getElementById('welcome-modal');
    const closeModal = document.getElementById('close-modal');
    modal.style.display = 'block';
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });
});