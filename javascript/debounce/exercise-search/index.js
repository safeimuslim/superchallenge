
function debounce(func, delay) {
 let timeout = null
 return (...args) => {
  clearTimeout(timeout);
  timeout = setTimeout(() => {
   func(...args)
  }, delay)
 }
}

// example using throttle
function throttle(func, delay) {
 let timeout = null
 return function(...args) {
  if(!timeout) {
   func.apply(this, args);
   timeout = setTimeout(() => {timeout=null}, delay)
  }
 }
}

function search(query) {
  // Without debounce this fetch api will always called when user trigger the inputSearch
  console.log("Fetch api with query: ", query.target.value);
}

const inputSearch = document.getElementById("search");
inputSearch.addEventListener("input", throttle(search, 500));