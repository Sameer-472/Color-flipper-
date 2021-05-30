let button = document.getElementById('btn');

button.addEventListener("click" , ()=>{
  let main = document.querySelector('main');
  let color = '#'
  let hex = Math.floor(Math.random()* Math.pow(256 , 3)).toString(16);  
  let clr = color + hex;
  let span = document.querySelector('span').innerHTML = `${clr}` ;
  console.log(main)
  console.log(span)
  main.style.background = `${clr}`;
//   span.innerHTML = 'red'
})