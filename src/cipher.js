
windows.cipher ={
encode: (string,offset)=>{
//decode: (String,offset)=>{},
//createWithCipherOffset: ()=>{}


//let cifrar=document.getElementById("example").value;
//let offset=document.getElementById("offset").value;
let cipher="";
let string =0;


for(let i=0;i<cifrar.length;i++){
  let string=cifrar.charCodeAt(i);
  if (65<=string && string<=90){

  let posicion2=((string-65+parseInt(offset))% 26 + 65);
  console.log(posicion2);
  let posicionscii2=String.fromCharCode(posicion2);

cipher+=posicionscii2;
  }
  else if (string>=97&& string<=122){
    let posicion2=((string-97+parseInt(offset))% 26 + 97);
    let posicionscii2=String.fromCharCode(posicion2);
    console.log(posicionscii2);
  cipher+=posicionscii2;
}
else if(string==32){
  cipher+=String.fromCharCode(string);
   }

 }

 return cipher;
  //document.getElementById('cifrar').value = scii2;
}
},

// codigo para Decifrar
decode: (string1,offset)=>{

//let decifrar=document.getElementById("example").value;
//let offset=document.getElementById("offset").value;
let decifrarMensaje="";
let string1 =0;


for(let i=0;i<decifrar.length;i++){
  let string1=decifrar.charCodeAt(i);
  if (65<=string1 && string1<=90){

  let posicion2=((string1-65-parseInt(offset))% 26 + 65);
  console.log(posicion2);
  let posicionscii2=String.fromCharCode(posicion2);

decifrarMensaje+=posicionscii2;
  }
  else if (string1>=97&& string1<=122){
    let posicion2=((string1-122-parseInt(offset))% 26 + 122);
    let posicionscii2=String.fromCharCode(posicion2);
    console.log(posicionscii2);
  decifrarMensaje+=posicionscii2;
}
else if(string1==32){
  decifrarMensaje+=String.fromCharCode(string1);
  console.log(decifrarMensaje);
   }

 }

 return decifrarMensaje;
 //document.getElementById('example').value =decifrarMensaje;
}
};
