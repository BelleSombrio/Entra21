function changeColor(square) {
    // Se o quadrado já estiver cinza, mude para vermelho
    if (square.classList.contains("clicked-gray")) {
        square.classList.remove("clicked-gray");
        square.classList.add("clicked-red");
    }
    // Se o quadrado já estiver vermelho, mude para cinza
    else if (square.classList.contains("clicked-red")) {
        square.classList.remove("clicked-red");
        square.classList.add("clicked-gray");
    }
    // Se o quadrado ainda não foi clicado, defina a cor como cinza
    else {
        square.classList.add("clicked-gray");
    }
}

var totalMinas = 10;
const rows = 5;
const cols = 5;
const celulas = [];
function geraMinas() {
let minas
while(minas < totalMinas){
 const r = Math.floor(Math.random() * rows);
 const c = Math.floor(Math.random() * cols);
 if(celulas [r][c].mina){
    celulas[r][c].mina.true;
    minas++;
 }
}
}





