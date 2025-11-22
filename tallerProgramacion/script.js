// BOTÓN SUBIR ARRIBA
const btnUp = document.getElementById("btnUp");

window.addEventListener("scroll", () => {
  btnUp.style.display = window.scrollY > 300 ? "block" : "none";
});

btnUp.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// MODAL DE PROMOCIÓN
const modal = document.getElementById("promoModal");
const closeModal = document.querySelector(".close");

window.onload = () => {
  setTimeout(() => {
    modal.style.display = "block";
  }, 1500);
};

closeModal.onclick = () => {
  modal.style.display = "none";
};

window.onclick = (e) => {
  if (e.target === modal) modal.style.display = "none";
};

// VALIDAR SOLO NÚMEROS (TELÉFONO)
const phoneInput = document.querySelector("input[name='phone']");

phoneInput.addEventListener("input", () => {
  phoneInput.value = phoneInput.value.replace(/\D/g, "");

  if (isNaN(phoneInput.value)) {
    alert("Solo se permiten números en el campo Teléfono");
    phoneInput.value = "";
  }
});
