let cifrar=document.getElementById("example");
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
};
