document.addEventListener("DOMContentLoaded", () => {
  let ball = document.getElementById("ball");
  let table = document.getElementById("table");
  let paddle = document.getElementById("paddle");
  let ballX = 50;
  let ballY = 50;
  let dispx = 2;
  let dispy = 2;
  let paddleY = 0;
  let paddleX = 0;
  let dispPy = 10;
  let dispPx = 10;
  ball.style.left = `${ballX}px`;
  ball.style.top = `${ballY}px`;
  setInterval(function move() {
    ballX += dispx;
    ballY += dispy;
    ball.style.left = `${ballX}px`;
    ball.style.top = `${ballY}px`;
    if (
      //collision between paddle and ball, ball touches paddle from right
      ballX + ball.offsetWidth > paddleX &&
      ballX < paddleX + paddle.offsetWidth &&
      ballY > paddle.offsetTop &&
      ballY + ball.offsetHeight < paddle.offsetTop + paddle.offsetHeight
    ) {
      dispx = -dispx + 2; //adding slight acceleration
    }
    //wall collisions
    if (ballX > table.offsetWidth - ball.offsetWidth || ballX <= 0)
      dispx = dispx * -1;
    if (ballY > table.offsetHeight - ball.offsetHeight || ballY <= 0)
      dispy = dispy * -1;
  }, 10);
  document.addEventListener("keydown", (event) => {
    event.preventDefault();
    if (event.keyCode == 38 && paddleY > 0) {
      paddleY += -1 * dispPy;
    } else if (
      event.keyCode == 40 &&
      paddleY < table.offsetHeight - paddle.offsetHeight
    ) {
      paddleY += dispPy;
    } else if (event.keyCode == 37 && paddleX > 0) {
      paddleX -= dispPx;
    } else if (
      event.keyCode == 39 &&
      paddleX < table.offsetWidth - paddle.offsetWidth
    ) {
      paddleX += dispPx;
    }
    paddle.style.top = `${paddleY}px`;
    paddle.style.left = `${paddleX}px`;
  });
  document.addEventListener("mousemove", (event) => {
    let mouseDistfromTop = event.clientY;
    let mouseDistfromLeft = event.clientX;
    let DistofTablefromLeft = table.offsetLeft;
    let DistofTablefromTop = table.offsetTop;
    let mouseControlTop =
      mouseDistfromTop - DistofTablefromTop - paddle.offsetHeight / 2;
    let mouseControlLeft =
      mouseDistfromLeft - DistofTablefromLeft - paddle.offsetWidth / 2;
    paddleY = mouseControlTop;
    paddleX = mouseControlLeft;
    if (
      paddleY <= 0 ||
      paddleY > table.offsetHeight - paddle.offsetHeight ||
      paddleX <= 0 ||
      paddleX > table.offsetWidth - paddle.offsetWidth
    )
      return;

    paddle.style.top = `${paddleY}px`;
    paddle.style.left = `${paddleX}px`;
  });
});
