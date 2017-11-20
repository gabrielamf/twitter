window.addEventListener('load',function() {

  //version 0.0.1 - Formulario y botón twitter
  var area = document.getElementById('texto');
  var boton = document.getElementById('boton');
  var lista = document.getElementById('nuevoEspacio');
  var restante = document.getElementById('restante');

  boton.addEventListener('click',showText);
  area.addEventListener('keyup',caracteres);
  area.addEventListener('keyup',autoSize);

  // Función para mostrar el tweet publicado
  function  showText() {

    if(area.value) {

      var li = document.createElement('li');
      var p = document.createElement('p');
      p.classList.add('hours');

      li.textContent = area.value;
      p.textContent = addTime();
      lista.appendChild(li);
      li.appendChild(p);

      area.value = '';
    }
    document.getElementById('restante').textContent = '140';
  }

  //version 0.0.2 - Contar caracteres de forma regresiva
  function caracteres() {

    var max = 140;
    contador = area.value.length;
    restante.textContent = max - contador;

    if (contador > 0 && contador <= 140) {
      boton.disabled = false;
    } else {
      boton.disabled = true;
    }

    //version 0.0.3 - Cambia de color el contador en 120 y 130 caracteres
    if (contador >= 120 && contador <= 130){
      restante.style.color='#ff0000';
    } else if (contador >= 130 && contador <=140) {
      restante.style.color= 'blue';
    } else {
      restante.style.color = 'black';
    }
  }

  // version 0.0.4 y versión 0.0.5 (Extra)-- Al presionar enter crece el textarea
  function autoSize(){
  var area = this;
    area.style.cssText = 'height:' + area.scrollHeight + 'px';
  }

  // Versión 0.0.6 (Extra) -- Agregar hora de publicación tweet
  function addTime(){
  var date = new Date();
  var hour = date.getHours();
  var minute = date.getMinutes();

    if (minute < 10) {
      minute = '0' + minute;
    }

    var tweetTime = '';

    if (hour <= 12) {
      tweetTime = hour + ' : ' + minute + ' ' + 'AM';
    } else {
      tweetTime = hour + ' : ' + minute + ' ' + 'PM';
    }

    return tweetTime;
  }

})
