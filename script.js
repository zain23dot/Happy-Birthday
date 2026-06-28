const c=document.createElement('canvas');
document.body.appendChild(c);
const x=c.getContext('2d');
function r(){c.width=innerWidth;c.height=innerHeight}
onresize=r;r();
let hearts=[...Array(60)].map(()=>({x:Math.random()*c.width,y:Math.random()*c.height,s:2+Math.random()*4}));
function d(){
x.clearRect(0,0,c.width,c.height);
x.fillStyle='rgba(255,255,255,.8)';
hearts.forEach(h=>{x.beginPath();x.arc(h.x,h.y,h.s,0,Math.PI*2);x.fill();h.y-=1;if(h.y<0)h.y=c.height;});
requestAnimationFrame(d)}
d();
