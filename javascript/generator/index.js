function* colorGenerator() {
 const randomHex = "#" + Math.floor(Math.random() * 16777215).toString(16);
 yield randomHex;
}

const randomButton =  document.getElementById("random-button");
const boxColor = document.getElementById("box-color");

randomButton.addEventListener('click', () => {

 const cg = colorGenerator();
 const color = cg.next().value

 boxColor.style.backgroundColor = color;
 boxColor.textContent = color;
})
