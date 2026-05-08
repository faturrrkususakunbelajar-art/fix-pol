function pesanKeWA(namaProduk) {
    const nomorWA = "6285743473837"; // Nomor WA Anda
    const pesan = `Halo Kedai Digital, saya mau pesan: ${namaProduk}. Mohon infonya!`;
    const urlWA = `https://api.whatsapp.com/send?phone=${nomorWA}&text=${encodeURIComponent(pesan)}`;
    
    window.open(urlWA, '_blank');
}
