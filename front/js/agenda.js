
function mostrarData() {
    let data = new Date();
    let dia = String(data.getDate()).padStart(2, '0');
    let mes = String(data.getMonth() + 1).padStart(2, '0');
    let ano = data.getFullYear();
    dataAtual = dia + '/' + mes + '/' + ano;
document.getElementById("day1week").innerText = dataAtual; 
}
function mostrarData2() {
    let data = new Date ();
    data.setDate(data.getDate()+1);
    let dia = String(data.getDate()).padStart(2, '0');
    let mes = String(data.getMonth() + 1).padStart(2, '0');
    let ano = data.getFullYear();
    dataAtual = dia + '/' + mes + '/' + ano;
document.getElementById("day2week").innerText = dataAtual; 
}

function mostrarData3() {
    let data = new Date ();
    data.setDate(data.getDate()+2);
    let dia = String(data.getDate()).padStart(2, '0');
    let mes = String(data.getMonth() + 1).padStart(2, '0');
    let ano = data.getFullYear();
    dataAtual = dia + '/' + mes + '/' + ano;
document.getElementById("day3week").innerText = dataAtual; 
}

function mostrarData4() {
    let data = new Date ();
    data.setDate(data.getDate()+3);
    let dia = String(data.getDate()).padStart(2, '0');
    let mes = String(data.getMonth() + 1).padStart(2, '0');
    let ano = data.getFullYear();
    dataAtual = dia + '/' + mes + '/' + ano;
document.getElementById("day4week").innerText = dataAtual; 
}

function mostrarData5() {
    let data = new Date ();
    data.setDate(data.getDate()+4);
    let dia = String(data.getDate()).padStart(2, '0');
    let mes = String(data.getMonth() + 1).padStart(2, '0');
    let ano = data.getFullYear();
    dataAtual = dia + '/' + mes + '/' + ano;
document.getElementById("day5week").innerText = dataAtual; 
}

function mostrarFormDados() {
    var formDados = document.getElementById("clientDados");
    var display = getComputedStyle(document.getElementById("clientDados"));
    if(display.display === "none")
        formDados.style.display = "block"
    else
    formDados.style.display = "none"

}
