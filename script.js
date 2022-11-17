 class Producto{
    constructor(id, id2, nombre, precio, stock){
        this.id = id;
        this.id2 = id2;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
    restarStock(){
        this.stock = this.stock - 1;
        
    }

    sumarStock(){
        this.stock = this.stock + 1;
    }
}

const producto1 = new Producto(1, 88, "Melaza de caña",1200, 300)
const producto2 = new Producto(2, 77, "Harina de coca", 1800, 100)
const producto3 = new Producto(3, 66, "Cascarilla de arroz", 900, 200)
const producto4 = new Producto(4, 55, "Carbonilla vegetal", 1100, 100)
const producto5 = new Producto(5, 44, "Biocarbon activado", 950, 120)
const producto6 = new Producto(6, 33, "Agua de mar", 1700, 200)
const producto7 = new Producto(7, 22,"Cera natural", 1000, 150)
const producto8 = new Producto(8, 11,"Ormus", 1400, 110)

const productos = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8]

const carrito = []

productos.find(object => {
    if(object.precio >= 1000){
        alert (`Productos de $1000 o mas en promoción 2x1: \n ${object.nombre} a $ ${object.precio}` )
    }
})

let prodFiltrado = productos.filter(object => object.precio < 1000 );

prodFiltrado.forEach((productos) => {
    alert (`Productos en OFERTA por menos de $ 1000 : \n ${productos.nombre} a solo $ ${productos.precio}`) 
}) 

let productosEnStock = "Seleccione los productos que desea comprar: "


function agregarQuitarCarrito(){ 
    for (item of productos) {
        productosEnStock += `\n (+) ${item.id} | (-) ${item.id2} - ${item.nombre} - $ ${item.precio}`
    }
    
    productosEnStock += `\n Para agregar un producto ingrese el numero de 1 cifra, para elminar utilice las 2 cifras. Si desea salir ingrese 0`

    let respuesta = parseInt(prompt(productosEnStock))

    
    while (isNaN(respuesta)){
        alert("¡Error! Ingrese sólo números, por favor.")
        respuesta = parseInt(prompt(productosEnStock))
    }
    
    while(respuesta != 0){
      switch(respuesta){
        case 1: 
            carrito.push(productos[0])
            alert(`${productos[0].nombre} se ha agregado al carrito.`)
            productos[0].restarStock()
            break;
        case 2: 
            carrito.push(productos[1])
            alert(`${productos[1].nombre} se ha agregado al carrito.`)
            productos[1].restarStock()
            break;
        case 3:
            carrito.push(productos[2])
            alert(`${productos[2].nombre} se ha agregado al carrito.`)
            productos[2].restarStock()
            break;        
        case 4:
            carrito.push(productos[3])
            alert(`${productos[3].nombre} se ha agregado al carrito.`)
            productos[3].restarStock()
            break;        
        case 5:
            carrito.push(productos[4])
            alert(`${productos[4].nombre} se ha agregado al carrito.`)
            productos[4].restarStock()
            break;        
        case 6:
            carrito.push(productos[5])
            alert(`${productos[5].nombre} se ha agregado al carrito.`)
            productos[5].restarStock()
            break;        
        case 7:
            carrito.push(productos[6])
            alert(`${productos[6].nombre} se ha agregado al carrito.`)
            productos[6].restarStock()
            break;        
        case 8:
            carrito.push(productos[7])
            alert(`${productos[7].nombre} se ha agregado al carrito.`)
            productos[7].restarStock()
            break;
        case 88:
            carrito.pop(productos[0])
            alert(`${productos[0].nombre} se ha quitado del carrito.`)
            productos[0].sumarStock()
            break;
        case 77:
            carrito.pop(productos[1])
            alert(`${productos[1].nombre} se ha quitado del carrito.`)
            productos[1].sumarStock()
            break;  
        case 66:
            carrito.pop(productos[2])
            alert(`${productos[2].nombre} se ha quitado del carrito.`)
            productos[2].sumarStock()
            break;  
        case 55:
            carrito.pop(productos[3])
            alert(`${productos[3].nombre} se ha quitado del carrito.`)
            productos[3].sumarStock()
            break;  
        case 44:
            carrito.pop(productos[4])
            alert(`${productos[4].nombre} se ha quitado del carrito.`)
            productos[4].sumarStock()
            break;  
        case 33:
            carrito.pop(productos[5])
            alert(`${productos[5].nombre} se ha quitado del carrito.`)
            productos[5].sumarStock()
            break;  
        case 22:
            carrito.pop(productos[6])
            alert(`${productos[6].nombre} se ha quitado del carrito.`)
            productos[6].sumarStock()
            break;  
        case 11:
            carrito.pop(productos[7])
            alert(`${productos[7].nombre} se ha quitado del carrito.`)
            productos[7].sumarStock()
            break;                                      
        default:
            alert("Producto inexistente.")
            break;        
      }
      respuesta = parseInt(prompt(productosEnStock))
    }
    alert("Los productos se han agregando al carrito.")
    mostrarCarrito()
}


let productosEnCarrito = `Agregaste al carrito: `
let totalCarrito = 0




function mostrarCarrito(){
    for (itemsSeleccionados of carrito) {
        productosEnCarrito += `\n - ${itemsSeleccionados.nombre}`
        totalCarrito += itemsSeleccionados.precio
    }
    alert(`\n ${productosEnCarrito} \n Total: $ ${totalCarrito}`)

} 
 

agregarQuitarCarrito()  

