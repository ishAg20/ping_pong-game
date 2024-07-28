document.addEventListener("DOMContentLoaded", () => {
  let ball = document.getElementById("ball");
  let table = document.getElementById("table");
  let ballX = 50;
  let ballY = 50;
  let dispx = 3;
  let dispy = 3;
  ball.style.left = `${ballX}px`;
  ball.style.top = `${ballY}px`;
  setInterval(function move() {
    ballX += dispx;
    ball.style.left = `${ballX}px`;
    ballY += dispy;
    ball.style.top = `${ballY}px`;
    if (ballX > table.offsetWidth - ball.offsetWidth || ballX <= 0)
      dispx = dispx * -1;
    if (ballY > table.offsetHeight - ball.offsetHeight || ballY <= 0)
      dispy = dispy * -1;
  }, 1);
});
