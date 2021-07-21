var posX = 200;
var posY = 200;
var dx = 3;
var dy = 4;

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(220);
    fill("#ffffff")
    rect(5, posY - 40, 20, 100);
    rect(375, mouseY, 20, 100);
    fill("#FFA500");
    circle(posX, posY, 20);
    noFill();
    if (posX == 20) {
        dx = -dx;
    }
    if (posY > mouseY && posY < mouseY + 100 && posX >= width - 20) {
        dx = -dx;
    }
    if (posX >= width) {
        stroke("#FF0000");
        text("GAME OVER", 150, 150);
        posX = 450;
        posY = 450;
    }
    if (posY >= height - 20 || posY == 20) {
        dy = -dy
    }

    for (i = 0; i < 400; i += 20) {
        stroke("black");
        line(200, i, 200, i + 10)
    }
    posX = posX + dx;
    posY = posY + dy;
}