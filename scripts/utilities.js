function SetInnerText(id,value){
    document.getElementById(id).innerText = value;
}

let seatInfo = document.getElementById("seat-info");
let div = document.createElement('div');
div.classList.add('flex','justify-between');
let p1 = document.createElement('p');
p1.innerText = "A1";
let p2 = document.createElement('p');
p2.innerText = "Economy";
let p3 = document.createElement('p');
p3.innerText = '550';
div.append(p1,p2,p3);
//seatInfo.appendChild(div);
console.log(div);