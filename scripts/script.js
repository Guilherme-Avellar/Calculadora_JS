
// teste base de toda função
function test_zeros() {
    if((document.getElementById("firstNumber").value === "") || (document.getElementById("secondNumber").value === "")) {
        alert("Dados em branco, favor digitar algo!")
        return false
    } else {
        const elemento = document.getElementById("resultado");
        elemento.style.color = "black";
    }

    return true;
}


function somar() {

    if (test_zeros()){
        resultado = Number(document.getElementById("firstNumber").value) + Number(document.getElementById("secondNumber").value);
        document.getElementById("resultado").innerHTML = resultado;
    }
}

function subtrair() {

    if (test_zeros()){
        resultado = Number(document.getElementById("firstNumber").value) - Number(document.getElementById("secondNumber").value);
        document.getElementById("resultado").innerHTML = resultado;
    }
}

function multiplicar () {

    if (test_zeros()){
        resultado = Number(document.getElementById("firstNumber").value) * Number(document.getElementById("secondNumber").value);
        document.getElementById("resultado").innerHTML = resultado;
    }
}

function dividir() {

    if (test_zeros()){

        if (Number(document.getElementById("secondNumber").value) != 0) {
            resultado = Number(document.getElementById("firstNumber").value) / Number(document.getElementById("secondNumber").value);
            document.getElementById("resultado").innerHTML = resultado;
        } else {
            alert("Não há divisão por zero");
        }
    }
}
