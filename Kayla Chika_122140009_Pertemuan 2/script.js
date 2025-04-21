class Dashboard {
    constructor() {
        this.jadwalKuliahKey = 'jadwalKuliah';
        this.daftarTugasKey = 'daftarTugas';
        this.daftarJadwalElement = document.getElementById('daftar-jadwal');
        this.daftarTugasListElement = document.getElementById('daftar-tugas-list');
        this.formJadwal = {
            id: document.getElementById('edit-jadwal-id'),
            hari: document.getElementById('jadwal-hari'),
            waktu: document.getElementById('jadwal-waktu'),
            mataKuliah: document.getElementById('jadwal-mata-kuliah'),
            simpanButton: document.getElementById('simpan-jadwal')
        };
        this.formTugas = {
            id: document.getElementById('edit-tugas-id'),
            nama: document.getElementById('tugas-nama'),
            deadline: document.getElementById('tugas-deadline'),
            simpanButton: document.getElementById('simpan-tugas')
        };

        this.formJadwal.simpanButton.addEventListener('click', this.simpanJadwal);
        this.formTugas.simpanButton.addEventListener('click', this.simpanTugas);

        this.loadData();
    }

    // Arrow function untuk mendapatkan data dari localStorage
    getData = (key) => {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : [];
    };

    // Arrow function untuk menyimpan data ke localStorage
    saveData = (key, data) => {
        localStorage.setItem(key, JSON.stringify(data));
        this.loadData();
    };

    
    renderJadwal = (jadwal) => {
        this.daftarJadwalElement.innerHTML = '';
        if (jadwal && jadwal.length > 0) {
            jadwal.forEach((item, index) => {
                const listItem = document.createElement('li');
                listItem.innerHTML = `
                    <span>${index + 1}. ${item.hari}: ${item.waktu} - ${item.mataKuliah}</span>
                    <div class="action-buttons">
                        <button onclick="dashboard.editJadwal('${item.id}')">Edit</button>
                        <button onclick="dashboard.hapusJadwal('${item.id}')">Hapus</button>
                    </div>
                `;
                this.daftarJadwalElement.appendChild(listItem);
            });
        } else {
            this.daftarJadwalElement.innerHTML = '<p>Tidak ada jadwal kuliah.</p>';
        }
    };

    
    renderTugas = (tugas) => {
        this.daftarTugasListElement.innerHTML = '';
        if (tugas && tugas.length > 0) {
            tugas.forEach((item) => {
                const listItem = document.createElement('li');
                listItem.innerHTML = `
                    <span>• ${item.nama} (Deadline: ${item.deadline})</span>
                    <div class="action-buttons">
                        <button onclick="dashboard.editTugas('${item.id}')">Edit</button>
                        <button onclick="dashboard.hapusTugas('${item.id}')">Hapus</button>
                    </div>
                `;
                this.daftarTugasListElement.appendChild(listItem);
            });
        } else {
            this.daftarTugasListElement.innerHTML = '<p>Tidak ada tugas.</p>';
        }
    };

    loadData = async () => {
        const jadwal = await Promise.resolve(this.getData(this.jadwalKuliahKey));
        const tugas = await Promise.resolve(this.getData(this.daftarTugasKey));
        this.renderJadwal(jadwal);
        this.renderTugas(tugas);
    };

    simpanJadwal = () => {
        const hari = this.formJadwal.hari.value.trim();
        const waktu = this.formJadwal.waktu.value.trim();
        const mataKuliah = this.formJadwal.mataKuliah.value.trim();
        const id = this.formJadwal.id.value;

        if (hari && waktu && mataKuliah) {
            const jadwal = this.getData(this.jadwalKuliahKey);
            if (id) {
                const index = jadwal.findIndex(item => item.id === id);
                if (index !== -1) {
                    jadwal[index] = { id, hari, waktu, mataKuliah };
                }
                this.formJadwal.id.value = ''; 
            } else {
                const newId = Date.now().toString();
                jadwal.push({ id: newId, hari, waktu, mataKuliah });
            }
            this.saveData(this.jadwalKuliahKey, jadwal);
            this.formJadwal.hari.value = '';
            this.formJadwal.waktu.value = '';
            this.formJadwal.mataKuliah.value = '';
        } else {
            alert('Harap isi semua kolom jadwal.');
        }
    };

    editJadwal = (id) => {
        const jadwal = this.getData(this.jadwalKuliahKey);
        const item = jadwal.find(item => item.id === id);
        if (item) {
            this.formJadwal.id.value = item.id;
            this.formJadwal.hari.value = item.hari;
            this.formJadwal.waktu.value = item.waktu;
            this.formJadwal.mataKuliah.value = item.mataKuliah;
        }
    };

    hapusJadwal = (id) => {
        const jadwal = this.getData(this.jadwalKuliahKey);
        const updatedJadwal = jadwal.filter(item => item.id !== id);
        this.saveData(this.jadwalKuliahKey, updatedJadwal);
    };

    simpanTugas = () => {
        const nama = this.formTugas.nama.value.trim();
        const deadline = this.formTugas.deadline.value;
        const id = this.formTugas.id.value;

        if (nama && deadline) {
            const tugas = this.getData(this.daftarTugasKey);
            if (id) {
                const index = tugas.findIndex(item => item.id === id);
                if (index !== -1) {
                    tugas[index] = { id, nama, deadline };
                }
                this.formTugas.id.value = ''; 
            } else {
                const newId = Date.now().toString();
                tugas.push({ id: newId, nama, deadline });
            }
            this.saveData(this.daftarTugasKey, tugas);
            this.formTugas.nama.value = '';
            this.formTugas.deadline.value = '';
        } else {
            alert('Harap isi nama dan deadline tugas.');
        }
    };

    editTugas = (id) => {
        const tugas = this.getData(this.daftarTugasKey);
        const item = tugas.find(item => item.id === id);
        if (item) {
            this.formTugas.id.value = item.id;
            this.formTugas.nama.value = item.nama;
            this.formTugas.deadline.value = item.deadline;
        }
    };

    hapusTugas = (id) => {
        const tugas = this.getData(this.daftarTugasKey);
        const updatedTugas = tugas.filter(item => item.id !== id);
        this.saveData(this.daftarTugasKey, updatedTugas);
    };
}

const dashboard = new Dashboard();