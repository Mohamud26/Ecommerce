// const plus = document.getElementById("plus");
// const minus = document.getElementById("minus");
// const items = document.getElementById("items");
// const clear = document.getElementById("clear");

// plus.addEventListener("click", function () {
//   let currentQuantity = parseInt(items.innerText);
//   items.innerText = currentQuantity + 1;
//   console.log(items.innerText);
// });

// minus.addEventListener("click", function () {
//   let currentQuantity = parseInt(items.innerText);
//   if (currentQuantity > 0) items.innerText = currentQuantity - 1;
// });

// clear.addEventListener("click", function () {
//   items.innerText = "0";
// });

// const img2 = document.getElementById("img2");
// const img1 = document.getElementById("img1");

// img2.addEventListener("mouseover", function () {
//   setTimeout(() => {
//     img2.style.opacity = 0;
//     img2.style.display = "none";
//     setTimeout(() => {
//       img1.style.display = "block";
//       setTimeout(() => {
//         img2.style.opacity = 1;
//       }, 200);
//     }, 0);
//   }, 200);
// });
// img2.addEventListener("mouseout", function () {
//   setTimeout(() => {
//     img2.style.display = "block";
//     img1.style.display = "none";
//     setTimeout(() => {
//       img2.style.opacity = 1;
//     }, 300);
//   }, 300);
// });

const btn = document.getElementById("btn");
const items = document.querySelectorAll(".item img");
const dior = document.getElementById("dior");
const eros = document.getElementById("eros");
const armani = document.getElementById("armani");

btn.addEventListener("mouseover", function () {
  console.log("Button clicked");
  dior.style.filter = "saturate(250%)";
  eros.style.filter = "saturate(250%)";
  armani.style.filter = "saturate(280%)";
});
btn.addEventListener("mouseout", function () {
  console.log("Button clicked");
  dior.style.filter = "saturate(150%)";
  eros.style.filter = "saturate(150%)";
  armani.style.filter = "saturate(150%)";
});
