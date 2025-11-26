# Memahami Throttling di JavaScript: Konsep, Cara Kerja, dan Contoh Implementasi
Ketika bekerja dengan event seperti `scroll`, `resize`, `mousemove`, atau `click`, JavaScript dapat memicu ratusan hingga ribuan event dalam hitungan detik. Jika setiap event dijalankan tanpa kontrol, performa UI akan turun secara signifikan. Inilah alasan mengapa teknik **throttling** sangat penting digunakan.

Artikel ini membahas apa itu throttling, bagaimana cara kerjanya, serta contoh implementasi yang dapat langsung digunakan di proyek frontend.

---

## Apa Itu Throttling?

**Throttling** adalah teknik membatasi berapa sering sebuah fungsi dijalankan dalam preiode/rentang waktu tertentu meskipun event di dipicu berkali-kali.

Dengan throttling:

- Event bisa di panggil berkali-kali
- Tetapi fungsi handler hanya di jalankan **Maksimal sekali dalam interval tertentu**


Misalnya:

- Event `scroll` terjadi 500x dalam 1 detik
- Kita set throttling 200ms
- Maka fungsi handle hanya di jalankan **5x per detik** bukan 500x

---

## Mengapa throttling itu penting?

### 1. Meningkatkan performa UI
Throttling mencegah handler berat (misalnya perhitungan layout, rendering grafik, atau fetch API) dieksekusi terus-menerus.

### 2. Menghemat resource browser
Semakin sedikit callback dijalankan, semakin rendah penggunaan CPU.

### 3. Stabil pada High-frequency Events
Cocok untuk event seperti:
- `scroll`
- `resize`
- `mousemove`
- `drag`
- `keyup`

### 4. Membuat Aplikasi Lebih Responsif  
Dengan interval eksekusi yang teratur, animasi dan UI terasa lebih smooth.

---

## Cara Kerja Throttling

Pada dasarnya throttling bekerja dengan konsep berikut:

1. Ketika fungsi dipanggil, cek apakah **sedang dalam masa cooldown**
2. Jika belum → jalankan fungsi
3. Aktifkan timer cooldown berdasarkan `delay`
4. Jika event dipanggil lagi saat cooldown → **abaikan**
5. Setelah timeout selesai → fungsi boleh dijalankan lagi

---

## Implementasi Throttling (JavaScript)

Berikut implementasi throttling yang umum digunakan:

```js
function throttle(func, delay) {
  let throttleTimeout = null;

  return function (...args) {
    if (!throttleTimeout) {
      func(...args);

      throttleTimeout = setTimeout(() => {
        throttleTimeout = null;
      }, delay);
    }
  };
}
```

### Penjelasan singkat:

- `throttleTimeout` menyimpan status “cooldown”
- Selama cooldown aktif, fungsi tidak boleh dipanggil
- Setelah `delay` berakhir, cooldown direset, dan fungsi bisa dipanggil lagi

---

# Contoh Penggunaan Throttling

### Throttle pada Event Scroll

```js
function handleScroll() {
  console.log("Scroll event fired:", Date.now());
}

window.addEventListener("scroll", throttle(handleScroll, 200));
```

Hasil:

- Scroll event boleh terjadi ratusan kali
- Tetapi `handleScroll` hanya dipanggil **maksimal 1 kali setiap 200ms**

---

## Contoh Kasus di Dunia Nyata

### 1. Infinite Scrolling  
Mencegah API dipanggil terlalu sering ketika user scroll ke bawah.

### 2. Repositioning Floating UI  
Misalnya tooltip atau floating menu yang mengikuti cursor, tetapi tidak ingin di-render setiap pixel.

### 3. Resize Listener  
Menghindari kalkulasi layout yang berat setiap kali jendela di-resize.

### 4. Button Spam Prevention  
Menjaga user tidak memanggil aksi berulang-ulang dalam waktu singkat.

---

## Perbedaan Throttling vs Debouncing

| Fitur | Throttling | Debouncing |
|-------|------------|------------|
| Cara kerja | Batasi eksekusi per interval | Tunggu user berhenti |
| Jumlah eksekusi | Banyak, tapi dibatasi | Sekali, setelah berhenti |
| Cocok untuk | scroll, resize, drag | search input, autosave |

---

## Kapan Sebaiknya Menggunakan Throttling?

Gunakan throttling ketika:

- Event terjadi secara *continuous*  
- Kamu tetap ingin handler berjalan secara *periodik*  
- Tidak perlu menunggu user berhenti berinteraksi  

Jika ingin handler berjalan **hanya ketika user berhenti**, gunakan **debouncing**.

---

## Kesimpulan

Throttling adalah teknik penting untuk mengontrol eksekusi fungsi pada event yang terjadi dengan frekuensi tinggi. Dengan membatasi eksekusi dalam interval tertentu, kita dapat meningkatkan performa aplikasi, mengurangi penggunaan CPU, dan membuat UI lebih responsif.

Implementasi throttling sederhana tetapi sangat powerful. Teknik ini wajib dikuasai oleh setiap frontend engineer, terutama ketika bekerja dengan scroll, resize, atau event UI yang intensif.

---