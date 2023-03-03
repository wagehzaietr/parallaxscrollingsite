// Get the elements
let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountains3 = document.getElementById("mountains3");
let mountains4 = document.getElementById("mountains4");
let river = document.getElementById("river");
let boat = document.getElementById("boat");
let wageh = document.getElementById("wageh");
let mountains7 = document.getElementById("mountains7");
let header = document.getElementById("header");
window.onscroll = function(){
  let value = scrollY;
  stars.style.left = value + 'px';
  moon.style.top = value * 3 + 'px';
  mountains3.style.top = value * 2 + 'px';
  mountains4.style.top = value * 1.5 + 'px';
  river.style.top = value  + 'px';
  boat.style.top = value  + 'px';
  boat.style.left = value * 3 + 'px';
  wageh.style.fontSize = value + 'px';
  if (scrollY >=67){
    wageh.style.fontSize = 67 + 'px';
    wageh.style.position = 'fixed';
    if(scrollY >= 478){
      wageh.style.display = 'none';
      }else{
        wageh.style.display = 'block';

      }
  }
  if (scrollY >=127){
    document.querySelector('.main').style.background = 'linear-gradient #376281 #1001f;'

  }
}