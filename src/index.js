
const cifrarmensaje = () =>{

/*let string=cifrar.value;
let offset1 =offset1.value;*/

  let string=document.getElementById("example").value;
  let offset1=document.getElementById("offset1").value;
  let resultado =document.getElementById("cifrar").value;
  //console.log(offset1)
  resultado.value = window.cipher.encode(string,parseInt(offset1));

}

























/*let cifrar=document.getElementById("example");
let offset1=document.getElementById("offset");

const cifrarmensaje=()=>{

let string=cifrar.value;
let offset =offset1.value;

  document.getElementById("cifrar").value = cipher.encode(string,parseInt(offset));
},

let decifrar=document.getElementById("example");
let offset=document.getElementById("offset");

const decifrarm=()=>{

  let string1=decifrar.value;
  let offset=offset1.value;
  document.getElementById("cifrar").value = cipher.decode(string1,parseInt(offset));
};*/
