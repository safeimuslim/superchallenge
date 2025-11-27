# Memahami Currying Pada Javascript: Konsep, Cara Kerja dan Contoh Penerapan

Currying adalah salah satu konsep penting dalam functional programming, dan JavaScript mendukungnya secara natural berkat fitur closures. Meskipun terlihat sederhana, currying dapat menghasilkan kode yang lebih fleksibel, reusable, dan powerful untuk berbagai kebutuhan di frontend maupun backend.

Artikel ini akan membahas apa itu currying, bagaimana cara kerjanya, serta contoh penggunaannya dalam situasi nyata yang sering ditemui oleh seorang frontend engineer.

---

# Apa Itu Currying

**Currying adalah teknik mengubah fungsi yang menerima banyak arguments menjadi rangkaian fungsi yang masing-masing hanya menerima satu argument**

Contoh sebelum currying:

```js
function sum(a, b, c) {
  return a + b + c;
}

sum(1, 2, 3); // 6
```

Setelah currying:

```js
function sum(a) {
 return function(b) {
  return function(c) {
   return a+b+c;
  }
 }
}

sum(1)(2)(3); // 6
```
Setelah currying(dengan arrow function):

```js
const sum = (a) => (b) => (c) => a+b+c;

sum(1)(2)(3); // 6
```

Dengan currying, kita dapat memanggil fungsi secara bertahap, satu argumen per satu fungsi.

---

## Mengapa Currying Penting?

Currying bukan hanya trik sintaksis — fungsi ini sering digunakan saat:

### 1. **Membuat fungsi menjadi reusable**
Misalnya kita ingin membuat fungsi pembanding harga:

```js
const greaterThan = (min) => (value) => value > min;

const greaterThan10 = greaterThan(10);

greaterThan10(15); // true
greaterThan10(8);  // false
```

### 2. **Partial Function Application**
Currying memungkinkan kita mengunci sebagian parameter.

```js
const multiply = (a) => (b) => a * b;

const double = multiply(2);
console.log(double(5)); // 10
```

### 3. **Mempermudah komposisi fungsi**
Cocok untuk pipeline atau higher-order functions.

### 4. **Membuat kode lebih deklaratif**
Terutama saat mengolah array, filter, map, atau data pipe.

---

## Bagaimana Currying Bekerja?

Currying sangat mengandalkan **closures**.

Contoh:

```js
function multiply(a) {
  return function (b) {
    return a * b;
  };
}
```

Ketika `multiply(2)` dipanggil:

- fungsi inner *ingat* nilai `a = 2` berkat closure
- walaupun fungsi luar sudah selesai dieksekusi

Itulah inti dari cara kerja currying.

---

## Implementasi Currying Secara Manual

### Currying untuk fungsi 3 argumen

```js
function curry3(fn) {
  return function (a) {
    return function (b) {
      return function (c) {
        return fn(a, b, c);
      };
    };
  };
}

function sum(a, b, c) {
  return a + b + c;
}

const curriedSum = curry3(sum);

curriedSum(1)(2)(3); // 6
```

---
## Currying General (Dynamic Currying)

Currying bisa dibuat otomatis untuk fungsi dengan jumlah argumen berapa pun:

```js
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    }
    return function (...next) {
      return curried(...args, ...next);
    };
  };
}

// example
function sum(a, b, c) {
  return a + b + c;
}

const add = curry(sum);

add(1)(2)(3);   // 6
add(1, 2)(3);   // 6
add(1)(2, 3);   // 6
```

Currying versi ini jauh lebih fleksibel dan sering digunakan dalam library functional programming seperti **Ramda** dan **Lodash FP**.

---
## Contoh Penggunaan Currying di Dunia Nyata

### 1. **Filtering Data**

```js
const filterBy = (key) => (value) => (data) =>
  data.filter((item) => item[key] === value);

const filterByRole = filterBy("role");
const filterAdmins = filterByRole("admin");

filterAdmins(users); // hanya user admin
```

### 2. **Event Handling di Frontend**

```js
const handleEvent = (eventName) => (message) => () =>
  console.log(`${eventName}: ${message}`);

button.addEventListener("click", handleEvent("click")("Button pressed"));
```

### 3. **Fetch Wrapper dengan Partial Application**

```js
const fetchWithBase =
  (baseUrl) =>
  (path) =>
  (options) =>
    fetch(baseUrl + path, options);

const api = fetchWithBase("https://api.example.com");

api("/users")({ method: "GET" });
```

Sangat berguna untuk arsitektur frontend modular.

---

# Kapan Tidak Menggunakan Currying?

Currying sebaiknya tidak digunakan ketika:

- Fungsi tidak membutuhkan reuse  
- Membingungkan readability untuk tim yang tidak familiar  
- Overuse dapat membuat struktur code sulit dilacak  

Gunakan currying hanya jika meningkatkan kejelasan dan fleksibilitas kode.

---

## Kesimpulan

Currying adalah teknik fundamental dalam JavaScript yang memanfaatkan closures untuk membuat fungsi menjadi lebih modular, reusable, dan fleksibel. Dengan memahami konsep currying, Anda dapat menulis kode yang lebih bersih, mudah dikomposisi, dan mudah diperluas.

Konsep ini tidak hanya relevan dalam functional programming, tetapi juga sangat berguna dalam pengembangan frontend modern, terutama ketika bekerja dengan pipeline data, event handling, dan helper functions.

---