"use strict";

/*
 *	Costedoat, Alexis
 */
const d = document;

let aProductos = [
  {
    id: 1,
    categoria: "snowboard",
    nombre: "Guantes Quiksilver Method",
    imagen: "img/guantes.jpg",
    descripcion: "Guantes Quiksilver Method para esquí, color rojo/gris",
    precio: 5000,
  },
  {
    id: 2,
    categoria: "ski",
    nombre: "Botas Nordicas Head",
    imagen: "img/botas_esqui.jpg",
    descripcion:
      "Se trata de unas botas para la nieve de gama alta, diseñadas para los esquiadores más expertos y de alto rendimiento",
    precio: 48000,
  },
  {
    id: 3,
    categoria: "accesorios",
    nombre: "Antiparras Bender Splat",
    imagen: "img/antiparras.jpg",
    descripcion:
      "100% de protección contra los rayos UVA y es el líder en lentes de atributos y función.",
    precio: 6000,
  },
  {
    id: 4,
    categoria: "accesorios",
    nombre: "Casco Electric Saint",
    imagen: "img/casco.jpg",
    descripcion:
      "La durabilidad y resistencia al golpe están asegurados ya que cuentan con CERTIFICACION EUROPEA que acreditan su legitimidad.",
    precio: 5500,
  },
  {
    id: 5,
    categoria: "ski",
    nombre: "Pantalon RipCurl Core",
    imagen: "img/pantalon.jpg",
    descripcion:
      " Confeccionado en tejido laminado oxford 10k, te mantendrá seco y abrigado cuando bajes a toda velocidad por las escarpadas pendientes.",
    precio: 500,
  },
  {
    id: 6,
    categoria: "snowboard",
    nombre: "Tabla Burton 187",
    imagen: "img/tablas.jpg",
    descripcion:
      "diseñada para ayudar a acelerar la curva desde el primer momento en la montaña.",
    precio: 57000,
  },
];

let carrito = {
  productos: [],
  cantidades: [],
  cantidadTotal: 0,
  precioTotal: 0,
  
};







function actualizarValores(){
  const cant = d.getElementById("cantidadItem");
  cant.innerText = carrito.cantidadTotal;
  
  const total = d.getElementById("precioTotal");
  total.innerText = carrito.precioTotal;
  
}


if (localStorage.carrito) {
  carrito = JSON.parse(localStorage.carrito);

  actualizarValores();
 
} else {
  localStorage.carrito = JSON.stringify(carrito);
}


function esValido(value){
  return value !="";
}

const botonMostrarCarrito = d.querySelector(
  'button[data-target="#modalCarrito"]'
);
botonMostrarCarrito.onclick = function mostrarCarrito() {
  compraCarrito();
};

function vaciarCarrito() {
  let totalVaciar=d.getElementById("totalPrecioSpan");


  carrito = {
    productos: [],
    cantidades: [],
    cantidadTotal: 0,
    precioTotal: 0,
    subTotal:0
  };

  localStorage.carrito = JSON.stringify(carrito);
  if(totalVaciar!=null){
    totalVaciar.innerHTML=carrito.precioTotal;
  }
 
  

  
  actualizarValores();

const modalBody=d.querySelector(".modal-body");
  modalBody.removeChild(modalBody.firstChild);
  const noHayNada = d.createElement("p");
  noHayNada.innerText = "Su carrito está vacío.";
  modalBody.appendChild(noHayNada);
}

function agregarProducto(id, precio) {
  const index = carrito.productos.indexOf(id);
  if (index == -1) {
    carrito.productos.push(id);
    carrito.cantidades.push(1);
  } else {
    carrito.cantidades[index]++;
  }
  carrito.precioTotal = carrito.precioTotal + parseInt(precio);
  carrito.cantidadTotal++;

  localStorage.carrito = JSON.stringify(carrito);
  
actualizarValores();
}

