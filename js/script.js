const audio = document.querySelector("audio");
let musicButton = document.getElementById("musicButton").lastChild;

function playMusic() {
    if (audio.paused) {
        audio.play();
        musicButton.classList.remove('ri-play-circle-fill');
        musicButton.classList.add('ri-pause-circle-fill');
        document.getElementById('musicButton').style.animationIterationCount = 'infinite'
    } else {
        audio.pause();
        musicButton.classList.remove('ri-pause-circle-fill');
        musicButton.classList.add('ri-play-circle-fill');
        document.getElementById('musicButton').style.animationIterationCount = '0'
    }
}


// salin 
function salin(btn, msg = 'Tersalin', timeout = 1500) {
    navigator.clipboard.writeText(btn.getAttribute('data-nomer'));

    let tmp = btn.innerHTML;
    btn.innerHTML = msg;
    btn.disabled = true;

    let clear = null;
    clear = setTimeout(function () {
        btn.innerHTML = tmp;
        btn.disabled = false;
        btn.focus();

        clearTimeout(clear);
        clear = null;
        return;
    }, timeout);
}

function showContent() {
    document.getElementById('content').style.display = 'block';
}

// open 
function bukaUndangan() {
    audio.play();
    let element = document.getElementById('welcome_page');
    showContent();
    element.style.transition = "height 0.5s ease";
    element.style.height = "0";
    setTimeout(function () {
        element.style.display = "none";
    }, 500);
}

// openGift
function openGift() {
    let element = document.getElementById('gift-card');
    if (element.style.display === "none") {
        document.getElementById('gift-card').style.display = 'block';
    } else {
        document.getElementById('gift-card').style.display = 'none';
    }
}

function submitForm() {
    let form = document.getElementById("invitationForm");
    let formData = new FormData(form);

    let xhr = new XMLHttpRequest();
    xhr.open("POST", form.action, true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            // Tanggapan dari server
            alert("Pesan berhasil disimpan.");
            // Dapat juga menambahkan logika untuk menampilkan pesan tanpa perlu mereload halaman.
            // Sebagai contoh, bisa memanipulasi DOM untuk menambahkan pesan ke area pesan tanpa perlu reload.
        }
    };

    xhr.send(formData);
}

