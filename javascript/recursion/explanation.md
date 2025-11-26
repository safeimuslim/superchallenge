# Memahami Fungsi Rekursif dalam JavaScript: Penjelasan Singkat dan Manfaatnya

Rekursi adalah salah satu konsep fundamental dalam pemrograman, termasuk JavaScript. Banyak masalah kompleks dapat diselesaikan dengan lebih elegan menggunakan rekursi dibandingkan dengan perulangan biasa. Artikel ini membahas apa itu rekursi, bagaimana cara kerjanya, dan kapan sebaiknya digunakan.

---

## Apa Itu Fungsi Rekursif?

Fungsi rekursif adalah fungsi yang memanggil dirinya sendiri hingga mencapai kondisi berhenti yang disebut *base case*.

Contoh sederhana:

```js
function countdown(n) {
  if (n === 0) return;
  console.log(n);
  countdown(n - 1);
}

countdown(5);
```

Pada contoh di atas, fungsi `countdown()` akan terus memanggil dirinya sendiri sambil mengurangi nilai `n` hingga mencapai angka 0.

---

## Bagaimana Cara Kerja Rekursi?

Setiap fungsi rekursif selalu memiliki dua bagian penting:

### 1. Base Case  
Kondisi yang digunakan untuk menghentikan rekursi. Tanpa base case yang tepat, fungsi rekursif dapat berjalan tanpa henti dan menyebabkan *stack overflow*.

```js
if (n === 0) return;
```

### 2. Recursive Case  
Bagian yang memanggil fungsi itu sendiri dengan data yang lebih kecil atau mendekati base case.

```js
countdown(n - 1);
```

---

## Kapan Sebaiknya Menggunakan Rekursi?

Rekursi sangat sesuai digunakan pada masalah yang:

- Dapat dipecah menjadi sub-masalah yang lebih kecil
- Memiliki struktur data bersarang (nested)
- Melibatkan traversal pohon (tree)
- Menjadi terlalu kompleks jika menggunakan loop biasa

---

## Manfaat Rekursi dalam JavaScript

### 1. Ideal untuk Struktur Data Bersarang

Rekursi mempermudah traversal data yang memiliki kedalaman dinamis, seperti:

- JSON bersarang  
- Folder di dalam folder  
- DOM tree  
- Organization chart  

Contoh traversal node:

```js
function walk(node) {
  console.log(node.name);

  if (node.children) {
    for (const child of node.children) {
      walk(child);
    }
  }
}
```

---

### 2. Kode Lebih Pendek dan Lebih Mudah Dibaca

Dibandingkan nested loop yang panjang, rekursi dapat menyederhanakan kode sehingga lebih mudah dipahami dan dipelihara.

---

### 3. Cocok untuk Algoritma Matematika

Rekursi sering digunakan dalam algoritma seperti:

- Faktorial  
- Deret Fibonacci  
- Greatest Common Divisor (GCD)  
- Merge Sort  
- Quick Sort  

Contoh faktorial:

```js
function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}
```

---

### 4. Mempermudah Traversal Struktur Besar

Rekursi membuat traversal struktur besar lebih efisien dan bersih untuk ditulis.

```js
function scan(dir) {
  for (const item of dir) {
    console.log(item.name);
    if (item.children) scan(item.children);
  }
}
```

---

### 5. Natural untuk Masalah yang “Memecah Dirinya Sendiri”

Contoh kasus lain:

- Membalik string  
- Deep clone object  
- Flatten array  
- Mencari nilai dalam struktur nested  

---

## Kapan Tidak Dianjurkan Menggunakan Rekursi?

Walaupun elegan, rekursi tidak selalu menjadi pilihan terbaik. Hindari rekursi jika:

- Tingkat kedalaman data terlalu tinggi (risiko *stack overflow*)
- Loop biasa dapat menyelesaikan masalah lebih cepat
- Base case sulit atau membingungkan untuk didefinisikan

---

## Kesimpulan

Rekursi adalah teknik yang kuat dalam JavaScript. Dengan memanggil dirinya sendiri, fungsi rekursif dapat menyelesaikan banyak masalah yang kompleks dengan cara yang lebih bersih dan lebih mudah dibaca. Rekursi sangat efektif untuk traversal struktur data bersarang, algoritma matematika, dan berbagai operasi “pemecahan masalah menjadi bagian yang lebih kecil”.

Jika digunakan dengan tepat, rekursi dapat meningkatkan kualitas kode dan memudahkan pengembangan aplikasi.