function muchasGracias() {
  const divGracias = d.createElement("div");
  divGracias.classList.add("modal1","position-fixed","d-flex","justify-content-center","flex-column","align-items-center");

  const divGraciasDialog = d.createElement("div");
  divGraciasDialog.classList.add("modal-dialog", "modal-md");
  divGraciasDialog.setAttribute("role", "document");

  const divGraciasConten = d.createElement("div");
  divGraciasConten.classList.add("modal-content");

  const divGraciasHeader = d.createElement("div");
  divGraciasHeader.classList.add("modal-header");

  const h4Gracias = d.createElement("h4");
  h4Gracias.classList.add("h5","text-center")
  h4Gracias.innerText = " ¡TU COMPRA FUE EXITOSA!";
  divGraciasHeader.appendChild(h4Gracias);

  const divGraciasboton = d.createElement("div");

  const cerrarModalGracias = d.createElement("a");
  cerrarModalGracias.classList.add("cerrarr");
  cerrarModalGracias.href = "javascript:void(0)";
  cerrarModalGracias.onclick = function cerrar() {
    vaciarCarrito();
    document.body.removeChild(divGracias);
  };
  cerrarModalGracias.innerText = "X";
 
  divGraciasboton.appendChild(cerrarModalGracias);

  divGraciasHeader.appendChild(divGraciasboton);
  divGraciasConten.appendChild(divGraciasHeader);

  const modalGraciasBody = d.createElement("div");
  modalGraciasBody.classList.add("modal-body","text-center");
  

  const textGracias = d.createElement("p");
  textGracias.classList.add("h4","text-center","font-weight-bold");
  textGracias.innerText =
    "Muchas gracias por la compra, te enviaremos la (factura al email)";

  modalGraciasBody.appendChild(textGracias);

  const logoImg=d.createElement("img");
  logoImg.setAttribute("src", "img/logo_celu-05.svg");
  logoImg.classList.add("w-50");
  modalGraciasBody.appendChild(logoImg);

  divGraciasConten.appendChild(modalGraciasBody);

  divGraciasDialog.appendChild(divGraciasConten);

  divGracias.appendChild(divGraciasDialog);

  document.body.appendChild(divGracias);

}

