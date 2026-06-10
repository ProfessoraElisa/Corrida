function setup() {
  createCanvas(400, 400);
}

let xJogador1 = 0;
let xJogador2 = 0;

function draw() {
  if (focused == true) {
    background("#D2EBB5");
  } else {
    background("#6BD5E2");
  }

  textSize(40);
  text("🐕", xJogador1, 100);
  text("🐈", xJogador2, 300);
  rect(350, 0, 10, 400);
  if (xJogador1 > 350) {
    text("Jogador 1 venceu!", 50, 200);
    noLoop();
  }
  if (xJogador2 > 350) {
    text("Jogador 2 venceu!", 50, 200);
    noLoop();
  }
}

function keyReleased() {
  if (key == "a") {
    xJogador1 += random(20);
  }
  if (key == "s") {
    xJogador2 += random(20);
  }
}
