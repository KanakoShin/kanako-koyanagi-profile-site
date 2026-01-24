const btn = document.getElementById("btn");
const msg = document.getElementById("msg");

btn.addEventListener("click", () => {
  const isActive = btn.classList.toggle("button--active");
  btn.setAttribute("aria-pressed", String(isActive));
  msg.textContent = isActive ? "押しちゃったんですか!?" : "押さないでね";
});
