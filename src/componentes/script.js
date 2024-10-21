// Função para verificar se o elemento está visível na viewport
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Função que adiciona ou remove a classe de animação com base na visibilidade do elemento
function checkVisibility() {
  const tecnologias = document.querySelectorAll(".tecnologia"); // Seleciona as tecnologias
  tecnologias.forEach((tecnologia) => {
    if (isElementInViewport(tecnologia)) {
      tecnologia.classList.add("show");
    } else {
      tecnologia.classList.remove("show");
    }
  });

  const sobre = document.querySelector(".sobre-section"); // Seleciona a seção sobre
  if (sobre) {
    if (isElementInViewport(sobre)) {
      sobre.classList.add("show");
    } else {
      sobre.classList.remove("show");
    }
  }
  
  const contact = document.querySelector(".contacts"); // Seleciona a seção de contatos
  if (contact) {
    if (isElementInViewport(contact)) {
      contact.classList.add("show");
    } else {
      contact.classList.remove("show");
    }
  }
}

// Executa a função no scroll
window.addEventListener("scroll", checkVisibility);

// Executa a função na carga inicial da página
window.addEventListener("load", checkVisibility);
