//llamado de interaciones menu
let email=document.querySelector('.navbar-email');
let barra=document.querySelector('.desktop-menu');
let menuMovil=document.querySelector('.menu');
let elMEnu=document.querySelector('.mobile-menu');
let shop=document.querySelector('.navbar-shopping-cart')
let shopMenu=document.querySelector('.product-detail')

//escuchadores de eventos menu
email.addEventListener('click',myCuenta);
menuMovil.addEventListener('click',movilMenu)


shop.addEventListener('click',compras)


//funciones
function myCuenta()
{
    barra.classList.toggle('cambio')
    if(shopMenu.classList.toggle('cambio')==true)
    {
        shopMenu.classList.toggle('cambio')
    }
    shopMenu.classList.toggle('cambio')


}
function movilMenu()
{
    elMEnu.classList.toggle('cambio')
    if(shopMenu.classList.toggle('cambio')==true)
    {
        shopMenu.classList.toggle('cambio')
    }
    shopMenu.classList.toggle('cambio')
    
    
}
function compras()
{
    shopMenu.classList.toggle('cambio')
    if(elMEnu.classList.toggle('cambio')==true)
    {
        elMEnu.classList.toggle('cambio')
    }
    {}elMEnu.classList.toggle('cambio')
}
//CREADOR DE PRODUCTOS 

//ARRAI PRODUCTOS DE ENTRADA
let productoss= []
productoss.push(
            {nombre:"vici",
            precio:"22,200",
            img:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}
            )
productoss.push(
    {nombre:"pc",
    precio:"3,222",
    img:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}
    )
for (const iterator of productoss) {
     
    const productos= `<div class="product-card">
    <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
    <div class="product-info">
      <div>
        <p>$${iterator.precio}</p>
        <p>${iterator.nombre}</p>
      </div>
      <figure>
        <img src="./icons/bt_add_to_cart.svg" alt="">
      </figure>
    </div>
  </div> `

    let dondeProductos=document.querySelector('.cards-container')

    dondeProductos.innerHTML+=productos


    
    
    /*  //CREAR LA ETIQUETA 
       const newElement = document.createElement("div");
       newElement.classList.add("product-card");
       document.querySelector(".cards-container").appendChild(newElement);
       const imagen = document.createElement("img");
       imagen.src=iterator.img
       document.querySelector(".product-card").appendChild(imagen);
   
       const divDatos = document.createElement("div");
       divDatos.classList.add("product-info");
       document.querySelector(".product-card").appendChild(divDatos);
   
   
       const divVacio = document.createElement("div");
       divVacio.classList.add("vacio");
       document.querySelector(".product-info").appendChild(divVacio);
       const precio = document.createElement("p");
   
       const nombre = document.createElement("p");
       document.querySelector(".vacio").appendChild(nombre);
   
       document.querySelector(".vacio").appendChild(precio);
       precio.innerText='$'+productos.precio
       nombre.innerText=productos.nombre
       const carrioto = document.createElement("figure");
       carrioto.classList.add("icono");
       document.querySelector(".product-info").appendChild(carrioto);
   
       const imgIcono=document.createElement('img')
       imgIcono.src="./icons/bt_add_to_cart.svg"
       document.querySelector(".icono").appendChild(imgIcono);
   */
}

