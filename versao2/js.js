function campoAdd(value){
    document.getElementById("campo").value += value;
    
}

function limpar(value){
    document.getElementById("campo").value = "";
    
}

function calcular(value){
    var conta = document.getElementById("campo").value;
    var resultado = eval (conta);
    
    document.getElementById("campo").value = resultado;
}
