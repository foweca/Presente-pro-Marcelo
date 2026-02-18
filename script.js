const envelopeContainer = document.getElementById("envelope-container");
const letterContainer = document.getElementById("letter-container");
const letterWindow = document.querySelector(".letter-window");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".yes-btn");
const finalContainer = document.querySelector(".final-container");
const contentRow = document.querySelector(".content-row");
const buttonsDiv = document.getElementById("letter-buttons");


envelopeContainer.addEventListener("click", () => {
  envelopeContainer.style.display = "none";
  letterContainer.style.display = "flex";
  setTimeout(() => {
    letterWindow.classList.add("open");
  }, 50);
});


function moveNoButton() {
 
  const letterRect = letterWindow.getBoundingClientRect();
  const buttonRect = noBtn.getBoundingClientRect();

  
  const maxX = letterRect.width - buttonRect.width - 20;
  const maxY = letterRect.height - buttonRect.height - 20;

  const randomX = Math.random() * Math.max(0, maxX);
  const randomY = Math.random() * Math.max(0, maxY);


  noBtn.style.position = "absolute"; 
  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
  noBtn.style.margin = "0"; 
  noBtn.style.transition = "all 0.2s ease";
}

noBtn.addEventListener("mouseenter", moveNoButton);
noBtn.addEventListener("touchstart", (e) => {
  e.preventDefault();
  moveNoButton();
});

yesBtn.addEventListener("click", () => {
  contentRow.style.display = "none";
  buttonsDiv.style.display = "none";
  noBtn.style.display = "none"; 
  
  finalContainer.style.display = "flex";
  
  letterWindow.style.justifyContent = "center";
  letterWindow.style.paddingTop = "30px";
  
  finalContainer.style.opacity = "0";
  setTimeout(() => {
    finalContainer.style.transition = "opacity 0.6s ease";
    finalContainer.style.opacity = "1";
  }, 10);
});
