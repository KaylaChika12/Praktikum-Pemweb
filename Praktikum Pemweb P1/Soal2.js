function sapaNama(nama) {
    return `Halo, ${nama}! Selamat belajar JavaScript!`;
}

// Event handler untuk tombol sapa
document.getElementById("sapa-button").addEventListener("click", function() {
    const nama = document.getElementById("nama-input").value;
    if (nama.trim() === "") {
        document.getElementById("sapa-output").innerHTML = 
            `<p class="text-red-500">Silakan masukkan nama Anda terlebih dahulu!</p>`;
    } else {
        const pesan = sapaNama(nama);
        document.getElementById("sapa-output").innerHTML = 
            `<p class="text-green-500">${pesan}</p>`;
    }
});

// Fungsi untuk kalkulator
function hitungKalkulator(angka1, angka2, operasi) {
    let hasil = 0;
    switch (operasi) {
        case "tambah":
            hasil = angka1 + angka2;
            break;
        case "kurang":
            hasil = angka1 - angka2;
            break;
        case "kali":
            hasil = angka1 * angka2;
            break;
        case "bagi":
            if (angka2 === 0) {
                return "Error: Pembagian dengan nol tidak diperbolehkan";
            }
            hasil = angka1 / angka2;
            break;
        case "pangkat":
            hasil = Math.pow(angka1, angka2);
            break;
        case "akar":
            if (angka1 < 0) {
                return "Error: Akar kuadrat dari angka negatif tidak diperbolehkan";
            }
            hasil = Math.sqrt(angka1);
            break;
        case "modulus":
            hasil = angka1 % angka2;
            break;
        default:
            return "Operasi tidak valid";
    }
    return hasil;
}

// Fungsi untuk memproses operasi
function prosesOperasi(operasi) {
    const angka1 = parseFloat(document.getElementById("angka1").value);
    const angka2 = parseFloat(document.getElementById("angka2").value);

    if (isNaN(angka1) || (["pangkat", "modulus", "bagi", "kurang", "tambah", "kali"].includes(operasi) && isNaN(angka2))) {
        document.getElementById("hasil-kalkulator").innerHTML = 
            `<p class="text-red-500">Masukkan angka yang valid!</p>`;
    } else {
        const hasil = hitungKalkulator(angka1, angka2, operasi);
        let simbol = {
            "tambah": "+",
            "kurang": "-",
            "kali": "×",
            "bagi": "÷",
            "pangkat": "^",
            "modulus": "%",
            "akar": "√"
        }[operasi];

        let output = `<p>Hasil: ${angka1} ${simbol} ${angka2} = ${hasil}</p>`;
        if (operasi === "akar") output = `<p>Hasil: √${angka1} = ${hasil}</p>`;

        document.getElementById("hasil-kalkulator").innerHTML = output;
    }
}

// Event handler untuk operasi matematika
document.getElementById("btn-tambah").addEventListener("click", () => prosesOperasi("tambah"));
document.getElementById("btn-kurang").addEventListener("click", () => prosesOperasi("kurang"));
document.getElementById("btn-kali").addEventListener("click", () => prosesOperasi("kali"));
document.getElementById("btn-bagi").addEventListener("click", () => prosesOperasi("bagi"));
document.getElementById("btn-pangkat").addEventListener("click", () => prosesOperasi("pangkat"));
document.getElementById("btn-akar").addEventListener("click", () => prosesOperasi("akar"));
document.getElementById("btn-modulus").addEventListener("click", () => prosesOperasi("modulus"));
