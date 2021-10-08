document.getElementById("button").addEventListener("click", function() {
    var massa = document.getElementById("massa").value;
    //console.log(massa);
    var altura = document.getElementById("altura").value;
    //console.log(altura);
    var nome = document.getElementById("nome").value;
    var resultado_IMC = document.getElementById("resposta");

    if(altura != "" && massa != ""){
        //console.log(resultado_IMC);
       resultado_IMC.textContent = Calculo_IMC(massa, altura,nome);
        //console.log(Calculo_IMC(massa, altura));
    }
    else if(altura == "" && massa != "")
    {
        alert("Você precisa inseir um valor altura valida!");
    }
    else if(altura != "" && massa == "")
    {
        alert("Você precisa inseir um valor de massa valida!");
    }
    else
    {
        alert("Você precisa inseir um valor para massa e para altura validos!");
    }
    var IMC = Calculo_IMC(massa, altura,nome);
  var saude = estado(IMC);
  var resultado = "Olá " + nome + ", seu IMC é: " + IMC + " e seu estado de saude é: " + saude ;
document.getElementById("resposta").value=IMC;
document.getElementById("resultado").textContent=resultado;
  });
  
  function Calculo_IMC(massa, altura,nome) {
      var i = Math.round(massa / (altura **2));
      return i;  
    }
    var IMC = Calculo_IMC(massa, altura,nome);
    function estado(IMC) {
        if (IMC < 18.5)
        {
            return "Magreza";
        }
        else if (IMC >18.5 && IMC < 25)
        {
            return "Normal";
        }
        else if (IMC >25 && IMC < 30)
        {
            return "SOBREPESO";
        }
        else if (IMC >30 && IMC < 40)
        {
            return "OBESIDADE";
        }
        else
        {
            return "OBESIDADE GRAVE";
        }
    }