function hitungBMI() {
    const berat = parseFloat(document.getElementById('berat').value);
    const tinggi = parseFloat(document.getElementById('tinggi').value) / 100;
    
    if (isNaN(berat) || isNaN(tinggi) || tinggi === 0) {
        alert('Masukkan nilai berat dan tinggi yang valid.');
        return;
    }

    const bmi = (berat / (tinggi * tinggi)).toFixed(2);
    document.getElementById('hasil-bmi').textContent = bmi;

    let kategori = '';
    if (bmi < 18.5) {
        kategori = 'Kekurangan berat badan';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        kategori = 'Berat badan normal';
    } else if (bmi >= 25 && bmi < 29.9) {
        kategori = 'Kelebihan berat badan';
    } else {
        kategori = 'Obesitas';
    }
    document.getElementById('kategori').textContent = kategori;
}

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    hitungBMI();
});

function resetForm() {
    document.getElementById('berat').value = '';
    document.getElementById('tinggi').value = '';
    document.getElementById('usia').value = '';
    document.getElementById('hasil-bmi').textContent = '0';
    document.getElementById('kategori').textContent = 'Menunggu Perhitungan';
}

document.querySelector('button[type="reset"]').addEventListener('click', resetForm);
