const container = document.querySelector(".container")

let n = prompt("Enter a number!")

if(isNaN(n)||n<=0){
    alert("Enter a valid positve number!")
} else {
    container.innerHTML= "";
    container.style.gridTemplateColumns = `repeat(${n}, 1fr)`
    container.style.gridTemplateRows= `repeat(${n}, 1fr)`
    
    function createDivs(){
        for(let i=0; i<n; i++){
            for(let j=0; j<n; j++){
                let squareDiv = document.createElement("div")
                squareDiv.classList.add("square")

                squareDiv.addEventListener("mouseover", (event)=>{
                 if((event.buttons === 1) ||(event.button === 2) ){
                    
                let r = Math.floor(Math.random() * 250 + 55)
                let g = Math.floor(Math.random() * 250 + 55)
                let b = Math.floor(Math.random() * 250 + 55)

                squareDiv.style.backgroundColor = `rgb(${r},${g},${b})`}
            })

                container.appendChild(squareDiv)
            }
        }
    }

    createDivs()
}