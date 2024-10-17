document.addEventListener('DOMContentLoaded', function () {
    const audio = document.getElementById('background-audio');
    const volumeSlider = document.getElementById('volume-slider');

    audio.play();
    audio.volume = 0.2; // Imposta il volume a un livello medio-basso

    volumeSlider.addEventListener('input', function () {
        audio.volume = volumeSlider.value;
    });

    const scrollTopButton = document.getElementById('scroll-top');
    window.onscroll = function () {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            scrollTopButton.style.display = 'block';
        } else {
            scrollTopButton.style.display = 'none';
        }
    };

    scrollTopButton.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Modal logic
    const modal = document.getElementById('welcome-modal');
    const closeModal = document.getElementById('close-modal');
    modal.style.display = 'block';
    closeModal.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    // Repository logic
    const repoList = document.getElementById('repo-list');
    const scrollLeftBtn = document.getElementById('scroll-left');
    const scrollRightBtn = document.getElementById('scroll-right');

    fetch('https://api.github.com/users/emkeyhell/repos')
        .then(response => response.json())
        .then(data => {
            data.forEach(repo => {
                const repoItem = document.createElement('li');
                repoItem.innerHTML = `
                    <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                `;
                repoList.appendChild(repoItem);
            });
        })
        .catch(error => console.error('Errore nel recuperare le repository:', error));

    // Scorrimento a destra
    scrollRightBtn.addEventListener('click', () => {
        repoList.scrollBy({
            left: 300, // Scorre verso destra
            behavior: 'smooth'
        });
    });

    // Scorrimento a sinistra
    scrollLeftBtn.addEventListener('click', () => {
        repoList.scrollBy({
            left: -300, // Scorre verso sinistra
            behavior: 'smooth'
        });
    });

    

    // Toggle view logic
    const toggleButton = document.getElementById('toggle-view');
    const mainContent = document.getElementById('main-content');
    const newContent = document.getElementById('new-content');

    toggleButton.addEventListener('click', function () {
        if (mainContent.style.display === 'none') {
            mainContent.style.display = 'block';
            newContent.style.display = 'none';
            this.textContent = 'Toggle View';
        } else {
            mainContent.style.display = 'none';
            newContent.style.display = 'block';
            this.textContent = 'Torna al sito';
        }
    });
});

// Cookie consent logic
document.getElementById('acceptCookies').addEventListener('click', function () {
    document.getElementById('cookieConsent').style.display = 'none';
    localStorage.setItem('cookieConsentAccepted', 'true');
});

window.onload = function () {
    if (localStorage.getItem('cookieConsentAccepted') === 'true') {
        document.getElementById('cookieConsent').style.display = 'none';
    }
};


