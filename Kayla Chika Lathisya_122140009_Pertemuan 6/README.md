# Aplikasi Manajemen Matakuliah (API)

API sederhana untuk manajemen data matakuliah menggunakan framework Pyramid dan database SQLite.

## Fitur

- Operasi CRUD untuk matakuliah (Create, Read, Update, Delete)
- Database menggunakan SQLite
- API dapat diakses dan diuji menggunakan Postman atau `curl`



## Struktur Data Matakuliah

Setiap data matakuliah memiliki atribut berikut:

- `id`: ID unik (integer)
- `kode_mk`: Kode matakuliah (string)
- `nama_mk`: Nama matakuliah (string)
- `sks`: Jumlah SKS (integer)
- `semester`: Semester pengambilan (integer)

## Instalasi

1. Buka terminal di folder proyek:
bash
cd C:\Users\acer\pyramid-matakuliah
`

2. Buat virtual environment (jika belum):
bash
python -m venv env


3. Aktifkan virtual environment:

* PowerShell:
powershell
.\env\Scripts\Activate.ps1


> Jika ada error policy, jalankan:
> powershell
> Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope Process


* CMD:
cmd
.\env\Scripts\activate.bat


4. Install dependencies:
bash
pip install pyramid sqlalchemy waitress


## Menjalankan Server
Setelah database dibuat, jalankan server:
bash
python init.py

