/*
  CONFIGURAÇÃO: link de compra da Hotmart.
  Para trocar o link no futuro, altere só a linha abaixo.
*/
const HOTMART_URL = "https://go.hotmart.com/U108247850A";

document.getElementById("year").textContent = new Date().getFullYear();

// Todos os botões de compra (marcados com data-hotmart) levam para a Hotmart
document.querySelectorAll("[data-hotmart]").forEach((link) => {
  link.href = HOTMART_URL;
  link.target = "_blank";
  link.rel = "noopener";
});
