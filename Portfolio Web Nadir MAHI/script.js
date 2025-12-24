function copyText(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert("Copié avec succès !");
    });
}

// Logique du Switch Box FR/ING
const langTog = document.getElementById('lang-tog');
const heroText = document.getElementById('hero-text');

langTog.addEventListener('change', () => {
    if (langTog.checked) {
        // Mode ING
        heroText.innerText = "I am a passionate full-stack web developer. Currently studying for a BTS SIO SLAM via CNED.";
    } else {
        // Mode FR
        heroText.innerText = "Développeur full-stack passionné. Étudiant en BTS SIO SLAM au CNED.";
    }
});