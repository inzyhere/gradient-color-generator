// let's connect with HTML document
let body = document.querySelector('#bg');
let hex1 = document.querySelector('#hex1');
let hex2 = document.querySelector('#hex2');
let hex3 = document.querySelector('#hex3');
let hex4 = document.querySelector('#hex4');

let colorBox1 = document.querySelector('#color1');
let colorBox2 = document.querySelector('#color2');
let colorBox3 = document.querySelector('#color3');
let colorBox4 = document.querySelector('#color4');

let palletCard = document.querySelector('.palette-card');
let copy = document.querySelectorAll('.copy-btn');
let copied = document.querySelector('#copyStatus');
let toast = document.querySelector('#toast');
let container = document.querySelector('.container');
let start = document.querySelector('#start');
let stop = document.querySelector('#stop')
let intervalId;
let colors;

// Let's generate a random HEX colour 
const randomColor = ()=>{
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color+= hex[Math.floor(Math.random() * 16)];
    } return color
};


stop.remove()
function startColorChange() {
    start.remove()
    container.appendChild(stop)
    container.style.alignItems="start";
    container.style.justifyContent="end";
    
    
    palletCard.hidden = false;
    
    
    // 2. Check if an interval already exists
    if (intervalId === undefined) {
  intervalId = setInterval(function() {
colors = [randomColor(), randomColor(), randomColor(), randomColor()];

      colorBox1.style.backgroundColor=colors[0];
      colorBox2.style.backgroundColor=colors[1];
      colorBox3.style.backgroundColor=colors[2];
      colorBox4.style.backgroundColor=colors[3];
      
    hex1.textContent=`HEX Colour ${colors[0]}`;
    hex2.textContent=`HEX Colour ${colors[1]}`;
    hex3.textContent=`HEX Colour ${colors[2]}`;
    hex4.textContent=`HEX Colour ${colors[3]}`;   
   
      
      body.style.setProperty('--color1', colors[0]);
      body.style.setProperty('--color2', colors[1]);
      body.style.setProperty('--color3', colors[2]);
      body.style.setProperty('--color4', colors[3]);
      
    start.style.backgroundColor=`${colors[0]}`;
    stop.style.backgroundColor=`${colors[0]}`;
    }, 1000);             
}

    copy.forEach( copy=> {
let lastCpoiedButton = copy.addEventListener('click',()=>{
              navigator.clipboard.writeText((colors[copy.dataset.color]));
         copy.textContent = "COPIED... ✓";

    textContentTimout = setTimeout(() => {
    // Restore original button text
    copy.textContent = "COPY";
}, 500);
})
      })
}


// Let's create start function
start.addEventListener('click', startColorChange)

    // Let's create stop function
stop.addEventListener('click', ()=>{
    
// Let's check if colors are defined
if(colors === undefined){
clearInterval(intervalId);
}
        clearInterval(intervalId);
    palletCard.hidden = false;
    hex1.textContent=`HEX Colour ${colors[0]}`;
    hex2.textContent=`HEX Colour ${colors[1]}`;
    hex3.textContent=`HEX Colour ${colors[2]}`;
    hex4.textContent=`HEX Colour ${colors[3]}`;
    stop.remove()
    container.style.alignItems="end";
    container.style.justifyContent="end";
    container.appendChild(start)
    start.textContent=`RESUME ▶️`
    intervalId= undefined;
    })