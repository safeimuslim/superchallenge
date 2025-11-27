# Memahami Closures di JavaScript: Konsep, Cara Kerja, dan Contoh Penerapan di Dunia Nyata

Closures adalah salah satu konsep JavaScript yang paling penting, tetapi juga paling sering membingungkan — bahkan untuk developer yang sudah berpengalaman. Banyak fitur kompleks di JavaScript dibangun di atas closures, termasuk currying, data encapsulation, private state, event handler, dan masih banyak lagi.

Artikel ini akan membantu Anda memahami closures secara sederhana, disertai contoh kode yang mudah diikuti dan relevan dengan pekerjaan seorang frontend engineer.

---

## Apa Itu Closure?

**Closure adalah kemampuan sebuah fungsi untuk mengingat dan mengakses scope tempat ia didefinisikan, meskipun fungsi tersebut dieksekusi di scope yang berbeda.**

Dengan kata lain:

> Closure memungkinkan fungsi untuk “membawa” variabel dari luar fungsi, walaupun konteks eksekusinya sudah berubah.

Contoh sederhana:

```js
function createCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const counter = createCounter();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
```

Fungsi internal **masih dapat mengakses `count`** meskipun `createCounter()` sudah selesai dieksekusi.  
Inilah yang disebut closure.

---

## Cara Kerja Closure

Closure terjadi karena JavaScript menggunakan **lexical scope**, yaitu scope ditentukan berdasarkan posisi fungsi ditulis di dalam kode.

Ketika fungsi dibuat:

- JavaScript menyimpan referensi ke **environment** (variabel di scope luar)
- Fungsi tetap bisa mengakses variabel itu walaupun scope aslinya sudah tidak aktif
- Variabel tersebut tetap hidup selama fungsi internal masih digunakan

Diagram sederhana:

```
Function Outer Scope
 ├─ variable: count
 └─ returns Inner Function --> Inner function still remembers count
```

---

## Mengapa Closures Penting?

Closures dipakai di hampir semua fitur JavaScript modern:

### 1. Menyimpan State Tanpa Class
Closure memungkinkan Anda membuat state privat:

```js
function useLike() {
  let likes = 0;

  return {
    add() { likes++; },
    get() { return likes; }
  };
}

const like = useLike();
like.add();
console.log(like.get()); // 1
```

---

### 2. Membuat Private Variable (sebelum ada `#private`)

```js
function createUser(name) {
  let score = 0;

  return {
    name,
    increment() {
      score++;
    },
    getScore() {
      return score;
    }
  };
}

const user = createUser("Safei");
user.increment();
// Tidak bisa akses score langsung → aman
```

---

### 3. Currying dan Functional Programming

```js
function multiply(a) {
  return function (b) {
    return a * b;
  };
}

const double = multiply(2);
console.log(double(10)); // 20
```

---

### 4. Event Handler & DOM Interaction

```js
function registerClickLogger(element) {
  let count = 0;

  element.addEventListener("click", () => {
    count++;
    console.log("Clicked:", count);
  });
}
```

Variabel `count` “menempel” pada handler via closure.

---

### 5. Debounce dan Throttle (Fundamental di Frontend)

Debounce:

```js
function debounce(func, delay) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(func, delay);
  };
}
```

Throttle:

```js
function throttle(func, delay) {
  let ready = true;
  return function (...args) {
    if (!ready) return;
    ready = false;
    func(...args);
    setTimeout(() => (ready = true), delay);
  };
}
```

Keduanya menggunakan closure untuk menyimpan state (`timer`, `ready`).

---

## Kesalahan Umum dalam Memahami Closure

### 1. Mengira Closure Sama dengan Lexical Scope  
Tidak. Lexical scope adalah aturan tentang “di mana variabel bisa diakses”. Closure adalah “fungsi yang membawa lexical scope-nya”.

### 2. Mengira Closure Adalah Fitur Spesial  
Closure bukan fitur tambahan — closure adalah **konsekuensi alami** dari cara JavaScript bekerja.

### 3. Lupa bahwa setiap loop juga membuat closure  
Contoh klasik bug:

```js
for (var i = 1; i <= 3; i++) {
  setTimeout(() => console.log(i), 100);
}
// Output: 4, 4, 4
```

Solusi dengan closure:

```js
for (let i = 1; i <= 3; i++) {
  setTimeout(() => console.log(i), 100);
}
```

---

## Contoh Kasus Dunia Nyata

### 1. Membuat Hook Pribadi ala React

```js
function useCounter() {
  let value = 0;

  return {
    inc() { value++; },
    get() { return value; }
  };
}

const c = useCounter();
c.inc();
console.log(c.get()); // 1
```

### 2. Menyimpan Data dalam Module Pattern

```js
const cart = (function () {
  let items = [];

  return {
    add(item) {
      items.push(item);
    },
    list() {
      return items;
    }
  };
})();
```

---

## Kesimpulan

Closure adalah konsep fundamental di JavaScript yang memungkinkan fungsi:

- Mengakses scope luar meskipun eksekusi berubah
- Menyimpan state privat
- Menjadi dasar dari banyak pola seperti debounce, currying, module pattern, dan custom hooks

Dengan memahami closure, Anda akan lebih mudah membangun fungsi modular, reusable, dan aman dari kebocoran data.

Closures bukan sekadar latihan teori — konsep ini muncul di setiap level aplikasi JavaScript modern.

---

Jika Anda ingin, saya bisa membuatkan:

- versi infographic (PNG)  
- versi cover Medium 1600×840 px  
- soal latihan tentang closures (mid–senior level)  
- atau penjelasan lebih dalam tentang lexical environment  
