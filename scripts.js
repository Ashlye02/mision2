
function openNav() {
    document.getElementById("mySidenav").style.width ="250px";
}
// Funcion para cerrar el sidenav
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  } 
function cambiarcolor(color,size1,fuente,fondo){
  var element= document.getElementById('titulo');
  var element= document.getElementById('parrafo');
  var element= document.getElementById('colorfondo');
     element.style.color=color;
     element.style.size = size1;
     element.style.fontFamily=fuente;
    element.style.backgroundColor= fondo;
   
}
 
