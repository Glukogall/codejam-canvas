//@ts-check
console.log('hello')
let four = JSON.parse(data)
console.log(four)

function draw(){
  console.log('draw')
  let canvas = document.getElementById('canvas');
    if(canvas.getContext){ console.log('getContext')
    let ctx = canvas.getContext('2d');
  }
}
  document.getElementById('draw4x4').addEventListener('click', ()=>{draw();})
