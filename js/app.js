window.addEventListener('load',function() {

  //version 0.0.1
  var area = document.getElementById('texto'),
      boton = document.getElementById('boton'),
      lista = document.getElementById('nuevoEspacio'),
      restante = document.getElementById('restante');


  boton.addEventListener('click',showText);

  //version 0.0.2
  area.addEventListener('keyup',caracteres);
  area.addEventListener('keyup',darEnter);



  function caracteres() {

    var max = 140;
    contador = area.value.length;
    restante.textContent = max - contador;


    if (contador >= 120 && contador <= 130){
      restante.style.color='#ff0000';
    } else if (contador >= 130 && contador <=140) {
      restante.style.color= 'blue';
    } else {
      restante.style.color = 'black';
    }
  }

  function  showText(event) {

    if (area.value.lenght === 0) {
      console.log(event.target)
      boton.removeEventListener('click',showText);
    }

    if(area.value) {
      var li = document.createElement('li');
      li.textContent = area.value;
      lista.appendChild(li);

      area.value = '';
    }
    document.getElementById('restante').textContent = '140';
  }

  function darEnter(){
  var area = this;
  //setTimeout(function(){
    //area.style.cssText = 'height:130px';
    area.style.cssText = 'height:' + area.scrollHeight + 'px';
  }
})


/*if (valor > 0) {
  //if(valor == 1) {
    //valor = 0;
  //}
  document.getElementById('restante').innerHTML = valor;
  boton.disabled=''; //habilitar
} else {
  boton.disabled='disabled'; //desahabillitar
}*/
