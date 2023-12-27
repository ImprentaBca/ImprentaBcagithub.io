//Función que me aplica el estilo a la opciòn seleccionada y quita la previamente seleccionada
function seleccionar(link) {
  var opciones = document.querySelectorAll('#links  a');
  opciones[0].className = "";
  opciones[1].className = "";
  opciones[2].className = "";
  opciones[3].className = "";
  opciones[4].className = "";
  link.className = "seleccionado";

  //Hacemos desaparecer el menu una vez que se ha seleccionado una opcion
  //en modo responsive
  var x = document.getElementById("nav");
  x.className = "";
}

//función que muestra el menu responsive
function responsiveMenu() {
  var x = document.getElementById("nav");
  if (x.className === "") {
    x.className = "responsive";
  } else {
    x.className = "";
  }
}


//Galeria
// Call carousel manually
$('#myCarouselCustom').carousel();

// Go to the previous item
$("#prevBtn").click(function(){
    $("#myCarouselCustom").carousel("prev");
});
// Go to the previous item
$("#nextBtn").click(function(){
    $("#myCarouselCustom").carousel("next");
});


//Atención
document.addEventListener("DOMContentLoaded", function() {
  // Array de horarios para cada día de la semana
  var horarios = {
      domingo: "Todo el día",
      lunes: "Todo el día",
      martes: "Todo el día",
      miércoles: "Todo el día",
      jueves: "Todo el día",
      viernes: "Todo el día",
      sábado: "Todo el día"
  };

  // Obtener el día actual
  var today = new Date();
  var dayIndex = today.getDay();

  // Obtener el nombre del día actual en español
  var daysOfWeek = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
  var currentDay = daysOfWeek[dayIndex];

  // Actualizar el horario en la interfaz
  var horarioElement = document.getElementById("oh-" + currentDay);
  if (horarioElement) {
      horarioElement.querySelector("._12VVpT67").textContent = horarios[currentDay];
  }
});
;

