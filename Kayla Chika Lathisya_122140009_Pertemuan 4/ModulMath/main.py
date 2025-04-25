# main.py
# Mengimpor seluruh modul
import math_operations

# Mengimpor fungsi tertentu langsung
from math_operations import celsius_to_fahrenheit, celsius_to_kelvin

print("=== Perhitungan Geometri ===")
print(f"Luas persegi (sisi=4)           : {math_operations.luas_persegi(4)}")
print(f"Keliling persegi (sisi=4)       : {math_operations.keliling_persegi(4)}")
print(f"Luas persegi panjang (5x3)      : {math_operations.luas_persegi_panjang(5, 3)}")
print(f"Keliling persegi panjang (5x3)  : {math_operations.keliling_persegi_panjang(5, 3)}")
print(f"Luas lingkaran (jari-jari=7)    : {math_operations.luas_lingkaran(7)}")
print(f"Keliling lingkaran (jari-jari=7): {math_operations.keliling_lingkaran(7)}")

print("\n=== Konversi Suhu ===")
print(f"25°C to Fahrenheit              : {celsius_to_fahrenheit(25)} °F")
print(f"25°C to Kelvin                  : {celsius_to_kelvin(25)} K")
