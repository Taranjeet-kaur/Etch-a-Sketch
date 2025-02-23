# Etch-a-Sketch

## What is it:
* A browser version of Etch-a-Sketch. User can draw on a canvas constructed from default 16 x 16 grid of square div.

* Features:

    >*
    >*
    >*
    >*

* Teach Stack:
    >* HTML
    >* CSS
    >* JavaScript

* UNORGANISED PREVIOUS CODE 
```js 
const container = document.querySelector(".container")

// let n = prompt("Enter the number of grids:")
// function createDivs(){
//     for (let index = 0; index < n; index++) {
//         let squareDivs = document.createElement("div")
//         squareDivs.style.border = "solid 1px white" 
//         squareDivs.classList.add("square")
//         container.appendChild(squareDivs)
//         container.style.gridTemplateColumns = repeat(n, "16px")
//     }
// };

let n = prompt("Enter the number of grids:")
if(isNaN(n) || n <= 0){
    alert("Please enter a valid positve number!")
    location.reload();
} else {
    container.innerHTML = ""; //clear previous grid
    container.style.gridTemplateColumns = `repeat(${n},1fr)`;
    container.style.gridTemplateRows = `repeat(${n},1fr)`

function createDivs(){
    // for (let i = 0; i < n*n; i++) {
    //     let squareDivs = document.createElement("div") 
    //     squareDivs.classList.add("square")
    //     container.appendChild(squareDivs)
    // }

    for (let i = 0; i < n; i++) {  
        for (let j = 0; j < n; j++) {  // This ensures n*n squares
            let squareDiv = document.createElement("div");
            squareDiv.classList.add("square");

            squareDiv.addEventListener("click",()=>{
                squareDiv.style.backgroundColor = "blue";
            })

            squareDiv.addEventListener("dbclick", ()=> {
                squareDiv.style.backgroundColor = "green"
            })

            squareDiv.addEventListener("mouseover", (event) => {
                if(event.buttons === 1){
                    let r = Math.floor(Math.random() * 250 + 50)
                    let g = Math.floor(Math.random() * 250 + 50)
                    let b = Math.floor(Math.random() * 250 + 50)
                    squareDiv.style.backgroundColor = `rgb(${r},${g},${b})`
                }
            })

            container.appendChild(squareDiv);
        }
    }
}
 
 createDivs()
}
```