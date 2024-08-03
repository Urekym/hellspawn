
let x = 0;
let y = 0;
let vx = 30;
let vy = 30;


const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;


const logoWidth = document.getElementById("logo").offsetWidth;
const logoHeight = document.getElementById("logo").offsetHeight;


setInterval(() => {
  x += vx;
  y += vy;


  if (x + logoWidth >= screenWidth) {
    x = screenWidth - logoWidth;
    vx = -vx;
  }
  if (x <= 0) {
    x = 0;
    vx = -vx;
  }
  if (y + logoHeight >= screenHeight) {
    y = screenHeight - logoHeight;
    vy = -vy;
  }
  if (y <= 0) {
    y = 0;
    vy = -vy;
  }

 
  document.getElementById("logo").style.top = y + "px";
  document.getElementById("logo").style.left = x + "px";
}, 20);


// Load GIF when logo is clicked
document.getElementById("logo").addEventListener("click", () => {
  document.getElementById("logo2").style.backgroundImage = "url(chti7a.gif)";
  document.getElementById("logo").classList.add("big");
  vx = 0; 
  vy = 0; 
});

// Play audio when logo is clicked
document.getElementById("logo").addEventListener("click", () => {
  document.getElementById("audio").play();
});

// Show message when logo is clicked
document.getElementById("logo").addEventListener("click", () => {
  const messageDiv = document.createElement("div");
  messageDiv.setAttribute("id", "message");
  messageDiv.textContent = "Ach dak tClicki";
  document.body.appendChild(messageDiv);
  messageDiv.style.display = "block";
});