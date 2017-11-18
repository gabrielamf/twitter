window.addEventListener('load',function() {

  var area = document.getElementById('texto');
  var boton = document.getElementById('boton');
  var lista = document.getElementById('nuevoEspacio')
  boton.addEventListener('click',showText);
  area.addEventListener('blur',caracteres);
  area.addEventListener('keypress',caracteres);

  function caracteres() {
    //var max=new Number();
    var max = 139;
    var primer = 119;
    var segundo = 129;
    var actual = document.getElementById('texto').value.length;
    //var valor = new Number();
    valor = max-actual;c

    if (valor > 0) {
      //if(valor == 1) {
        //valor = 0;
      //}
      document.getElementById('restante').innerHTML = valor;
      boton.disabled=''; //habilitar
    } else {
      boton.disabled='disabled'; //desahabillitar
    }


    if (actual >= primer && actual<= segundo){
      document.getElementById('restante').style.color='#ff0000';
    } else if (actual >= segundo) {
      document.getElementById('restante').style.color= 'blue';
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
})
