const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");
const themeTogglerBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
const togglerIcon = document.querySelector(".toggler-icon");
let isDark = true;

buttons.forEach((btn)=>{

  //Asi le indicamos que no le pasaremos parametros si no que sera directamnete la funcion para identificar el btn
  btn.onclick = ()=>{
    if(btn.id == "clear"){
      display.innerText ="";

    }else if(btn.id =="backEspace"){
      //Borrar caracter pot caracter del display
      let string = display.innerText.toString();
      display.innerText = string.substr(0,string.length-1);

    }else if(display.innerText != "" && btn.id == "equal"){
      //Que realice un operacion con string en caso de que haya operadores en la cadena
      display.innerText = eval(display.innerText);

    }else if(display.innerText == "" && btn.id == "equal"){
      display.innerText = "Null";
      //Tiempo de espera
      setTimeout(()=>{
        display.innerText = "";
      },2000);

    }else{
      //Que vaya agregando operadores y numero segun sea la operacion que quiera ir haciendo
      display.innerText += btn.id;
    }

  }

});


themeTogglerBtn.onclick = ()=>{
   calculator.classList.toggle("dark");
   themeTogglerBtn.classList.toggle("active");
   isDark =! isDark;
}