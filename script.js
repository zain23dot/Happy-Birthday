const code='1234';
function show(n){document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));document.getElementById('page'+n).classList.add('active')}
function unlock(){if(pass.value===code){show(2);document.getElementById('music').play().catch(()=>{});type()}else err.innerText='Wrong Passcode ❤️';}
function nextPage(n){show(n)}
const msg='May your smile always shine brighter than the stars. Happy Birthday ❤️';
let i=0;function type(){if(i<msg.length){type.innerHTML+=msg[i++];setTimeout(type,50);}}
const imgs=['photo1.jpg','photo2.jpg','photo3.jpg','photo4.jpg','photo5.jpg'];let x=0;
setInterval(()=>{let s=document.getElementById('slider');if(s){x=(x+1)%imgs.length;s.src='assets/images/'+imgs[x]}},2500);
gift.onclick=()=>{gift.style.display='none';final.style.display='block';document.body.style.background='linear-gradient(135deg,#ff4fa3,#7c3aed)';}
