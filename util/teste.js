function enviar(){
  var resposta = document.getElementById('resposta');
  var form = document.getElementById('formulario');
  var numero = form.numero.value;
  numero = numero*numero;

  resposta.innerHTML = "Resposta: " + numero;
}
