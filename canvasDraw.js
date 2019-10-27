//@ts-check
console.log('hello')
let four = [];
let thirtyTwo = [];
let size = 0;
let x = 0;
let y = 0;

document.getElementById('draw4x4').addEventListener('click', ()=>{
  fetch('https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/stage-2/codejam-canvas/data/4x4.json').then(function(response) {
  if(response.status === 200){
      return response.text();
  }else{
      console.log('Подключения к сети нет ');
  }
}).then(function(result) {
  let arr = JSON.parse(result);
  size = 128;
 let canvas = document.getElementById('canvas');
 if(canvas.getContext){ console.log('getContext')
 let ctx = canvas.getContext('2d');
 for (let i = 0; i<arr.length; i++){
   for (let j = 0; j<arr[i].length; j++){
     if (arr[i][j].length == 6){
       ctx.fillStyle = '#'+arr[i][j];
     }
     else {
       ctx.fillStyle = `rgba(${arr[i][j]})`
             }
             ctx.fillRect(x, y, size, size);
     y = y+size;
   }
   x = x+size;
   y = 0;
 }
};
  
 })
})
 document.getElementById('draw32x32').addEventListener('click', ()=>{
  fetch('https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/stage-2/codejam-canvas/data/32x32.json').then(function(response) {
  if(response.status === 200){
      return response.text();
  }else{
      console.log('Подключения к сети нет ');
  }
}).then(function(result) {

  let arr = JSON.parse(result);
  size = 16;

let canvas = document.getElementById('canvas');
if(canvas.getContext){ console.log('getContext')
let ctx = canvas.getContext('2d');
for (let i = 0; i<arr.length; i++){
  for (let j = 0; j<arr[i].length; j++){
    if (arr[i][j].length == 6){
      ctx.fillStyle = '#'+arr[i][j];
    }
    else {
      ctx.fillStyle = `rgba(${arr[i][j]})`
            }
            ctx.fillRect(x, y, size, size);

    y = y+size;
  }
  x = x+size;
  y = 0;
}
};
  
 })
 })
 document.getElementById('drawImage').addEventListener('click', ()=>{
  let canvas = document.getElementById('canvas');
  if(canvas.getContext){ console.log('getContext')
  let ctx = canvas.getContext('2d');
  let pict = new Image();
  pict.src = 'src/image.png';
  pict.onload = function() {
    ctx.drawImage(pict, 0, 0, 512, 512);
  }
 }
 })




/*function draw(arr, size){
  console.log('draw')
//  console.log(arr)
  let canvas = document.getElementById('canvas');
    if(canvas.getContext){ console.log('getContext')
    let ctx = canvas.getContext('2d');
    for (let i = 0; i<arr.length; i++){
      for (let j = 0; j<arr[i].length; j++){
        if (arr[i][j].length == 6){
          ctx.fillStyle = '#'+arr[i][j];
        }
        else {
          ctx.fillStyle = `rgba(${arr[i][j]})`
                }
                ctx.fillRect(x, y, size, size);
//        console.log('x= '+x+'; y= '+y);
        y = y+size;
//        console.log('x= '+x+'; y= '+y);
      }
      x = x+size;
      y = 0;
    }
  }
}
*/