function formularioPago() {
  const divForm = d.createElement("div");
  divForm.classList.add("modal1","position-fixed","d-flex","justify-content-center","flex-column","align-items-center");

  const divFormDialog = d.createElement("div");
  divFormDialog.classList.add("modal-dialog", "modal-md");
  divFormDialog.setAttribute("role", "document");

  const divFormConten = d.createElement("div");
  divFormConten.classList.add("modal-content");

  const divFormHeader = d.createElement("div");
  divFormHeader.classList.add("modal-header");

  const h4Form = d.createElement("h4");
  h4Form.innerText = "Formulario de Pago";
  divFormHeader.appendChild(h4Form);

  const divFormboton = d.createElement("div");

  const cerrarForm = d.createElement("a");
  cerrarForm.classList.add("cerrarr");
  cerrarForm.href = "javascript:void(0)";
  cerrarForm.onclick = function cerrar() {
    document.body.removeChild(divForm);
  };
  cerrarForm.innerText = "X";

  divFormHeader.appendChild(cerrarForm);

  divFormboton.appendChild(cerrarForm);
  divFormHeader.appendChild(divFormboton);
  divFormConten.appendChild(divFormHeader);

  const modalFormBody = d.createElement("div");
  modalFormBody.classList.add("modal-body");

  //FORMULARIO

  const modalForm = d.createElement("form");
  modalForm.setAttribute("action", "#");
  modalForm.setAttribute("method", "POST");

  //generamos la primera fila
  const fila1 = d.createElement("div");
  fila1.classList.add("form-row", "col-12");

  //Div que contiene el inputo nombre
  const divNom = d.createElement("div");
  divNom.classList.add("form-group", "col-12", "col-md-6");
  // label nombre
  const labelNombre = d.createElement("label");
  labelNombre.setAttribute("for", "nombre");
  labelNombre.innerHTML = "Nombre";
  divNom.appendChild(labelNombre);
  //input nombre
  const inputNom = d.createElement("input");
  inputNom.classList.add("form-control");
  inputNom.setAttribute("id", "nombre");
  inputNom.setAttribute("type", "text");
  inputNom.setAttribute("placeholder", "Ingrese su nombre...");
  inputNom.setAttribute("name", "nombre");

  divNom.appendChild(inputNom);

  fila1.appendChild(divNom);
  // Div apellido
  const divApelle = d.createElement("div");
  divApelle.classList.add("form-group", "col-12", "col-md-6");
  //label apellido
  const labelApellido = d.createElement("label");
  labelApellido.setAttribute("for", "apellido");
  labelApellido.innerHTML = "Apellido";
  divApelle.appendChild(labelApellido);
  //input apellido
  const inputAplle = d.createElement("input");
  inputAplle.classList.add("form-control");
  inputAplle.setAttribute("id", "apellido");
  inputAplle.setAttribute("type", "text");
  inputAplle.setAttribute("placeholder", "Ingrese su apellido...");
  inputAplle.setAttribute("name", "apellido");

  divApelle.appendChild(inputAplle);

  fila1.appendChild(divApelle);
  //CERRAMOS PRIMERA FILA
  modalForm.appendChild(fila1);

  //Segunda fila
  const fila2 = d.createElement("div");
  fila2.classList.add("form-row", "col-12");

  //Div que contiene el inputo EMAIL
  const divEmail = d.createElement("div");
  divEmail.classList.add("form-group", "col-12", "col-md-6");
  //Label email
  const labelEmail = d.createElement("label");
  labelEmail.setAttribute("for", "email");
  labelEmail.innerText = "Email";
  divEmail.appendChild(labelEmail);
  //input emmail
  const inputEmail = d.createElement("input");
  inputEmail.classList.add("form-control");
  inputEmail.setAttribute("id", "email");
  inputEmail.setAttribute("type", "email");
  inputEmail.setAttribute("placeholder", "Coreo electronico...");
  inputEmail.setAttribute("name", "email");

  divEmail.appendChild(inputEmail);

  fila2.appendChild(divEmail);
  //Div que contiene  telefono
  const divTel = d.createElement("div");
  divTel.classList.add("form-group", "col-12", "col-md-6");
  //Label telefono
  const labelTel = d.createElement("label");
  labelTel.setAttribute("for", "telefono");
  labelTel.innerText = "telefono";
  divTel.appendChild(labelTel);
  //input telefono
  const inputTel = d.createElement("input");
  inputTel.classList.add("form-control");
  inputTel.setAttribute("id", "telefono");
  inputTel.setAttribute("type", "tel");
  inputTel.setAttribute("placeholder", "Ingrese su telefono...");
  inputTel.setAttribute("name", "telefono");

  divTel.appendChild(inputTel);

  fila2.appendChild(divTel);
  //CERRAMOS LA SEGUNDA FILA
  modalForm.appendChild(fila2);

  //Creamos la tercera fila
  const fila3 = d.createElement("div");
  fila3.classList.add("form-row", "col-12");

  //Div que contiene la direccion
  const divDireccion = d.createElement("div");
  divDireccion.classList.add("form-group", "col-12", "col-md-6");
  //Label direccion
  const labelDirec = d.createElement("label");
  labelDirec.setAttribute("for", "direccion");
  labelDirec.innerText = "Dirección";
  divDireccion.appendChild(labelDirec);
  //input direccion
  const inputDirec = d.createElement("input");
  inputDirec.classList.add("form-control");
  inputDirec.setAttribute("id", "direccion");
  inputDirec.setAttribute("type", "text");
  inputDirec.setAttribute("placeholder", "Domicilio de entrega...");
  inputDirec.setAttribute("name", "direccion");

  divDireccion.appendChild(inputDirec);

  fila3.appendChild(divDireccion);

  //Div que contiene la fecha

  const divFecha = d.createElement("div");
  divFecha.classList.add("form-group", "col-12", "col-md-6");
  //label fecha
  const labelFecha = d.createElement("label");
  labelFecha.setAttribute("for", "fecha");
  labelFecha.innerText = "Fecha";
  divFecha.appendChild(labelFecha);

  //input fecha
  const inputFecha = d.createElement("input");
  inputFecha.classList.add("form-control");
  inputFecha.setAttribute("id", "fecha");
  inputFecha.setAttribute("type", "text");
  inputFecha.setAttribute("placeholder", "Fecha de entrega...");
  inputFecha.setAttribute("name", "fecha");

  divFecha.appendChild(inputFecha);

  fila3.appendChild(divFecha);

  //CERRAMOS LA FILA 3
  modalForm.appendChild(fila3);

  //Generamos la fila 4
  const fila4 = d.createElement("div");
  fila4.classList.add("form-row", "col-12");

  //Div que contiene el Numero de Tarjeta
  const divNumTarjeta = d.createElement("div");
  divNumTarjeta.classList.add("form-group", "col-12");
  //Label Tarjeta
  const labelNumTarjeta = d.createElement("label");
  labelNumTarjeta.setAttribute("for", "tarjeta");
  labelNumTarjeta.innerText = "Tarjeta";
  divNumTarjeta.appendChild(labelNumTarjeta);
  //input numero de tarjeta
  const inputNumTarjeta = d.createElement("input");
  inputNumTarjeta.classList.add("form-control");
  inputNumTarjeta.setAttribute("id", "tarjeta");
  inputNumTarjeta.setAttribute("type", "text");
  inputNumTarjeta.setAttribute("placeholder", "Numero de Tarjeta...");
  inputNumTarjeta.setAttribute("name", "tarjeta");

  divNumTarjeta.appendChild(inputNumTarjeta);

  fila4.appendChild(divNumTarjeta);

  //CERRAMOS FILA 4
  modalForm.appendChild(fila4);

  //Generamos fila 5
  const fila5 = d.createElement("div");
  fila5.classList.add("form-row", "col-12");
  //Div que contiene el mes
  const divMes = d.createElement("div");
  divMes.classList.add("form-group", "col-3");
  //label mes
  const labelMes = d.createElement("label");
  labelMes.setAttribute("for", "mes");
  labelMes.innerText = "Mes";
  divMes.appendChild(labelMes);
  //input mes
  const inputMes = d.createElement("input");
  inputMes.classList.add("form-control");
  inputMes.setAttribute("id", "mes");
  inputMes.setAttribute("type", "text");
  inputMes.setAttribute("placeholder", "Mes...");
  inputMes.setAttribute("name", "mes");

  divMes.appendChild(inputMes);
  //Cerramos el div mes
  fila5.appendChild(divMes);

  //Div que contiene año
  const divAnio = d.createElement("div");
  divAnio.classList.add("form-group", "col-3");
  //label año
  const labelAnio = d.createElement("label");
  labelAnio.setAttribute("for", "año");
  labelAnio.innerText = "Año";
  divAnio.appendChild(labelAnio);
  //input año
  const inputAnio = d.createElement("input");
  inputAnio.classList.add("form-control");
  inputAnio.setAttribute("id", "anio");
  inputAnio.setAttribute("type", "text");
  inputAnio.setAttribute("placeholder", "Año...");
  inputAnio.setAttribute("name", "año");

  divAnio.appendChild(inputAnio);
  //Cerramos el div año
  fila5.appendChild(divAnio);

  //Div que contiene el codigo
  const divCod = d.createElement("div");
  divCod.classList.add("form-group", "col-3");
  //label codigo
  const labelCod = d.createElement("label");
  labelCod.setAttribute("for", "codigo");
  labelCod.innerText = "Código";
  divCod.appendChild(labelCod);
  //input codigo
  const inputCod = d.createElement("input");
  inputCod.classList.add("form-control");
  inputCod.setAttribute("id", "codigo");
  inputCod.setAttribute("type", "text");
  inputCod.setAttribute("placeholder", "Cod...");
  inputCod.setAttribute("name", "codigo");

  divCod.appendChild(inputCod);

  //Cerramos div codigo
  fila5.appendChild(divCod);

  //Div que contiene la  img de tarjeta
  const divImgTajeta = d.createElement("div");
  divImgTajeta.classList.add("form-group", "col-3");

  const imgTarjeta = d.createElement("img");
  imgTarjeta.setAttribute("src", "img/tarjeta.svg");
  imgTarjeta.classList.add("img-tarjeta");

  divImgTajeta.appendChild(imgTarjeta);

  fila5.appendChild(divImgTajeta);
  //CERRAMOS FILA 5
  modalForm.appendChild(fila5);

  //Generamos la fila 6
  const fila6 = d.createElement("div");
  fila6.classList.add("form-row", "col-12");

  //Div que contiene el nombre de tarjeta
  const divNomTarjeta = d.createElement("div");
  divNomTarjeta.classList.add("form-group", "col-12");
  //label nombre del titular
  const labelNomTarjeta = d.createElement("label");
  labelNomTarjeta.setAttribute("for", "titular");
  labelNomTarjeta.innerText = "Titular de Tarjeta";
  divNomTarjeta.appendChild(labelNomTarjeta);
  //input titular
  const inputNomTarjeta = d.createElement("input");
  inputNomTarjeta.classList.add("form-control");
  inputNomTarjeta.setAttribute("id", "titular");
  inputNomTarjeta.setAttribute("type", "text");
  inputNomTarjeta.setAttribute("placeholder", "Titular...");
  inputNomTarjeta.setAttribute("name", "titular");

  divNomTarjeta.appendChild(inputNomTarjeta);

  fila6.appendChild(divNomTarjeta);
  //CERRAMOS FILA6
  modalForm.appendChild(fila6);
  //CERRAMOS FORMULARIO
  modalFormBody.appendChild(modalForm);

  divFormConten.appendChild(modalFormBody);

  const divFormFooter = d.createElement("div");
  divFormFooter.classList.add("modal-footer");

  const butFormCancel = d.createElement("button");
  const butFormSeguir = d.createElement("button");
  



  const butFormPagar = d.createElement("button");
  butFormCancel.classList.add("btn", "btn-warning");
  butFormSeguir.classList.add("btn", "btn-warning");
  butFormPagar.classList.add("btn", "btn-success");
  butFormCancel.setAttribute("type", "button");
  butFormSeguir.setAttribute("type", "button");
  butFormPagar.setAttribute("type", "submit");
 
  butFormCancel.innerText = "Cancelar";

  butFormCancel.onclick=function(){
    vaciarCarrito();
  }

  
  butFormSeguir.innerText = "Seguir comprando";
  butFormSeguir.href = "javascript:void(0)";
  butFormSeguir.onclick = function cerrar() {
    document.body.removeChild(divForm);
  };




  butFormPagar.innerText = "Pagar";
  modalForm.onsubmit = function gracias(e) {
    e.preventDefault();
    const inputs=d.querySelectorAll("input[type=text],input[type=email],input[type=tel]");

  for(let i =0; i<inputs.length;i++){
   if(!esValido(inputs[i].value)){
    inputs[i].classList.add("error");
   }
   else{
    inputs[i].classList.remove("error");
   }
    
  }
  const inputsError=d.querySelectorAll("input[type=text].error,input[type=email].error,input[type=tel].error");
  if(inputsError.length==0){
    muchasGracias();
    document.body.removeChild(divForm);
    localStorage.removeItem("carrito");
  }
  };

  divFormFooter.appendChild(butFormCancel);
  divFormFooter.appendChild(butFormSeguir);
  divFormFooter.appendChild(butFormPagar);
//////////////////////////////////////////////////////////////////
modalForm.appendChild(divFormFooter);

  divFormDialog.appendChild(divFormConten);
  divForm.appendChild(divFormDialog);
  document.body.appendChild(divForm);
}

