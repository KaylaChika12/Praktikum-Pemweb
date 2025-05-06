
 **Judul Program**

**Sistem Manajemen Perpustakaan Sederhana** menggunakan konsep **OOP (Object-Oriented Programming)** dan modul **`colorama`** untuk menampilkan teks berwarna di terminal.

 **Tujuan Utama Program**

Untuk membantu pengguna mengelola data koleksi perpustakaan seperti buku dan majalah. Program ini berjalan di terminal/console dan memudahkan proses penambahan, pencarian, dan penampilan data item perpustakaan.


 **Struktur dan Komponen Utama**

1. **`LibraryItem` (Abstract Class)**
   Kelas dasar untuk item perpustakaan. Tidak bisa digunakan langsung, tapi diwariskan ke:

   * `Book`
   * `Magazine`

2. **`Book` dan `Magazine` (Child Classes)**
   Kelas turunan dari `LibraryItem` yang menyimpan data spesifik seperti:

   * `Book`: ID, Judul, Penulis
   * `Magazine`: ID, Judul, Edisi

3. **`Library` (Manajemen Koleksi)**
   Kelas untuk menyimpan dan mengelola daftar semua item perpustakaan (buku dan majalah).


 **Fitur-Fitur Program**

1. **Menambahkan Item ke Perpustakaan**

   * Buku (dengan penulis)
   * Majalah (dengan nomor edisi)
     ➤ Ditambahkan ke koleksi dan dikonfirmasi dengan pesan sukses berwarna hijau.

2. **Menampilkan Semua Item**
   ➤ Menampilkan seluruh isi perpustakaan (buku & majalah) dengan warna dan ikon berbeda.

3. **Pencarian Berdasarkan ID**
   ➤ Mencari satu item berdasarkan ID.
   ➤ Menampilkan info item jika ditemukan, atau pesan error jika tidak ada (warna merah).

4. **Pencarian Berdasarkan Judul**
   ➤ Menampilkan semua item yang mengandung kata tertentu pada judul (tidak case sensitive).

5. **Interface Interaktif via Menu**
   ➤ Program berjalan dalam loop dengan pilihan menu 1–5: tambah, tampilkan, cari, atau keluar.



 **Pemanfaatan Warna (dengan `colorama`)**

* Hijau: Konfirmasi sukses (penambahan item)
* Merah: Pesan kesalahan (item tidak ditemukan)
* Kuning: Header daftar item
* Cyan: Buku
* Magenta: Majalah



 **Konsep Pemrograman yang Digunakan**

* Abstraction (`@abstractmethod`)
* Inheritance
* Encapsulation (`__atribut`)
* Polymorphism (`display_info`)
* Modularitas
* CLI-based interaction (user-friendly menu)

Dokumentasi
![Screenshot](images/perpustakaan.png)


