
let mang = [14,49,31];
document.getElementById("mang").innerHTML=mang;
mang.sort();
document.getElementById("sapxep").innerHTML=mang;
console.log(mang);


function Enter(){

let getten=document.getElementById('ten');
let loichao;
if (getten == 1 ){
   loichao = "xin chao bo";
   let divtrungbinh=document.getElementById('divTen')
   divtrungbinh.style.display="block";
   let spanten=document.getElementById('Ten');
   spanten.innerHTML=loichao;
} else if (getten===M){
    loichao="xin chao me";
    document.getElementById('Ten').innerHTML=loichao;
} else if (getten==A){
    loichao="xin chao anh";
    document.getElementById('Ten').innerHTML=loichao;
} else if(getten==E) {
    loichao="xin chao em";
    document.getElementById('Ten').innerHTML=loichao;
};
}
function dem(){
    
    let Chan=0;
    let Le=0;
    let   a =document.getElementById('a').value;
    let A=Number(a);
    let b =document.getElementById('b').value;
   let B=Number(b);
   let c =document.getElementById('c').value;
   let C=Number(c);
   let mang=[A,B,C] 
   var divdem=document.getElementById('divDem')
   divdem.style.display="block";
   var spanchan=document.getElementById('chan');
   var spanle=document.getElementById('le');
   for(let i =0;i<3;i++){
       if(mang[i] % 2== 0){
           Chan=Chan+1
       }else{Le=Le+1}
   } spanchan.innerHTML=Chan;
   spanle.innerHTML=Le;
 
  
}
function xet(){
    let   q =document.getElementById('q').value;
    let Q=Number(q);
    let w =document.getElementById('w').value;
   let W=Number(w);
   let e =document.getElementById('e').value;
   let E=Number(e);
var text=document.getElementById('text');
var text2=document.getElementById('text2');
var text3=document.getElementById('text3');
var text4=document.getElementById('text4');
   if(Q + W<= E || Q + E <= W ||  W + E <= Q) 
	{	       
        text2.innerHTML =" tam giác sai";
    }
    else if(Q==W && Q==E){
        var result= document.createTextNode('Tam giac deu');
        text.appendChild(result);
   }
    else if(Q==W || Q==E || W==E){
        
        text4.innerHTML="tam giác cân";
   }
   if(Q * Q + W * W == E * E || Q * E + E * E == W * W || W * W + E * E == Q * E)
   {
    text3.innerHTML =" tam giác vuông";
   }
   
}
