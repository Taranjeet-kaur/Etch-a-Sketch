const container = document.querySelector(".container")


function createDivs(n){
    for (let index = 0; index < n; index++) {
        let squareDivs = document.createElement("div")
        squareDivs.style.height = "16px"
        squareDivs.style.width = "16px"
        squareDivs.style.border = "solid 1px black" 
        squareDivs.classList.add("square")
        container.appendChild(squareDivs)
    }
}

createDivs(10)