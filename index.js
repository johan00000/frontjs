//llamado de interaciones menu
let email=document.querySelector('.navbar-email');
let barra=document.querySelector('.desktop-menu');
let menuMovil=document.querySelector('.menu');
let elMEnu=document.querySelector('.mobile-menu');
//escuchadores de eventos menu
email.addEventListener('click',myCuenta);
menuMovil.addEventListener('click',movilMenu)


//funciones
function myCuenta()
{
    barra.classList.toggle('cambio')

}
function movilMenu()
{
    elMEnu.classList.toggle('cambio')
}
