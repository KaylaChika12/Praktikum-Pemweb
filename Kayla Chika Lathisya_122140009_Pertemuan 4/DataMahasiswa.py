# Data mahasiswa
mahasiswa = [
    {"nama": "Lee Min Hoo", "nim": "2310001", "nilai_uts": 80, "nilai_uas": 85, "nilai_tugas": 78},
    {"nama": "Lee Jong Suk", "nim": "2310002", "nilai_uts": 65, "nilai_uas": 70, "nilai_tugas": 60},
    {"nama": "Ji Chang Wook", "nim": "2310003", "nilai_uts": 90, "nilai_uas": 88, "nilai_tugas": 92},
    {"nama": "Kim Bum", "nim": "2310004", "nilai_uts": 55, "nilai_uas": 60, "nilai_tugas": 58},
    {"nama": "Gong Yoo", "nim": "2310005", "nilai_uts": 40, "nilai_uas": 45, "nilai_tugas": 50},
]

# Menghitung nilai akhir dan grade
for mhs in mahasiswa:
    nilai_akhir = 0.3 * mhs["nilai_uts"] + 0.4 * mhs["nilai_uas"] + 0.3 * mhs["nilai_tugas"]
    mhs["nilai_akhir"] = round(nilai_akhir, 1)

    # Menentukan grade
    if nilai_akhir >= 80:
        mhs["grade"] = "A"
    elif nilai_akhir >= 70:
        mhs["grade"] = "B"
    elif nilai_akhir >= 60:
        mhs["grade"] = "C"
    elif nilai_akhir >= 50:
        mhs["grade"] = "D"
    else:
        mhs["grade"] = "E"

# Menampilkan data dalam bentuk tabel
print("{:<15} {:<10} {:<10} {:<10} {:<10} {:<13} {:<6}".format(
    "Nama", "NIM", "UTS", "UAS", "Tugas", "Nilai Akhir", "Grade"
))
print("-" * 80)

for mhs in mahasiswa:
    print("{:<15} {:<10} {:<10} {:<10} {:<10} {:<13} {:<6}".format(
        mhs["nama"], mhs["nim"], mhs["nilai_uts"], mhs["nilai_uas"],
        mhs["nilai_tugas"], mhs["nilai_akhir"], mhs["grade"]
    ))

# Mencari mahasiswa dengan nilai tertinggi dan terendah
nilai_tertinggi = max(mahasiswa, key=lambda x: x["nilai_akhir"])
nilai_terendah = min(mahasiswa, key=lambda x: x["nilai_akhir"])

# Mahasiswa dengan nilai tertinggi
print("\nMahasiswa dengan nilai tertinggi:")
print(f"Nama        : {nilai_tertinggi['nama']}")
print(f"NIM         : {nilai_tertinggi['nim']}")
print(f"Nilai Akhir : {nilai_tertinggi['nilai_akhir']}")
print(f"Grade       : {nilai_tertinggi['grade']}")

# Mahasiswa dengan nilai terendah
print("\nMahasiswa dengan nilai terendah:")
print(f"Nama        : {nilai_terendah['nama']}")
print(f"NIM         : {nilai_terendah['nim']}")
print(f"Nilai Akhir : {nilai_terendah['nilai_akhir']}")
print(f"Grade       : {nilai_terendah['grade']}")
