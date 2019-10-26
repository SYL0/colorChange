const colorBtn = document.querySelector(".colorBtn");
const bodyBcg = document.querySelector("body");

const colors = ["red", "yellow", "pink", "green", "purple", "orange", "blue"];

colorBtn.addEventListener(
  "click",
  (change = () => {
    let random = Math.floor(Math.random() * colors.length);
    bodyBcg.style.backgroundColor = colors[random];
  })
);
