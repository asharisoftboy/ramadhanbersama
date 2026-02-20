// PARTICLES
for (let i = 0; i < 30; i++) {
    let p = document.createElement("div");
    p.className = "particle";
    p.style.left = Math.random() * 100 + "vw";
    p.style.animationDuration = (5 + Math.random() * 5) + "s";
    document.body.appendChild(p);
}

// COUNTDOWN
const idulFitri = new Date("March 21, 2026 00:00:00").getTime();
const countdownEl = document.getElementById("countdown");

setInterval(() => {
    const now = new Date().getTime();
    const distance = idulFitri - now;

    if (distance < 0) {
        countdownEl.innerHTML = "Selamat Hari Raya Idul Fitri 🎉";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    countdownEl.innerHTML =
        days + " Hari " +
        hours + " Jam " +
        minutes + " Menit lagi";
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