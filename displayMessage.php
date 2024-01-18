<?php
// Koneksi ke database (ganti dengan informasi koneksi sesuai kebutuhan)
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "undangan";

$conn = new mysqli($servername, $username, $password, $dbname);

// Periksa koneksi
if ($conn->connect_error) {
    die("Koneksi Gagal: " . $conn->connect_error);
}

// Tentukan jumlah pesan per halaman
$pesanPerHalaman = 10;

// Ambil halaman saat ini
$halaman = isset($_GET['pesan']) ? $_GET['pesan'] : 1;

// Hitung offset untuk menentukan pesan yang akan ditampilkan
$offset = ($halaman - 1) * $pesanPerHalaman;

// Ambil pesan dengan batasan jumlah pesan per halaman
$sql = "SELECT * FROM pesan ORDER BY id DESC LIMIT $pesanPerHalaman OFFSET $offset";
$result = $conn->query($sql);
 
// Tampilkan pesan
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        // Tentukan ikon berdasarkan kondisi kehadiran
        $icon = ($row['kehadiran'] == 'hadir') ? '<i class="ri-verified-badge-fill" style="color:blueviolet"></i>' : '<i class="ri-close-circle-fill" style="color:red"></i>';

        echo '<div class="container mb-2 p-1" style="border: 0.5px solid slategray;">
                <p class="fw-bold">' . $row['nama'] . ' ' . $icon . '</p>
                <p>' . $row['pesan'] . '</p>
              </div>';
    }
} else {
    echo "Tidak ada pesan.";
}
$conn->close();
?>
