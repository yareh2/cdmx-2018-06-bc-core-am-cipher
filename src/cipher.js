window.cipher={

  encode:(string,offset)=>{

    let scii2="";
    let posicionscii =0;


    for(let i=0;i<string.length;i++){
      let posicionscii=string.charCodeAt(i);
      if (65<=posicionscii && posicionscii<=90){

      let posicion2=((posicionscii-65+parseInt(offset))% 26 + 65);
      //console.log(posicion2);
      let posicionscii2=String.fromCharCode(posicion2);

    scii2+=posicionscii2;
      }
      else if (posicionscii>=97&& posicionscii<=122){
        let posicion2=((posicionscii-97+parseInt(offset))% 26 + 97);
        let posicionscii2=String.fromCharCode(posicion2);
        //console.log(posicionscii);
      scii2+=posicionscii2;
    }
    else if(posicionscii==32){
      console.log(posicionscii);
      scii2+=String.fromCharCode(posicionscii);
      //console.log(scii2);
       }

//console.log(scii2);
     }
     return document.getElementById("cifrar").value = scii2;
},

decode: (string1,offset)=>{

  let decifrarMensaje="";
  let posicionscii =0;


for(let i=0;i<string1.length;i++){
  let posicionscii=string1.charCodeAt(i);
  if (65<=posicionscii && posicionscii<=90){

  let posicion2=((posicionscii-65-parseInt(offset))% 26 + 65);
  //console.log(posicion2);
  let posicionscii2=String.fromCharCode(posicion2);

decifrarMensaje+=posicionscii2;
  }
  else if (posicionscii>=97&& posicionscii<=122){
    let posicion2=((posicionscii-122-parseInt(offset))% 26 + 122);
    let posicionscii2=String.fromCharCode(posicion2);
    console.log(posicionscii2);
  decifrarMensaje+=posicionscii2;

}
else if(posicionscii==32){
  decifrarMensaje+=String.fromCharCode(posicionscii);
  console.log(decifrarMensaje);
   }

 }

 return document.getElementById('cifrar').value =decifrarMensaje;
}


 //document.getElementById('example').value =decifrarMensaje;
}