function compraCarrito() {
  const divCarrito = d.createElement("div");
  divCarrito.classList.add("modal1","position-fixed","d-flex","justify-content-center","flex-column","align-items-center");

  const divDialog = d.createElement("div");
  divDialog.classList.add("modal-dialog", "modal-md");
  divDialog.setAttribute("role", "document");

  const divConten = d.createElement("div");
  divConten.classList.add("modal-content");

  const divHeader = d.createElement("div");
  divHeader.classList.add("modal-header");

  const h4Carrito = d.createElement("h4");
  h4Carrito.classList.add("h5")
  h4Carrito.innerText = "Carrito de compras";
  divHeader.appendChild(h4Carrito);

  const divboton = d.createElement("div");
  const cerrarModal = d.createElement("a");
  cerrarModal.classList.add("cerrarr");
  cerrarModal.href = "javascript:void(0)";
  cerrarModal.onclick = function cerrar() {
    document.body.removeChild(divCarrito);
  };
  cerrarModal.innerText = "X";
  divHeader.appendChild(cerrarModal);

  divboton.appendChild(cerrarModal);
  divHeader.appendChild(divboton);
  divConten.appendChild(divHeader);

  const modalBody = d.createElement("div");
  modalBody.classList.add("modal-body");
  

  if (carrito.cantidadTotal === 0) {
    const noHayNada = d.createElement("p");
    noHayNada.innerText = "Su carrito está vacío.";
    modalBody.appendChild(noHayNada);
  } else {
    const tableCarrito = d.createElement("table");
    tableCarrito.classList.add("table");
    const thTable = d.createElement("thead");
    
    const colum = d.createElement("tr");
    
    const colum1 = d.createElement("th");
    colum1.innerText = "Imagen";
    colum.appendChild(colum1);
    
    const colum2 = d.createElement("th");
    colum2.innerText = "Nombre";
    colum.appendChild(colum2);
    
    const colum3 = d.createElement("th");
    colum3.innerText = "Precio";
    colum.appendChild(colum3);
    
    const colum4 = d.createElement("th");
    colum4.innerText = "Cantidad";
    colum.appendChild(colum4);

    const colum5 = d.createElement("th");
    colum5.innerText = "SubTotal";
    colum.appendChild(colum5);
    
    thTable.appendChild(colum);

    
    const tableBody = d.createElement("tbody");
    
    for (let i = 0; i < carrito.productos.length; i++) {
  
      const producto = aProductos.find(
        function(produ) {
          return produ.id === carrito.productos[i];
        }
      );


      const columTbody = d.createElement("tr");
      columTbody.classList.add("border");
     

      const columTd1 = d.createElement("td");
      
      
      
     
      const botonQuitar = d.createElement("a");
      botonQuitar.classList.add("cerrar","d-flex", "align-items-end", "pb-1");
      botonQuitar.setAttribute("href", "#");

      botonQuitar.onclick = function borrarUno() {
        let index = carrito.productos.indexOf(producto.id);
        let totalModal=d.getElementById("totalPrecioSpan");
        console.log(totalModal);
        if (index != -1) {
          if (carrito.cantidades[index] > 1) {
            carrito.cantidades[index]--;
            carrito.precioTotal=carrito.precioTotal- parseInt(producto.precio);
            carrito.cantidadTotal--;
            columTd5.innerText =producto.precio*carrito.cantidades[index];
            columTd4.innerText = carrito.cantidades[index];

          } else {
            carrito.productos.splice(index, 1);
            carrito.cantidades.splice(index, 1);
            carrito.precioTotal -= producto.precio;
            carrito.cantidadTotal--;
            columTd5.innerText =producto.precio*carrito.cantidades[index];
            tableBody.removeChild(columTbody);
            
          }


          localStorage.carrito = JSON.stringify(carrito);
          

          totalModal.innerHTML=carrito.precioTotal;

          actualizarValores();
        }
      }
      
      const botonIcono = d.createElement("i");
      botonIcono.classList.add("fas", "fa-times-circle");
      botonQuitar.appendChild(botonIcono);

      columTd1.appendChild(botonQuitar);
      
      const imgMini = d.createElement("img");
      imgMini.classList.add("imgMini");
      imgMini.setAttribute("src", producto.imagen);
      columTd1.appendChild(imgMini);

      columTbody.appendChild(columTd1);
      
      const columTd2 = d.createElement("td");
      columTd2.innerText = producto.nombre;
      colum2.setAttribute("data-titulo","Nombre");
      columTbody.appendChild(columTd2);

      const columTd3 = d.createElement("td");
      columTd3.setAttribute("data-titulo","Precio:$");
      columTd3.innerText = producto.precio;
      columTbody.appendChild(columTd3);
      
      const columTd4 = d.createElement("td");
      columTd4.setAttribute("data-titulo","Cantidad: ");
      columTd4.innerText = carrito.cantidades[i];
      columTbody.appendChild(columTd4);
/////////////////////////////////////////////////////////////////////////
     
const columTd5 = d.createElement("td");
columTd5.setAttribute("data-titulo","Subtotal:$");
      columTd5.innerText =producto.precio*carrito.cantidades[i];
      columTbody.appendChild(columTd5);




      tableBody.appendChild(columTbody);
    }

    tableCarrito.appendChild(thTable);
    tableCarrito.appendChild(tableBody);
    
    
    
    modalBody.appendChild(tableCarrito);
  }
  
  divConten.appendChild(modalBody);

  const divFootCarrito = d.createElement("div");
  divFootCarrito.classList.add("modal-footer");

  const totalComprar=d.createElement("p");
  totalComprar.innerText="Total: $";
  totalComprar.classList.add("font-weight-bold");
  const spanTotalCompra=d.createElement("span");
  spanTotalCompra.innerText=carrito.precioTotal;
  spanTotalCompra.setAttribute("id","totalPrecioSpan");
  
  totalComprar.appendChild(spanTotalCompra);
  divFootCarrito.appendChild(totalComprar);
  
  
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const butVaciarCarrito = d.createElement("button");
  const butFinCarrito = d.createElement("button");
  butVaciarCarrito.classList.add("btn", "btn-warning");
  butFinCarrito.classList.add("btn", "btn-success");
  butVaciarCarrito.setAttribute("type", "button");
  butFinCarrito.setAttribute("type", "button");
  butFinCarrito.setAttribute("data-target", "#abrirform");

  butVaciarCarrito.innerText = "Vaciar carrito";
  butVaciarCarrito.onclick = vaciarCarrito;

  butFinCarrito.innerText = "Finalizar compra";

  if (carrito.cantidadTotal === 0) {
    butFinCarrito.setAttribute("disabled", true);
  }


  butFinCarrito.onclick = function AbrirForm() {
    formularioPago();
    document.body.removeChild(divCarrito);
  };

  divFootCarrito.appendChild(butVaciarCarrito);
  divFootCarrito.appendChild(butFinCarrito);

  divConten.appendChild(divFootCarrito);
  divDialog.appendChild(divConten);
  divCarrito.appendChild(divDialog);
  document.body.appendChild(divCarrito);
}

