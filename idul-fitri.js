// PARTICLES
for (let i = 0; i < 30; i++) {
    let p = document.createElement("div");
    p.className = "particle";
    p.style.left = Math.random() * 100 + "vw";
    p.style.animationDuration = (5 + Math.random() * 5) + "s";
    document.body.appendChild(p);
}

// COUNTDOWN
// ===== AUTO LOCK SYSTEM 00:00 =====

// SET TANGGAL IDUL FITRI (UBAH JIKA PERLU)
const idulFitriDate = new Date("March 21, 2026 00:00:00").getTime();

const overlay = document.getElementById("overlayLock");
const lockCountdown = document.getElementById("lockCountdown");

const timer = setInterval(() => {
    const now = new Date().getTime();
    const distance = idulFitriDate - now;

    if (distance <= 0) {
        clearInterval(timer);
        overlay.style.opacity = "0";
        setTimeout(() => {
            overlay.style.display = "none";
        }, 1000);
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    lockCountdown.innerHTML =
        days + " Hari " +
        String(hours).padStart(2, '0') + ":" +
        String(minutes).padStart(2, '0') + ":" +
        String(seconds).padStart(2, '0');

}, 1000);

// MUSIC
let playing = false;
function toggleMusic() {
    const audio = document.getElementById("takbirAudio");
    if (!playing) {
        audio.play();
        playing = true;
    } else {
        audio.pause();
        playing = false;
    }
}

// SHARE WA
function shareWA() {
    const nama = document.getElementById("nama").value || "Sahabatku";
    const text = "Minal Aidzin Wal Faidzin, Mohon Maaf Lahir dan Batin dari " + nama + " 🙏";
    window.open("https://wa.me/?text=0881012137318" + encodeURIComponent(text), "_blank");

}

