// Mendapatkan elemen-elemen dari HTML berdasarkan ID-nya
const problemElement = document.getElementById('problem');
const answerInput = document.getElementById('answerInput');
const checkButton = document.getElementById('checkButton');
const feedbackElement = document.getElementById('feedback');

let num1; // Angka pertama untuk soal
let num2; // Angka kedua untuk soal
let correctAnswer; // Jawaban yang benar

// Fungsi untuk membuat dan menampilkan soal baru
function generateNewProblem() {
    num1 = Math.floor(Math.random() * 10) + 1; // Angka acak 1-10
    num2 = Math.floor(Math.random() * 10) + 1; // Angka acak 1-10
    correctAnswer = num1 + num2;

    problemElement.textContent = `${num1} + ${num2} = ?`; // Menampilkan soal
    answerInput.value = ''; // Mengosongkan kolom jawaban
    feedbackElement.textContent = ''; // Mengosongkan umpan balik
    feedbackElement.className = ''; // Menghapus kelas warna (hijau/merah)
    answerInput.focus(); // Mengarahkan kursor ke kolom jawaban
}

// Fungsi untuk memeriksa jawaban pengguna
function checkAnswer() {
    const userAnswer = parseInt(answerInput.value); // Mengambil jawaban dari input dan mengubahnya ke angka

    // Memeriksa apakah input kosong atau bukan angka
    if (isNaN(userAnswer)) {
        feedbackElement.textContent = 'Masukkan angka sebagai jawaban!';
        feedbackElement.className = 'feedback-wrong';
        return; // Hentikan fungsi jika input tidak valid
    }

    if (userAnswer === correctAnswer) {
        feedbackElement.textContent = 'Benar sekali!';
        feedbackElement.className = 'feedback-correct';
        setTimeout(generateNewProblem, 1500); // Setelah 1.5 detik, buat soal baru
    } else {
        feedbackElement.textContent = `Salah. Jawaban yang benar adalah ${correctAnswer}. Coba lagi!`;
        feedbackElement.className = 'feedback-wrong';
        answerInput.focus(); // Tetap di kolom jawaban agar bisa mencoba lagi
    }
}

// Menambahkan 'event listener' ke tombol dan input
checkButton.addEventListener('click', checkAnswer); // Ketika tombol diklik, jalankan fungsi checkAnswer

// Juga memungkinkan pengguna menekan 'Enter' untuk memeriksa jawaban
answerInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        checkAnswer();
    }
});

// Panggil fungsi ini pertama kali saat halaman dimuat untuk menampilkan soal awal
generateNewProblem();