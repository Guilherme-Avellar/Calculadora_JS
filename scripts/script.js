

// variavel para mudar a cor do resultado quando ocorrer uma operação
const resultado_cor = document.getElementById("resultado");
// resultado_cor.style.color = "black";

// teste base de toda função, para saber se os dados foram preenchidos
function test_zeros() {
    if((document.getElementById("firstNumber").value === "") || (document.getElementById("secondNumber").value === "")) {
        alert("Dados em branco, favor digitar algo!")
        return false
    }
    
    return true;
}


function somar() {

    if (test_zeros()){
        resultado = Number(document.getElementById("firstNumber").value) + Number(document.getElementById("secondNumber").value);
        document.getElementById("resultado").innerHTML = resultado;
        resultado_cor.style.color = "black";
    }
}

function subtrair() {

    if (test_zeros()){
        resultado = Number(document.getElementById("firstNumber").value) - Number(document.getElementById("secondNumber").value);
        document.getElementById("resultado").innerHTML = resultado;
        resultado_cor.style.color = "black";
    }
}

function multiplicar () {

    if (test_zeros()){
        resultado = Number(document.getElementById("firstNumber").value) * Number(document.getElementById("secondNumber").value);
        document.getElementById("resultado").innerHTML = resultado;
        resultado_cor.style.color = "black";
    }
}

function dividir() {

    if (test_zeros()){

        if (Number(document.getElementById("secondNumber").value) != 0) {
            resultado = Number(document.getElementById("firstNumber").value) / Number(document.getElementById("secondNumber").value);
            document.getElementById("resultado").innerHTML = resultado;
            resultado_cor.style.color = "black";
        } else {
            alert("Não há divisão por zero");
        }
    }
}
