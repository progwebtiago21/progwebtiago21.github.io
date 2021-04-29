// JavaScript Document

function escolheCor(cor) {
    var pagina = document.querySelector("body");

    if( cor === "azul") {
        pagina.style.background = "#3A6BF0";
        pagina.style.transition = "1s";
        document.getElementById("significado").innerHTML="Azul significa Harmonia e Maturidade.";
        document.getElementById("significado").style.color = "lightblue";

    } else if (cor === "verde") {
        document.querySelector("body").style.backgroundColor = "#0DA71A";
        document.querySelector("body").style.transition = "3s";
        document.getElementById("significado").innerHTML="Verde significa Saúde e Esperança.";
        document.getElementById("significado").style.color = "lightgreen";
    } else {
        document.querySelector("body").style.background="#E07600";
        document.querySelector("body").style.transition="1s";
        document.getElementById("significado").innerHTML="Laranja significa Força e Energia.";
        document.getElementById("significado").style.color = "Khaki";
    }


}