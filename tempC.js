var cel = document.getElementById("cel");
var fah = document.getElementById("fah");
var kel = document.getElementById("kel");

cel.addEventListener('input',function(){
    let  c = parseFloat(cel.value);
    let f =(c * 9/5) + 32;
    let  k = c + 273;

   // if(!Number.isInteger(f)){
       // f = f.toFixed(0);
   // }
    
   
    fah.value = f;
    kel.value = k;

});

fah.addEventListener('input',function(){
    let  f = parseFloat(fah.value);
    let c =(f - 32)* 5/9;
    let k = (f - 32)* 5/9 + 273;

    if(!Number.isInteger(c)){
        c =c.toFixed(0);
    }
    if(!Number.isInteger(k)){
        k =k.toFixed(0);
    }
    cel.value = c;
    kel.value = k;

});

kel.addEventListener('input',function(){
    let k = parseFloat(kel.value);
    let c = k - 273;
    let f = (k - 273) * 9/5 + 32;

    // if(!Number.isInteger(c)){
    //     c =c.toFixed(0);
    // }
    // if(!Number.isInteger(f)){
    //     f =f.toFixed(0);
    // }
    cel.value = c;
    fah.value = f;

});