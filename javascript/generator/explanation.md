# Memahami Javasript Generator: Cara Kerja, Kelebihan dan Contoh Penggunaan di Dunia Nyata

JavaScript memiliki fitur unik bernama **Generator**, yaitu fungsi yang dapat dihentikan (*pause*) dan dilanjutkan (*resume*) kapan saja. Berbeda dengan fungsi biasa yang berjalan dari awal hingga akhir tanpa berhenti, generator memberi kita kontrol penuh atas alur eksekusi.

Fitur ini sangat powerful untuk kasus seperti data streaming, traversal struktur besar, lazy evaluation, hingga pengganti async flow sebelum hadirnya `async/await`.

Artikel ini membahas konsep generator secara sederhana, cara kerjanya, dan contoh penggunaan nyata di frontend maupun backend.

---

## Apa Itu JavaScript Generator?

**Generator adalah fungsi khusus yang dapat menghentikan eksekusi sementara ('yield') dan melanjutkan ('next').**

Generator dibuat menggunakan tanda `function*`:

```js
function* myGenerator() {
 yield 1
 yield 2
 yield 3
}
```

Untuk menjalankanya, kita gunakan iterator:

```js
const gen = myGenerator();

gen.next(); // {value: 1, done: false}
gen.next(); // {value: 2, done: false}
gen.next(); // {value: 3, done: false}
gen.next(); // {value: undefined, done: true}
```
---

## Perbedaan Generator dengan Fungsi Biasa
| Fungsi Biasa | Generator |
|--------------|-----------|
| Tidak bisa di pause | Bisa di pause menggunakan `yield` |
| Berjalan dari awal sampai akhir | Berjalan *step-by-step* |
| Return hanya sekali | Bisa menghasilkan banyak nilai |
| Tidak punya iterator | Menghasilkan iterator otomatis | 

Generator memberikan kontrol eksekusi yang sangat fleksibel.

---

## Cara Kerja Generator

Generator menggunakan dua elemen utama:

1. **`yield`** - menghentikan fungsi dan mengembalikan nilai
2. **`next()`** - melanjutkan eksekusi dari titik terakhir

Contoh:

```js
function* greeting() {
 yield "Hello"
 yield "Safei Muslim"
}

const g = greeting();

console.log(g.next().value) // Hello
console.log(g.next().value) // Safei Muslim
```

Setiap kali `next()` di panggil, generator melanjutkan kode setelah `yield`.

---
## Mengapa Generator Penting?

Generator digunakan untuk:

### 1. **Lazy evaluation**
Hanya menghitung nilai saat dibutuhkan.

### 2. **Data streaming**
Berguna untuk memproses data besar tanpa memakan banyak memori.

### 3. **Custom iterable**
Mudah membuat objek yang bisa di-*loop* seperti array.

### 4. **Mengontrol async flow**
Sebelum `async/await`, banyak library (seperti `co`) memakai generator.

---

## Contoh Penggunaan Generator di Dunia Nyata

---

### 1. Membuat Counter Tanpa Variable Global

```js
function* counter () {
 let i = 0;
 while(true) {
  yield i++;
 }
}

const c = counter();

console.log(c.next().value) // 0
console.log(c.next().value) // 1
console.log(c.next().value) // 2
console.log(c.next().value) // 3
```

Counter bisa berjalan tak terbatas tanpa boros memori.

---
---

### 2. Iterasi Struktur Tree Secara Lazy

```js
function* traverse(node) {
  yield node.value;

  if (node.children) {
    for (const child of node.children) {
      yield* traverse(child);
    }
  }
}
```

Dengan `yield*`, kita mengeksekusi generator lain secara rekursif.

---

### 3. Infinite Sequence (Tanpa Crash)

```js
function* fibonacci() {
  let a = 0, b = 1;

  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

const fib = fibonacci();
console.log(fib.next().value); // 0
console.log(fib.next().value); // 1
console.log(fib.next().value); // 1
console.log(fib.next().value); // 2
```

Fungsinya tidak pernah menghasilkan semua angka sekaligus → hemat memori.

---
### 4. Pagination / Infinite Scroll di Frontend

```js
async function* fetchPages(url) {
 let page = 1;
 while(true) {
  const res = await fetch(`${url}?page=${page}`)
  const data = await res.json();

  if(!data.length) return

  yield data;
  page++
 }
}
```

Pada setiap yield, Anda bisa render datanya di UI tanpa memuat semuanya sekaligus.

---

### 5. Membuat Custom Iterable untuk Object

```js
const user = {
  name: "Safei",
  skills: ["JS", "React", "Node"],

  *[Symbol.iterator]() {
    for (const s of this.skills) {
      yield s;
    }
  }
};

console.log([...user]); // ["JS", "React", "Node"]
```

Sekarang object `user` bisa di-*spread* seperti array.

---

## Generator vs Async/Await

Generator dulu digunakan sebelum `async/await`, tetapi tetap relevan untuk:

- lazy execution
- custom iterables
- data stream
- infinite execution
- controlled iteration

Sementara `async/await` lebih cocok untuk menangani operasi asynchronous modern.

---

## Kapan Menggunakan Generator?

Gunakan generator ketika:

- Anda butuh menghentikan dan melanjutkan eksekusi fungsi
- Anda ingin lazy loading atau lazy iteration
- Anda memproses data sangat besar
- Anda membutuhkan custom iteration behavior

Hindari generator jika:

- Kode Anda menjadi lebih rumit tanpa manfaat signifikan
- Kasus dapat diselesaikan dengan loop biasa atau async/await

---

## Kesimpulan

JavaScript Generator adalah fitur powerful untuk mengontrol alur eksekusi, menghasilkan nilai secara bertahap, dan mengelola data besar secara efisien. Dengan memahami cara kerja `yield` dan `next()`, Anda dapat membuat fungsi yang lebih fleksibel, hemat memori, dan mudah dikontrol.

Generator mungkin tampak rumit di awal, tetapi kemampuan mereka dalam membangun alur eksekusi yang dinamis membuatnya sangat berguna dalam aplikasi modern.

---