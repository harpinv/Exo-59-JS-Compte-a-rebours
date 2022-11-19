let myComte = document.getElementById('compte');
let myMin = 60;

myComte.innerText = myMin.toString();
myComte.style.width = '500px';
myComte.style.height = '500px';
myComte.style.backgroundColor = 'beige';
myComte.style.border = '5px solid cyan';
myComte.style.borderRadius = '100%';
myComte.style.fontSize = '250px';
myComte.style.fontWeight = 'bolder';
myComte.style.padding = '100px';
myComte.style.margin = 'auto';
myComte.style.textAlign = 'center';

if(myMin > 50) {
    myComte.style.color = 'blue'
} else if(myMin > 40) {
    myComte.style.color = 'green'
} else if(myMin > 30) {
    myComte.style.color = 'greenyellow'
} else if(myMin > 20) {
    myComte.style.color = 'yellow'
} else if(myMin > 10) {
    myComte.style.color = 'orange'
} else {
    myComte.style.color = 'red'
}

for(let i = 0; i < 60; i++) {
    myMin -= 1;
    myComte.innerText = myMin.toString();
}

