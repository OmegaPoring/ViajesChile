//Funcion cambio de color en NavBar//

$(document).scroll(bgScroll)

var bgNavBar = document.getElementById("bgNavBar")

function bgScroll(){
    var intScroll = $("html").scrollTop(); //Distancia Scrolleada
    var winWidth = window.screen.width  //Ancho de la pantalla
    var perfChange = (245*winWidth)/375 //Regla de 3 simples calculando la distancia "perfecta" para realizar el cambio de  color

if (intScroll>=perfChange){
    bgNavBar.classList.add("bg-black")
}else{
    bgNavBar.classList.remove("bg-black")
}
}

//Funcion Smooth Scroll//

$(document).ready(function(){
        
    $("a").on('click', function(event) {
        
        if (this.hash !== "") {
        
        event.preventDefault();

        var hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function(){

            window.location.hash = hash;
        });
        }
    });
});