function debounce(func, delay) {
 let timeout = null;

 return (...args) => {
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    func(...args);
  }, delay);
 }
}

function search(query) {
 console.log("Searching for: ", query)
}

const inputSearch = debounce(search, 100);

inputSearch("Hel");
inputSearch("Hello");
inputSearch("Hello World"); // Only this call will trigger after 100ms