function mostrarModal(produ) {
  const divModal = d.createElement("div");
  divModal.classList.add("modall","position-fixed","d-flex","justify-content-center","flex-column","align-items-center");
  
  divModal.setAttribute("id", "modalProducto");

  const cerrarModal = d.createElement("a");
 
  cerrarModal.classList.add("cerrar","position-fixed","d-flex","justify-content-center","flex-column","align-items-center");
  cerrarModal.href = "javascript:void(0)";
  cerrarModal.onclick = function cerrar() {
    document.body.removeChild(divModal);
  };
  cerrarModal.innerText = "X";
  divModal.appendChild(cerrarModal);

  const imgProducto = d.createElement("img");
  imgProducto.setAttribute("src", produ.imagen);
  imgProducto.setAttribute("alt", produ.descripcion);
  divModal.appendChild(imgProducto);

  const h3Modal = d.createElement("h3");
  h3Modal.innerText = produ.nombre;
  divModal.appendChild(h3Modal);

  const pModal = d.createElement("p");
  pModal.innerText = "Precio: ";
  const spanPrecio = d.createElement("span");
  spanPrecio.innerText = "$" + produ.precio;
  pModal.appendChild(spanPrecio);
  divModal.appendChild(pModal);

  const descripcionModal = d.createElement("p");
  descripcionModal.innerText = produ.descripcion;
  divModal.appendChild(descripcionModal);

  const botonMAgregar = d.createElement("button");
  botonMAgregar.innerText = "Agregar";
  botonMAgregar.onclick = function agregar() {
    agregarProducto(produ.id, produ.precio);
  };
  divModal.appendChild(botonMAgregar);

  document.body.appendChild(divModal);
}

