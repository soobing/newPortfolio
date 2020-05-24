let circle = document.getElementById("circle");

window.onmousemove = function (e) {
  let x = e.clientX;
  let y = e.clientY;
  let newx = x - 60;
  let newy = y - 60;
  circle.style.top = newy + 'px';
  circle.style.left = newx + 'px';
  circle.style.mixBlendMode = 'difference';
};

window.addEventListener("scroll", (e) => {
  console.log(e.target.scrollTop);
  if(e.target.scrollTop == 300) {
      let el = do;
      el.style = "animation: jenny 5s infinite;"
  }
});
