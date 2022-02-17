const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
let counter = 0;

canvas.width = 500;
canvas.height = 300;

console.log(counter);

canvas.addEventListener('click', function(event) {
  let x = event.offsetX;
  let y = event.offsetY;

  console.log(`x : ${x}, y : ${y}`)
  // 직사각형의 좌상단 모서리를 표시할 x와 y좌표, 그리고 직사각형의 우하단 모서리를 표시할 x와 y좌표
  if(x>=10 && x<=60 && y>=10 && y<=60) {
    ctx.clearRect(10, 10, 50, 50)
    counter ++
    console.log(counter);
  }
})

class Ball {
  constructor() {
    ctx.beginPath();
    //처음 두 값들은 캔버스의 좌상단 모서리로 부터의 좌표를 의미하고, 나머지 두 값은 직사각형의 너비와 높이를 의미합니다
    ctx.rect(10, 10, 50, 50);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();
  }
}

let ball1 = new Ball;

// ctx.beginPath();
//처음 두 값들은 캔버스의 좌상단 모서리로 부터의 좌표를 의미하고, 나머지 두 값은 직사각형의 너비와 높이를 의미합니다
// ctx.rect(10, 10, 50, 50);
// ctx.fillStyle = "red";
// ctx.fill();
// ctx.closePath();

ctx.beginPath();
// 원의 중심을 가리키는 x와 y좌표
// 원의 반지름
// 시작 각도와 끝 각도(원을 그릴 때 시작과 끝이되는 각도이며, 라디안 값입니다.)
// 그리는 방향(false를 넣으면 시계방향으로 그려집니다. 기본 값이나 true를 넣으면 반 시계방향으로 그려집니다.) 이 파라미터는 옵션입니다.
ctx.arc(240, 160, 20, 0, Math.PI*2, false);
ctx.fillStyle = "green";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.arc(140, 60, 20, 0, Math.PI*2, false);
ctx.fillStyle = "blue";
ctx.fill();
ctx.closePath();


/*
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;

function drawBall() {
  ctx.beginPath();
  //처음 두 값들은 캔버스의 좌상단 모서리로 부터의 좌표를 의미하고, 나머지 두 값은 직사각형의 너비와 높이를 의미합니다
  ctx.rect(x, y, 50, 50);
  ctx.fillStyle = "#FF0000";
  ctx.fill();
  ctx.closePath();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  x += dx;
  y += dy;
}

setInterval(draw, 10)
*/