function mostrarSnow(){
  
}


function cargarProductos() {

  

  const divProductos = d.getElementById("productos");

  for (const producto of aProductos) {
    const divColumnas=d.createElement("div");
    divColumnas.classList.add("col-12", "col-md-6","col-lg-4");
    const divProducto = d.createElement("div");
    const imgProducto = d.createElement("img");
    divProducto.classList.add("card", "shadow", "mt-4");
    imgProducto.classList.add("card-img-top");

    imgProducto.setAttribute("src", producto.imagen);
    imgProducto.setAttribute("alt", producto.descripcion);

    divProducto.appendChild(imgProducto);

    const divDatos = d.createElement("div");
    divDatos.classList.add("card-body","text-center");

    const h3Datos = d.createElement("h3");
    h3Datos.classList.add("card-title","h4");
    h3Datos.innerText = producto.nombre;
    divDatos.appendChild(h3Datos);

    const pDatos = d.createElement("p");
    pDatos.classList.add("card-text","font-weight-bold");
    pDatos.innerText = "Precio: ";

    const spanPrecio = d.createElement("span");
    spanPrecio.classList.add("font-weight-bold")
    spanPrecio.innerText = "$" + producto.precio;

    pDatos.appendChild(spanPrecio);
    divDatos.appendChild(pDatos);
    divProducto.appendChild(divDatos);
    divColumnas.appendChild(divProducto);
    divProductos.appendChild(divColumnas);

    const botonAgregar = d.createElement("button");
    botonAgregar.classList.add("btn","btn-success","m-2");
    botonAgregar.innerText = "Comprar";
    botonAgregar.onclick = function agregar() {
      agregarProducto(producto.id, producto.precio);
    };
    divDatos.appendChild(botonAgregar);

    const botonAmpliar = d.createElement("button");
    botonAmpliar.classList.add("btn","btn-warning");
    botonAmpliar.innerText = "Ver";
    botonAmpliar.onclick = function modal() {
      mostrarModal(producto);
    };

    divDatos.appendChild(botonAmpliar);


    



  }
}

cargarProductos();
