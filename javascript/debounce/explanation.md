# Memahami Debouncing di JavaScript: Konsep, Cara Kerja, dan Contoh Implementasi

Saat bekerja dengan input pencarian, resize window, atau autosave, kita sering ingin menunggu pengguna **selesai** melakukan sebuah aksi sebelum menjalankan suatu fungsi. Inilah alasan teknik **debouncing** sangat penting di JavaScript—untuk menghindari eksekusi fungsi yang terlalu sering dan tidak efisien.

Artikel ini membahas konsep debouncing, bagaimana cara kerjanya, dan contoh implementasi yang bisa langsung diterapkan dalam proyek frontend.

---

## Apa Itu Debouncing?

**Debouncing** adalah teknik untuk memastikan suatu fungsi hanya dijalankan **setelah pengguna berhenti melakukan aksi** dalam periode waktu tertentu.

Dengan debouncing:

- Jika event terus dipicu, fungsi **tidak akan dijalankan**
- Fungsi baru dieksekusi **setelah delay berakhir tanpa adanya interaksi lagi**

Misalnya:

- Pengguna mengetik 10 huruf dalam 1 detik  
- Kita set debounce = 300ms  
- Fungsi hanya jalan **sekali**, yaitu 300ms setelah user berhenti mengetik

---

## Mengapa Debouncing Penting?

### 1. Mencegah Eksekusi Fungsi Berlebihan  
Misalnya search API tidak perlu dipanggil setiap kali pengguna mengetik 1 huruf.

### 2. Menghemat Resource Browser  
Callback yang berjalan terlalu sering dapat menguras CPU.

### 3. Menghindari Overload API  
Debounce menunda request sampai user selesai mengetik.

### 4. Cocok untuk High-interaction Input  
Debounce sangat efektif untuk event seperti:

- input typing
- autosave form
- resize window
- validation on user typing

---

## Cara Kerja Debouncing

Konsep debouncing:

1. Saat event terjadi, **hapus timer sebelumnya**
2. Buat timer baru sepanjang `delay`
3. Jika user memicu event lagi sebelum timer habis → timer di-reset
4. Jika timer selesai tanpa gangguan → jalankan fungsi

---

## Implementasi Debouncing (JavaScript)

Berikut implementasi yang umum digunakan:

```js
function debounce(func, timeout = 300) {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}
```

### Penjelasan singkat:

- `clearTimeout(timer)` membatalkan timer sebelumnya
- `setTimeout()` membuat timer baru
- Fungsi hanya dijalankan ketika user berhenti memicu event selama `timeout` ms

---

## Contoh Penggunaan Debounce

### Debounce pada Input Pencarian

```js
function handleSearch(e) {
  console.log("Searching for:", e.target.value);
}

const debouncedSearch = debounce(handleSearch, 400);

document
  .getElementById("search")
  .addEventListener("input", debouncedSearch);
```

Hasil:

- User mengetik → API tidak langsung dipanggil  
- Setelah user berhenti 400ms → fungsi `handleSearch` dipanggil sekali  

---

## Contoh Kasus Nyata

### 1. Search Suggestions  
Menghindari request API setiap kali user menekan keyboard.

### 2. Auto-save Form  
Menyimpan data setelah user berhenti mengetik, bukan setiap input berubah.

### 3. Optimasi Resize Event  
Menghindari perhitungan layout secara berulang saat window di-resize.

### 4. Validasi Input Real-Time  
Menunda validasi hingga user selesai mengetik.

---

## Perbedaan Debouncing vs Throttling

| Fitur | Debouncing | Throttling |
|-------|------------|------------|
| Cara kerja | Jalankan setelah user berhenti | Batasi eksekusi per interval |
| Eksekusi | Hanya sekali setelah delay | Beberapa kali, tapi dibatasi |
| Cocok untuk | search, autosave, validation | scroll, resize, drag |
| Reset timer | Ya | Tidak |

---

## Kapan Sebaiknya Menggunakan Debouncing?

Gunakan debouncing ketika:

- Fungsi hanya perlu dijalankan **sekali setelah aktivitas berakhir**
- Kamu ingin menghindari spam request API
- Kamu ingin UI menunggu interaksi user selesai

Jika kamu butuh fungsi berjalan secara berkala selama user masih berinteraksi, gunakan **throttling**.

---

## Kesimpulan

Debouncing adalah teknik penting di JavaScript untuk mengontrol eksekusi fungsi pada event yang dipicu berulang-ulang. Teknik ini membuat aplikasi lebih efisien, responsif, dan menghindari beban berlebih pada API maupun browser.

Dengan memahami cara kerja debouncing, seorang frontend engineer dapat meningkatkan kualitas interaksi pengguna dan performa aplikasi secara signifikan.

---

Jika kamu ingin, saya bisa membuatkan:

- versi infografis (PNG)  
- versi React Hook (`useDebounce`)  
- versi TypeScript  
- contoh penggunaan debounce + fetch API  
