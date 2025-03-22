// Memuat daftar tugas dari localStorage saat halaman dimuat
document.addEventListener("DOMContentLoaded", function () {
    muatDariLocalStorage();
});

function tambahTodo() {
    let input = document.getElementById("input-todo");
    let list = document.getElementById("todo-list");

    if (input.value === "") return; 

    // Membuat objek tugas
    let tugas = {
        teks: input.value,
        selesai: false // Default tugas belum selesai
    };

    // Tambahkan tugas ke daftar tampilan
    buatItemTugas(tugas);

    // Simpan tugas ke localStorage
    simpanKeLocalStorage();

    // Mengosongkan kembali input setelah menambahkan tugas
    input.value = "";
}

// Fungsi untuk membuat item tugas dalam daftar
function buatItemTugas(tugas) {
    let list = document.getElementById("todo-list");
    
    let li = document.createElement("li");
    li.textContent = tugas.teks;
    
    // Jika tugas sudah selesai sebelumnya, tambahkan garis tengah
    if (tugas.selesai) {
        li.style.textDecoration = "line-through";
    }

    // Event klik untuk menandai sebagai selesai/tidak selesai
    li.onclick = function () {
        tugas.selesai = !tugas.selesai;
        li.style.textDecoration = tugas.selesai ? "line-through" : "none";

        // Simpan perubahan ke localStorage
        simpanKeLocalStorage();
    };

    // Tombol hapus
    let hapusBtn = document.createElement("button");
    hapusBtn.textContent = "Hapus";
    hapusBtn.onclick = function () {
        list.removeChild(li);
        simpanKeLocalStorage();
    };

    li.appendChild(hapusBtn);
    list.appendChild(li);
}

// Fungsi untuk menyimpan daftar tugas ke localStorage
function simpanKeLocalStorage() {
    let list = document.getElementById("todo-list");
    let tugasArray = [];

    // Loop semua item dalam daftar dan simpan ke array
    list.querySelectorAll("li").forEach(li => {
        let tugas = {
            teks: li.firstChild.textContent, 
            selesai: li.style.textDecoration === "line-through"
        };
        tugasArray.push(tugas);
    });

    // Simpan array ke localStorage dalam format JSON
    localStorage.setItem("todoList", JSON.stringify(tugasArray));
}

// Fungsi untuk memuat daftar tugas dari localStorage
function muatDariLocalStorage() {
    let data = localStorage.getItem("todoList");
    
    if (data) {
        let tugasArray = JSON.parse(data);
        
        // Loop data yang tersimpan dan tampilkan kembali di halaman
        tugasArray.forEach(tugas => buatItemTugas(tugas));
    }
}
