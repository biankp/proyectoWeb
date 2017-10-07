

var carrito = []; //buy car, save odl productos
 var temp="";
 var historial = [];

//--------------------------------------------------------Register
function save(name, user, pass, ced, type, age, email, dir, tel, num, cod, date){//This function saves all the information ingress
// in the text fields
    var personasVen= [];//this variable saves old people that sell product
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
      if((tipoU == "S") || (tipoU=="s")){//save the user that sell
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
          if(localStorage.getItem("vender")==null){
             localStorage.setItem("vender", JSON.stringify(personasVen) ); 
          }
          else{
            var ve = localStorage.getItem("vender");
            var met = personasVen.concat(JSON.parse(ve));
            localStorage.setItem("vender",JSON.stringify(met));
          }
          //localStorage.setItem("vender", JSON.stringify(personasVen) ); 
          //localStorage.removeItem("vender");
          //localStorage.removeItem("comprar");
      }
      else{//save the user that buy
        var personasUser = []; //this variable saves old people that buy product
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
            if(localStorage.getItem("comprar")==null){
               localStorage.setItem("comprar", JSON.stringify(personasUser)  ); 
            }
            else{
              var ve = localStorage.getItem("comprar");
               var met = personasUser.concat(JSON.parse(ve));
              localStorage.setItem("comprar",JSON.stringify(met));

            }
           
            //ocalStorage.setItem("comprar", JSON.stringify(personasUser)  ); 
      }
}
//-------------------------------------------------------------MENU
//this serves for puts the name in the menu, and load the user profile
function putName(id, valor, vender, comp){
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

//-------------------------------------------------------Perfil
  function verifiqueU(id){//this function redirect to user page
    var name = sessionStorage.getItem("actual");
    var vend = localStorage.getItem("vender");
    var comp = localStorage.getItem("comprar");
    var a = JSON.parse(vend);
    var b = JSON.parse(comp);
    for(var i = 0; i<Object.keys(a).length; i++){
      if(a[i].userN==name){
        id.innerHTML = a[i].nameC;
        id.href = "#";
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

function editInfo(namee, user, pass, ced, age, email, dir, tel, num, cod, date){
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
//Edit info
function loadInfo(name1, user, pass, ced, age, email, dir, tel, num, cod, date){
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
//desactive accounnt
function desactiveAccount(){
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

//charge de perfil
   function cargeProfile(nameC, userN, contra, cedu, edaad, corre, dire, telF, numTa, codS, fechaV, e, c, d, t, ta, co, fe, btn, nom, ocul, car, list, btn2, div2){//nom
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
          btn.innerHTML = "Add product";
          btn.href = "vendedor.html";
          document.getElementById(nom).className= "divU";
          document.getElementById(ocul).className = "ocultarB";
          document.getElementById(car).className = "ocultarB";
          document.getElementById(list).className = "ocultarB";
          document.getElementById(div2).className = "change";
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
            e.innerHTML = "Age: ";
            c.innerHTML = "Email: ";
            d.innerHTML = "Direction: ";
            t.innerHTML = "Phone number: ";
            ta.innerHTML = "Tarjet accounnt: ";
            co.innerHTML = "Code: ";
            fe.innerHTML = "Due date: ";
            btn.innerHTML = "Edit";
            document.getElementById(btn2).className = "ocultarB";
            break;
        }
      }
   }
   //-----------------------------------------------------------Login
   function check(activar,nota) {
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
      else{
        document.getElementById(nota).className="";
        document.getElementById(activar).className="waves-effect waves-light btn modal-trigger"; 

      }
    }
    alert("No estas registrado!!");
  } 
  function check2(activar,nota) {
    var fa = "false";
    // entered data from the login-form
    var userName = document.getElementById('email');
    var userPw = document.getElementById('pass');
    // stored data from the register-form

    var c = localStorage.getItem('comprar');
    var Jc = JSON.parse(c);

    for (var i = Jc.length - 1; i >= 0; i--) {
      if (userName.value==Jc[i].userN && userPw.value==Jc[i].contra) {
          sessionStorage.setItem('actual', userName.value);
           Jc[i].activo="act";
            document.getElementById(nota).className="ocultarB";
            document.getElementById(activar).className="ocultarB"; 
            localStorage.setItem("comprar",JSON.stringify(Jc));
            document.location.href="perfil.html";
            fa= "ve";
            return;
      }
    }
    if(fa=="false"){
        alert("Invalid dates!")
    }
  } 

//------------------------------------------------------------show the product of user administer (seller)
 function loadProductsVe() {
      var code="";
      var pro = localStorage.getItem('product');
      var actual= sessionStorage.getItem('actual'); 
      var Jp = JSON.parse(pro);

      if(pro!=null){
        for (var i = Jp.length - 1; i >= 0; i--) {
          if (Jp[i].vendedorP == actual) {
            code+="<div class=\"product2\"><div class=\"product3\"><a href=\"\"><img class=\"ima\" src="+Jp[i].imageP+"></a><div class=\"texto\"><h6>Product: "+Jp[i].nameP+"</h6><h6>Price: "+Jp[i].priceP+"</h6><a id="+Jp[i].idP+" class=\"waves-effect waves-light btn modal-trigger\" href=\"#modalModificar\" onclick= \"showM(this)\">Modifique</a><a id="+Jp[i].idP+" class=\"waves-effect waves-light btn modal-trigger\" href=\"#modalEliminar\" onclick= \"showE(this)\">Delete</a></div></div></div>";
          }
        }
        $(".product").append(code);
      }
    }
//-------------------------------------------Register product


function saveP(name,price,quantity,categorie,image,decription){//This function saves all the information ingress
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
        var decriptionP=decription.value;
        var categoriaP = categorie.value;
        var idP=Ji[0].id;
        var product = function(nameP,categoriaP,priceP,quantityP,imageP,vendedorP,idP,decriptionP,categorie){
                this.nameP = nameP;
                this.priceP = priceP;
                this.quantityP = quantityP;
                this.imageP=imageP;
                this.categoriaP = categoriaP;
                this.vendedorP=vendedorP;
                this.idP=idP;
                this.decriptionP=decriptionP;
        }
        Ji[0].id=idP+1;
        localStorage.removeItem("id");
        localStorage.setItem("id",JSON.stringify(Ji));
        //localStorage.removeItem('product');
        var pro = new product(nameP,categoriaP,priceP,quantityP,imageP,vendedorP,idP,decriptionP);
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

//------------------------------------------
function almacenarId(id){
  temp= id.id;
}
//---------------------------------------------------
 function showM(comp){
    temp = comp.id;

    var pro = localStorage.getItem('product');
    var Jp = JSON.parse(pro);

    for (var i = Jp.length - 1; i >= 0; i--) {
      if (Jp[i].idP == temp) {
        var text = document.getElementById('nameP');
        text.value += Jp[i].nameP;

        var text2 = document.getElementById('priceP');
        text2.value += Jp[i].priceP;

        var text0 = document.getElementById('categoriaP');
        text0.value += Jp[i].categoriaP;

        var text3 = document.getElementById('cantidadP');
        text3.value += Jp[i].quantityP;

        var text5 = document.getElementById('descriptionP');
        text5.value += Jp[i].decriptionP;

        var text4 = document.getElementById('imageP');
        text4.value += Jp[i].imageP;
      }
    }
  }

  //------------------------------------------------------Show the products in the catalogue page
  function loadProducts() {
      // stored data from the register-form
      var code="";
      var pro = localStorage.getItem('product');
      
      var Jp = JSON.parse(pro);

      if (pro!=null) {
        for (var i = Jp.length - 1; i >= 0; i--) {

          code+="<div class=\"product2\"><div class=\"product3\"><a href=\"\"><img class=\"ima\" src="+Jp[i].imageP+"></a><div class=\"texto\"><h6>Product: "+Jp[i].nameP+"</h6><h6>Price: "+Jp[i].priceP+"</h6><a id="+Jp[i].idP+" class=\"waves-effect waves-light btn modal-trigger\" href=\"\" onclick= \"toWish(this)\">Wish</a><a id="+Jp[i].idP+" class=\"waves-effect waves-light btn modal-trigger\" href=\"#modalC\" onclick= \"almacenarId(this)\">Buy</a></div></div></div>";
          

          //code+="<div class=\"product2\"><div class=\"product3\"><a href=\"\"><img class=\"ima\" src="+Jp[i].imageP+"></a><div class=\"texto\"><h4>Producto: "+Jp[i].nameP+"</h4><h4>Precio: "+Jp[i].priceP+"</h4></div></div></div>";
        }
        
        $(".product").append(code);
    }
    }

function almacenarId(id){
  temp= id.id;
}

  //---------------------------------------------------------------modify the produts
  function modifique(nombre, cantidad, categoria, precio, imagenn, description){
    var pro = localStorage.getItem('product');
    //localStorage.removeItem('product');
    var Jp = JSON.parse(pro);

    for (var i = Jp.length - 1; i >= 0; i--) {
      if (Jp[i].idP == temp) {
        Jp[i].nameP = nombre.value;
        Jp[i].quantityP = cantidad.value;
        Jp[i].categoriaP = categoria.value;
        Jp[i].priceP = precio.value;
        Jp[i].imageP = imagen.value;
        Jp[i].decriptionP=description.value;
        localStorage.setItem("product", JSON.stringify(Jp));
      }
    }
  }

//-------------------------------------------------------------------delete product
  function showE(comp){
    temp = comp.id;

    var pro = localStorage.getItem('product');
    var Jp = JSON.parse(pro);

    for (var i = Jp.length - 1; i >= 0; i--) {
      if (Jp[i].idP == temp) {
        var text = document.getElementById('nameE');
        text.value += Jp[i].nameP;

        document.getElementById('imageE').src=Jp[i].imageP;
      }
    }
  }
  

  function deleteP(){
    var pro = localStorage.getItem('product');
    var Jp = JSON.parse(pro);

    for (var i = Jp.length - 1; i >= 0; i--) {
      if (Jp[i].idP == temp) {
        Jp.splice(i,1);
        localStorage.setItem("product", JSON.stringify(Jp));
      }
    }
  }
//-------------------------------------------------------------------------add product to car
function addCar(cantProdu){

  //localStorage.removeItem('car');
    var comp = localStorage.getItem("product");
    //localStorage.removeItem("car");
    var b = JSON.parse(comp);  
    var prodSelect = {};
     for(var j = 0; j<Object.keys(b).length; j++){
       
        if(b[j].idP==temp){
          if(parseInt(b[j].quantityP)<parseInt(cantProdu.value)){
            alert('No se pudo procesar la compra, la cantidad que hay son '+b[j].quantityP);
          }
          else{
            var a = parseInt(b[j].quantityP)-parseInt(cantProdu.value);//rest the product actuals  for the product to buy
            b[j].quantityP = a.toString();
            var user = sessionStorage.getItem('actual');
            prodSelect["user"]= user;
            prodSelect["idP"] = b[j].idP;
            prodSelect["quantity"] = cantProdu.value;
            prodSelect["price"]= b[j].priceP;
            prodSelect["img"]= b[j].imageP;
            prodSelect["V"] = b[j].vendedorP;
            //alert(b[j].priceP);
            carrito.push(prodSelect);
            //alert(JSON.stringify (carrito));
            if(localStorage.getItem("car")==null){
              localStorage.setItem("car",JSON.stringify(carrito));
            }
            else{
              var actu = localStorage.getItem("car");
              var met = carrito.concat(JSON.parse(actu));
              //alert(JSON.stringify(met));
              localStorage.setItem("car",JSON.stringify(met));
            }
          }
        }
     }

     localStorage.setItem("product",JSON.stringify(b));
     location.reload();
}
//----------------------------------------pag wish list or buy car

function seeListCar(idB){
  if(idB=="list"){
    localStorage.setItem("tipo","list");
  }
  else{
    localStorage.setItem("tipo","car");
  }
}
//----------------------This function load the information of product of buy cars
function loadC(l, b){
    var us = sessionStorage.getItem("actual");
      var a = localStorage.getItem("tipo");
      if(a=="car"){
        var code="";
        var pro = localStorage.getItem("car");
        
        var Jp = JSON.parse(pro);

        if (pro!=null) {
          for (var i = Jp.length - 1; i >= 0; i--) {
            if(Jp[i].user==us){
            code+="<div class=\"product2\"><div class=\"product3\"><a href=\"\"><img class=\"ima\" src="+Jp[i].img+"></a><div class=\"texto\"><h6>Cantidad: "+Jp[i].quantity+"</h6><h6>Precio: "+Jp[i].price+"</h6><a id="+Jp[i].idP+" class=\"waves-effect waves-light btn modal-trigger\" href=\"#\" onclick= \"deleteCar(this)\">Delete</a></div></div></div>"
            //code+="<div class=\"product2\"><div class=\"product3\"><a href=\"\"><img class=\"ima\" src="+Jp[i].imageP+"></a><div class=\"texto\"><h4>Producto: "+Jp[i].nameP+"</h4><h4>Precio: "+Jp[i].priceP+"</h4></div></div></div>";
            }
          }
          
          $(".product").append(code);
      }
      pricePay(l);
    }
    else{
       document.getElementById(l).className= "ocultarB";
       document.getElementById(b).className= "ocultarB";

      //loadC wish list
    }
}
//-------------------------------------------------Load prices to pay

function pricePay(labeel){
  var precioTotal = 0;
  var car = localStorage.getItem("car");
  var user = sessionStorage.getItem("actual");
  var js = JSON.parse(car);
  for(var j = 0; j<Object.keys(js).length; j++){
    if(js[j].user==user){
      precioTotal = precioTotal+(parseInt(js[j].price)*parseInt(js[j].quantity)); 
    }
  }
  document.getElementById(labeel).innerHTML = precioTotal.toString();

}


//--------------------------------------delete of list car
function deleteCar(id){
  //localStorage.removeItem("car");
    var comp = localStorage.getItem("car");
    var Jp = JSON.parse(comp);  
    for(var j = 0; j<Object.keys(Jp).length; j++){
         if (Jp[j].idP == id.id) {
          var produc = localStorage.getItem("product");
          var js = JSON.parse(produc);
          for (var i= 0; i<Object.keys(js).length; i++){
            if(js[i].idP==id.id){
              //alert("hola");
              var cant = parseInt(Jp[j].quantity)+parseInt(js[i].quantityP);//add the products that the user was going to buy in the products 
              js[i].quantityP = cant.toString();
              Jp.splice(j,1);
              //alert(Jp.stringify);
              localStorage.setItem("car", JSON.stringify(Jp));
              localStorage.setItem("product", JSON.stringify(js));
              pricePay("pago");
          }
        }
      }
      
    }
    location.reload()
  }
//--------------------------This function do the buy
function buyRealice(numT, numC, fechaV, id){
  //localStorage.removeItem("car");
  //localStorage.removeItem("historial");
  //alert(id.innerHTML); take the dates
 var user = sessionStorage.getItem("actual");
  var com = localStorage.getItem("comprar");
  var js = JSON.parse(com);
  var com1 = localStorage.getItem("car");
  var js1 = JSON.parse(com1);
  var cant = 0;
  //localStorage.removeItem("historial");search the product of people that want buy
   for (var i= 0; i<Object.keys(js).length; i++){
      if(js[i].userN==user){
        var com = {};
        if((js[i].numTa==numT.value)&&(js[i].codS==numC.value)&&(js[i].fechaV==fechaV.value)){//check the target dates
          for(var j= 0; j<Object.keys(js1).length; j++){
              cant = cant+parseInt(js1[j].quantity);
              //alert(cant);
            }

          if(localStorage.getItem("historial")==null){//if null, create the new Item
            com["comprado"]=user;
            com["precio"]=id.innerHTML;
            com["cant"]=cant.toString();
            historial.push(com);
            localStorage.setItem("historial",JSON.stringify(historial));
            //alert(Object.keys(js1).length);
            localStorage.removeItem("car");//delete the infr¿ormaticon of buy car
          }
          else{//else concat the existeng dates
              var exis = "F";
              var actu = localStorage.getItem("historial");
              var ana = JSON.parse(actu);
              for (var j= 0; j<Object.keys(ana).length; j++){
                if(ana[j].comprado == user){
                  exis= "T";
                  break;
                }
               
              }
               if(exis=="F"){
                 
                  com["comprado"]=user;
                  com["precio"]=id.innerHTML;
                  com["cant"]= cant;
                  historial.push(com);
                  var met = ana.concat(historial);
                  localStorage.setItem("historial",JSON.stringify(met));
                  localStorage.removeItem("car");

                }
                else{
                  alert(cant);
                  for(var k= 0; k<Object.keys(ana).length; k++){
                    if(ana[k].comprado == user){
                      var pr = parseInt(ana[j].precio)+parseInt(id.innerHTML);
                      ana[k].precio = pr.toString();
                      var ca = parseInt(ana[j].cant)+cant;
                      ana[k].cant = ca.toString();
                      exis= "T";
                      localStorage.setItem("historial",JSON.stringify(ana));
                      localStorage.removeItem("car");

                    }
                  }

                }

            }
          }
         else{//if not valid the dates
        alert("Invalid dated");
      }
    }
     
   }
   location.reload();
}

//-------------------------------------------------------Consultas----------------------------------------
//this consult show the user with more products bought
function moreProducts(idL){

  var his = localStorage.getItem("historial");
  var historial = JSON.parse(his);
  var mayor = 0;
  var user = "";
  var cant = 0;
  for (var i= 0; i<Object.keys(historial).length; i++){
    if(historial[i].cant > cant){
      cant = parseInt(historial[i].cant);
      user = historial[i].comprado;
    }
  }
  var us = localStorage.getItem("comprar");
  var us1 = JSON.parse(us);
  for (var i= 0; i<Object.keys(us1).length; i++){
    if(us1[i].userN == user){
      //alert("biank");
      idL.innerHTML= us1[i].nameC;
    }
  }
}

//-----------------------------------This function show the user with less product buy
function lessProducts(idL){
  var his = localStorage.getItem("historial");
  var historial = JSON.parse(his);
  var user = "";
  var cant = 1000000000000;
  for (var i= 0; i<Object.keys(historial).length; i++){
    if(historial[i].cant < cant){
      cant = parseInt(historial[i].cant);
      user = historial[i].comprado;
    }
  }
  var us = localStorage.getItem("comprar");
  var us1 = JSON.parse(us);
  for (var i= 0; i<Object.keys(us1).length; i++){
    if(us1[i].userN == user){
      //alert("biank");
      idL.innerHTML= us1[i].nameC;
    }
  }
}

//----------------------function with less cash 
function lessMoney(idL){
  var his = localStorage.getItem("historial");
  var historial = JSON.parse(his);
  var mayor = 0;
  var user = "";
  var cant = 100000000000000000000000000;
  for (var i= 0; i<Object.keys(historial).length; i++){
    if(historial[i].precio < cant){
      cant = parseInt(historial[i].cant);
      user = historial[i].comprado;
    }
  }
  var us = localStorage.getItem("comprar");
  var us1 = JSON.parse(us);
  for (var i= 0; i<Object.keys(us1).length; i++){
    if(us1[i].userN == user){
      idL.innerHTML= us1[i].nameC;
    }
  }
}

//-------------------------function with more cash

function moreCash(idL){
  var his = localStorage.getItem("historial");
  var historial = JSON.parse(his);
  var mayor = 0;
  var user = "";
  var cant = 0;
  for (var i= 0; i<Object.keys(historial).length; i++){
    if(historial[i].precio > cant){
      cant = parseInt(historial[i].cant);
      user = historial[i].comprado;
    }
  }
  var us = localStorage.getItem("comprar");
  var us1 = JSON.parse(us);
  for (var i= 0; i<Object.keys(us1).length; i++){
    if(us1[i].userN == user){
      idL.innerHTML= us1[i].nameC;
    }
  }
}

//---------------------------------Wish List
    
 function loadProductsDeseos() {
      // stored data from the register-form
      var code="";
      var pro = localStorage.getItem('deseo');
      var actual = sessionStorage.getItem('actual');
      var Jp = JSON.parse(pro);


      if (pro!=null) {
        for (var i = Jp.length - 1; i >= 0; i--) {
          if (Jp[i].compradorP == actual) {
          code+="<div class=\"product2\"><div class=\"product3\"><a href=\"\"><img class=\"ima\" src="+Jp[i].imageP+"></a><div class=\"texto\"><h6>Producto: "+Jp[i].nombreP+"</h6><h6>Precio: "+Jp[i].priceP+"</h6><a id="+Jp[i].idP+" class=\"waves-effect waves-light btn modal-trigger\" href=\"#\" onclick= \"quit(this)\">Quitar</a><a id="+Jp[i].idP+" class=\"waves-effect waves-light btn modal-trigger\" href=\"#modalC\" onclick= \"almacenarId(this)\">Comprar</a></div></div></div>";
          }
        }
        
        $(".product").append(code);
      }
    }


function toWish(comp){//This function saves all the information ingress
    var temp = comp.id;
//    localStorage.removeItem('deseo');

    deseos = [];

    var pro = localStorage.getItem('product');
    var actual= sessionStorage.getItem('actual'); 
    var Jp = JSON.parse(pro);

  var deseo = function(compradorP,nombreP,priceP,quantityP,imageP,vendedorP,idP){
      this.compradorP = compradorP;
      this.nombreP=nombreP;
      this.priceP = priceP;
      this.quantityP = quantityP;
      this.imageP= imageP;
      this.vendedorP= vendedorP;
      this.idP=idP;
  }


  if(pro!=null){
    for (var i = Jp.length - 1; i >= 0; i--) {
        if (Jp[i].idP == temp) {
            var de = new deseo(actual, Jp[i].nameP,Jp[i].priceP,Jp[i].quantityP,Jp[i].imageP,Jp[i].vendedorP,Jp[i].idP);

            var d = localStorage.getItem("deseo");
            var Jd = JSON.parse(d);

            if (Jd==null) {
              deseos.push(de);
              localStorage.setItem("deseo", JSON.stringify(deseos)); 
            }
            else{
              Jd.push(de);
              localStorage.setItem("deseo", JSON.stringify(Jd)); 
            }
            break;
        }
      }
  }
}



//-----------------------------------------defect
function usersDefault(nameC, userN, contra, cedu, tipoU, edaad, corre, dire, telF, numTa, codS, fechaV){
    var personasVen= [];//this variable saves old people that sell product
      if((tipoU == "V") || (tipoU=="v")){//save the user that sell
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
          if(localStorage.getItem("vender")==null){
             localStorage.setItem("vender", JSON.stringify(personasVen) ); 
          }
          else{
            var ve = localStorage.getItem("vender");
            var met = personasVen.concat(JSON.parse(ve));
            localStorage.setItem("vender",JSON.stringify(met));
          }
      }
      else{//save the user that buy
        var personasUser = []; //this variable saves old people that buy product
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
            if(localStorage.getItem("comprar")==null){
               localStorage.setItem("comprar", JSON.stringify(personasUser)  ); 
            }
            else{
              var ve = localStorage.getItem("comprar");
               var met = personasUser.concat(JSON.parse(ve));
              localStorage.setItem("comprar",JSON.stringify(met));

            }
      }
}

function savePDefault(nameP,priceP,quantityP,categoriaP,imageP,decriptionP,vendedorP){//This function saves all the information ingress
    // in the text fields
      var products = [];
      var idGuardar = [];
      //localStorage.removeItem("product");
      //localStorage.removeItem("id");

      if (localStorage.getItem("id")==null) {
        idGuardar.push({"id": 0});
        localStorage.setItem("id",JSON.stringify(idGuardar));
      }
      
        var i=localStorage.getItem("id");
        var Ji = JSON.parse(i);
        var idP=Ji[0].id;
        var product = function(nameP,categoriaP,priceP,quantityP,imageP,vendedorP,idP,decriptionP,categorie){
                this.nameP = nameP;
                this.priceP = priceP;
                this.quantityP = quantityP;
                this.imageP=imageP;
                this.categoriaP = categoriaP;
                this.vendedorP=vendedorP;
                this.idP=idP;
                this.decriptionP=decriptionP;
        }
        Ji[0].id=idP+1;
        localStorage.removeItem("id");
        localStorage.setItem("id",JSON.stringify(Ji));
        //localStorage.removeItem('product');
        var pro = new product(nameP,categoriaP,priceP,quantityP,imageP,vendedorP,idP,decriptionP);
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





















