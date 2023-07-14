const form = document.querySelector("#formulario");

form.addEventListener("submit",function (e){
    e.preventDefault();
    const inputPeso = e.target.querySelector("#peso");
    const inputAltura = e.target.querySelector("#altura");
   
    const altura = Number(corrigir(inputAltura.value));
    const peso = Number(corrigir(inputPeso.value));

    if(!altura){
        setMessage("Altura invalida",false);
        return;
    }
    if(!peso){
      setMessage("Peso Invalido",false);
      return;
    }

    const imc = getImc(peso,altura).toFixed(2);
    const status = getStatus(imc);

    setMessage(`Resultado ${imc} - ${status}`,true);

});

function setMessage(msg,event){
  
    const p = criaP();
    const div = document.querySelector("#resultado");
    div.innerHTML = "";
    if(event) p.classList.add("paragrafo-resultado");
    else p.classList.add("bad");
    p.innerHTML = msg;
    div.appendChild(p);
}

function criaP(){
    const p = document.createElement("p");
    return p;
}

function getImc(peso, altura){
 
    return peso/(altura**2);

}

function getStatus(imc){

    if(imc>=40) return "Obesidade Grau 3";
    if(imc<40 && imc>=35) return "Obesidade Grau 2";
    if(imc<35 && imc>=30) return "Obesidade Grau 1";
    if(imc<30 && imc>=25) return "Sobrepeso";
    if(imc<25 && imc>=18.5) return "Peso normal"
    if(imc <18.5) return "Abaixo do peso";
}

function corrigir(numero){
    if(numero.includes(",")){
     return numero.replace(",",".");
    }
 return numero;
}