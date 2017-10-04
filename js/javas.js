
var personasVen= [];//this variable saves old people that sell product
var personasUser = []; //this variable saves old people that buy product
function guardar(name,user,pass,ced,type,age,email,dir,tel,num,cod,date){//This function saves all the information ingress
// in the text fields
      var nameC = name.value;
      var userN = user.value;
      var contra= pass.value;
      var cedu = ced.value;
      var tipoU = type.value;
      var edaad = age.value;
      var corre = email.value;
      var dire = dir.value;
      var telF = tel.value;
      var numTa = num.value;
      var codS = cod.value;
      var fechaV = date.value;
      if((tipoU == "V") || (tipoU=="v")){//save the user that sell
     // alert(nameC);
          var personasV = function(nameC,userN,contra,cedu,tipoU){
                  this.nameC = nameC;
                  this.userN = userN;
                  this.contra = contra;
                  this.cedu = cedu;
                  this.tipoU = tipoU;
                  this.activo = "act";
          } 
          var pe1 = new personasV(nameC,userN,contra,cedu,tipoU);

          personasVen.push(pe1);
          localStorage.setItem("vender", JSON.stringify(personasVen) ); 
          //localStorage.removeItem("vender");
          //localStorage.removeItem("comprar");
      }
      else{//save the user that buy
            var personasU = function(nameC,userN,contra,cedu,tipoU,edaad,corre,dire,telF,numTa,codS,fechaV){
                  this.nameC = nameC;
                  this.userN = userN;
                  this.contra = contra;
                  this.cedu = cedu;
                  this.tipoU = tipoU;
                  this.edaad = edaad;
                  this.corre = corre;
                  this.dire = dire;
                  this.telF = telF;
                  this.numTa = numTa;
                  this.codS = codS;
                  this.fechaV = fechaV
                  this.activo = "act";
            }
            var pe2 = new personasU(nameC,userN,contra,cedu,tipoU,edaad,corre,dire,telF,numTa,codS,fechaV);
            personasUser.push(pe2);
            localStorage.setItem("comprar", JSON.stringify(personasUser)  ); 
      }
}
//this serves for puts the name in the menu, and load the user profile
function ponerName(id,valor,vender,comp){
    var a = JSON.parse(vender);
    var b = JSON.parse(comp);
    for(var i = 0; i<Object.keys(a).length; i++){
      if(a[i].userN==valor){
        id.innerHTML = a[i].nameC;
          break;
      }
    }
    for(var j = 0; j<Object.keys(b).length; j++){
      if(b[j].userN==valor){
        id.innerHTML = b[j].nameC;
        break;
      }
    }
  }
  function verificarU(id){//this function redirect to user page
    var name = sessionStorage.getItem("actual");
    var vend = localStorage.getItem("vender");
    var comp = localStorage.getItem("comprar");
    var a = JSON.parse(vend);
    var b = JSON.parse(comp);
    for(var i = 0; i<Object.keys(a).length; i++){
      if(a[i].userN==name){
        id.innerHTML = a[i].nameC;
        id.href = "paginaVen.html";
        break;
      }
    }
    for(var j = 0; j<Object.keys(b).length; j++){
      if(b[j].userN==name){
        id.innerHTML = b[j].nameC;
        id.href = "catalogo.html";
        break;
      }
    }
  }

   function cargarPerfil(nameC,userN,contra,cedu,edaad,corre,dire,telF,numTa,codS,fechaV,e,c,d,t,ta,co,fe,btn,nom,ocul){//nom
      var name = sessionStorage.getItem("actual");
      var vend = localStorage.getItem("vender");
      var comp = localStorage.getItem("comprar");
      var a = JSON.parse(vend);
      var b = JSON.parse(comp);
      for(var i = 0; i<Object.keys(a).length; i++){
        if(a[i].userN==name){ 
          
          nameC.innerHTML = a[i].nameC;
          userN.innerHTML = a[i].userN;
          contra.innerHTML = a[i].contra;
          cedu.innerHTML = a[i].cedu;
          btn.innerHTML = "Agregar productos";
          btn.href = "vendedor.html";
          document.getElementById(nom).className= "divU";
          document.getElementById(ocul).className = "ocultarB";

          break;
        }
        
      }
      for(var j = 0; j<Object.keys(b).length; j++){
        if(b[j].userN==name){

            nameC.innerHTML = b[j].nameC;
            userN.innerHTML = b[j].userN;
            contra.innerHTML = b[j].contra;
            cedu.innerHTML = b[j].cedu;
            edaad.innerHTML = b[j].edaad;
            corre.innerHTML = b[j].corre;
            dire.innerHTML = b[j].dire;
            telF.innerHTML = b[j].telF;
            numTa.innerHTML =b[j].numTa;
            codS.innerHTML = b[j].codS;
            fechaV.innerHTML = b[j].fechaV;
            e.innerHTML = "Edad: ";
            c.innerHTML = "Correo: ";
            d.innerHTML = "Dirección: ";
            t.innerHTML = "Teléfono: ";
            ta.innerHTML = "Número de Tarjeta: ";
            co.innerHTML = "Código: ";
            fe.innerHTML = "Fecha de vencimiento: ";
             btn.innerHTML = "Editar";
            break;
        }
      }
   }
   function check() {
    // entered data from the login-form
    var userName = document.getElementById('email');
    var userPw = document.getElementById('pass');
    // stored data from the register-form
    var v = localStorage.getItem('vender');
    var c = localStorage.getItem('comprar');

    var Jv = JSON.parse(v);
    var Jc = JSON.parse(c);

    for (var i = Jv.length - 1; i >= 0; i--) {
      console.log(Jv[i].userN);
      console.log(Jv[i].contra);

      if (userName.value==Jv[i].userN && userPw.value==Jv[i].contra) {
         sessionStorage.setItem('actual', userName.value);
         document.location.href="perfil.html";
         return;
      }
    }

    for (var i = Jc.length - 1; i >= 0; i--) {
      if (userName.value==Jc[i].userN && userPw.value==Jc[i].contra && Jc[i].activo=="act") {
          sessionStorage.setItem('actual', userName.value);
          document.location.href="perfil.html";
          return;
      }
    }
    alert("No estas registrado!!");
  } 


