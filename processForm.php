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

// Tangkap data dari formulir
$name = $_POST['name'];
$wishes = $_POST['wishes'];
$absen = $_POST['absen'];

// Masukkan data ke dalam database
$sql = "INSERT INTO pesan (nama, pesan, kehadiran, waktu) VALUES ('$name', '$wishes', '$absen', CURRENT_TIMESTAMP)";

if ($conn->query($sql) === TRUE) {
    header("Location: index.php"); // Mengarahkan kembali ke index.php
    exit();
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
