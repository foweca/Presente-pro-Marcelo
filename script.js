// Elements
const envelopeContainer = document.getElementById("envelope-container");
const letterContainer = document.getElementById("letter-container");
const letterWindow = document.querySelector(".letter-window");

const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".yes-btn");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");     // gato dentro do conteúdo
const buttons = document.getElementById("letter-buttons");
const finalContainer = document.querySelector(".final-container"); // container do texto + gato final

// Open Envelope
envelopeContainer.addEventListener("click", () => {
  envelopeContainer.style.display = "none";
  letterContainer.style.display = "flex";

  setTimeout(() => {
    letterWindow.classList.add("open");
  }, 50);
});

// Move NO Button (limitado à carta)
function moveNoButton() {
  const letterRect = letterWindow.getBoundingClientRect();
  const buttonRect = noBtn.getBoundingClientRect();

  const maxX = letterRect.width - buttonRect.width;
  const maxY = letterRect.height - buttonRect.height;

  const randomX = Math.random() * Math.max(0, maxX);
  const randomY = Math.random() * Math.max(0, maxY);

  letterWindow.style.position = "relative";

  noBtn.style.position = "absolute";
  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
  noBtn.style.transition = "all 0.25s ease";
}

// desktop
noBtn.addEventListener("mouseenter", moveNoButton);

// celular
noBtn.addEventListener("touchstart", (e) => {
  e.preventDefault();
  moveNoButton();
});

// Yes button click
yesBtn.addEventListener("click", () => {
  // esconde elementos antigos
  title.style.display = "none";
  buttons.style.display = "none";
  const contentRow = document.querySelector(".content-row");
  if (contentRow) contentRow.style.display = "none";
  if (catImg) catImg.style.display = "none";

  // mostra o container final (texto + gato)
  if (finalContainer) finalContainer.style.display = "flex";

  // centraliza container da carta (layout coluna)
  letterWindow.style.display = "flex";
  letterWindow.style.flexDirection = "column";
  letterWindow.style.justifyContent = "center";
  letterWindow.style.alignItems = "center";
});
