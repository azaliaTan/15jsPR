'use strict';

let start=document.querySelector('.go');
let stop=document.querySelector('.stop');
let block=document.querySelector('.block');


let timerId;






function color(){
    // let color=''
    // for (let i = 1; i <= 6; i++) {
    //     let random = parseInt(color.slice(1), 16) + 137420;
        
    //     if (random >= 999999) {
    //         random = 999999;
    //     }
        
    //     color = '#' + random.toString(16).padStart(6, '0');
        
        
    // }
    // return color;



    let color = '#';
    const letters = '0123456789ABCDEF';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;

}
start.onclick=function(){
    timerId=setInterval(()=>{
        block.style.backgroundColor=color();
    },500)

}

stop.onclick=function(){
    clearInterval(timerId)
}


