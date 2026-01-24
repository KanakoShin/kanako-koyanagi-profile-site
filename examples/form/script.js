const form = document.querySelector(".login");
const radios = document.querySelectorAll('input[name="s"]');

function apply(state) {
  form.dataset.state = state;

  const email = document.getElementById("email");
  const pw = document.getElementById("pw");
  const iconBtn = document.querySelector(".field__icon-btn");
  const submitBtn = document.querySelector(".login__submit");

  if (state === "filled") {
    email.value = "umaiumaionigiri@vmail.com";
    pw.value = "••••••••••••";
  } else {
    email.value = "";
    pw.value = "";
  }

  const disabled = state === "disabled";
  email.disabled = disabled;
  pw.disabled = disabled;

  iconBtn.disabled = disabled;
  submitBtn.disabled = disabled;
}

radios.forEach((r) =>
  r.addEventListener("change", (e) => apply(e.target.dataset.set)),
);
apply("default");
