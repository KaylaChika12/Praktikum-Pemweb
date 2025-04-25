# Program Penghitung BMI (Body Mass Index)

# Input berat dan tinggi badan
berat = float(input("Inputkan berat badan Anda (kg): "))
tinggi = float(input("Inputkan tinggi badan Anda (m): "))

# Menghitung BMI
bmi = berat / (tinggi ** 2)

# Menentukan kategori BMI
if bmi < 18.5:
    kategori = "Berat badan kurang"
elif 18.5 <= bmi < 25:
    kategori = "Berat badan normal"
elif 25 <= bmi < 30:
    kategori = "Berat badan berlebih"
else:
    kategori = "Obesitas"

# Menampilkan hasil
print(f"\nBMI Anda adalah: {bmi:.2f}")
print(f"Kategori: {kategori}")
