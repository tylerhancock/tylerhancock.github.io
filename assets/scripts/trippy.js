const res = Math.ceil(window.innerHeight / 60);
let w = Math.ceil(window.innerWidth / res);
let h = Math.ceil(window.innerHeight / res);
const $b = document.querySelector('body');
const $c = document.createElement('canvas');
const ctx = $c.getContext('2d');
$c.width = window.innerWidth;
$c.height = window.innerHeight;
$b.appendChild($c);

const speed = 0.0005;

function setSize() {
  w = Math.ceil(window.innerWidth / res);
  h = Math.ceil(window.innerHeight / res);
  $c.width = window.innerWidth;
  $c.height = window.innerHeight;
}

let progress = 0;

noise.seed(Math.random());

function doit() {
  progress += speed;
  for (let x = 0; x < w; x++) {
    for (let y = 0; y < h; y++) {
      const sim = noise.simplex3((progress + x) / (w * 1.5), progress + y / (h * 1.5), progress);
      //const per = noise.perlin3((progress + x) / (w * 1.25), progress + y / (h * 1.25), progress);
      ctx.fillStyle = `hsl(${1360 * Math.abs(sim) % 360},100%,73%)`;
      ctx.fillRect(x * res, y * res, res, res);
    }
  }
  requestAnimationFrame(doit);
}

doit();

document.addEventListener('click', function () {
  noise.seed(Math.random());
});


setSize();

window.addEventListener('resize', setSize);



/* tripping on click */
function tripClick() {
  var x = document.querySelector('canvas');
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

$("#trip").click(function() {
  $('.roman').toggleClass('tripping'),
  $('.logo').toggleClass('tripping'),
  $('.smiley').toggleClass('tripping'),
  $('.smiley').toggleClass('hide'),
  $('.sad').toggleClass('show');
});