const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const $score = document.querySelector('strong');

let counter = 0;
canvas.width = 500;
canvas.height = 500;

canvas.addEventListener('click', function(e){
  for(let i =0; i < ballArray.length; i++){
    box = ballArray[i];
    if(e.layerX >= (box.x - box.radius) &&
      e.layerX < (box.x + box.radius) &&
      e.layerY >= (box.y - box.radius) &&
      e.layerY < (box.y + box.radius))
      {
        ballArray.splice(i, 1);
        counter ++ ;
        $score.innerText = counter;
      } 
  }
  })

class Ball {
  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = 'red';
    ctx.fill();
  }
  
  update() {
    // if (this.x + this.radius > 500 || this.x - this.radius < 0) {
    //   this.dx = -this.dx;
    // }
    // if (this.y + this.radius > 500 || this.y - this.radius < 0) {
    //   this.dy = -this.dy;
    // }
    // this.x += this.dx;
    // this.y += this.dy;
    this.draw();
  }
}

let ballArray = [];

for (let i = 0; i < 10; i++){
  let radius = 20;
  let x = Math.random() * (500 - radius*2) + radius;
  let y = Math.random() * (500 - radius*2) + radius;
  // let dx = (Math.random() - 0.5) * 2;
  // let dy = (Math.random() - 0.5) * 2;
  // ballArray.push(new Ball(x, y, dx, dy, radius))
  ballArray.push(new Ball(x, y, radius))
}

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, 500, 500);

  for(let i = 0; i < ballArray.length; i++){
    ballArray[i].update();
  }
}

animate();