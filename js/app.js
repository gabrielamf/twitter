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

    if (contador > 0 && contador <= 140) {
      boton.disabled = false;
    } else {
      boton.disabled = true;
    }


    if (contador >= 120 && contador <= 130){
      restante.style.color='#ff0000';
    } else if (contador >= 130 && contador <=140) {
      restante.style.color= 'blue';
    } else {
      restante.style.color = 'black';
    }
  }

  function  showText() {


    if(area.value) {
      var li = document.createElement('li');

      li.textContent = addTime() + area.value;
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

  function addTime(){
  var date = new Date();
  var hour = date.getHours();
  var minute = date.getMinutes();

    if (minute < 10) {
      minute = '0' + minute;
    }

  var tweetTime = hour + ' : ' + minute + ' ';
  return tweetTime;
  }
})