function editarInfo(namee,user,pass,ced,age,email,dir,tel,num,cod,date){
    var name = sessionStorage.getItem("actual");
    var comp = localStorage.getItem("comprar");
    var b = JSON.parse(comp);  
     for(var j = 0; j<Object.keys(b).length; j++){
        if(b[j].userN==name){
            b[j].nameC = namee.value;
            b[j].userN = user.value;
            sessionStorage.setItem("actual",b[j].userN);
            b[j].contra = pass.value;
            b[j].cedu = ced.value;
            b[j].edaad = age.value;
            b[j].corre = email.value;
            b[j].dire = dir.value;
            b[j].telF = tel.value;
            b[j].numTa = num.value;
            b[j].codS = cod.value;
            b[j].fechaV = date.value;
        }
     }

     localStorage.setItem("comprar",JSON.stringify(b));
     location.reload();
}
function cargarInfo(name1,user,pass,ced,age,email,dir,tel,num,cod,date){
    var name = sessionStorage.getItem("actual");
    var comp = localStorage.getItem("comprar");
    var b = JSON.parse(comp);
    for(var j = 0; j<Object.keys(b).length; j++){
        if(b[j].userN==name){
          name1.value = b[j].nameC;
          user.value = b[j].userN;
          pass.value = b[j].contra;
          ced.value = b[j].cedu;
          age.value = b[j].edaad;
          email.value = b[j].corre;
          dir.value = b[j].dire;
          tel.value = b[j].telF;
          num.value =b[j].numTa;
          cod.value = b[j].codS;
          date.value = b[j].fechaV;

        }
      }
}
function desactivarCuenta(){
   var name = sessionStorage.getItem("actual");
    var comp = localStorage.getItem("comprar");
    var b = JSON.parse(comp);  
     for(var j = 0; j<Object.keys(b).length; j++){
        if(b[j].userN==name){
           b[j].activo = "des";
        }
     }
      localStorage.setItem("comprar",JSON.stringify(b));
      location.reload();
}
 function loadProductsVe() {
      var code="";
      var pro = localStorage.getItem('product');
      var actual= sessionStorage.getItem('actual'); 
      var Jp = JSON.parse(pro);

      if(pro!=null){
        for (var i = Jp.length - 1; i >= 0; i--) {
          if (Jp[i].vendedorP == actual) {
            code+="<div class=\"product2\"><div class=\"product3\"><a href=\"\"><img class=\"ima\" src="+Jp[i].imageP+"></a><div class=\"texto\"><h6>Producto: "+Jp[i].nameP+"</h6><h6>Precio: "+Jp[i].priceP+"</h6><a id="+Jp[i].idP+" class=\"waves-effect waves-light btn modal-trigger\" href=\"#modalModificar\" onclick= \"mostrarM(this)\">Modificar</a><a id="+Jp[i].idP+" class=\"waves-effect waves-light btn modal-trigger\" href=\"#modalEliminar\" onclick= \"mostrarE(this)\">Eliminar</a></div></div></div>";
          }
        }
        $(".product").append(code);
      }
    }
