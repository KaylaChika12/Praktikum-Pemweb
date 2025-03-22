
document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah form dikirim jika validasi gagal

    // Mengambil nilai input dari form
    let nama = document.getElementById("nama").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    
    let valid = true; //  mengecek apakah form valid atau tidak

    // Validasi Nama: harus lebih dari 3 karakter
    if (nama.length <= 3) {
        document.getElementById("error-nama").innerText = "Nama harus lebih dari 3 karakter!";
        valid = false; // Set valid menjadi false jika tidak memenuhi syarat
    } else {
        document.getElementById("error-nama").innerText = ""; // Hapus pesan error jika valid
    }

    // Validasi Email: harus sesuai format email 
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        document.getElementById("error-email").innerText = "Email tidak valid!";
        valid = false;
    } else {
        document.getElementById("error-email").innerText = "";
    }

    // Validasi Password: minimal 8 karakter
    if (password.length < 8) {
        document.getElementById("error-password").innerText = "Password harus minimal 8 karakter!";
        valid = false;
    } else {
        document.getElementById("error-password").innerText = "";
    }

    // Jika semua valid, tampilkan notifikasi popup
    if (valid) {
        alert("Form Berhasil Dikirim!");
        document.getElementById("myForm").reset(); // Mengosongkan input setelah berhasil submit
    }
});
