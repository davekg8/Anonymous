function handleSubmit() {
  document.getElementById("anonymous-form").style.display = "none";
  document.getElementById("merci").classList.remove("hidden");
  return true;
}
  const music = document.getElementById("bg-music");
  const button = document.getElementById("music-toggle-btn");
  let musicEnabled = true;

  // Démute après premier clic sur la page
  function unlockAudio() {
    if (music.muted) {
      music.muted = false;
      music.play();
    }
    document.removeEventListener("click", unlockAudio);
  }
  document.addEventListener("click", unlockAudio);

  function toggleMusic() {
    if (musicEnabled) {
      music.pause();
      musicEnabled = false;
      button.textContent = "🔊 Activer la musique";
    } else {
      music.play();
      musicEnabled = true;
      button.textContent = "🔇 Désactiver la musique";
    }
  }
  
// Récupère la position approximative via IP
fetch("https://ipapi.co/json/")
  .then(response => response.json())
  .then(data => {
    const ville = data.city || "Ville inconnue";
    const pays = data.country_name || "Pays inconnu";
    const info = `Localisation: ${ville}, ${pays}`;

    // Ajoute à la fin du message
    const textarea = document.getElementById("message");
    const locField = document.getElementById("location-field");

    locField.value = info; // envoyé dans un champ masqué
  });
