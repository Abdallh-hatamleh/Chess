const row1 = document.querySelectorAll("#row-1 .cell");
const row2 = document.querySelectorAll("#row-2 .cell");
const row4 = document.querySelectorAll("#row-4 .cell");
const row3 = document.querySelectorAll("#row-3 .cell");
const row5 = document.querySelectorAll("#row-5 .cell");
const row6 = document.querySelectorAll("#row-6 .cell");
const row7 = document.querySelectorAll("#row-7 .cell");
const row8 = document.querySelectorAll("#row-8 .cell");
const board = [row1,row2,row3,row4,row5,row6,row7,row8];
// const whiteBishop = `<img src="Pieces/white-bishop.png" class = "pieces">`;
const whiteBishop = document.createElement("img");
whiteBishop.src = "Pieces/white-bishop.png";
const whiteKing = document.createElement("img");
whiteKing.src = "Pieces/white-king.png";
const whiteKnight = document.createElement("img");
whiteKnight.src = "Pieces/white-knight.png";
const whitePawn = document.createElement("img");
whitePawn.src = "Pieces/white-pawn.png";
const whiteQueen = document.createElement("img");
whiteQueen.src = "Pieces/white-queen.png";
const whiteRook = document.createElement("img");
whiteRook.src = "Pieces/white-rook.png";
const blackBishop = document.createElement("img");
blackBishop.src = "Pieces/black-bishop.png";
const blackKing = document.createElement("img");
blackKing.src = "Pieces/black-king.png";
const blackKnight = document.createElement("img");
blackKnight.src = "Pieces/black-knight.png";
const blackPawn = document.createElement("img");
blackPawn.src = "Pieces/black-pawn.png";
const blackQueen = document.createElement("img");
blackQueen.src = "Pieces/black-queen.png";
const blackRook = document.createElement("img");
blackRook.src = "Pieces/black-rook.png";
const pieces = [whiteBishop,whiteKing,whiteKnight,whitePawn,whiteQueen,whiteRook,blackBishop,blackKing,blackKnight,blackPawn,blackQueen,blackRook]
pieces.forEach(element => {
    element.draggable = true;
    element.classList.add("pieces")
});
board.forEach(row => {
    row.forEach(element => {
        element.occupied = false;
    });
});
function SetBoard()
{
row1[0].prepend(whiteRook.cloneNode());
row1[1].prepend(whiteKnight.cloneNode());
row1[2].prepend(whiteBishop.cloneNode());
row1[3].prepend(whiteQueen.cloneNode());
row1[4].prepend(whiteKing.cloneNode());
row1[5].prepend(whiteBishop.cloneNode());
row1[6].prepend(whiteKnight.cloneNode());
row1[7].prepend(whiteRook.cloneNode());
row1.forEach(element => {
    element.occupied = true;
})
row2.forEach(element => {
    element.occupied = true;
    element.prepend(whitePawn.cloneNode());
});
row7.forEach(element => {
    element.occupied = true;
    element.prepend(blackPawn.cloneNode());
});
row8[0].prepend(blackRook.cloneNode());
row8[1].prepend(blackKnight.cloneNode());
row8[2].prepend(blackBishop.cloneNode());
row8[3].prepend(blackQueen.cloneNode());
row8[4].prepend(blackKing.cloneNode());
row8[5].prepend(blackBishop.cloneNode());
row8[7].prepend(blackRook.cloneNode());
row8[6].prepend(blackKnight.cloneNode());
row8.forEach(element => {
    element.occupied = true;
});
}
// function SetCell(cell, piece)
// {
        
// }
const images = document.querySelectorAll("img");
images.forEach(element => {
    
    element.addEventListener("dragstart", e =>
    {
        // console.log(222);

    //  console.log(e);
    }
    )
});

function manageEvents()
{
    board.forEach(row => {
        row.forEach(cell => {
                cell.addEventListener("dragstart", e => {
                    sessionStorage.setItem("id",e.target.parentNode.id);
                    // console.log(e.target.parentNode.id);
                })
                cell.addEventListener("dragover", e => {e.preventDefault()});
                cell.addEventListener("drop", e => {
                    console.log(e.target);
                    if (e.target.occupied) {
                    } 
                    else {
                        // alert("hi");
                        const newim = document.createElement("img");
                        newim.src = e.dataTransfer.getData("Text");
                        newim.classList.add("pieces");
                        newim.draggable = true;
                        document.getElementById(sessionStorage.getItem("id")).innerHTML = "";
                        document.getElementById(sessionStorage.getItem("id")).occupied = false;
                        e.target.prepend(newim);
                        cell.occupied = true;    
                    }
                })
                // if(cell.id == "E5" || cell.id == "E6" ) cell.addEventListener("dragover", e => {e.preventDefault()});
            
        });
    });
}
SetBoard();