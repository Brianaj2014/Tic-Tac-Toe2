let cells = document.querySelectorAll(".Row > div");
let player = "X"

for (let i = 0; i < cells.length; i++){
    cells[i].addEventListener("click", function(){
        console.log("It Worked")    
        if (cells[i].innerHTML ==""){
            cells[i].innerHTML = player
            if (player == "X"){
                (player = "O") 
            
            }
            else { player = "X"}

        }
    })
   
}


const resetDiv = document.querySelector("reset");
const cellDivs = document.querySelector

cells[0].textContent
cells[1].textContent
cells[2].textContent

console.log(cells);

// make another array, with multiple arrays inside of it, 


for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if (board[i][j] == '') {
            availiable.push ({ i, j });

        }
    }
}
function cellCLICKED () {
    Event.target.textContent = " X "

} 