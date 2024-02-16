document.addEventListener("DOMContentLoaded", function () {
  ajustarTamanhoFonte();
});

window.addEventListener("resize", function () {
  ajustarTamanhoFonte();
});

function ajustarTamanhoFonte() {
  const conteudo = document.getElementById("result");
  const conteudoWidth = conteudo.clientWidth;
  const conteudoScrollWidth = conteudo.scrollWidth;

  if (conteudoScrollWidth > conteudoWidth) {
    const tamanhoAtual = parseFloat(window.getComputedStyle(result).fontSize);
    const novoTamanho = tamanhoAtual * (conteudoWidth / conteudoScrollWidth);

    // Defina um tamanho mínimo para a fonte para evitar ficar muito pequena
    const tamanhoMinimo = 40;
    conteudo.style.fontSize = Math.max(tamanhoMinimo, novoTamanho) + "px";
  } else {
    // Redefinir para o tamanho padrão se não houver overflow
    conteudo.style.fontSize = "64px";
  }
}

function addContent(value) {
  if (document.getElementById("result").innerHTML.length >= 12) {
    return;
  } else {
    const fontSize = parseFloat(window.getComputedStyle(result).fontSize);
    if (fontSize === 40) {
      document.getElementById("result").innerHTML =
        document.getElementById("result").textContent;
    }
    if (document.getElementById("result").innerHTML == 0) {
      document.getElementById("result").innerHTML = "";
    }

    if (!isNaN(parseInt(value)) || value === ",") {
      document.getElementById("result").innerHTML =
        document.getElementById("result").textContent + value;
    } else {
      document.getElementById("result").innerHTML =
        document.getElementById("result").textContent + " " + value + " ";
    }

    ajustarTamanhoFonte();
  }
}

function clearContent() {
  document.getElementById("result").innerHTML = "0";
  ajustarTamanhoFonte();
}

function getResult() {
  let result = document.getElementById("result").innerHTML.replace(/,/g, ".");
  document.getElementById("result").innerHTML = eval(result)
    .toString()
    .replace(/\./g, ",");
}
