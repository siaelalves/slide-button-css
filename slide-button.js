function toggleActivate() {
 let button = document.querySelector("button.slideButton");
 let slider = document.querySelector("button.slideButton div.slider");

 if(button.classList.contains("off")){
  button.classList.remove("off");
  button.classList.add("on");

  slider.classList.remove("off");
  slider.classList.add("on");
  return;
 } 

 if(button.classList.contains("on")){
  button.classList.remove("on");
  button.classList.add("off");

  slider.classList.remove("on");
  slider.classList.add("off");
  return;
 }
}