function saveP(name,price,quantity,image){//This function saves all the information ingress
    // in the text fields
      var products = [];
      var idGuardar = [];
      var vendedorP = sessionStorage.getItem("actual");
      //localStorage.removeItem("product");
      //localStorage.removeItem("id");

      if (localStorage.getItem("id")==null) {
        idGuardar.push({"id": 0});
        localStorage.setItem("id",JSON.stringify(idGuardar));
      }
      
        var i=localStorage.getItem("id");
        var Ji = JSON.parse(i);
        var nameP = name.value;
        var priceP = price.value;
        var quantityP= quantity.value;
        var imageP= image.value;
        var idP=Ji[0].id;
        var product = function(nameP,priceP,quantityP,imageP,vendedorP,idP){
                this.nameP = nameP;
                this.priceP = priceP;
                this.quantityP = quantityP;
                this.imageP=imageP;
                this.vendedorP=vendedorP;
                this.idP=idP;
        }
        Ji[0].id=idP+1;
        localStorage.removeItem("id");
        localStorage.setItem("id",JSON.stringify(Ji));
        //localStorage.removeItem('product');
        var pro = new product(nameP,priceP,quantityP,imageP,vendedorP,idP);
        var v = localStorage.getItem('product');
        var Jv = JSON.parse(v);

        if (Jv==null) {
          products.push(pro);
          localStorage.setItem("product", JSON.stringify(products)); 
        }
        else{
          Jv.push(pro);
          localStorage.setItem("product", JSON.stringify(Jv)); 
        }
    }


  function mostrarM(comp){
    temp = comp.id;

    var pro = localStorage.getItem('product');
    var Jp = JSON.parse(pro);

    for (var i = Jp.length - 1; i >= 0; i--) {
      if (Jp[i].idP == temp) {
        var text = document.getElementById('nameP');
        text.value += Jp[i].nameP;

        var text2 = document.getElementById('priceP');
        text2.value += Jp[i].priceP;

        var text3 = document.getElementById('cantidadP');
        text3.value += Jp[i].quantityP;

        var text4 = document.getElementById('imageP');
        text4.value += Jp[i].imageP;
      }
    }
  }
  function loadProducts() {
      // stored data from the register-form
      var code="";
      var pro = localStorage.getItem('product');
      
      var Jp = JSON.parse(pro);

      if (pro!=null) {
        for (var i = Jp.length - 1; i >= 0; i--) {

          code+="<div class=\"product2\"><div class=\"product3\"><a href=\"\"><img class=\"ima\" src="+Jp[i].imageP+"></a><div class=\"texto\"><h6>Producto: "+Jp[i].nameP+"</h6><h6>Precio: "+Jp[i].priceP+"</h6><a id="+Jp[i].idP+" class=\"waves-effect waves-light btn modal-trigger\" href=\"#\" onclick= \"\">Deseos</a><a id="+Jp[i].idP+" class=\"waves-effect waves-light btn modal-trigger\" href=\"#modal\" onclick= \"\">Comprar</a></div></div></div>";
          

          //code+="<div class=\"product2\"><div class=\"product3\"><a href=\"\"><img class=\"ima\" src="+Jp[i].imageP+"></a><div class=\"texto\"><h4>Producto: "+Jp[i].nameP+"</h4><h4>Precio: "+Jp[i].priceP+"</h4></div></div></div>";
        }
        
        $(".product").append(code);
    }
    }

function showA(){
  alert('hoa');
}