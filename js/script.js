// aos
// target 
const targetDate = new Date('2024-02-18').getTime();

// fungsi untuk update countdown setiap detik
function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    // hitung waktu yang tersisa
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // tampilkan ke dalam element dengan id 
    document.getElementById('tampilan-waktu').innerHTML = `
                        <div class="col-3 p-1">
                              <h2 class="d-inline m-0 p-0" id="hari">${days}</h2><small
                                    class="ms-1 me-0 my-0 p-0 d-inline">Hari</small>
                        </div>
                        <div class="col-3 p-1">
                              <h2 class="d-inline m-0 p-0" id="jam">${hours}</h2><small
                                    class="ms-1 me-0 my-0 p-0 d-inline">Jam</small>
                        </div>
                        <div class="col-3 p-1">
                              <h2 class="d-inline m-0 p-0" id="menit">${minutes}</h2><small
                                    class="ms-1 me-0 my-0 p-0 d-inline">Menit</small>
                        </div>
                        <div class="col-3 p-1">
                              <h2 class="d-inline m-0 p-0" id="detik">${seconds}</h2><small
                                    class="ms-1 me-0 my-0 p-0 d-inline">Detik</small>
                        </div>    
    `
    // jika waktu countdown berakhir 
    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById('tampilan-waktu').innerHTML = "Sudah Saat nya Tiba";
    }
};

// pertama kali manggil fungsi untuk mulai countdown 
updateCountdown();

// update countdown setiap 1 detik
const countdownInterval = setInterval(updateCountdown, 1000);

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


