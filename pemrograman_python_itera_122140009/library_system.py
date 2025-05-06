from abc import ABC, abstractmethod
from colorama import init, Fore, Style

init(autoreset=True)  

from abc import ABC, abstractmethod

class LibraryItem(ABC):
    def __init__(self, item_id, title):
        self.__id = item_id
        self.__title = title
        self._status = "Available"

    @abstractmethod
    def display_info(self):
        pass

    @property
    def id(self):
        return self.__id

    @property
    def title(self):
        return self.__title

class Book(LibraryItem):
    def __init__(self, item_id, title, author):
        super().__init__(item_id, title)
        self.author = author

    def display_info(self):
        print(Fore.CYAN + f"📘 [BOOK] ID: {self.id} | Title: {self.title} | Author: {self.author} | Status: {self._status}")

class Magazine(LibraryItem):
    def __init__(self, item_id, title, issue_number):
        super().__init__(item_id, title)
        self.issue_number = issue_number

    def display_info(self):
        print(Fore.MAGENTA + f"📕 [MAGAZINE] ID: {self.id} | Title: {self.title} | Issue: {self.issue_number} | Status: {self._status}")


class Library:
    def __init__(self):
        self.__collection = []

    def add_item(self, item):
        self.__collection.append(item)

    def display_all_items(self):
        if not self.__collection:
            print("Library is empty.")
        for item in self.__collection:
            item.display_info()

    def search_by_id(self, item_id):
        for item in self.__collection:
            if item.id == item_id:
                print("Item found:")
                item.display_info()
                return
        print(Fore.RED + "❌ Item tidak ditemukan.")


    def search_by_title(self, title):
        found = False
        for item in self.__collection:
            if title.lower() in item.title.lower():
                item.display_info()
                found = True
        if not found:
            print("No items found with that title.")

if __name__ == "__main__":
    library = Library()

    while True:
        print("\n==== Sistem Manajemen Perpustakaan ====")
        print("1. Tambah Item")
        print("2. Lihat Semua Item")
        print("3. Cari Item Berdasarkan ID")
        print("4. Cari Item Berdasarkan Judul")
        print("5. Keluar")

        choice = input("Pilih menu (1-5): ")

        if choice == "1":
            print("\n-- Tambah Item --")
            item_type = input("Jenis item (book/magazine): ").strip().lower()
            item_id = input("Masukkan ID: ")
            title = input("Masukkan Judul: ")

            if item_type == "book":
                author = input("Masukkan Nama Penulis: ")
                library.add_item(Book(item_id, title, author))
                print(Fore.GREEN + "✔️ Buku berhasil ditambahkan.")
            elif item_type == "magazine":
                issue = input("Masukkan Edisi Majalah: ")
                library.add_item(Magazine(item_id, title, issue))
                print(Fore.GREEN + "✔️ Majalah berhasil ditambahkan.")
            else:
                print("Jenis item tidak dikenali. Harus 'book' atau 'magazine'.")

        elif choice == "2":
            print(Fore.YELLOW + "\n📋 Daftar Semua Item:")
            library.display_all_items()

        elif choice == "3":
            print("\n-- Cari Berdasarkan ID --")
            search_id = input("Masukkan ID: ")
            library.search_by_id(search_id)

        elif choice == "4":
            print("\n-- Cari Berdasarkan Judul --")
            search_title = input("Masukkan Judul: ")
            library.search_by_title(search_title)

        elif choice == "5":
            print("Keluar dari program. Terima kasih!")
            break

        else:
            print("Pilihan tidak valid. Silakan pilih 1-5.")
1
